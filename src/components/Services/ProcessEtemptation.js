import React from "react";

export default function ProcessEtemptation() {
  const steps = [
    {
      number: "01",
      title: "Audit & Diagnostic",
      description: "Analysez votre situation actuelle : processus existants, défis, besoins spécifiques et obligations légales."
    },
    {
      number: "02",
      title: "Paramétrage",
      description: "Configurez eTemptation selon vos règles métier : calendriers, approbations, alertes personnalisées."
    },
    {
      number: "03",
      title: "Formation & Déploiement",
      description: "Formez vos équipes et déployez progressivement la solution dans votre organisation."
    },
    {
      number: "04",
      title: "Suivi & Optimisation",
      description: "Bénéficiez d'un support continu et d'optimisations pour maximiser votre ROI."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Notre Approche
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Votre Parcours vers l'Excellence RH
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            4 phases clés pour une implémentation réussie et des résultats durables
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-buisness-red text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-buisness-red to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-main-black mb-3">
                  {step.title}
                </h3>
                <p className="text-paragraph leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-br from-buisness-red/5 to-transparent rounded-xl border border-buisness-red/20">
          <div className="flex items-start gap-4">
            <span className="text-buisness-red text-2xl font-bold flex-shrink-0 mt-1">✓</span>
            <div>
              <h4 className="text-xl font-bold text-main-black mb-2">
                Support Dédié Tout au Long du Parcours
              </h4>
              <p className="text-paragraph">
                Notre équipe d'experts vous accompagne à chaque étape, avec une formation complète, une assistance technique 24/7 et des optimisations continues pour garantir votre succès.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
