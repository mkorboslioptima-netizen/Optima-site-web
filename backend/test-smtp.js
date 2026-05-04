require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 25,
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls: { rejectUnauthorized: false }
});
transporter.verify((error, success) => {
  if (error) { console.error('ERREUR SMTP:', JSON.stringify(error)); }
  else { console.log('SMTP OK'); }
});
