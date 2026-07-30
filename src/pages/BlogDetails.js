import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BlogBreadCrumb from "../components/Breadcrumb/BlogBreadCrumb";
import BlogDetailsInfo from "../components/BlogInfo/BlogDetailsInfo";
import SEO from "../components/SEO";

export default function BlogDetails() {
  return (
    <InnerPageLayout>
      <SEO
        title="Article de blog"
        description="Actualités et conseils Optima : Sage 100, gestion des temps Horoquartz, paie et RH en Tunisie."
        path="/blog-details"
      />
      <BlogBreadCrumb />
      <BlogDetailsInfo />
    </InnerPageLayout>
  );
}
