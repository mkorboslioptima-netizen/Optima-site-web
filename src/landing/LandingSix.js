import React from "react";
import HeroSix from "../components/Hero/HeroSix";
import TopCategoriesSlider from "../components/Categories/TopCategoriesSlider";
import Courses from "../components/Course/Courses";
import CoursesFeatures from "../components/Features/CoursesFeatures";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TestimonialSix from "../components/Testimonials/TestimonialSix";
import FaqThree from "../components/FaqCom/FaqThree";
import FooterSix from "../components/Layout/Footer/FooterSix";
import AboutFive from "../components/About/AboutFive";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderSix from "../components/Layout/Header/LandingHeader/LandingHeaderSix";

export default function LandingSix() {
  return (
    <PageLayout>
      <LandingHeaderSix />
      <HeroSix />
      <TopCategoriesSlider />
      <AboutFive />
      <Courses />
      <CoursesFeatures />
      <WhyChooseUs />
      <TestimonialSix />
      <FaqThree />
      <FooterSix />
    </PageLayout>
  );
}
