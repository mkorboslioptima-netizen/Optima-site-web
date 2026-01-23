import React from "react";

import HeroFive from "../components/Hero/HeroFive";
import ServiceFour from "../components/Services/ServiceFour";
import TeamTwo from "../components/Team/TeamTwo";
import SuccessStory from "../components/CaseStudies/SuccessStory";
import FunFactTwo from "../components/FunFact/FunFactTwo";
import TestimonialFive from "../components/Testimonials/TestimonialFive";
import LatestBlogThree from "../components/LatestBlog/LatestBlogThree";
import LogoSliderThree from "../components/ClientLogoSlider/LogoSliderThree";
import CtaFive from "../components/Cta/CtaFive";
import AboutFour from "../components/About/AboutFour";
import FooterFive from "../components/Layout/Footer/FooterFive";
import HomePageLayout from "../components/Layout/PageLayout";
import LandingHeaderFive from "../components/Layout/Header/LandingHeader/LandingHeaderFive";

export default function LandingFive() {
  return (
    <HomePageLayout>
      <LandingHeaderFive />
      <HeroFive />
      <AboutFour />
      <ServiceFour />
      <TeamTwo />
      <SuccessStory />
      <FunFactTwo />
      <TestimonialFive />
      <LatestBlogThree />
      <LogoSliderThree />
      <CtaFive />
      <FooterFive />
    </HomePageLayout>
  );
}
