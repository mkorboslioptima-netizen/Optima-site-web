import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import CtaOne from "../components/Cta/CtaOne";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CheckoutInfo from "../components/Checkout/CheckoutInfo";

export default function Checkout() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Checkout"
        currentPage="Checkout"
        href="/checkout"
      />
      <CheckoutInfo />
      <CtaOne />
    </InnerPageLayout>
  );
}
