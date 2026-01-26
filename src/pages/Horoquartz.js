import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import AboutHoroquartz from "../components/Layout/Footer/abouthoroquartz";
import ServiceFiveRed from "../components/Services/ServiceFiveRed";
import ServiceFaq from "../components/Services/ServiceFaq";
import ServiceDetailsInfo from "../components/Services/ServiceDetailsInfo";

export default function Horoquartz() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Horoquartz" currentPage="Horoquartz" href="/Horoquartz" />
      <AboutHoroquartz />
    <ServiceDetailsInfo />
      <ServiceFiveRed />
    </InnerPageLayout>
  );
}
