import React from "react";

const STRENGTHS_DATA = [
  {
    id: 1,
    icon: "⚡",
    number: "100%",
    title: "Veille Technologique",
    desc: "Toujours en quête de nouveautés pour vous aider à aller toujours de l'avant.",
  },
  {
    id: 2,
    icon: "🏆",
    number: "19+",
    title: "Ans d'Expérience",
    desc: "Des centaines de projets traités avec succès dans tous les secteurs.",
  },
  {
    id: 3,
    icon: "🚀",
    number: "Fast",
    title: "Rapidité des Livraisons",
    desc: "Délais d'intégration réduits pour ne pas perturber vos activités.",
  },
  {
    id: 4,
    icon: "⭐",
    number: "24/7",
    title: "Premium Support",
    desc: "À votre service, toujours disponible pour répondre à vos besoins.",
  },
];

export default function AboutStrengthsOptima() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Nos Atouts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Pourquoi Choisir OPTIMA ?
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Nos atouts font la différence, pour vous.
          </p>
        </div>

        {/* Grille des atouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-xl hover:border-buisness-red/40 hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-4xl font-bold text-buisness-red mb-2">{item.number}</p>
              <h3 className="font-semibold text-main-black text-lg mb-3 group-hover:text-buisness-red transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-paragraph text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}