import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import ProjectList from "../components/Projects/ProjectList";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CtaOne from "../components/Cta/CtaOne";

export default function Projects() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Latest Project"
        currentPage="Latest Project"
        href="/projects"
      />
      <ProjectList />
      <CtaOne />
    </InnerPageLayout>
  );
}
