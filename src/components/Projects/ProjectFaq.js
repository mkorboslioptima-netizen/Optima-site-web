"use client";
import React, { useState } from "react";
const faqs = [
  {
    question: "Quelle est la durée de mise en place de Sage 100 ?",
    answer:
      "Déploiement standard en 2 à 4 semaines selon la complexité.",
  },
  {
    question: "Quelle formation proposez-vous ?",
    answer:
      "Formation initiale incluse + supports vidéo et documentation complète.",
  },
  {
    question: "Quel support technique est disponible ?",
    answer:
      "Hotline dédiée 5j/7 de 9h à 18h + plateforme en ligne 24/7.",
  },
  {
    question: "Puis-je intégrer Sage avec mes outils existants?",
    answer:
      "Connecteurs disponibles pour Excel, e-commerce, CRM, comptabilité.",
  },
  {
    question: "Quels sont les coûts de maintenance ?",
    answer:
      "Abonnement mensuel incluant mises à jour, support et hébergement.",
  },
  // Add more FAQ items here if needed
];

export default function ProjectFaq() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <div className="w-full col-span-6">

      <h1 className="col-span-6 mt-10 font-semibold tracking-tight text-24 sm:text-34">
        Comment Nous Vous Accompagnons ?
      </h1>
      <div className="flex flex-col gap-2.5 w-full mt-8">
        {/* <!-- faq single start  --> */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`py-5 cursor-pointer px-2 md:px-9 w-full ${
              activeFAQ === index ? "bg-[#D4D4D8]/5" : ""
            } rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-purple/10`}
            name="faq-1"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between w-full pointer-events-none h-fit">
              <h1 className="font-semibold sm:text-18 text-main-black">
                {faq.question}
              </h1>
              <svg
                width="19"
                height="10"
                viewBox="0 0 19 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L9.5 8L17 2"
                  stroke="#007A55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {activeFAQ === index && (
              <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

        {/* <!-- faq single end  --> */}
      </div>
    </div>
  );
}
