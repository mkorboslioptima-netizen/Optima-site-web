import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import SEO from "../components/SEO";
import HeroFC from "../components/Hero/HeroF&C";
import Detail from "../components/Course/Description-Metier-Finance";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";

export default function Outsourcing() {
  return (
    <InnerPageLayout>
      <SEO
        title="Outsourcing de la paie"
        description="OPTIMA prend en charge l'intégralité de votre cycle de paie : calcul, éditions, déclarations sociales et fiscales, sécurité ISO 27001 et conformité garantie."
        path="/outsourcing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Externalisation de la Paie",
          provider: { "@type": "Organization", name: "Optima" },
          description:
            "Service d'externalisation de la paie certifié ISO 9001 & ISO 27001 : calcul des salaires, bulletins, déclarations CNSS et fiscales en Tunisie.",
          areaServed: "TN",
          knowsAbout: ["Sage Paie", "CNSS", "IRPP", "ISO 27001", "ISO 9001"],
        }}
      />
      <HeroFC />
      <Detail />
      <ServiceFiveRed />
      
    </InnerPageLayout>
  );
}