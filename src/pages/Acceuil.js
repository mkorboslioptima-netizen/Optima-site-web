import React from "react";
import DemoHeaderFive from "../components/Layout/Header/DemoHeader/DemoHeaderFive";
import HeroFive from "../components/Hero/HeroFive";
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
import ServiceFour from "../components/Services/ServiceFour";
import SEO from "../components/SEO";
import GoogleReviews from "../components/Reviews/GoogleReviews";
export default function HomeFive() {
  return (
    <PageLayout>
      <SEO
        title={null}
        description="Optima, intégrateur Sage 100 en Tunisie. Solutions de gestion commerciale, comptabilité, paie, ressources humaines et Gestion des temps avec Horoquartz."
        path="/"
      />
      <DemoHeaderFive />
      <HeroFive />
      <AboutFour />
      <ServiceFive />
      <ServiceFour />
      <FunFactTwo />
      <TestimonialFive />
      
      <LogoSliderThree />

      <GoogleReviews />
      <FooterFive />
    </PageLayout>
  );
}
