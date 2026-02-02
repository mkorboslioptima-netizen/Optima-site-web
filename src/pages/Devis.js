import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import DevisForm from "../components/Devis/DevisForm";
import SEO from "../components/SEO";

export default function Devis() {
  return (
    <InnerPageLayout>
      <SEO
        title="Demande de Devis"
        description="Demandez un devis gratuit et personnalisé pour vos solutions Sage 100 et Horoquartz. Optima vous répond sous 24h."
        path="/devis"
      />
     
      <DevisForm />
    </InnerPageLayout>
  );
}
