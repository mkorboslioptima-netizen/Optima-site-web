import React from "react";

const items = [
  {
    icon: "🎯",
    title: "Mission",
    text: "Fournir des solutions logicielles et un accompagnement expert pour simplifier la gestion des entreprises."
  },
  {
    icon: "🚀",
    title: "Vision",
    text: "Être le partenaire technologique incontournable des organisations tunisiennes en matière de transformation digitale."
  },
  {
    icon: "💎",
    title: "Valeurs",
    text: "Innovation, intégrité, excellence et engagement client définissent chacune de nos actions."
  }
];

export default function MissionVisionValues() {
  return (
    <section className="w-full py-20 bg-gray-50 text-black">
      <div className="theme-container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          Mission, Vision & Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300 perspective-500"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-paragraph leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
