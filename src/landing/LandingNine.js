import React from "react";
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
import LandingHeaderNine from "../components/Layout/Header/LandingHeader/LandingHeaderNine";

export default function LandingNine() {
  return (
    <PageLayout>
      <LandingHeaderNine />
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
