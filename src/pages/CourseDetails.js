import React from "react";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CourseDetailsInfo from "../components/Course/CourseDetailsInfo";
import InnerPageLayout from "../components/Layout/InnerPageLayout";

export default function CourseDetails() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Course Details"
        currentPage="Course Details"
        href="/course-details"
      />
      <CourseDetailsInfo />
    </InnerPageLayout>
  );
}
