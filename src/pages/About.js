import React from "react";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutCompany from "../components/About/AboutCompany";
import FunFactCounterTwo from "../components/FunFact/FunFactCounterTwo";
import AboutBenefit from "../components/About/AboutBenefit";
import AboutLogoCloud from "../components/ClientLogoSlider/AboutLogoCloud";
import AboutTestimonial from "../components/Testimonials/AboutTestimonial";
import AboutTeam from "../components/Team/AboutTeam";
import InnerPageLayout from "../components/Layout/InnerPageLayout";

export default function About() {
  return (
    <InnerPageLayout>
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
