import React, { useState } from "react";

export default function FAQAccessControl() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Quelle est la différence entre badge et biométrie ?",
      answer: "Les badges RFID peuvent être perdus, dupliqués ou prêtés. La biométrie (empreinte, iris, visage) est unique et infalsifiable. Notre solution combine les deux pour une flexibilité maximale : accès biométrique principal avec badges de secours. La biométrie offre traçabilité et sécurité incomparables."
    },
    {
      question: "Comment gérez-vous la conformité RGPD avec les données biométriques ?",
      answer: "Les données biométriques sont hautement sensibles et protégées par le RGPD. Notre solution stocke les données de manière chiffrée, les access logs sont limités à durée légale, les droits à l'oubli sont respectés, et le consentement explicite est obtenu. Nous proposons aussi mode anonyme pour fonctions de présence seulement."
    },
    {
      question: "Pouvez-vous gérer plusieurs sites / multi-sites ?",
      answer: "Oui, c'est notre spécialité. Horoquartz et MorphoManager permettent supervision centralisée de tous vos points d'accès, peu importe leur localisation. Vous avez vue consolidée des accès, alertes en temps réel si anomalies multi-sites, et synchronisation instantanée des données."
    },
    {
      question: "Comment s'intègre-t-elle avec votre ERP / RH existant ?",
      answer: "Intégration native avec Sage, SAP et systèmes majeurs. Les données de pointage et présence se synchronisent automatiquement avec votre RH et paie. API REST pour intégrations personnalisées. Pas de double-saisie, élimine erreurs manuelles et économise RH."
    },
    {
      question: "Quel type de maintenance et support assurez-vous ?",
      answer: "Support 24/7/365 inclus : assistance technique par phone/email/chat, monitoring proactif de votre infrastructure, maintenance préventive des terminaux biométriques, mises à jour sécurité critiques. SLA garanti avec temps de réponse < 2h incident critique."
    },
    {
      question: "Les données d'accès sont-elles disponibles en temps réel ?",
      answer: "Oui, temps réel avec latence < 1 sec. Tous les événements d'accès sont loggés instantanément sur serveur centralisé, visibles via dashboard Horoquartz, alertes push immédiate en cas violation, exports rapports à la demande. Historiques conservés selon politique de rétention."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Trouvez les réponses à vos questions sur le Contrôle d'Accès Biométrique
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-main-black text-left">
                  {faq.question}
                </h3>
                <span
                  className={`text-buisness-red text-2xl font-bold transition-transform duration-300 flex-shrink-0 ml-4 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-paragraph leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
