import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumbAccessControl from "../components/Breadcrumb/BreadCrumbAccessControl";
import SEOAccessControl from "../components/SEOAccessControl";
import HeroAccessControl from "../components/Hero/HeroAccessControl";
import ServiceDetailsInfoAccessControl from "../components/Services/ServiceDetailsInfoAccessControl";
import BenefitsAccessControl from "../components/Services/BenefitsAccessControl";
import ProcessAccessControl from "../components/Services/ProcessAccessControl";
import AboutAccessControl from "../components/Layout/Footer/AboutAccessControl";
import FAQAccessControl from "../components/Services/FAQAccessControl";

export default function AccessControl() {
  return (
    <InnerPageLayout>
      <SEOAccessControl />
      <BreadCrumbAccessControl />
      
      {/* Section Héro avec Présentation Principale */}
      <HeroAccessControl />
      
      {/* Section Détails et Informations Officielles */}
      <ServiceDetailsInfoAccessControl />
      
      {/* Section Avantages et Bénéfices */}
      <BenefitsAccessControl />
      
      {/* Section Processus d'Implémentation */}
      <ProcessAccessControl />
      
      {/* Section À Propos Additionnelle */}
      <AboutAccessControl />
      
      {/* Section FAQ */}
      <FAQAccessControl />
    </InnerPageLayout>
  );
}
