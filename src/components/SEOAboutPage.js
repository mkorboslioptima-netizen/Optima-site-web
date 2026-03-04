import { useEffect } from "react";

const SITE_URL = "https://www.optima.example";

export default function SEOAboutPage() {
  useEffect(() => {
    const title = `À propos d’OPTIMA | Solutions RH et Sécurité`;
    const description = 'Découvrez OPTIMA, expert en gestion des temps, contrôle d’accès et solutions RH. Contactez-nous pour un accompagnement personnalisé.';
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}/a-propos`;
  }, []);

  return null;
}
