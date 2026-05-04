import React from "react";

export default function HeroOutsourcing() {

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-buisness-red/5 to-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Optima — Externalisation de la Paie
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-main-black mb-6 leading-tight">
              Externalisation de la Paie
            </h1>

            <p className="text-lg text-paragraph mb-8 leading-relaxed">
              OPTIMA prend en charge l'intégralité de votre cycle de paie dans le strict
              respect du Code du Travail tunisien, des obligations CNSS et des déclarations
              fiscales (RAS, IRPP). Certifiés ISO 9001 et ISO 27001 dans le domaine de
              l'externalisation de la paie, nous vous offrons une garantie formelle sur la
              qualité de service et la sécurité de vos données salariales.
            </p>

          </div>

          <div data-aos="fade-left">
            <img
              src="/assets/images/service/paie.png"
              alt="Externalisation Paie"
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>


    </section>
  );
}
