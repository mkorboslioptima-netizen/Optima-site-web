import React from "react";

export default function ProcessAccessControl() {
  const steps = [
    {
      number: "01",
      title: "Audit & Analyse Sécurité",
      description: "Évaluation de vos points d'accès, menaces potentielles et besoins spécifiques de sécurité selon votre infrastructure."
    },
    {
      number: "02",
      title: "Design Infrastructure",
      description: "Conception détaillée du système biométrique : placement des terminaux, topologie réseau, intégrations avec systèmes existants."
    },
    {
      number: "03",
      title: "Installation & Configuration",
      description: "Mise en place du matériel (lecteurs biométriques, terminaux ZKTeco) et configuration logicielle du serveur de supervision centralisée."
    },
    {
      number: "04",
      title: "Paramétrage & Synchronisation",
      description: "Configuration des workflows d'accès, synchronisation RH/Paie/Présence et tests de tous les scénarios de sécurité."
    },
    {
      number: "05",
      title: "Formation & Migration",
      description: "Former vos équipes sécurité à la gestion de la plateforme et assurer une transition progressive depuis l'ancien système."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Support 24/7 pour opérations de sécurité, maintenance préventive et évolutions continues de votre infrastructure."
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
            6 phases clés pour un déploiement sécurisé et durable
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
