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
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 25,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
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
    const { modules, entreprise, secteur, effectif, nom, email, telephone, message } = req.body;

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
    const { subject, nom, entreprise, email, telephone, message } = req.body;

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

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
