import React from "react";

const areas = [
  { title: "Gestion des temps", icon: "⏱" },
  { title: "Contrôle d'accès", icon: "🔒" },
  { title: "Solutions biométriques", icon: "👁" },
  { title: "Paie & Outsourcing", icon: "💼" }
];

export default function AboutExpertise3D() {
  return (
    <section className="w-full py-20 bg-gray-50 text-black">
      <div className="theme-container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          Nos domaines d'expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-lg transform perspective-1000 hover:rotate-y-6 hover:scale-105 transition-all duration-500 relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl mb-4 text-buisness-red">{area.icon}</div>
              <h3 className="text-xl font-semibold">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
