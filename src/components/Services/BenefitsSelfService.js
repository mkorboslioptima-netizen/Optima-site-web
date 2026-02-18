import React from "react";

export default function BenefitsSelfService() {
  const benefits = [
    {
      title: "Empowerment Collaborateur",
      description: "Vos équipes gagnent en autonomie et en responsabilité grâce à un accès complet à leurs données RH"
    },
    {
      title: "Réduction de la Charge RH",
      description: "Automatisez 70% des demandes administratives et récupérez du temps pour des actions stratégiques"
    },
    {
      title: "Amélioration de l'Expérience",
      description: "Interface moderne et intuitive qui offre une excellente expérience utilisateur à chaque interaction"
    },
    {
      title: "Sécurité & Conformité",
      description: "Protégez les données sensibles avec une sécurité de niveau entreprise et la conformité légale"
    },
    {
      title: "Intégration Fluide",
      description: "Se connecte facilement à vos systèmes existants sans perturbation opérationnelle majeure"
    },
    {
      title: "Support 24/7",
      description: "Bénéficiez d'une équipe support réactive disponible pour assister vos utilisateurs et administrateurs"
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
            Découvrez comment Self Service transforme votre expérience RH
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
