import React from "react";

const SERVICES_DATA = [
  {
    id: 1,
    icon: "🖥️",
    title: "Progiciels de gestion",
    desc: "ERP, GRH, Finance, comptable, CRM — couvrant tous les besoins des entreprises de toute taille et de tout secteur.",
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Développement sur mesure",
    desc: "Solutions personnalisées développées spécifiquement selon vos besoins métier uniques.",
  },
  {
    id: 3,
    icon: "🎓",
    title: "Formation du personnel",
    desc: "Transfert de compétences structuré pour rendre vos collaborateurs opérationnels en un minimum de temps.",
  },
  {
    id: 4,
    icon: "🔍",
    title: "Audit des systèmes existants",
    desc: "Analyse complète de l'existant et recommandations de mise à niveau et de mise à jour adaptées.",
  },
  {
    id: 5,
    icon: "💡",
    title: "Conseil en système d'information",
    desc: "Accompagnement stratégique : nous analysons votre environnement et conseillons les solutions adaptées.",
  },
  {
    id: 6,
    icon: "🎧",
    title: "Support immédiat",
    desc: "Assistance réactive et premium — nous intervenons immédiatement pour ne jamais vous laisser bloqué.",
  },
];

export default function AboutServicesOptima() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Ce que nous faisons
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Notre Panoplie de Services
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Un savoir-faire riche et diversifié pour satisfaire tous vos besoins informatiques et de gestion.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white py-8 px-6 border border-gray-200 rounded-xl hover:border-buisness-red/40 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Numéro décoratif */}
              <span
                className="absolute -top-4 -right-2 text-[80px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(242,81,81,0.05)" }}
              >
                {service.id}
              </span>

              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-18 text-main-black mb-3 group-hover:text-buisness-red transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-paragraph text-sm">{service.desc}</p>

              {/* Barre rouge bas au hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-buisness-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}