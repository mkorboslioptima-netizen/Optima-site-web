import React from "react";
import HeroFour from "../components/Hero/HeroFour";
import FooterFour from "../components/Layout/Footer/FooterFour";
import FeatureTwo from "../components/Features/FeatureTwo";
import ServiceThree from "../components/Services/ServiceThree";
import PriceTwo from "../components/Price/PriceTwo";
import FaqTwo from "../components/FaqCom/FaqTwo";
import TestimonialFour from "../components/Testimonials/TestimonialFour";
import HomePageLayout from "../components/Layout/PageLayout";
import LandingHeaderFour from "../components/Layout/Header/LandingHeader/LandingHeaderFour";

export default function LandingFour() {
  return (
    <HomePageLayout>
      <div className="home-four relative bg-[#0a0118] w-full overflow-x-hidden">
        <LandingHeaderFour />
        <HeroFour />
        <FeatureTwo />
        <ServiceThree />
        <PriceTwo />
        <FaqTwo />
        <TestimonialFour />
        <FooterFour />
      </div>
    </HomePageLayout>
  );
}
