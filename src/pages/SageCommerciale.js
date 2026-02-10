import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectOverview from "../components/Projects/ProjectOverview";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import ProjectResult from "../components/Projects/ProjectResult";
import RelatedProject from "../components/Projects/RelatedCompta";
import HeroTwo from "../components/Hero/HeroTwo";
import ServiceTwo from "../components/Services/ServiceTwo";
import SEO from "../components/SEO";

export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="Sage 100 Gestion Commerciale"
        description="Sage 100 Gestion Commerciale : gérez vos ventes, stocks, achats et reporting. Solution ERP complète intégrée par Optima en Tunisie."
        path="/Sage-100-Gestion-Commerciale"
      />
      <HeroTwo />
    
      <ProjectOverview />
      <ServiceTwo />
      {/*<ProjectRequirement /> */}
      <ProjectResult />
      <RelatedProject />
    </InnerPageLayout>
  );
}
