import React from "react";

export default function ProcessOutsourcing() {
  const steps = [
    {
      number: "01",
      title: "Cadrage",
      description:
        "Analyse de votre convention collective, grille salariale et règles spécifiques à votre entreprise.",
    },
    {
      number: "02",
      title: "Traitement mensuel",
      description:
        "Collecte des éléments variables, calcul, contrôle qualité ISO 9001, édition des bulletins et fichiers de virement.",
    },
    {
      number: "03",
      title: "Clôture et déclarations",
      description:
        "Transmission CNSS et fiscale dans les délais légaux, avec accusés de réception et traçabilité complète.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Notre Approche
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Comment ça fonctionne ?
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Un processus en 3 étapes claires, certifié ISO 9001, du cadrage initial à la clôture mensuelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-buisness-red/10 border-2 border-buisness-red">
                <span className="text-2xl font-bold text-buisness-red">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-main-black mb-3">{step.title}</h3>
                <p className="text-paragraph">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}