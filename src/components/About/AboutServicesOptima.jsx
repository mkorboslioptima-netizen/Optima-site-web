import React from "react";

export default function BenefitsSelfService() {
  const benefits = [
    {
      title: "Progiciels de gestion",
      description: "ERP, GRH, Finance, comptable, CRM — couvrant tous les besoins des entreprises de toute taille et de tout secteur."
    },
    {
      title: "Développement sur mesure",
      description: "Solutions personnalisées développées spécifiquement selon vos besoins métier uniques."
    },
    {
      title: "Formation du personnel",
      description: "Transfert de compétences structuré pour rendre vos collaborateurs opérationnels en un minimum de temps."
    },
    {
      title: "Audit des systèmes existants",
      description: "Analyse complète de l'existant et recommandations de mise à niveau et de mise à jour adaptées."
    },
    {
      title: "Conseil en système d'information",
      description: "Accompagnement stratégique : nous analysons votre environnement et conseillons les solutions adaptées."
    },
    {
      title: "Support immédiat",
      description: "Assistance réactive et premium — nous intervenons immédiatement pour ne jamais vous laisser bloqué."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Notre Panoplie de Services
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Un savoir-faire riche et diversifié pour satisfaire tous vos besoins informatiques et de gestion.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-buisness-red"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold text-main-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-paragraph leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}