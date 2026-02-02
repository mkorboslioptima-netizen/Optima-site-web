import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.optima.tn";
const DEFAULT_IMAGE = "/assets/images/Optima-Logo.png";

export default function SEO({
  title,
  description,
  path = "",
  image,
  type = "website",
  jsonLd,
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
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
