import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";
import HeroERP from "../components/Hero/HeroERP";
import SEO from "../components/SEO";
import DescriptionMetierERP from "../components/Course/Description-Metier-ERP";
import Erpservice from "../components/Services/ErpService";
import Erpfaq from "../components/Services/ErpFaq";
import ErpSolutions from "../components/Services/ErpSolutions";
export default function GestionEntreprise() {
  return (
    <InnerPageLayout>
      <SEO
        title="Solutions ERP pour PME — Intégrateur Sage 100 en Tunisie"
        description="Optima, intégrateur Sage 100 certifié en Tunisie : ERP gestion commerciale, comptabilité, paie, immobilisations et business intelligence pour PME."
        path="/gestion-entreprise"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Intégration ERP Sage 100",
          provider: { "@type": "Organization", name: "Optima", url: "https://www.optima.tn" },
          description: "Intégration, paramétrage, formation et support des solutions Sage 100 ERP pour les PME tunisiennes.",
          areaServed: "TN",
          serviceType: "ERP Integration",
        }}
      />
      <HeroERP />
      <DescriptionMetierERP />
      <ErpSolutions />
      <Erpservice />
      <Erpfaq />
    </InnerPageLayout>
  );
}
