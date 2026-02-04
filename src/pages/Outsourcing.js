import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ServiceFiveRed";
import ServiceFaq from "../components/Services/ServiceFaq";
import OutsourcingFaq from "../components/Services/OutsourcingFaq";
import HeroFC from "../components/Hero/HeroF&C";
import SEO from "../components/SEO";
import Detail from "../components/Course/Description-Metier-Finance";
import OutsourcingService from "../components/Services/OutsourcingService";
export default function Services() {
  return (
    <InnerPageLayout>
      <SEO
        title="Services"
        description="Découvrez nos services : intégration Sage 100, formation, support technique, gestion commerciale, comptabilité et solutions Horoquartz."
        path="/Outsourcing"
      />
      <HeroFC / >
      <Detail />
      <OutsourcingService />
      <OutsourcingFaq />
    </InnerPageLayout>
  );
}
