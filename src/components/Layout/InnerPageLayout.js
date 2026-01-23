import React from "react";
import DemoHeaderFive from "./Header/DemoHeader/DemoHeaderFive";
import FooterFive from "./Footer/FooterFive";
import MobileHeader from "./Header/DemoHeader/DemoHeaderMobile";

export default function InnerPageLayout({ children }) {
  return (
    <div>
      <DemoHeaderFive />
      <MobileHeader />
      {children}
      <FooterFive />
    </div>
  );
}
