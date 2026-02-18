import React from "react";

export default function KeyFeaturesSelfService() {
  const features = [
    {
      id: 1,
      icon: "📱",
      title: "Interface Intuitive",
      description: "Accès simple et intuitif pour tous les collaborateurs, sans formation technique required.",
      benefits: ["Navigation fluide", "Design épuré", "Responsive mobile"]
    },
    {
      id: 2,
      icon: "⏰",
      title: "Gestion des Demandes",
      description: "Déposer et suivre vos demandes de congés, absences et justificatifs en quelques clics.",
      benefits: ["Validation en temps réel", "Notifications push", "Suivi instantané"]
    },
    {
      id: 3,
      icon: "📊",
      title: "Consultations Personnelles",
      description: "Accédez à vos données personnelles : soldes, fiches de paie, documents RH sécurisés.",
      benefits: ["Soldes actualisés", "Fiches de paie", "Documents confidentiels"]
    },
    {
      id: 4,
      icon: "💬",
      title: "Communication RH",
      description: "Échangez directement avec votre gestionnaire RH et recevez les notifications officielles.",
      benefits: ["Chat sécurisé", "Notifications", "Historique conservé"]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Fonctionnalités Clés
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Les 4 Piliers de SelfService
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Donnez à vos collaborateurs le contrôle total sur leur parcours RH
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-buisness-red/30 hover:bg-buisness-red/5"
              data-aos="fade-up"
              data-aos-delay={feature.id * 100}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-buisness-red/10 text-buisness-red mb-6 group-hover:bg-buisness-red group-hover:text-white transition-all duration-300 text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-main-black mb-3">
                {feature.title}
              </h3>

              <p className="text-paragraph mb-6">
                {feature.description}
              </p>

              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-buisness-red flex-shrink-0 mt-1 font-bold">✓</span>
                    <span className="text-sm text-paragraph">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
