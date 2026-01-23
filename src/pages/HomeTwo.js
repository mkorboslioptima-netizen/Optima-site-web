import React from "react";
import DemoHeaderTwo from "../components/Layout/Header/DemoHeader/DemoHeaderTwo";
import HeroTwo from "../components/Hero/HeroTwo";
import FooterThree from "../components/Layout/Footer/FooterThree";
import FeatureOne from "../components/Features/FeatureOne";
import LogoSliderTwo from "../components/ClientLogoSlider/LogoSliderTwo";
import AboutTwo from "../components/About/AboutTwo";
import ServiceTwo from "../components/Services/ServiceTwo";
import FaqOne from "../components/FaqCom/FaqOne";
import CtaTwo from "../components/Cta/CtaTwo";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeTwo() {
  return (
    <PageLayout>
      <DemoHeaderTwo />
      <HeroTwo />
      <FeatureOne />
      <LogoSliderTwo />
      <AboutTwo />
      <ServiceTwo />
      <FaqOne />
      <CtaTwo />
      <FooterThree />
    </PageLayout>
  );
}
