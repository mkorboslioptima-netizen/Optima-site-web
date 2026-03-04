import React from "react";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

export default function ServiceDetailsInfoAccessControl() {
  const blocks = [
    {
      number: "1",
      text: "Architecture multi-sites avec supervision centralisée en temps réel via Horoquartz et MorphoManager pour une gestion complète de tous vos points d'accès.",
    },
    {
      number: "2",
      text: "Biométrie avancée IDEMIA avec reconnaissance faciale, empreinte digitale et iris pour une identification sécurisée et anti-fraude.",
    },
    {
      number: "3",
      text: "Intégration native avec vos systèmes RH, paie et présence pour une synchronisation automatique des données de pointage et d'accès.",
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
                src="/assets/images/service/IDEMIA.png"
                alt="Logo Horoquartz"
                className="h-20 md:h-24 object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-paragraph mt-[30px] mb-10 max-w-[786px]">
              Le contrôle d'accès biométrique est la solution la plus avancée pour sécuriser votre entreprise. Conçue pour simplifier la gestion des accès multi-sites et offrir une traçabilité complète, elle procure une sécurité incomparable.

              Utilisée par des milliers d'entreprises dans tous les secteurs d'activité, notre plateforme de contrôle d'accès permet à la direction générale et aux responsables sécurité de maîtriser complètement les entrées et sorties, de générer des rapports détaillés et de se conformer aux normes légales.

              Avec nos solutions biométriques, transformez votre infrastructure sécurité en un système intelligent, flexible et entièrement traçable qui protège vos actifs et vos collaborateurs.
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
