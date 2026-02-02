import React from "react";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutCompany from "../components/About/AboutCompany";
import FunFactCounterTwo from "../components/FunFact/FunFactCounterTwo";
import AboutBenefit from "../components/About/AboutBenefit";
import AboutLogoCloud from "../components/ClientLogoSlider/AboutLogoCloud";
import AboutTestimonial from "../components/Testimonials/AboutTestimonial";
import AboutTeam from "../components/Team/AboutTeam";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import SEO from "../components/SEO";

export default function About() {
  return (
    <InnerPageLayout>
      <SEO
        title="À propos"
        description="Découvrez Optima, votre partenaire de confiance pour l'intégration Sage 100 en Tunisie. Expertise, accompagnement et support technique."
        path="/about"
      />
      <BreadCrumb pageTitle="About" currentPage="About" to="/about" />
      <AboutCompany />
      <FunFactCounterTwo />
      <AboutBenefit />
      <AboutTeam />
      <AboutLogoCloud />
      <AboutTestimonial />
    </InnerPageLayout>
  );
}
