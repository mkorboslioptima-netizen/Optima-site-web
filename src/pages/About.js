import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import SEO from "../components/SEO";

import BreadCrumbAboutOptima from "../components/About/BreadCrumbAboutOptima";
import HeroAboutOptima from "../components/About/HeroAboutOptima";
import AboutStoryOptima from "../components/About/AboutStoryOptima";
import AboutServicesOptima from "../components/About/AboutServicesOptima";
import AboutStrengthsOptima from "../components/About/AboutStrengthsOptima";
import AboutPartnersOptima from "../components/About/AboutPartnersOptima";
import AboutTimelineOptima from "../components/About/AboutTimelineOptima";
import AboutMapOptima from "../components/About/AboutMapOptima";

export default function About() {
  return (
    <InnerPageLayout>
      <SEO
        title="A Propos d'OPTIMA - Conseil Informatique et Solutions de Gestion en Tunisie"
        description="Depuis 2006, OPTIMA accompagne les entreprises tunisiennes avec des solutions ERP, GRH et Finance. Partenaire SAGE et HOROQUARTZ, base a Ariana."
        path="/about"
      />

      {/* Banner dedie OPTIMA avec particules + stats */}
      <BreadCrumbAboutOptima />

      <HeroAboutOptima />
      <AboutStoryOptima />
      <AboutServicesOptima />
      <AboutStrengthsOptima />
     
      <AboutTimelineOptima />
      <AboutMapOptima />

    </InnerPageLayout>
  );
}