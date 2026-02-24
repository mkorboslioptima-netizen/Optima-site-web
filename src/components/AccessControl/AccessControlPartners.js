import React from "react";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlPartners() {
  const { partners, partnersIntegration, partnersFooter } = accessControlData;

  return (
    <section className="w-full py-20 md:py-32 bg-buisness-gray">
      <div className="w-full mx-auto theme-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-buisness-red"></span>
            <span className="text-sm font-semibold text-buisness-red">
              NOS PARTENAIRES
            </span>
          </div>
          <h2 className="text-34 md:text-48 font-bold text-main-black mb-6">
            Solutions Partenaires en Contrôle d'accès <br />
            <span className="text-buisness-red">De confiance et éprouvées</span>
          </h2>
          <p className="text-18 text-paragraph max-w-3xl mx-auto">
            Optima est revendeur agréé des meilleures solutions du secteur.
            Nous sélectionnons nos partenaires pour la qualité, l'innovation et
            la fiabilité. Découvrez nos trois piliers technologiques :
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-2xl border border-buisness-red/10 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${partner.color} to-buisness-red/80 h-32 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
              >
                {partner.logo}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-24 font-bold text-main-black mb-2">
                  {partner.name}
                </h3>
                <p className="text-buisness-red font-semibold text-sm mb-4">
                  {partner.title}
                </p>
                <p className="text-paragraph mb-6 text-sm leading-relaxed">
                  {partner.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-main-black uppercase tracking-wide">
                    Caractéristiques clés
                  </p>
                  {partner.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-1 flex-shrink-0"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#D90A2C"
                          strokeWidth="1"
                        />
                        <path
                          d="M11.5 5.5L7 11L4.5 8.5"
                          stroke="#D90A2C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-paragraph text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-8 w-full bg-buisness-red/10 hover:bg-buisness-red hover:text-white text-buisness-red font-semibold py-3 rounded-lg transition-all duration-300">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration info */}
        <div className="bg-white rounded-2xl border border-buisness-red/10 p-8 md:p-12">
          <h3 className="text-28 font-bold text-main-black mb-6">
            Une intégration complète et transparente
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnersIntegration.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-buisness-red/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-main-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-paragraph text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust statement */}
          <div className="mt-10 pt-10 border-t border-buisness-red/10">
            <p className="text-paragraph italic">
              <span className="font-bold text-buisness-red">Optima en tant que revendeur agréé</span> {partnersFooter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
