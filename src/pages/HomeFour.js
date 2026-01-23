import React from "react";
import DemoHeaderFour from "../components/Layout/Header/DemoHeader/DemoHeaderFour";
import HeroFour from "../components/Hero/HeroFour";
import FooterFour from "../components/Layout/Footer/FooterFour";
import FeatureTwo from "../components/Features/FeatureTwo";
import ServiceThree from "../components/Services/ServiceThree";
import PriceTwo from "../components/Price/PriceTwo";
import FaqTwo from "../components/FaqCom/FaqTwo";
import TestimonialFour from "../components/Testimonials/TestimonialFour";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeFour() {
  return (
    <PageLayout>
      <div className="home-four relative bg-[#0a0118] w-full overflow-x-hidden">
        <DemoHeaderFour />
        <HeroFour />
        <FeatureTwo />
        <ServiceThree />
        <PriceTwo />
        <FaqTwo />
        <TestimonialFour />
        <FooterFour />
      </div>
    </PageLayout>
  );
}
