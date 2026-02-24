import React from "react";

export default function BreadCrumbHoroquartaz() {
  return (
    <section
      id="banner-horoquartaz"
      className="relative w-full py-3 overflow-hidden bg-gray-seo pt-28"
    >
      <div className="w-full max-w-[1506px] relative theme-container mx-auto grid grid-cols-12 z-10 gap-8 items-center px-4 md:px-0">
        
        {/* Background dots (animation conservée) */}
        <img
          src="/assets/images/home-two/hero-dot-bg.svg"
          alt="img"
          className="absolute top-[75px] -left-[145px] moving-h2-hero-main-img"
        />

        {/* Contenu texte à gauche */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Horoquartz
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Maîtrisez votre temps, optimisez votre productivité
          </p>
        </div>

        {/* Image à droite */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <img
            src="/assets/images/3d.png"
            alt="Horoquartaz"
            className="w-auto h-auto max-h-96 md:max-h-full moving-h2-hero-main-img"
          />
        </div>

      </div>
    </section>
  );
}
