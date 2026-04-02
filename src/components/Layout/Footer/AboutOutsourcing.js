import React from "react";

export default function AboutOutsourcing() {
  const securityPoints = [
    "Politique de gestion des accès stricte (principe du moindre privilège)",
    "Traçabilité de tous les traitements effectués sur vos données",
    "Plan de continuité en cas d'incident",
    "Audits de surveillance annuels pour maintien de la certification",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right" className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/service/paie1.png"
                alt="Sécurité des données paie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Sécurité & Conformité
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6 leading-tight">
              ISO 27001 — ce que ça change concrètement pour vos données
            </h2>

            <p className="text-paragraph mb-6 leading-relaxed">
              Les données de paie — salaires, coordonnées bancaires, situations familiales —
              sont parmi les données personnelles les plus sensibles que votre entreprise
              détient. En confiant votre paie à OPTIMA, vous bénéficiez d'un cadre de
              sécurité de l'information formellement audité :
            </p>

            <div className="space-y-4 mb-8">
              {securityPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-buisness-red font-bold text-xl flex-shrink-0">✓</div>
                  <p className="text-paragraph">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-paragraph italic border-l-4 border-buisness-red pl-4">
              C'est ce que demandent aujourd'hui les directions juridiques et les commissaires
              aux comptes lors de leurs due diligences sur les prestataires externes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}