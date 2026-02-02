import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import TeamMain from "../components/Team/TeamMain";
import TeamThree from "../components/Team/TeamThree";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";

import SEO from "../components/SEO";

export default function Teams() {
  return (
    <InnerPageLayout>
      <SEO
        title="Équipe"
        description="Rencontrez l'équipe Optima : des experts certifiés Sage et Horoquartz dédiés à la réussite de vos projets de gestion."
        path="/teams"
      />
      <BreadCrumb
        pageTitle="Team Members"
        currentPage="Team Members"
        href="/teams"
      />
      <TeamMain />
      <TeamThree />
    </InnerPageLayout>
  );
}
