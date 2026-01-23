import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import TeamMain from "../components/Team/TeamMain";
import TeamThree from "../components/Team/TeamThree";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";

export default function Teams() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Team Members"
        currentPage="Team Members"
        href="/teams"
      />
      <TeamMain />
      <TeamThree />
    </InnerPageLayout>
  );
}
