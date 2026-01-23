import React from "react";
import DemoHeaderNine from "../components/Layout/Header/DemoHeader/DemoHeaderNine";
import HeroNine from "../components/Hero/HeroNine";
import FeatureSix from "../components/Features/FeatureSix";
import FeatureSeven from "../components/Features/FeatureSeven";
import CardFeatures from "../components/Features/CardFeatures";
import CardFeaturesTwo from "../components/Features/CardFeaturesTwo";
import CardTestimonial from "../components/Testimonials/CardTestimonial";
import CardFaq from "../components/FaqCom/CardFaq";
import LogoCloud from "../components/ClientLogoSlider/LogoCloud";
import DownloadCta from "../components/Cta/DownloadCta";
import FooterNine from "../components/Layout/Footer/FooterNine";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeNine() {
  return (
    <PageLayout>
      <DemoHeaderNine />
      <HeroNine />
      <FeatureSix />
      <FeatureSeven />
      <CardFeatures />
      <CardFeaturesTwo />
      <CardTestimonial />
      <CardFaq />
      <LogoCloud />
      <DownloadCta />
      <FooterNine />
    </PageLayout>
  );
}
