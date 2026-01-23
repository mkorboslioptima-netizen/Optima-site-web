import React from "react";
import HeroEight from "../components/Hero/HeroEight";
import LogoSliderFive from "../components/ClientLogoSlider/LogoSliderFive";
import WhyChooseUsTwo from "../components/WhyChooseUs/WhyChooseUsTwo";
import FeaturesFour from "../components/Features/FeaturesFour";
import FunFactCounter from "../components/FunFact/FunFactCounter";
import FeatureFive from "../components/Features/FeatureFive";
import WhyChooseUsThree from "../components/WhyChooseUs/WhyChooseUsThree";
import FaqFive from "../components/FaqCom/FaqFive";
import VideoCta from "../components/Videos/VideoCta";
import FooterEight from "../components/Layout/Footer/FooterEight";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderEight from "../components/Layout/Header/LandingHeader/LandingHeaderEight";

export default function LandingEight() {
  return (
    <PageLayout>
      <LandingHeaderEight />
      <HeroEight />
      <LogoSliderFive />
      <WhyChooseUsTwo />
      <FeaturesFour />
      <FunFactCounter />
      <FeatureFive />
      <WhyChooseUsThree />
      <FaqFive />
      <VideoCta />
      <FooterEight />
    </PageLayout>
  );
}
