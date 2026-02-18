import React, { useState } from "react";

export default function FAQSelfService() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Comment accéder à Self Service ?",
      answer: "Self Service est accessible 24/7 via un navigateur web ou une application mobile native. Vous pouvez vous connecter avec vos identifiants professionnels normaux. Un lien personnalisé vous sera fourni lors du déploiement."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, Self Service utilise le chiffrement SSL/TLS, l'authentification multi-facteurs et respecte la conformité RGPD. Toutes vos données sont hébergées sur des serveurs sécurisés et sauvegardées régulièrement."
    },
    {
      question: "Peut-on personnaliser l'interface ?",
      answer: "Absolument ! Self Service est entièrement personnalisable : logos, couleurs, workflows, champs personnalisés selon vos processus métier et votre charte graphique."
    },
    {
      question: "Comment les demandes de congés sont-elles approuvées ?",
      answer: "Les demandes suivent votre processus d'approbation défini. Elles sont automatiquement routées vers le ou les responsables appropriés qui peuvent les approuver, les refuser ou demander des modifications."
    },
    {
      question: "Y a-t-il une période de test ?",
      answer: "Oui, nous proposons une période de déploiement pilote de 30 jours avec un groupe d'utilisateurs pour tester et affiner la configuration avant le rollout complet."
    },
    {
      question: "Quel support après la mise en place ?",
      answer: "Vous bénéficiez d'un support technique 24/7 par email, chat et téléphone. Un gestionnaire de compte dédié suit votre utilisation et propose des optimisations régulières."
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
            Trouvez les réponses à vos questions sur Self Service
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
