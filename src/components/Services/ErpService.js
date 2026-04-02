import React, { useState } from "react";

const faqs = [
  {
    question: "C'est quoi exactement la gestion de la paie ?",
    answer:
      "La gestion de la paie regroupe le calcul des salaires, l'édition des bulletins et les déclarations sociales (CNSS) et fiscales (RAS, IRPP), dans le strict respect du Code du Travail tunisien. La moindre erreur peut impacter la conformité légale et la confiance des collaborateurs.",
  },
  {
    question: "Pourquoi externaliser la paie ?",
    answer:
      "Externaliser votre paie vous libère des mises à jour légales, réduit les erreurs de calcul et garantit des bulletins horodatés sans retard. Vous gagnez du temps, réduisez les risques juridiques et vous concentrez sur votre cœur de métier.",
  },
  {
    question: "Les données salariales sont-elles sécurisées ?",
    answer:
      "Oui. OPTIMA est certifié ISO 27001 : accès contrôlés par principe du moindre privilège, traçabilité complète, plan de continuité et convention de confidentialité signée pour chaque client. Vos données ne sont jamais exposées.",
  },
  {
    question: "La solution s'adapte-t-elle à mon entreprise ?",
    answer:
      "Absolument. Nous paramétrons Sage Paie selon votre convention collective, grilles de primes et règles internes. Un gestionnaire dédié prend en charge votre dossier de façon individualisée, avec des délais contractualisés.",
  },
];

export default function ServiceFaq() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <section className="relative md:mt-12">
      <div className="w-full pb-16 md:pb-[30px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center px-4 py-10 md:px-0 md:py-20 rounded-3xl">
            <div className="max-w-[850px] w-full flex flex-col items-center relative z-10">

              <span className="py-0.5 px-5 bg-buisness-red/5 border-buisness-red/10 border rounded-[30px] font-medium text-buisness-red">
                FAQs
              </span>

              <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black text-center">
                Tout savoir sur la gestion de la paie
              </h2>

              <p className="mt-4 text-paragraph text-center max-w-xl">
                Nos experts vous répondent sous 48h.{" "}
                <button
                  onClick={() => {
                    const form = document.getElementById("audit-form");
                    if (form) form.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-buisness-red font-semibold underline hover:no-underline"
                >
                  Demander un audit gratuit →
                </button>
              </p>

              <div className="flex flex-col gap-3 w-full mt-5 md:mt-10 p-0 sm:p-5">
                {faqs.map((faq, index) => {
                  const isActive = activeFAQ === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveFAQ(isActive ? null : index)}
                      className={`cursor-pointer py-5 px-2 md:px-9 w-full rounded-[10px] border border-buisness-red/10 transition-colors duration-300 ${
                        isActive ? "bg-buisness-red/5" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold sm:text-18 text-main-black">
                          {faq.question}
                        </h3>
                        <svg
                          className={`transition-transform duration-300 flex-shrink-0 ml-4 ${isActive ? "rotate-180" : ""}`}
                          width="19" height="10" viewBox="0 0 19 10" fill="none"
                        >
                          <path d="M2 2L9.5 8L17 2" stroke="#890011" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-[300px] opacity-100 mt-3.5" : "max-h-0 opacity-0"}`}>
                        <p className="text-paragraph">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}