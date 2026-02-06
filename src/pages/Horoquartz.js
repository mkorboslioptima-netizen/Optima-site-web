import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import AboutHoroquartz from "../components/Layout/Footer/abouthoroquartz";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";
import ServiceDetailsInfo from "../components/Services/ServiceDetailsInfo";

import SEO from "../components/SEO";

export default function Horoquartz() {
  return (
      <InnerPageLayout>
      <SEO
        title="Horoquartz"
        description="Solutions Horoquartz de Gestion des temps et des présences. Planification, badgeage et contrôle d'accès intégrés par Optima."
        path="/horoquartz"
      />
      <BreadCrumb pageTitle="Horoquartz" currentPage="Horoquartz" href="/Horoquartz" />
      <AboutHoroquartz />
      <ServiceDetailsInfo />
      <ServiceFiveRed />
      </InnerPageLayout>
  );
}
