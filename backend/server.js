require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Domaine canonique unique : TOUTES les variantes (http, sans www) doivent
// rediriger en 301 vers celui-ci, sinon Google voit 4 sites dupliqués.
const CANONICAL_HOST = 'www.optima.tn';

// Derrière Passenger/nginx (Plesk) : nécessaire pour lire le protocole
// et l'IP réels depuis les en-têtes X-Forwarded-*
app.set('trust proxy', 1);

// Compression gzip des réponses (HTML, JS, CSS, JSON…)
app.use(compression());

/* ── Redirections 301 : https + www + suppression du slash final ── */
app.use((req, res, next) => {
  const host = req.headers.host || '';
  // Ne rediriger qu'en production (pas en local)
  if (host.endsWith('optima.tn')) {
    const wrongHost = host !== CANONICAL_HOST;
    const wrongProto = req.protocol !== 'https';
    if (wrongHost || wrongProto) {
      return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
    }
  }
  // /contact/ → /contact (évite les URLs dupliquées)
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const query = req.originalUrl.slice(req.path.length);
    return res.redirect(301, req.path.slice(0, -1) + query);
  }
  next();
});

/* ── Redirections 301 des anciennes URLs (avant : redirections JS côté
      client via <Navigate>, invisibles pour Google) ── */
const LEGACY_REDIRECTS = {
  '/Gestion_Du_Temps': '/gestion-des-temps',
  '/Outsourcing': '/outsourcing',
  '/Sage-100-Gestion-Commerciale': '/sage-100-gestion-commerciale',
  '/Sage-100-Gestion-comptabilite': '/sage-100-comptabilite',
  '/Sage-BI': '/sage-bi',
  '/Immobilisation': '/sage-100-immobilisations',
  '/Sage-100-Gestion-Paie-RH': '/sage-100-paie-rh',
  '/GestionEntreprise': '/gestion-entreprise',
  '/a-propos': '/about',
};
app.use((req, res, next) => {
  const target = LEGACY_REDIRECTS[req.path];
  if (target) return res.redirect(301, target);
  next();
});

// Middleware
const ALLOWED_ORIGINS = [
  `https://${CANONICAL_HOST}`,
  'https://optima.tn',
  'http://localhost:3000',
  `http://localhost:${PORT}`,
];
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json({ limit: '50kb' }));

// Anti-spam : max 10 requêtes API par IP par quart d'heure
app.use('/api/', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de requêtes, veuillez réessayer plus tard.' },
}));

// Neutralise le HTML dans les champs saisis par l'utilisateur avant de les
// injecter dans les emails (sinon un visiteur peut y injecter du HTML/JS)
const esc = (v) => String(v ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 25,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // Vérification du certificat activée par défaut. Si le serveur SMTP
    // utilise un certificat auto-signé, mettre SMTP_ALLOW_SELF_SIGNED=true
    // dans le fichier .env
    rejectUnauthorized: process.env.SMTP_ALLOW_SELF_SIGNED !== 'true'
  }
});

// Vérifier la connexion SMTP au démarrage
transporter.verify((error, success) => {
  if (error) {
    console.error('Erreur de connexion SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
  }
});

// Liste des modules pour l'affichage
const MODULES = {
  'sage-commerciale': 'Sage 100 Gestion Commerciale',
  'sage-comptabilite': 'Sage 100 Comptabilité',
  'sage-paie': 'Sage 100 Paie & RH',
  'sage-bi': 'Sage BI / Reporting',
  'horoquartz': 'Horoquartz',
  'outsourcing': 'Outsourcing de la Paie',
  'idemia': 'IDEMIA (Biométrie & Contrôle d\'accès)',
  'formation': 'Formation',
};

// Endpoint pour les demandes de devis et de contact
app.post('/api/devis', async (req, res) => {
  try {
    const raw = req.body || {};
    // Tout ce qui vient du formulaire est échappé avant injection dans l'email
    const modules = Array.isArray(raw.modules) ? raw.modules.map(esc) : raw.modules;
    const entreprise = esc(raw.entreprise);
    const secteur = esc(raw.secteur);
    const effectif = esc(raw.effectif);
    const nom = esc(raw.nom);
    const email = esc(raw.email);
    const telephone = esc(raw.telephone);
    const message = esc(raw.message);

    // Pour les contacts simples, entreprise et effectif sont optionnels
    const isContactOnly = !modules || modules.includes('contact') || modules.includes('etemptation-contact');

    // Validation basique
    if (!nom || !email || !telephone) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs obligatoires doivent être remplis'
      });
    }
    if (!isContactOnly && (!modules || !modules.length || !entreprise || !effectif)) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs obligatoires doivent être remplis'
      });
    }

    // Construire la liste des modules sélectionnés
    const modulesText = (modules || []).map(id => MODULES[id] || id).join('\n  • ');

    // Contenu HTML de l'email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #007a55; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Nouvelle demande de devis</h1>
        </div>

        <div style="padding: 20px; background-color: #f9fafb;">
          ${modules && modules.length ? `
          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px;">
            Modules sélectionnés
          </h2>
          <ul style="list-style: none; padding: 0;">
            ${modules.map(id => `<li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">✓ ${MODULES[id] || id}</li>`).join('')}
          </ul>
          ` : ''}

          ${entreprise ? `
          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px; margin-top: 30px;">
            Informations entreprise
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Entreprise:</td>
              <td style="padding: 8px 0;">${entreprise}</td>
            </tr>
            ${secteur ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Secteur:</td>
              <td style="padding: 8px 0;">${secteur}</td>
            </tr>
            ` : ''}
            ${effectif ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Effectif:</td>
              <td style="padding: 8px 0;">${effectif} personnes</td>
            </tr>
            ` : ''}
          </table>
          ` : ''}

          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px; margin-top: 30px;">
            Contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Nom:</td>
              <td style="padding: 8px 0;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone:</td>
              <td style="padding: 8px 0;"><a href="tel:${telephone}">${telephone}</a></td>
            </tr>
          </table>

          ${message ? `
          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px; margin-top: 30px;">
            Message
          </h2>
          <p style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #007a55;">
            ${message}
          </p>
          ` : ''}
        </div>

        <div style="background-color: #1a1a1a; color: #888; padding: 15px; text-align: center; font-size: 12px;">
          Cet email a été envoyé automatiquement depuis le site web Optima.
        </div>
      </div>
    `;

    // Contenu texte (fallback)
    const textContent = `
NOUVELLE DEMANDE DE DEVIS
========================

MODULES SÉLECTIONNÉS:
  • ${modulesText}

INFORMATIONS ENTREPRISE:
  Entreprise: ${entreprise}
  ${secteur ? `Secteur: ${secteur}` : ''}
  Effectif: ${effectif} personnes

CONTACT:
  Nom: ${nom}
  Email: ${email}
  Téléphone: ${telephone}

${message ? `MESSAGE:\n  ${message}` : ''}

---
Cet email a été envoyé automatiquement depuis le site web Optima.
    `;

    // Envoi de l'email
    await transporter.sendMail({
      from: `"No-reply Optima" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: entreprise ? `Nouvelle demande de devis - ${entreprise}` : `Nouveau message de contact - ${nom}`,
      text: textContent,
      html: htmlContent,
    });

    console.log(`Demande de devis envoyée pour ${entreprise} (${email})`);

    res.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre demande'
    });
  }
});

// Endpoint pour les formulaires de contact simples
app.post('/api/contact', async (req, res) => {
  try {
    const raw = req.body || {};
    // Tout ce qui vient du formulaire est échappé avant injection dans l'email
    const subject = esc(raw.subject);
    const nom = esc(raw.nom);
    const entreprise = esc(raw.entreprise);
    const email = esc(raw.email);
    const telephone = esc(raw.telephone);
    const message = esc(raw.message);

    if (!nom || !email || !telephone || !message) {
      return res.status(400).json({ success: false, message: 'Tous les champs obligatoires doivent être remplis' });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #007a55; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Nouveau message de contact</h1>
        </div>

        <div style="padding: 20px; background-color: #f9fafb;">
          ${subject ? `
          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px;">
            Sujet : ${subject}
          </h2>
          ` : ''}

          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px; margin-top: 30px;">
            Contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Nom:</td>
              <td style="padding: 8px 0;">${nom}</td>
            </tr>
            ${entreprise ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Entreprise:</td>
              <td style="padding: 8px 0;">${entreprise}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone:</td>
              <td style="padding: 8px 0;"><a href="tel:${telephone}">${telephone}</a></td>
            </tr>
          </table>

          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px; margin-top: 30px;">
            Message
          </h2>
          <p style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #007a55;">
            ${message}
          </p>
        </div>

        <div style="background-color: #1a1a1a; color: #888; padding: 15px; text-align: center; font-size: 12px;">
          Cet email a été envoyé automatiquement depuis le site web Optima.
        </div>
      </div>
    `;

    const textContent = `
NOUVEAU MESSAGE DE CONTACT
==========================

${subject ? `SUJET: ${subject}\n` : ''}

CONTACT:
  Nom: ${nom}
  ${entreprise ? `Entreprise: ${entreprise}` : ''}
  Email: ${email}
  Téléphone: ${telephone}

MESSAGE:
  ${message}

---
Cet email a été envoyé automatiquement depuis le site web Optima.
    `;

    await transporter.sendMail({
      from: `"No-reply Optima" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `${subject || 'Nouveau message de contact'} - ${nom}`,
      text: textContent,
      html: htmlContent,
    });

    console.log(`Message de contact envoyé de ${nom} (${email})`);

    res.json({
      success: true,
      message: 'Votre message a été envoyé avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message'
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Le serveur fonctionne correctement' });
});

// ─── Servir le build React (avec pages pré-rendues pour le SEO) ───
const buildPath = path.join(__dirname, '..', 'build');

// Routes React valides SANS version pré-rendue (contenu dynamique)
const SPA_ONLY_ROUTES = new Set([
  '/blog-details', '/projects', '/project-details', '/teams',
]);

// Shell SPA non pré-rendu (généré par scripts/prerender.js) : sert de
// fallback pour les routes dynamiques et les 404
const spaShellPath = fs.existsSync(path.join(buildPath, 'spa-shell.html'))
  ? path.join(buildPath, 'spa-shell.html')
  : path.join(buildPath, 'index.html');

// redirect:false : pas de 301 automatique vers les URLs à slash final.
// Cache navigateur : les fichiers de /static portent un hash dans leur nom
// (main.abc123.js) → cache 1 an immuable ; images et vidéos → 30 jours ;
// HTML → jamais mis en cache (le contenu doit se rafraîchir au déploiement).
app.use(express.static(buildPath, {
  redirect: false,
  setHeaders: (res, filePath) => {
    if (filePath.includes(`${path.sep}static${path.sep}`)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (/\.(png|jpe?g|webp|gif|svg|ico|mp4|webm|woff2?|ttf)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000');
    } else if (/\.html$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  // 1. Page pré-rendue disponible ? (build/<route>/index.html)
  const prerendered = path.join(buildPath, req.path.slice(1), 'index.html');
  if (prerendered.startsWith(buildPath) && fs.existsSync(prerendered)) {
    return res.sendFile(prerendered);
  }
  // 2. Route SPA connue sans pré-rendu → shell en 200
  if (SPA_ONLY_ROUTES.has(req.path)) {
    return res.sendFile(spaShellPath);
  }
  // 3. URL inconnue → vrai statut 404 (fini les "soft 404" chez Google),
  //    le shell React affiche la page Notfound
  res.status(404).sendFile(spaShellPath);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
