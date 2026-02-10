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
        title="Sage 100 Comptabilité"
        description="Sage 100 Comptabilité : gérez votre comptabilité, finances et reporting avec une solution ERP complète intégrée par Optima en Tunisie."
        path="/Sage-100-Gestion-comptabilite"
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
