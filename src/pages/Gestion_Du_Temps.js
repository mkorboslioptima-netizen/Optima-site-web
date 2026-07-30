import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceFiveRed from "../components/Services/ErpService";
import ServiceFaq from "../components/Services/ServiceFaq";
import HeroGTA from "../components/Hero/HeroGTA";
import SEO from "../components/SEO";
import CourseDetailsInfo from "../components/Course/CourseDetailsInfo";
import ROICalculatorGTA from "../components/ROI/ROICalculatorGTA";
export default function Services() {
  return (
    <InnerPageLayout>
      <SEO
        title="Gestion des temps & présences Horoquartz — Solution pointeuse en Tunisie"
        description="Logiciel Horoquartz de gestion des temps et présences : badgeage, plannings, heures supplémentaires et exports paie. Intégré par Optima en Tunisie."
        path="/gestion-des-temps"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Horoquartz — Gestion des Temps et Présences",
          applicationCategory: "BusinessApplication",
          description: "Solution de gestion des temps et présences : badgeage, plannings, absences, heures supplémentaires et interface paie.",
          provider: { "@type": "Organization", name: "Optima", url: "https://www.optima.tn" },
          areaServed: "TN",
          offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        }}
      />
      <HeroGTA />
      <CourseDetailsInfo />
      <AboutService />
      <ServiceFiveRed />
      <ServiceFaq />
      <ROICalculatorGTA />
    </InnerPageLayout>
  );
}
