import React from "react";
import DemoHeaderFive from "../Layout/Header/DemoHeader/DemoHeaderFive";
import MobileHeader from "../Layout/Header/DemoHeader/DemoHeaderMobile";
import FooterFive from "../Layout/Footer/FooterFive";

export default function InnerPageLayoutAbout({ children }) {
  return (
    <div className="bg-[#111] text-white">
      <DemoHeaderFive />
      <MobileHeader />
      <main>{children}</main>
      <FooterFive />
    </div>
  );
}
