import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutEtemptation from "../components/Layout/Footer/AboutEtemptation";
import ServiceDetailsInfoEtemptation from "../components/Services/ServiceDetailsInfoEtemptation";
import ServiceFiveRedEtemptation from "../components/Services/ServiceFiveRedEtemptation";

import SEO from "../components/SEO";

export default function ProjectDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="eTemptation - Solution Complète de Gestion des Absences et Congés"
        description="eTemptation : Plateforme intelligente pour gérer les congés payés, absences maladie, formations et roulements d'équipes. Solution RH modulable et conforme légalement."
        path="/project-details"
      />
      <BreadCrumb
        pageTitle="eTemptation"
        currentPage="eTemptation"
        href="/project-details"
      />
      <AboutEtemptation />
      <ServiceDetailsInfoEtemptation />
      <ServiceFiveRedEtemptation />
    </InnerPageLayout>
  );
}
