import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BlogBreadCrumb from "../components/Breadcrumb/BlogBreadCrumb";
import BlogDetailsInfo from "../components/BlogInfo/BlogDetailsInfo";

export default function BlogDetails() {
  return (
    <InnerPageLayout>
      <BlogBreadCrumb />
      <BlogDetailsInfo />
    </InnerPageLayout>
  );
}
