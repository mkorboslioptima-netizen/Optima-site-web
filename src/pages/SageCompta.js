import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectOverviewCompta from "../components/Projects/ProjectOverviewCompta";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import RelatedProject from "../components/Projects/RelatedCompta";
import Hero from "../components/Hero/HeroComptabilite";
import ServiceTwo from "../components/Services/ServiceTwo";
import ProjectCompta from "../components/Projects/ProjectCompta";
import ServiceCompta from "../components/Services/ServiceCompta";
import RelatedCompta from "../components/Projects/RelatedCompta";


import SEO from "../components/SEO";

export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="Sage 100 Comptabilité — Logiciel comptable ERP en Tunisie"
        description="Sage 100 Comptabilité : gérez votre comptabilité, finances et reporting avec une solution ERP complète intégrée par Optima en Tunisie."
        path="/sage-100-comptabilite"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Sage 100 Comptabilité",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows",
          description: "Logiciel de comptabilité : saisie, lettrage, TVA, bilan et reporting financier pour PME en Tunisie.",
          provider: { "@type": "Organization", name: "Optima", url: "https://www.optima.tn" },
          areaServed: "TN",
          offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        }}
      />
      <Hero />
    
      <ProjectOverviewCompta />
      <ServiceCompta />
      {/*<ProjectRequirement /> */}
      <ProjectCompta />
      <RelatedCompta />
    </InnerPageLayout>
  );
}
