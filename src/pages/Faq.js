import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import FaqMainOne from "../components/FaqCom/FaqMainOne";
import FaqMainTwo from "../components/FaqCom/FaqMainTwo";
import CtaOne from "../components/Cta/CtaOne";

import SEO from "../components/SEO";

export default function Faq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que Sage 100 Gestion Commerciale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sage 100 Gestion Commerciale est un logiciel ERP qui permet de gérer les ventes, les stocks, les achats et le reporting de votre entreprise."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi choisir Optima comme intégrateur Sage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optima est un intégrateur certifié Sage en Tunisie offrant accompagnement, formation et support technique de qualité."
        }
      }
    ]
  };

  return (
    <InnerPageLayout>
      <SEO
        title="FAQ"
        description="Questions fréquentes sur Sage 100, l'intégration ERP et les solutions Optima. Trouvez les réponses à vos questions."
        path="/faqs"
        jsonLd={faqJsonLd}
      />
      <BreadCrumb pageTitle="FAQs" currentPage="FAQs" href="/faqs" />
      <FaqMainOne />
      <FaqMainTwo />
      <CtaOne />
    </InnerPageLayout>
  );
}
