/**
 * Optimisation des médias — exécution ponctuelle : `node scripts/optimize-media.js`
 *
 * - Vidéos : ré-encodage H.264 CRF 28, largeur max 1280px, +faststart
 * - Images lourdes utilisées par le site : conversion WebP (qualité 80, max 1920px)
 * - SVG contenant des bitmaps base64 : rastérisation en WebP
 * - Met à jour automatiquement les références dans src/ (js + css)
 *
 * Les originaux sont déplacés dans media-originaux/ (à conserver hors ligne).
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const sharp = require("sharp");
const ffmpeg = require("ffmpeg-static");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const BACKUP = path.join(ROOT, "media-originaux");

/* Chemins relatifs à public/. Seuls les fichiers réellement référencés
   dans src/ sont convertis (les restes de template inutilisés sont ignorés). */
const VIDEOS = [
  "videos/Project.mp4",
  "videos/GTA.mp4",
  "videos/Commerciale _ Interface.mp4",
  "videos/SageBIReporting.mp4",
  "videos/erpoptima.mp4",
  "videos/eTemptation.mp4",
  "videos/SagePaie&RH.mp4",
  "videos/compta.mp4",
  "videos/Le Self-Service eTemptation _ des  gestion des temps.mp4",
  "videos/Sage.mp4",
  "videos/paie.mp4",
  "assets/images/about/paie11.mp4",
  "assets/images/home-two/gta.mp4",
];

const IMAGES = [
  "assets/images/about/a.png",
  "assets/images/about/d.png",
  "assets/images/service/d.png",
  "assets/images/service/t.png",
  "assets/images/service/paie.png",
  "assets/images/service/paie1.png",
  "assets/images/service/GTA.png",
  "assets/images/service/badging_wincom.jpeg",
  "assets/images/home-two/case_study/1.png",
  "assets/images/home-five/hero/GTA.jpeg",
  "assets/images/home-five/hero/a.jpg",
  "assets/images/home-five/hero/6.png",
  "assets/images/home-five/hero/paie.jpeg",
  "assets/images/home-five/hero/j.png",
  "assets/images/home-five/hero/GTA.png",
  "assets/images/home-five/hero/erp.jpeg",
  "assets/images/home-five/hero/c.png",
  "assets/images/home-five/clinets/Cotherm.jpg",
  "assets/images/home-five/clinets/c.png",
];

/* SVG = bitmaps base64 déguisés → rastérisation. width = taille de rendu max */
const SVGS = [
  { rel: "assets/images/home-three/hero/bg.svg", width: 1920 },
  { rel: "assets/images/logo.svg", width: 800 },
  { rel: "assets/images/logo-01-20 blanc.svg", width: 800 },
  { rel: "assets/images/home-five/testimonial-bg.svg", width: 1600 },
];

const kb = (f) => Math.round(fs.statSync(f).size / 1024);

function backupOriginal(absPath) {
  const rel = path.relative(PUBLIC, absPath);
  const dest = path.join(BACKUP, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.renameSync(absPath, dest);
}

/* Remplace les références (js/css de src) vers les fichiers renommés en .webp */
const renames = []; // { from: "assets/images/x.png", to: "assets/images/x.webp" }
function updateReferences() {
  const files = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(js|jsx|css)$/.test(e.name)) files.push(p);
    }
  })(path.join(ROOT, "src"));

  let touched = 0;
  for (const f of files) {
    let content = fs.readFileSync(f, "utf8");
    let changed = false;
    for (const { from, to } of renames) {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(f, content, "utf8");
      touched++;
    }
  }
  console.log(`Références mises à jour dans ${touched} fichier(s) source.`);
}

(async () => {
  fs.mkdirSync(BACKUP, { recursive: true });
  let before = 0;
  let after = 0;

  /* ── Vidéos ── */
  console.log("── Vidéos ──");
  for (const rel of VIDEOS) {
    const src = path.join(PUBLIC, rel);
    if (!fs.existsSync(src)) { console.log(`  absent : ${rel}`); continue; }
    const tmp = src + ".opt.mp4";
    const sizeBefore = kb(src);
    try {
      execFileSync(ffmpeg, [
        "-y", "-loglevel", "error",
        "-i", src,
        "-vf", "scale='min(1280,iw)':-2",
        "-c:v", "libx264", "-crf", "28", "-preset", "medium",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        tmp,
      ]);
      const sizeAfter = kb(tmp);
      if (sizeAfter < sizeBefore * 0.9) {
        backupOriginal(src);
        fs.renameSync(tmp, src);
        console.log(`  ${rel} : ${sizeBefore} Ko → ${sizeAfter} Ko`);
        before += sizeBefore; after += sizeAfter;
      } else {
        fs.unlinkSync(tmp);
        console.log(`  ${rel} : déjà optimale (${sizeBefore} Ko), conservée`);
      }
    } catch (e) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`  ECHEC ${rel} : ${e.message.slice(0, 200)}`);
    }
  }

  /* ── Images raster → WebP ── */
  console.log("── Images → WebP ──");
  for (const rel of IMAGES) {
    const src = path.join(PUBLIC, rel);
    if (!fs.existsSync(src)) { console.log(`  absent : ${rel}`); continue; }
    const relWebp = rel.replace(/\.(png|jpe?g)$/i, ".webp");
    const out = path.join(PUBLIC, relWebp);
    const sizeBefore = kb(src);
    try {
      await sharp(src)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
      const sizeAfter = kb(out);
      backupOriginal(src);
      renames.push({ from: rel, to: relWebp });
      console.log(`  ${rel} : ${sizeBefore} Ko → ${sizeAfter} Ko`);
      before += sizeBefore; after += sizeAfter;
    } catch (e) {
      console.error(`  ECHEC ${rel} : ${e.message.slice(0, 200)}`);
    }
  }

  /* ── SVG-bitmaps → WebP ── */
  console.log("── SVG (bitmaps déguisés) → WebP ──");
  for (const { rel, width } of SVGS) {
    const src = path.join(PUBLIC, rel);
    if (!fs.existsSync(src)) { console.log(`  absent : ${rel}`); continue; }
    const relWebp = rel.replace(/\.svg$/i, ".webp");
    const out = path.join(PUBLIC, relWebp);
    const sizeBefore = kb(src);
    try {
      await sharp(src, { density: 150 })
        .resize({ width, withoutEnlargement: false })
        .webp({ quality: 82 })
        .toFile(out);
      const sizeAfter = kb(out);
      backupOriginal(src);
      renames.push({ from: rel, to: relWebp });
      console.log(`  ${rel} : ${sizeBefore} Ko → ${sizeAfter} Ko`);
      before += sizeBefore; after += sizeAfter;
    } catch (e) {
      console.error(`  ECHEC ${rel} : ${e.message.slice(0, 200)}`);
    }
  }

  updateReferences();
  console.log(`\nTotal converti : ${Math.round(before / 1024)} Mo → ${Math.round(after / 1024)} Mo`);
  console.log(`Originaux déplacés dans : ${BACKUP}`);
})();
