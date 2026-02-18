import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectOverviewBI from "../components/Projects/ProjectOverviewBI";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import RelatedBI from "../components/Projects/RelatedBI";
import HeroBI from "../components/Hero/HeroBI";
import ServiceTwo from "../components/Services/ServiceTwo";
import ProjectBI from "../components/Projects/ProjectBI";
import ServiceBI from "../components/Services/ServiceBI";



import SEO from "../components/SEO";

export default function SageBI() {
  return (
    <InnerPageLayout>
      <SEO
        title="Sage BI — Reporting & Tableaux de bord"
        description="Sage BI : tableaux de bord, reporting et business intelligence intégrés à Sage 100 — Solutions de pilotage proposées par Optima."
        path="/Sage-BI"
      />
      <HeroBI />

      <ProjectOverviewBI />
      <ServiceBI />
      {/*<ProjectRequirement /> */}
      <ProjectBI />
      <RelatedBI />
    </InnerPageLayout>
  );
}
