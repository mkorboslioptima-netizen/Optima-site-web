import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbAccessControl() {
  return (
    <section
      id="banner-access-control"
      className="relative w-full py-3 overflow-hidden bg-gray-seo pt-28"
    >
      <div className="w-full max-w-[1506px] relative theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 z-10 items-center">

        {/* Background dots */}
        <img
          src="/assets/images/home-two/hero-dot-bg.svg"
          alt="decoration"
          className="absolute top-[75px] -left-[145px] moving-h2-hero-main-img"
        />

        {/* Colonne gauche — Titre + sous-titre */}
        <div className="col-span-6 flex flex-col justify-center py-10 pl-4 lg:pl-0">
          <h1 className="text-[42px] md:text-[64px] font-bold text-main-black leading-tight tracking-tight">
            Contrôle d'Accès
          </h1>
          <p className="mt-4 text-paragraph text-lg max-w-[420px]">
            Solutions biométriques avancées — Gestion centralisée des accès, supervision multi-sites en temps réel et traçabilité complète pour sécuriser votre entreprise.
          </p>

          {/* Petite ligne décorative rouge */}
          <div className="mt-6 w-16 h-1 rounded-full bg-buisness-red" />
        </div>

        {/* Colonne droite — Image animée centrée */}
        <div className="col-span-6 flex justify-center items-center py-10">
          <img
            src="/assets/images/service/IDEMIA_Sigma_Lite.png"
            alt="Contrôle d'Accès Biométrique"
            className="w-auto h-64 md:h-80 lg:h-96 moving-h2-hero-main-img"
          />
        </div>

      </div>
    </section>
  );
}
