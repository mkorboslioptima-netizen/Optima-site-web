import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.optima.tn";
const DEFAULT_IMAGE = "/assets/images/Optima-Logo.png";

export default function SEOOutsourcing() {
  const title = "Outsourcing de la paie | Externalisation RH & Paie";
  const description = "OPTIMA prend en charge l'intégralité de votre cycle de paie : calcul, éditions, déclarations sociales et fiscales, sécurité des données et conformité.";
  const path = "/outsourcing";
  const url = `${SITE_URL}${path}`;
  const img = `${SITE_URL}${DEFAULT_IMAGE}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Optima - Externalisation Paie",
    "description": description,
    "url": url,
    "image": img,
    "telephone": "+216 70 100 100",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tunis",
      "addressCountry": "TN"
    },
    "areaServed": "TN",
    "knowsAbout": [
      "Externalisation de la paie",
      "Sage Paie",
      "ISO 9001",
      "ISO 27001",
      "Déclarations CNSS"
    ]
  };

  return (
    <Helmet>
      <title>{title} | Optima</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="keywords" content="externalisation paie, outsourcing paie, Sage Paie, CNSS, IRPP, ISO 27001" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
