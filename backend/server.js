require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration du transporteur SMTP
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  tls: {
    rejectUnauthorized: false
  },
  authMethod: 'LOGIN'
};

// Ajouter l'authentification seulement si un mot de passe est fourni et non vide
if (process.env.SMTP_PASS && process.env.SMTP_PASS.trim() !== '' && process.env.SMTP_PASS !== 'none') {
  smtpConfig.auth = {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  };
}

const transporter = nodemailer.createTransport(smtpConfig);

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

// Endpoint pour les demandes de devis
app.post('/api/devis', async (req, res) => {
  try {
    const { modules, entreprise, secteur, effectif, nom, email, telephone, message } = req.body;

    // Validation basique
    if (!modules || !modules.length || !entreprise || !effectif || !nom || !email || !telephone) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs obligatoires doivent être remplis'
      });
    }

    // Construire la liste des modules sélectionnés
    const modulesText = modules.map(id => MODULES[id] || id).join('\n  • ');

    // Contenu HTML de l'email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #007a55; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Nouvelle demande de devis</h1>
        </div>

        <div style="padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #007a55; border-bottom: 2px solid #007a55; padding-bottom: 10px;">
            Modules sélectionnés
          </h2>
          <ul style="list-style: none; padding: 0;">
            ${modules.map(id => `<li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">✓ ${MODULES[id] || id}</li>`).join('')}
          </ul>

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
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Effectif:</td>
              <td style="padding: 8px 0;">${effectif} personnes</td>
            </tr>
          </table>

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
      from: `"Site Web Optima" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nouvelle demande de devis - ${entreprise}`,
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

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Le serveur fonctionne correctement' });
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
