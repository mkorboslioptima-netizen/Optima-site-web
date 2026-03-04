import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbAbout() {
  return (
    <section className="relative w-full py-3 overflow-hidden bg-gray-900/80 pt-28">
      <div className="w-full max-w-[1506px] theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 items-center">
        <div className="col-span-6 flex flex-col justify-center py-10 pl-4 lg:pl-0" data-aos="fade-right">
          <h1 className="text-[42px] md:text-[64px] font-bold text-white leading-tight tracking-tight">
            À propos d’OPTIMA
          </h1>
          <p className="mt-4 text-paragraph text-lg max-w-[480px] text-gray-300">
            Expert tunisien en gestion des temps, contrôle d’accès et solutions RH depuis 2006.
          </p>
          <div className="mt-6 w-16 h-1 rounded-full bg-buisness-red" />
        </div>
        <div className="col-span-6 flex justify-center items-center py-10" data-aos="fade-left">
          <img
            src="/assets/images/about/hero-about.png"
            alt="OPTIMA entreprise"
            className="w-auto h-64 md:h-80 lg:h-96 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
