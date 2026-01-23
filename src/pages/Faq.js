import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import FaqMainOne from "../components/FaqCom/FaqMainOne";
import FaqMainTwo from "../components/FaqCom/FaqMainTwo";
import CtaOne from "../components/Cta/CtaOne";

export default function Faq() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="FAQs" currentPage="FAQs" href="/faqs" />
      <FaqMainOne />
      <FaqMainTwo />
      <CtaOne />
    </InnerPageLayout>
  );
}
