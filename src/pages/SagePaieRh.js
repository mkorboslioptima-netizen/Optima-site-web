import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectRH from "../components/Projects/ProjectRH";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import RelatedProject from "../components/Projects/RelatedCompta";
import Hero from "../components/Hero/HeroComptabilite";
import ServiceTwo from "../components/Services/ServiceTwo";
import ProjectRH2 from "../components/Projects/ProjectRH2";
import ServiceRh from "../components/Services/ServiceRh";
import RelatedRH from "../components/Projects/RelatedRH";
import HeroSageRH from "../components/Hero/HeroSageRH";

import SEO from "../components/SEO";

export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="Sage 100 Paie & RH — Logiciel de gestion de la paie en Tunisie"
        description="Sage 100 Paie RH : automatisez votre paie, bulletins de salaire, déclarations CNSS et IRPP. Solution certifiée intégrée par Optima en Tunisie."
        path="/sage-100-paie-rh"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Sage 100 Paie & Ressources Humaines",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows",
          description: "Logiciel de gestion de la paie et des ressources humaines : bulletins, CNSS, IRPP, congés et suivi du personnel.",
          provider: { "@type": "Organization", name: "Optima", url: "https://www.optima.tn" },
          areaServed: "TN",
          offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        }}
      />
      <HeroSageRH />
    
      <ProjectRH />
      <ServiceRh />
      {/*<ProjectRequirement /> */}
      <ProjectRH2 />
      <RelatedRH />
    </InnerPageLayout>
  );
}
