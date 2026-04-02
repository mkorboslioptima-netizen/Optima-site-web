import React from "react";

export default function BenefitsOutsourcing() {
  const benefits = [
    {
      title: "Double certification ISO 9001 & ISO 27001",
      description:
        "Gage de rigueur et de conformité auditée sur le périmètre externalisation de la paie.",
    },
    {
      title: "Expertise terrain",
      description:
        "Entreprises clientes en Tunisie, tous secteurs — maîtrise complète des spécificités locales.",
    },
    {
      title: "Zéro retard",
      description:
        "Délais contractualisés dans notre convention de service. Bulletins horodatés sans exception.",
    },
    {
      title: "Conformité garantie",
      description:
        "Veille permanente Code du Travail, IRPP, circulaires CNSS intégrée dès la mise en vigueur.",
    },
    {
      title: "Interlocuteur unique",
      description:
        "Un gestionnaire de paie dédié, joignable directement pour un suivi personnalisé.",
    },
    {
      title: "Outil certifié Sage Paie",
      description:
        "Traitement via Sage Paie, référence sur le marché tunisien, conforme et automatisé.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full mx-auto theme-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Nos Atouts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Pourquoi confier votre paie à OPTIMA ?
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Une prestation structurée, certifiée et adaptée aux exigences du marché tunisien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-buisness-red"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-bold text-main-black mb-4">{b.title}</h3>
              <p className="text-paragraph leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}