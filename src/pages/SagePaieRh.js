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
        title="Sage 100 RH : gérez votre paie et ressources humaines avec une solution ERP complète intégrée par Optima en Tunisie."
        description="Sage 100 RH : gérez votre paie et ressources humaines avec une solution ERP complète intégrée par Optima en Tunisie."
        path="/Sage-100-Gestion-Paie-RH"
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
