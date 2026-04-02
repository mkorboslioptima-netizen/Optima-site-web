import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import HeroEtemptation from "../components/Hero/HeroEtemptation";
import KeyFeaturesEtemptation from "../components/Services/KeyFeaturesEtemptation";
import ServiceDetailsInfoEtemptation from "../components/Services/ServiceDetailsInfoEtemptation";
import BenefitsEtemptation from "../components/Services/BenefitsEtemptation";
import ProcessEtemptation from "../components/Services/ProcessEtemptation";
import FAQEtemptation from "../components/Services/FAQEtemptation";
import TestimonialsEtemptation from "../components/Services/TestimonialsEtemptation";
import AboutEtemptation from "../components/Layout/Footer/AboutEtemptation";
import CTAEtemptation from "../components/Services/CTAEtemptation";
import ServiceFiveRedEtemptation from "../components/Services/ServiceFiveRedEtemptation";
import ROICalculatorGTA from "../components/ROI/ROICalculatorGTA";
import SEO from "../components/SEO";

export default function eTemptation() {
  return (
    <InnerPageLayout>
      <SEO  
        title="eTemptation - Solution Complète de Gestion des Absences et Congés"
        description="eTemptation : Plateforme intelligente pour gérer les congés payés, absences maladie, formations et roulements d'équipes. Solution RH modulable et conforme légalement."
        path="/etemptation"
      />
     
      {/* Section À Propos Additionnelle */}
      <AboutEtemptation />
      {/* Section Héro avec Présentation Principale */}
     
      
      <HeroEtemptation />
      
      {/* Section Détails et Informations Officielles */}
      <ServiceDetailsInfoEtemptation />
      <ServiceFiveRedEtemptation />
      
      {/* Section Processus d'Implémentation */}
      <ProcessEtemptation />
      
      {/* Section FAQ */}
      <FAQEtemptation />

      {/* Calculateur ROI */}
      <ROICalculatorGTA />
      
      
     
      
    </InnerPageLayout>
  );
}
