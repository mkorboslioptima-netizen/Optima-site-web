/**
 * Pré-rendu SEO — exécuté automatiquement après `npm run build` (postbuild).
 *
 * Problème résolu : le site est une SPA React ; sans pré-rendu, Google reçoit
 * une page vide (<div id="root"></div>) avec un canonical figé, ce qui
 * empêche l'indexation des pages internes.
 *
 * Ce script sert le dossier build/ en local, visite chaque route avec un
 * Chrome headless, attend que React + react-helmet aient rendu la page,
 * puis fige le HTML complet dans build/<route>/index.html.
 * Le serveur Express (backend/server.js) sert ensuite ces fichiers statiques.
 */

const fs = require("fs");
const path = require("path");
const http = require("http");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = 45678;

/* Routes à pré-rendre — garder synchronisé avec public/sitemap.xml et App.js */
const ROUTES = [
  "/",
  "/about",
  "/gestion-entreprise",
  "/sage-100-gestion-commerciale",
  "/sage-100-comptabilite",
  "/sage-100-immobilisations",
  "/sage-100-paie-rh",
  "/sage-bi",
  "/gestion-des-temps",
  "/horoquartz",
  "/etemptation",
  "/self-service",
  "/controle-acces",
  "/outsourcing",
  "/contact",
  "/devis",
  "/faqs",
  "/blogs",
  "/mentions-legales",
  "/politique-confidentialite",
];

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

/* Shell original, gardé en mémoire : le fallback SPA doit toujours servir
   la version NON pré-rendue même après réécriture de build/index.html.
   Si le script a déjà tourné sur ce build, le shell intact est spa-shell.html. */
const shellPath = fs.existsSync(path.join(BUILD_DIR, "spa-shell.html"))
  ? path.join(BUILD_DIR, "spa-shell.html")
  : path.join(BUILD_DIR, "index.html");
const shellHtml = fs.readFileSync(shellPath);

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      const filePath = path.join(BUILD_DIR, urlPath);
      if (
        filePath.startsWith(BUILD_DIR) &&
        fs.existsSync(filePath) &&
        fs.statSync(filePath).isFile()
      ) {
        res.writeHead(200, {
          "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(shellHtml);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

/* Nettoyage du DOM avant capture (exécuté dans la page) */
function cleanDom() {
  // AOS masque les éléments [data-aos] en CSS (opacity:0) tant que le JS
  // n'a pas tourné : on retire l'attribut pour que le contenu pré-rendu
  // soit visible et lisible par les robots.
  document.querySelectorAll("[data-aos], [data-aos-delay], [data-aos-duration]").forEach((el) => {
    [...el.attributes]
      .filter((a) => a.name.startsWith("data-aos"))
      .forEach((a) => el.removeAttribute(a.name));
    el.classList.remove("aos-init", "aos-animate");
  });
  // Widgets externes inutiles dans le HTML figé
  document
    .querySelectorAll('script[src*="tawk.to"], iframe[src*="tawk.to"]')
    .forEach((el) => el.remove());
}

(async () => {
  console.log("Pré-rendu SEO : démarrage…");
  const server = await startStaticServer();
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  // "Prerender" déclenche IS_PRERENDER dans App.js (pas de loader, pas d'AOS, pas de GA)
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) HeadlessChrome OptimaPrerender"
  );
  await page.setViewport({ width: 1366, height: 900 });

  // Bloquer analytics, chat et vidéos : inutiles pour la capture HTML
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const url = req.url();
    if (
      /googletagmanager|google-analytics|tawk\.to|doubleclick/.test(url) ||
      req.resourceType() === "media"
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const results = new Map();
  let failed = 0;

  for (const route of ROUTES) {
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });
      // Attendre que React ait rendu du contenu et que react-helmet ait
      // posé le canonical de la page
      await page.waitForFunction(
        () =>
          document.querySelector("#root") &&
          document.querySelector("#root").children.length > 0 &&
          document.querySelector('link[rel="canonical"][data-rh]'),
        { timeout: 30000 }
      );
      // Laisser les animations d'entrée (framer-motion / gsap) se terminer
      await new Promise((r) => setTimeout(r, 1500));

      await page.evaluate(cleanDom);
      let html = await page.content();
      if (!/^\s*<!doctype/i.test(html)) html = "<!doctype html>" + html;

      const title = await page.title();
      results.set(route, html);
      console.log(`  OK ${route}  →  "${title}"`);
    } catch (err) {
      failed++;
      console.error(`  ECHEC ${route} : ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  // Écriture des fichiers (après capture complète pour ne pas polluer le fallback)
  for (const [route, html] of results) {
    const outFile =
      route === "/"
        ? path.join(BUILD_DIR, "index.html")
        : path.join(BUILD_DIR, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, "utf8");
  }
  // Le shell SPA non pré-rendu reste disponible pour le fallback serveur (404, routes inconnues)
  fs.writeFileSync(path.join(BUILD_DIR, "spa-shell.html"), shellHtml);

  console.log(`Pré-rendu terminé : ${results.size}/${ROUTES.length} pages générées${failed ? `, ${failed} échec(s)` : ""}.`);
  process.exit(failed > 0 && results.size === 0 ? 1 : 0);
})().catch((err) => {
  console.error("Pré-rendu impossible :", err);
  // Ne pas casser le build si le pré-rendu échoue (le site reste fonctionnel en SPA)
  process.exit(0);
});
