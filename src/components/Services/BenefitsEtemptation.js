import React from "react";

export default function BenefitsEtemptation() {
  const benefits = [
    {
      title: "Gain de Temps",
      description: "Réduisez jusqu'à 80% du temps dédié à l'administration des congés et absences"
    },
    {
      title: "Conformité Légale",
      description: "Respectez automatiquement les obligations légales de chaque pays où vous opérez"
    },
    {
      title: "Réduction des Erreurs",
      description: "Minimisez les erreurs administratives et les risques de non-conformité"
    },
    {
      title: "Meilleure Productivité",
      description: "Vos équipes RH se concentrent sur les tâches à fort impact stratégique"
    },
    {
      title: "Visibilité Complète",
      description: "Tableaux de bord en temps réel pour un suivi efficace de tous les absences"
    },
    {
      title: "Scalabilité",
      description: "Adaptez la solution à la croissance de votre organisation sans effort"
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
            Découvrez pourquoi plus de 2 millions de collaborateurs dans 30 pays font confiance à eTemptation
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
              <div className="flex items-start gap-4">
                <span className="text-buisness-red text-2xl font-bold flex-shrink-0 mt-1">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-main-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-paragraph">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t-2 border-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <p className="text-4xl md:text-5xl font-bold text-buisness-red">80%</p>
              <p className="text-paragraph mt-2">Time Reduction</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-4xl md:text-5xl font-bold text-buisness-red">30+</p>
              <p className="text-paragraph mt-2">Countries Supported</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-4xl md:text-5xl font-bold text-buisness-red">2M+</p>
              <p className="text-paragraph mt-2">Active Users</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-4xl md:text-5xl font-bold text-buisness-red">99.9%</p>
              <p className="text-paragraph mt-2">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
