import React from "react";
import DemoHeaderSeven from "../components/Layout/Header/DemoHeader/DemoHeaderSeven";
import HeroSeven from "../components/Hero/HeroSeven";
import AboutSix from "../components/About/AboutSix";
import ServiceFive from "../components/Services/ServiceFive";
import WorkProcessTwo from "../components/WorkProcess/WorkProcessTwo";
import CaseStudyTwo from "../components/CaseStudies/CaseStudyTwo";
import FeatureThree from "../components/Features/FeatureThree";
import TestimonialSeven from "../components/Testimonials/TestimonialSeven";
import FaqFour from "../components/FaqCom/FaqFour";
import CtaSeven from "../components/Cta/CtaSeven";
import FooterSeven from "../components/Layout/Footer/FooterSeven";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeSeven() {
  return (
    <PageLayout>
      <DemoHeaderSeven />
      <HeroSeven />
      <AboutSix />
      <ServiceFive />
      <WorkProcessTwo />
      <CaseStudyTwo />
      <FeatureThree />
      <TestimonialSeven />
      <FaqFour />
      <CtaSeven />
      <FooterSeven />
    </PageLayout>
  );
}
