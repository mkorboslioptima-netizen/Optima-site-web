import React from "react";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

export default function ServiceDetailsInfoSelfService() {
  const blocks = [
    {
      number: "1",
      text: "Self Service s'intègre nativement avec vos systèmes RH existants pour une synchronisation automatique des données essentielles.",
    },
    {
      number: "2",
      text: "Interface entièrement personnalisable selon votre charte graphique, vos processus métier et vos besoins organisationnels.",
    },
    {
      number: "3",
      text: "Sécurité de haut niveau avec authentification multi-facteurs, chiffrement des données et conformité RGPD complète.",
    },
  ];

  return (
    <section className="pt-16 md:pt-[130px]"> 
  <div className="w-full mx-auto theme-container">
    <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">

      {/* Colonne gauche — Description */}
      <div data-aos="fade-up" className="col-span-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/service/logo-horoquartz.png"
            alt="Logo Horoquartz"
            className="h-20 md:h-24 object-contain"
          />
        </div>

            {/* Description */}
            <p className="text-paragraph mt-[30px] mb-10 max-w-[786px]">
              Self Service est la solution de portail employé la plus avancée du marché. Conçue pour simplifier la vie de vos collaborateurs et réduire la charge administrative du service RH, elle offre une expérience utilisateur incomparable.

              Utilisée par des milliers d'entreprises dans tous les secteurs d'activité, Self Service permet à vos équipes d'accéder à l'information critique, de gérer leurs demandes et de communiquer efficacement avec le service RH. Notre plateforme est disponible 24/7, accessible depuis n'importe quel appareil et supportée par une équipe d'experts dédiés.

              Avec Self Service, transformez votre département RH en un centre d'excellence centré sur la valeur stratégique plutôt que sur les tâches administratives répétitives.
            </p>
          </div>

          {/* Colonne droite — Formulaire devis */}
          <div className="-mt-[130px] col-span-8 lg:col-span-4">
            <ServiceDetailsSidebar />
          </div>

        </div>

        {/* Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[80px] pt-[80px] border-t border-gray-200">
          {blocks.map((block, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-buisness-red/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-buisness-red font-bold">{block.number}</span>
                </div>
                <p className="text-paragraph">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
