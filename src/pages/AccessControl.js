import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import SEO from "../components/SEO";
import AccessControlHero from "../components/AccessControl/AccessControlHero";
import AccessControlPresentation from "../components/AccessControl/AccessControlPresentation";
import AccessControlFeatures from "../components/AccessControl/AccessControlFeatures";
import AccessControlBiometric from "../components/AccessControl/AccessControlBiometric";
import AccessControlPartners from "../components/AccessControl/AccessControlPartners";
import AccessControlBenefits from "../components/AccessControl/AccessControlBenefits";
import AccessControlCTA from "../components/AccessControl/AccessControlCTA";

export default function AccessControl() {
  return (
    <InnerPageLayout>
      <SEO
        title="Contrôle d'accès - Sécurité et gestion des accès"
        description="Solutions modernes de contrôle d'accès et de sécurité. Biométrie, pointeuses intelligentes et gestion centralisée pour sécuriser votre entreprise."
        path="/control-accès"
      />
      <BreadCrumb />
      <AccessControlHero />
      <AccessControlPresentation />
      <AccessControlFeatures />
      <AccessControlBiometric />
      <AccessControlPartners />
      <AccessControlBenefits />
      <AccessControlCTA />
    </InnerPageLayout>
  );
}
