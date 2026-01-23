import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import ContactForm from "../components/Contact/ContactForm";
import CtaOne from "../components/Cta/CtaOne";

export default function Contact() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Contact" currentPage="Contact" href="/contact" />
      <ContactForm />
      <CtaOne />
    </InnerPageLayout>
  );
}
