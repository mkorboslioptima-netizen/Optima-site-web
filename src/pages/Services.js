import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ServiceFiveRed";
import ServiceFaq from "../components/Services/ServiceFaq";

export default function Services() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Services" currentPage="Service" href="/services" />
      <AboutService />
      <ServiceFiveRed />
      <ServiceFaq />
    </InnerPageLayout>
  );
}
