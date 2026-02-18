import React, { useState } from "react";

export default function FAQEtemptation() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment eTemptation s'intègre-t-il avec nos systèmes existants ?",
      answer: "eTemptation offre des intégrations seamless avec les principaux systèmes RH et SIRH (SAP, Oracle, ADP, etc.). Notre équipe technique assure une migration sans risque de vos données existantes."
    },
    {
      question: "Combien de temps faut-il pour implémenter eTemptation ?",
      answer: "La plupart de nos clients sont opérationnels en 4-8 semaines, soit un audit inclus. Le délai exact dépend de votre taille, de votre infrastructure IT et de vos processus actuels."
    },
    {
      question: "Quel est le niveau de conformité légale offert par eTemptation ?",
      answer: "eTemptation est conforme aux lois de plus de 30 pays incluant le DROIT DU TRAVAIL européen, français, belge, suisse et autres. Nous mettons à jour automatiquement nos systèmes en fonction des changements législatifs."
    },
    {
      question: "Pouvez-vous m'offrir une version d'essai ?",
      answer: "Oui ! Nous proposons un essai gratuit de 30 jours sans engagement. Vous aurez accès à toutes les fonctionnalités et l'accompagnement de notre équipe support."
    },
    {
      question: "Comment est assurée la sécurité de nos données ?",
      answer: "Nous utilisons le chiffrement de bout en bout, des centres de données sécurisés et respectons la norme ISO 27001. Vos données sont sauvegardées régulièrement et non partagées avec des tiers."
    },
    {
      question: "Quel est le tarif et comment est-il calculé ?",
      answer: "Notre tarification est flexible et basée sur le nombre d'utilisateurs et les modules sélectionnés. Pas de frais cachés. Demandez un devis personnalisé pour un calcul précis selon vos besoins."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Questions Fréquentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            FAQ eTemptation
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Trouvez réponses à vos questions les plus courantes sur notre solution
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:border-buisness-red/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="font-semibold text-main-black text-lg pr-4">
                  {faq.question}
                </h3>
                <span className={`text-buisness-red flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-paragraph leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <p className="text-paragraph mb-6">
            Vous n'avez pas trouvé votre réponse ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-buisness-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Contactez notre équipe support
          </a>
        </div>
      </div>
    </section>
  );
}
