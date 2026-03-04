import React from "react";

const events = [
  { year: "2006", title: "Création", description: "Fondation d'OPTIMA en Tunisie, spécialisé en solutions de gestion." },
  { year: "2010", title: "Développement", description: "Expansion de nos offres avec l'intégration de Sage et Horoquartz." },
  { year: "2015", title: "Partenariats", description: "Renforcement des partenariats stratégiques et ouverture de nouveaux bureaux." },
  { year: "2021", title: "Expansion", description: "Lancement de l'activité outsourcing de la paie et croissance continue." }
];

export default function AboutTimelineAnimated() {
  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="theme-container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Notre progression
        </h2>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-buisness-red"></div>
          <div className="space-y-16">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="w-5/12 bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{evt.title} - {evt.year}</h3>
                  <p className="text-paragraph leading-relaxed">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
