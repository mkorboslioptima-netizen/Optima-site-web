import React from "react";
import { Link } from "react-router-dom";

export default function ServiceFiveRedEtemptation() {
  return (
    <section id="services" className="py-[120px] sm:py-[40px] bg-white">
      <div className="w-full mx-auto theme-container">
        <h1 className="px-5 bg-buisness-red/5 border border-buisness-red/20 text-buisness-red font-medium rounded-[30px] w-fit mx-auto">
          Fonctionnalités Clés
        </h1>
        <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
          UNE SOLUTION DE GTA QUI APPORTE DU ROI
        </h2>

        {/* Nouvelle section — Confort collaborateurs */}
        <div className="mt-[70px] grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

          {/* Colonne image + badge en dessous */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img
                src="/assets/images/service/solution-roi.jpg"
                alt="Collaborateurs eTemptation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge sous l'image */}
            <div className="bg-buisness-red text-white px-5 py-3 rounded-xl shadow-lg w-fit">
              <p className="text-sm font-semibold uppercase tracking-wide">Self-Service Collaborateur</p>
            </div>
          </div>

          {/* Colonne texte */}
          <div>
            <h3 className="font-semibold text-[27px] leading-[35px] tracking-tight text-main-black mb-5">
              ET DU CONFORT POUR LES COLLABORATEURS
            </h3>

            <p className="text-paragraph mb-10">
              eTemptation apporte de la transparence pour vos collaborateurs. Via le module self-service, ils ont directement accès aux données les concernant. Ils effectuent leurs demandes d'absences et de congés en ligne, consultent leur planning ainsi que celui de leur équipe, interagissent avec leur manager.
            </p>

            <div className="flex flex-col gap-5">

              {/* Bloc 1 — Transparence */}
              <div className="flex items-start gap-5 border border-buisness-red/10 rounded-2xl px-6 py-5 hover:border-buisness-red/40 hover:bg-buisness-gray transition-all duration-300 group">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-buisness-red text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-18 text-main-black mb-1 group-hover:text-buisness-red transition-colors duration-300">
                    Transparence
                  </h4>
                  <p className="text-paragraph text-sm">
                    Chaque collaborateur accède à ses propres données RH en temps réel : soldes de congés, historique des absences, planning personnel et collectif.
                  </p>
                </div>
              </div>

              {/* Bloc 2 — Interaction */}
              <div className="flex items-start gap-5 border border-buisness-red/10 rounded-2xl px-6 py-5 hover:border-buisness-red/40 hover:bg-buisness-gray transition-all duration-300 group">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-buisness-red text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-18 text-main-black mb-1 group-hover:text-buisness-red transition-colors duration-300">
                    Interaction
                  </h4>
                  <p className="text-paragraph text-sm">
                    Les collaborateurs soumettent leurs demandes directement en ligne et interagissent avec leur manager pour un traitement rapide et fluide.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <Link to="/service-details">
              <div className="inline-flex items-center gap-2 mt-8 text-buisness-red font-medium group">
                <span className="relative leading-5 border-b border-transparent before:inline-block before:border-buisness-red before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                  En savoir plus
                </span>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                  <path
                    d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
