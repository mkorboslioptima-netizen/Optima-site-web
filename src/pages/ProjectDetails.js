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
        pageTitle="Project Details"
        currentPage="Project Details"
        href="/project-details"
      />
      <ProjectOverview />
      <ProjectRequirement />
      <ProjectResult />
      <RelatedProject />
    </InnerPageLayout>
  );
}
