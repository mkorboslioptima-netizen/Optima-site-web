import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ContactForm from "../components/Contact/ContactForm";
import CtaOne from "../components/Cta/CtaOne";

import SEO from "../components/SEO";

export default function Contact() {
  return (
    <InnerPageLayout>
      <SEO
        title="Contact"
        description="Contactez Optima pour vos projets Sage 100 et Horoquartz en Tunisie. Demandez un devis gratuit ou une démonstration."
        path="/contact"
      />
      <BreadCrumb pageTitle="Contact" currentPage="Contact" href="/contact" />
      <ContactForm />
      <CtaOne />
    </InnerPageLayout>
  );
}
