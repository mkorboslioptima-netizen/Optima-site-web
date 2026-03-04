import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.optima.tn";
const DEFAULT_IMAGE = "/assets/images/Optima-Logo.png";

export default function SEOAbout() {
  const title = "À propos d’OPTIMA – Expertise en gestion des temps, contrôle d’accès et solutions RH";
  const description = "Découvrez OPTIMA, expert en solutions de gestion des temps, contrôle d'accès biométrique et externalisation de la paie. Innovation, fiabilité et performance au service des entreprises.";
  const path = "/about";
  const url = `${SITE_URL}${path}`;
  const img = `${SITE_URL}${DEFAULT_IMAGE}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OPTIMA",
    "url": url,
    "logo": img,
    "description": description,
    "sameAs": [
      "https://www.optima.tn"
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

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
