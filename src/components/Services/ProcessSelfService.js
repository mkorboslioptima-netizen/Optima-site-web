import React from "react";

export default function ProcessSelfService() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "Identifions vos besoins spécifiques, votre structure organisationnelle et vos workflows actuels."
    },
    {
      number: "02",
      title: "Paramétrage & Intégration",
      description: "Configurons Self Service selon vos spécifications et intégrons-le avec vos systèmes existants."
    },
    {
      number: "03",
      title: "Formation & Migration",
      description: "Formons vos équipes et effectuons la migration progressive de vos données et processus."
    },
    {
      number: "04",
      title: "Optimisation Continue",
      description: "Assurons un support permanent et optimisons continuellement la plateforme selon vos retours."
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
            Parcours d'Implémentation
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            4 phases clés pour un déploiement réussi et durable
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
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-buisness-red/10 border-2 border-buisness-red">
                  <span className="text-2xl font-bold text-buisness-red">{step.number}</span>
                </div>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-xl font-bold text-main-black mb-3">
                  {step.title}
                </h3>
                <p className="text-paragraph">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
