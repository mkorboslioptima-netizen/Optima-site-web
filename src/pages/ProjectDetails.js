import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ProjectOverview from "../components/Projects/ProjectOverview";
import ProjectRequirement from "../components/Projects/ProjectRequirement";
import ProjectResult from "../components/Projects/ProjectResult";
import RelatedProject from "../components/Projects/RelatedProject";

export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Sage 100 Gestion Commerciale"
        currentPage="Sage 100 Gestion Commerciale"
        href="/Sage-100-Gestion-Commerciale"
      />
      <ProjectOverview />
      <ProjectRequirement />
      <ProjectResult />
      <RelatedProject />
    </InnerPageLayout>
  );
}
