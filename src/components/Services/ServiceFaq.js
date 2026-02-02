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
    question: "Peut-on gérer les congés et absences avec la GTA ??",
    answer:
      "Les demandes de congés, absences et permissions sont centralisées dans le système, avec un processus de validation rapide et un historique complet. .",
  },
  // Add more FAQ items here if needed
];
export default function ServiceFaq() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <section className="relative md:mt-12">
      <div className="w-full pb-16 md:pb-[30px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center px-4 py-10 overflow-hidden md:px-0 md:py-20 rounded-3xl">
            <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
              <h1 className="py-0.5 px-5 bg-buisness-red/5 border-buisness-red/10 border rounded-[30px] font-medium text-buisness-red">
                FAQs
              </h1>
              <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
                Tout savoir sur la GTA
              </h2>
              <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                {/* <!-- faq single start  --> */}
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className={`py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-buisness-red/10 ${
                      activeFAQ === index ? "bg-buisness-red/5" : ""
                    } `}
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
                          stroke="#D90A2C"
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
          </div>
        </div>
      </div>
    </section>
  );
}
