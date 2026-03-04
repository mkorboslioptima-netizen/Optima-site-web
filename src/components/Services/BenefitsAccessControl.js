import React from "react";

export default function BenefitsAccessControl() {
  const benefits = [
    {
      title: "Sécurité Renforcée",
      description: "Gestion centralisée de tous les accès avec identification biométrique pour éliminer les risques de fraude et d'intrusions non autorisées"
    },
    {
      title: "Traçabilité Complète",
      description: "Logs détaillés et historiques complets de tous les accès pour conformité légale, investigations et audit sécurité"
    },
    {
      title: "Réduction de la Fraude",
      description: "Biométrie IDEMIA certifiée pour une reconnaissance fiable : impossible de dupliquer badges ou clés avec la technologie multi-modale"
    },
    {
      title: "Conformité Réglementaire",
      description: "Solutions certifiées ISO 27001, conformes RGPD et respectant les normes de sécurité physique pour tous secteurs"
    },
    {
      title: "Supervision Temps Réel",
      description: "Monitoring multi-sites via Horoquartz et MorphoManager : alertes instantanées, rapports en temps réel, accès à distance"
    },
    {
      title: "Intégration Complète",
      description: "Synchronisation automatique avec RH, paie et systèmes existants pour une cohérence totale des données de présence et sécurité"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Avantages et Bénéfices
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Découvrez comment Contrôle d'Accès sécurise et optimise votre entreprise
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
