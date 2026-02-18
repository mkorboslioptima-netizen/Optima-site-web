import React from "react";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

export default function ServiceDetailsInfoEtemptation() {
  const gtaBlocks = [
    {
      number: "1",
      text: "La solution dispose également de connecteurs certifiés avec les applications de gestion des intérimaires pour automatiser les imports de données et l'envoi des relevés d'heures.",
    },
    {
      number: "2",
      text: "Horoquartz propose une gamme complète de solutions de badgeage : badgeuse physique, web, smartphone.",
    },
    {
      number: "3",
      text: "Enfin, eTemptation fournit un reporting complet et intègre son propre infocentre pour faciliter les analyses multidimensionnelles.",
    },
  ];

  return (
    <section className="pt-16 md:pt-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">

          {/* Colonne gauche — Logo + Description */}
          <div data-aos="fade-up" className="col-span-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/assets/images/service/etemptation-logo.png"
                alt="eTemptation"
                className="max-w-[250px] w-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-paragraph mt-[30px] mb-10 max-w-[786px]">
              Leader de la gestion des absences depuis plus de 25 ans, eTemptation accompagne les plus grandes organisations à travers le monde. Notre plateforme moderne est dédiée aux problématiques complexes de gestion des ressources humaines : congés payés, absences maladie, formations professionnelles et roulements d'équipes.

              eTemptation est utilisée quotidiennement par des milliers d'entreprises dans tous les secteurs : industrie, agroalimentaire, banque, distribution, santé, BTP, enseignement, hôtellerie, secteur public et services. Plus de 2 millions de collaborateurs gèrent leurs demandes d'absence directement via eTemptation.

              Avec une présence dans 30 pays, nos clients bénéficient d'une solution évolutive éprouvée, respectueuse de la législation locale et des standards internationaux en matière de gestion RH.
            </p>
          </div>

          {/* Colonne droite — Formulaire devis */}
          <div className="-mt-[130px] col-span-8 lg:col-span-4">
            <ServiceDetailsSidebar />
          </div>

        </div>

        {/* Bloc Engagement + 4 cartes */}
        <div className="mt-16">
          <h2 className="font-semibold text-[27px] leading-[35px] tracking-tight text-main-black">
            Notre Engagement envers votre Excellence RH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "Gestion des temps",
                desc: "Analysez et contrôlez le temps de travail en temps réel pour améliorer la productivité et fiabiliser la paie.",
              },
              {
                title: "Gestion des absences",
                desc: "Centralisez et automatisez le suivi des congés, absences et demandes pour garantir une gestion fluide et conforme.",
              },
              {
                title: "Self-service collaboratif",
                desc: "Offrez aux collaborateurs un espace dédié pour consulter leurs plannings, soumettre leurs demandes et suivre leurs soldes en toute autonomie.",
              },
              {
                title: "Gestion de planning",
                desc: "Optimisez l'organisation du travail grâce à une planification intelligente des équipes, adaptée aux contraintes légales et opérationnelles.",
              },
            ].map((card) => (
              <div key={card.title} className="py-8 px-6 border border-gray-200 rounded-xl">
                <h1 className="flex items-center gap-4 font-semibold text-18 text-main-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#f25151"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z" fill="white"/>
                  </svg>
                  {card.title}
                </h1>
                <p className="mt-3 text-paragraph">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="bg-purple/10 mt-[120px]" />
      </div>

      {/* Section GTA — pleine largeur */}
      <div className="w-full mx-auto theme-container my-16">

        {/* Titre + intro */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-semibold text-[27px] leading-[35px] tracking-tight text-main-black">
            LA GTA : UNE BRIQUE ESSENTIELLE DE VOTRE SIRH
          </h2>
          <p className="mt-5 text-paragraph">
            Avec plus de <span className="font-semibold text-[#f25151]">5 000 installations opérationnelles</span>, eTemptation a démontré sa capacité d'intégration avec plus de{" "}
            <span className="font-semibold text-[#f25151]">150 logiciels de paie</span> disponibles sur le marché, apportant ainsi des gains très significatifs à la fonction RH.
          </p>
        </div>

        {/* 3 blocs numérotés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gtaBlocks.map((block) => (
            <div
              key={block.number}
              className="relative py-8 px-6 border border-gray-200 rounded-xl overflow-hidden group hover:border-[#f25151] transition-colors duration-300"
            >
              {/* Numéro décoratif en arrière-plan */}
              <span
                className="absolute -top-4 -right-2 text-[90px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(242,81,81,0.08)" }}
              >
                {block.number}
              </span>

              {/* Numéro badge */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f25151] text-white font-bold text-lg mb-5">
                {block.number}
              </div>

              <p className="text-paragraph relative z-10">{block.text}</p>

              {/* Barre rouge en bas au hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#f25151] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
