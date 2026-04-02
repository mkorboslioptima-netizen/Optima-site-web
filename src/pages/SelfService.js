import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumbSelfService from "../components/Breadcrumb/BreadCrumbSelfService";
import HeroSelfService from "../components/Hero/HeroSelfService";
import KeyFeaturesSelfService from "../components/Services/KeyFeaturesSelfService";
import ServiceDetailsInfoSelfService from "../components/Services/ServiceDetailsInfoSelfService";
import BenefitsSelfService from "../components/Services/BenefitsSelfService";
import ProcessSelfService from "../components/Services/ProcessSelfService";
import FAQSelfService from "../components/Services/FAQSelfService";
import TestimonialsSelfService from "../components/Services/TestimonialsSelfService";
import AboutSelfService from "../components/Layout/Footer/AboutSelfService";
import CTASelfService from "../components/Services/CTASelfService";

import SEO from "../components/SEO";

export default function SelfService() {
  return (
    <InnerPageLayout>
      <SEO  
        title="Self Service - Portail Employé Complet et Intuitif"
        description="Self Service : Plateforme de portail employé pour la gestion autonome des congés, consultations RH, fiches de paie et communication. Solution moderne et sécurisée."
        path="/self-service"
      />
      
      
      {/* Section Héro avec Présentation Principale */}
      <HeroSelfService />
      
      
      {/* Section Détails et Informations Officielles */}
      <ServiceDetailsInfoSelfService />
      
      {/* Section Avantages et Bénéfices */}
      <BenefitsSelfService />
      
      {/* Section Processus d'Implémentation */}
      <ProcessSelfService />
         
      {/* Section À Propos Additionnelle */}
      <AboutSelfService />
      
      {/* Section FAQ */}
      <FAQSelfService />
      
      
     
      
     
    </InnerPageLayout>
  );
}
