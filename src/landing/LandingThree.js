import React from "react";
import HeroThree from "../components/Hero/HeroThree";
import AboutThree from "../components/About/AboutThree";
import PopularServices from "../components/Services/PopularServices";
import CaseStudyOne from "../components/CaseStudies/CaseStudyOne";
import FooterTen from "../components/Layout/Footer/FooterTen";
import TeamOne from "../components/Team/TeamOne";
import PricingOne from "../components/Price/PricingOne";
import TestimonialThree from "../components/Testimonials/TestimonialThree";
import LatestBlogTwo from "../components/LatestBlog/LatestBlogTwo";
import CtaThree from "../components/Cta/CtaThree";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderThree from "../components/Layout/Header/LandingHeader/LandingHeaderThree";

export default function LandingThree() {
  return (
    <PageLayout>
      <LandingHeaderThree />
      <HeroThree />
      <AboutThree />
      <PopularServices />
      <CaseStudyOne />
      <TeamOne />
      <PricingOne />
      <TestimonialThree />
      <LatestBlogTwo />
      <CtaThree />
      <FooterTen />
    </PageLayout>
  );
}
