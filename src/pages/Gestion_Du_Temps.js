import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";
import HeroGTA from "../components/Hero/HeroGTA";
import SEO from "../components/SEO";
import CourseDetailsInfo from "../components/Course/CourseDetailsInfo";
export default function Services() {
  return (
    <InnerPageLayout>
      <SEO
        title="Gestion des temps"
        description="Découvrez nos services : intégration Sage 100, formation, support technique, gestion commerciale, comptabilité et solutions Horoquartz."
        path="/Gestion_Du_Temps"
      />
      <HeroGTA />
      <CourseDetailsInfo />
      <AboutService />
      <ServiceFiveRed />
      <ServiceFaq />
      
    </InnerPageLayout>
  );
}
