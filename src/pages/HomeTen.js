import React from "react";
import DemoHeaderTen from "../components/Layout/Header/DemoHeader/DemoHeaderTen";
import HeroTen from "../components/Hero/HeroTen";
import ServiceSlider from "../components/Services/ServiceSlider";
import AboutMe from "../components/About/AboutMe";
import PortfolioTestimonial from "../components/Testimonials/PortfolioTestimonial";
import PortfolioClient from "../components/ClientLogoSlider/PortfolioClient";
import PortfolioBlog from "../components/LatestBlog/PortfolioBlog";
import PortfolioCta from "../components/Cta/PortfolioCta";
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeTen() {
  return (
    <PageLayout>
      <div className="box-border home-two bg-main-black">
        <div className="w-full px-2 md:px-0">
          <DemoHeaderTen />
          <HeroTen />
          <ServiceSlider />
          <AboutMe />
          <PortfolioTestimonial />
          <PortfolioClient />
          <PortfolioBlog />
          <PortfolioCta />
          <PortfolioFooter />
        </div>
      </div>
    </PageLayout>
  );
}
