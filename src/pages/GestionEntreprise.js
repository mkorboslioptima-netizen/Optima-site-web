import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";
import HeroERP from "../components/Hero/HeroERP";
import SEO from "../components/SEO";
import DescriptionMetierERP from "../components/Course/Description-Metier-ERP";
import Erpservice from "../components/Services/ErpService";
import Erpfaq from "../components/Services/ErpFaq";
import ErpSolutions from "../components/Services/ErpSolutions";
export default function GestionEntreprise() {
  return (
    <InnerPageLayout>
      <SEO
        title="Gestion des entreprises"
        description="Découvrez nos services : intégration Sage 100, formation, support technique, gestion commerciale, comptabilité et solutions Horoquartz."
        path="/Gestion_Entreprise"
      />
      <HeroERP />
      <DescriptionMetierERP />
      <ErpSolutions />
      <Erpservice />
      <Erpfaq />
    </InnerPageLayout>
  );
}
