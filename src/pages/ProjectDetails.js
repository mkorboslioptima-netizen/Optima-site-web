import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectOverview from "../components/Projects/ProjectOverview";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import ProjectResult from "../components/Projects/ProjectResult";
import RelatedProject from "../components/Projects/RelatedProject";
import HeroTwo from "../components/Hero/HeroTwo";
import ServiceTwo from "../components/Services/ServiceTwo";
export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <HeroTwo />
    
      <ProjectOverview />
      <ServiceTwo />
      {/*<ProjectRequirement /> */}
      <ProjectResult />
      <RelatedProject />
    </InnerPageLayout>
  );
}
