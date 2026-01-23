import React from "react";
import DemoHeaderFive from "../components/Layout/Header/DemoHeader/DemoHeaderFive";
import HeroFive from "../components/Hero/HeroFive";
import ServiceFour from "../components/Services/ServiceFour";
import ServiceFive from "../components/Services/ServiceFive";
import TeamTwo from "../components/Team/TeamTwo";
import SuccessStory from "../components/CaseStudies/SuccessStory";
import FunFactTwo from "../components/FunFact/FunFactTwo";
import TestimonialFive from "../components/Testimonials/TestimonialFive";
import LatestBlogThree from "../components/LatestBlog/LatestBlogThree";
import LogoSliderThree from "../components/ClientLogoSlider/LogoSliderThree";
import CtaFive from "../components/Cta/CtaFive";
import AboutFour from "../components/About/AboutFour";
import FooterFive from "../components/Layout/Footer/FooterFive";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeFive() {
  return (
    <PageLayout>
      <DemoHeaderFive />
      <HeroFive />
      <AboutFour />
      <ServiceFive />
      <TeamTwo />
      <SuccessStory />
      <FunFactTwo />
      <TestimonialFive />
      <LatestBlogThree />
      <LogoSliderThree />
      <CtaFive />
      <FooterFive />
    </PageLayout>
  );
}
