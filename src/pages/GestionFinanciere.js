import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ServiceFiveRed";
import ServiceFaq from "../components/Services/ServiceFaq";
import HeroFC from "../components/Hero/HeroF&C";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <InnerPageLayout>
      <SEO
        title="Services"
        description="Découvrez nos services : intégration Sage 100, formation, support technique, gestion commerciale, comptabilité et solutions Horoquartz."
        path="/services"
      />
      <HeroFC / >
      <AboutService />
      <ServiceFiveRed />
      <ServiceFaq />
    </InnerPageLayout>
  );
}
