import React, { useState } from "react";

const faqs = [
  {
    question: "C'est quoi exactement la gestion de la paie ?",
    answer:
      "La gestion de la paie regroupe l'ensemble des processus permettant de calculer, éditer et distribuer les salaires des collaborateurs dans le respect du Code du Travail, des obligations CNSS et des déclarations fiscales (RAS, IRPP). Elle inclut le calcul des cotisations, primes, absences et heures supplémentaires.",
  },
  {
    question: "Pourquoi externaliser la paie ?",
    answer:
      "Externaliser la paie vous libère des contraintes administratives et juridiques : zéro retard, conformité garantie, sécurité des données et interlocuteur dédié. Vous réduisez les risques d'erreurs et gagnez un temps précieux pour vous concentrer sur votre cœur de métier.",
  },
  {
    question: "Les données salariales sont-elles sécurisées ?",
    answer:
      "Oui. OPTIMA est certifié ISO 27001 : politique d'accès stricte (principe du moindre privilège), traçabilité complète de tous les traitements, plan de continuité en cas d'incident et audits de surveillance annuels. Une convention de confidentialité est signée pour chaque client.",
  },
  {
    question: "La solution s'adapte-t-elle à mon entreprise ?",
    answer:
      "Absolument. Nous paramétrons Sage Paie selon votre convention collective, grilles de primes et règles d'absences spécifiques. Chaque dossier est traité de façon individualisée avec un gestionnaire de paie dédié.",
  },
];

export default function FAQOutsourcing() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="audit-form">
      <div className="w-full mx-auto theme-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Une question sur votre paie ?
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Demandez une analyse gratuite de votre processus actuel. Nos experts vous répondent sous 48h.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-main-black text-left">
                  {faq.question}
                </h3>
                <span
                  className={`text-buisness-red text-2xl font-bold transition-transform duration-300 flex-shrink-0 ml-4 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-8 py-6 bg-white border-t border-gray-200">
                  <p className="text-paragraph leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formulaire demande d'audit */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" data-aos="fade-up">
          <div className="bg-buisness-red px-8 py-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Demande d'audit</h3>
              <p className="text-white/80 text-sm">Externalisation Paie</p>
            </div>
          </div>

          <div className="p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-main-black mb-2">
                Entreprise <span className="text-buisness-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-buisness-red transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-main-black mb-2">
                Effectif <span className="text-buisness-red">*</span>
              </label>
              <div className="flex gap-3 flex-wrap">
                {["1-10", "11-50", "51-200", "200+"].map((range) => (
                  <button
                    key={range}
                    type="button"
                    className="px-4 py-2 border border-gray-200 rounded-lg text-paragraph hover:border-buisness-red hover:text-buisness-red transition-all duration-200 text-sm"
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Nom complet *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-buisness-red transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-buisness-red transition-colors"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Téléphone *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-buisness-red transition-colors"
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message (optionnel)"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-buisness-red transition-colors resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full bg-buisness-red text-white font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Demander un audit gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-paragraph">Besoin d'aide immédiate ?</p>
              <a href="tel:+21671715397" className="text-buisness-red font-semibold flex items-center justify-center gap-2 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                +216 71 715 397
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}