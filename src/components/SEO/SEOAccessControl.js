import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.optima.tn";
const DEFAULT_IMAGE = "/assets/images/Optima-Logo.png";

export default function SEOAccessControl() {
  const title = "Contrôle d'accès biométrique | Horoquartz, IDEMIA & ZKTeco";
  const description = "Solutions professionnelles de contrôle d'accès : biométrie IDEMIA, supervision Horoquartz, MorphoManager, pointeuses intelligentes et terminaux ZKTeco connectés en temps réel.";
  const path = "/controle-acces";
  const url = `${SITE_URL}${path}`;
  const img = `${SITE_URL}${DEFAULT_IMAGE}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Optima - Solutions de Contrôle d'Accès Biométrique",
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
      "Contrôle d'accès biométrique",
      "IDEMIA",
      "Horoquartz",
      "ZKTeco",
      "MorphoManager",
      "Sécurité physique"
    ]
  };

  return (
    <Helmet>
      <title>{title} | Optima</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Keywords */}
      <meta name="keywords" content="contrôle d'accès, biométrie, IDEMIA, Horoquartz, ZKTeco, sécurité, empreinte digitale, reconnaissance faciale" />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
