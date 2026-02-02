import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import ProjectList from "../components/Projects/ProjectList";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CtaOne from "../components/Cta/CtaOne";

import SEO from "../components/SEO";

export default function Projects() {
  return (
    <InnerPageLayout>
      <SEO
        title="Projets"
        description="Découvrez nos réalisations et projets d'intégration Sage 100 en Tunisie. Études de cas et témoignages clients."
        path="/projects"
      />
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
