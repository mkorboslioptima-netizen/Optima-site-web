import React from "react";
import MobileHeader from "./Header/DemoHeader/DemoHeaderMobile";

export default function PageLayout({ children }) {
  return (
    <div>
      <MobileHeader /> {children}
    </div>
  );
}
