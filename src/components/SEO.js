import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.optima.tn";
const DEFAULT_IMAGE = "/assets/images/Optima-Logo.png";

/* Schema.org LocalBusiness — injecté sur toutes les pages */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SoftwareApplication"],
  name: "Optima",
  description:
    "Intégrateur certifié Sage 100 et Horoquartz en Tunisie. Solutions ERP, gestion des temps, outsourcing de la paie et contrôle d'accès IDEMIA.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/Optima-Logo.png`,
  image: `${SITE_URL}/assets/images/Optima-Logo.png`,
  email: "support@optima.tn",
  telephone: "+216 71 715 397",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6, Rue Echih, 2ème étage, App B2.1",
    addressLocality: "Ariana",
    postalCode: "2080",
    addressCountry: "TN",
  },
  areaServed: "TN",
  knowsLanguage: ["fr", "ar"],
  sameAs: [
    "https://www.linkedin.com/company/optima-tn",
    "https://www.facebook.com/optima.tn",
  ],
};

export default function SEO({
  title,
  description,
  path = "",
  image,
  type = "website",
  jsonLd,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Optima`
    : "Optima | Intégrateur Sage 100 & Solutions de Gestion";
  const desc =
    description ||
    "Optima, intégrateur Sage 100 en Tunisie. Solutions de gestion commerciale, comptabilité, paie et ressources humaines.";
  const url = `${SITE_URL}${path}`;
  const img = image || `${SITE_URL}${DEFAULT_IMAGE}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {!noindex && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="fr_TN" />
      <meta property="og:site_name" content="Optima" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {/* Schema.org LocalBusiness (toutes pages) */}
      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
      </script>

      {/* JSON-LD spécifique à la page */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
