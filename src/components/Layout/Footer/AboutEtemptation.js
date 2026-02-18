import React from "react";
import { Link } from "react-router-dom";

export default function AboutEtemptation() {
  return (
    <section className="w-full py-16 md:pt-[94px] md:pb-[130px] items-center">
      <div className="w-full mx-auto theme-container">
        <div className="box-border grid grid-cols-12 gap-6 items-center">

          {/* Colonne texte — GAUCHE 4 colonnes */}
          <div className="flex flex-col justify-center col-span-12 lg:col-span-4 order-1">
            <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
              Pourquoi eTemptation ?
            </h1>

            <p className="mt-5 md:mt-10 text-paragraph">
              eTemptation est une solution globale et modulaire pour le suivi des
              temps de présence, le traitement des absences, la planification des
              équipes et la gestion des activités (GTA).
              eTemptation est la solution par excellence pour les organisations
              privées et publiques qui cherchent à optimiser la gestion de leur
              capital temps. Elle permet une digitalisation efficace des processus
              RH et apporte de l'efficience à tous les acteurs : service RH,
              manager, collaborateurs.
              eTemptation s'intègre de façon harmonieuse et sécurisée dans le SIRH
              de l'entreprise. La solution gère plus de 4 millions de salariés au
              quotidien, dans tous les secteurs d'activité.
            </p>
            <br /><br />

            <Link to="/devis">
              <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-[15px] inline-flex items-center justify-center gap-2">
                <span className="text-base group-hover:text-buisness-red text-white transition-all duration-300 font-semibold font-inter relative z-10">
                  Demander une Démonstration
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-buisness-red stroke-white transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Colonne vidéo — DROITE 8 colonnes, poussée à droite */}
          <div className="flex flex-col justify-center col-span-12 lg:col-span-8 w-full order-2 lg:pl-16">
            <video
              src="/videos/eTemptation.mp4"
              className="w-full rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Card rouge sous la vidéo */}
            <div className="bg-buisness-red p-4 rounded-2xl mt-4 w-[155px] relative overflow-hidden self-start">
              <img
                src="/assets/images/home-five/hero/about-card-shape.webp"
                alt=""
                className="absolute right-2 top-2 top-bottom-moving"
              />
              <div className="flex items-center gap-2 mb-2">
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path
                    d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-white">Leader n°1</span>
              </div>
              <h1 className="text-sm text-white font-semibold tracking-tight">
                En Gestion des absences
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
