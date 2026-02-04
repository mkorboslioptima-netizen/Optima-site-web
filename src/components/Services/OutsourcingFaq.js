import React, { useState } from "react";

const faqs = [
  {
    question: "C’est quoi exactement la Gestion du Temps (GTA)?",
    answer:
      "La GTA est une solution qui permet de suivre les heures de travail des employés : présences, retards, absences, heures supplémentaires et congés. Elle automatise le suivi du temps et facilite le travail des RH et de la paie.",
  },
  {
    question: "À quoi sert un système de pointage ?",
    answer:
      "Il enregistre automatiquement les heures d’entrée et de sortie des employés. Cela évite les erreurs manuelles, les oublis et permet d’avoir des données fiables pour la paie.",
  },
  {
    question: "Est-ce que la solution est compliquée à utiliser ?",
    answer:
      "Notre solution est conçue pour être simple et intuitive. Les employés pointent facilement et les responsables RH disposent de tableaux de bord clairs pour tout gérer.",
  },
  {
    question: "Peut-on gérer les congés et absences avec la GTA ?",
    answer:
      "Les demandes de congés, absences et permissions sont centralisées dans le système, avec un processus de validation rapide et un historique complet.",
  },
];

export default function ServiceFaq() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative md:mt-12">
      <div className="w-full pb-16 md:pb-[30px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center px-4 py-10 md:px-0 md:py-20 rounded-3xl">
            <div className="max-w-[850px] w-full flex flex-col items-center relative z-10">
              <h1 className="py-0.5 px-5 bg-buisness-red/5 border-buisness-red/10 border rounded-[30px] font-medium text-buisness-red">
                FAQs
              </h1>

              <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
                Tout savoir sur la GTA
              </h2>

              <div className="flex flex-col gap-3 w-full mt-5 md:mt-10 p-0 sm:p-5">
                {faqs.map((faq, index) => {
                  const isActive = activeFAQ === index;

                  return (
                    <div
                      key={index}
                      onClick={() => toggleFAQ(index)}
                      className={`cursor-pointer py-5 px-2 md:px-9 w-full rounded-[10px] border border-buisness-red/10 transition-colors duration-300 ${
                        isActive ? "bg-buisness-red/5" : "bg-white"
                      }`}
                    >
                      {/* Question */}
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold sm:text-18 text-main-black">
                          {faq.question}
                        </h3>

                        <svg
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#D90A2C"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Réponse */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "max-h-[300px] opacity-100 mt-3.5"
                            : "max-h-0 opacity-0"
                        }`}
                      >
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
