import React from "react";
import { Link } from "react-router-dom";

export default function CorporateMobileHeader() {
  return (
    <div className="xl:hidden block bg-white/95 fixed z-30 w-full">
      <div className="theme-container px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src="/assets/images/Logo.svg" alt="Optima" className="h-8" />
        </Link>
        <Link to="/contact" className="py-2 px-4 bg-buisness-red text-white rounded-md text-sm font-semibold">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
