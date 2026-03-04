import React from "react";
import { Link } from "react-router-dom";

export default function CorporateHeader() {
  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-20 bg-white/90 backdrop-blur-md shadow-md border-b border-white/10 xl:block hidden">
        <div className="relative z-20 w-full px-6 lg:px-10 xl:px-20 2xl:px-40">
          <div className="w-full h-[90px] flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="/">
                <img src="/assets/images/Logo.svg" alt="Optima" />
              </Link>
              <nav>
                <ul className="flex items-center space-x-6 text-sm font-semibold text-gray-800">
                  <li>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/a-propos" className="text-buisness-red">À propos</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <Link to="/contact">
                <div className="py-3.5 px-5 rounded-md bg-buisness-red text-white font-semibold">
                  Contactez-nous
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-four-border w-full h-[1px]"></div>
      </div>
    </header>
  );
}
