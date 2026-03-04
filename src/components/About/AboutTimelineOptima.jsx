import React from "react";

const TIMELINE_DATA = [
  {
    year: "2006",
    title: "Fondation d'OPTIMA",
    desc: "Création de la société à Ariana, spécialisée en conseil informatique et solutions de gestion.",
    side: "left",
  },
  {
    year: "2007",
    title: "Partenariat SAGE",
    desc: "Signature du partenariat officiel avec SAGE, leader mondial des solutions ERP et GRH.",
    side: "right",
  },
  {
    year: "2010",
    title: "Lancement Consulting Horoquartz",
    desc: "Nouvelle activité de consulting autour des solutions Horoquartz de gestion des temps et contrôle d'accès.",
    side: "left",
  },
  {
    year: "2015",
    title: "Grands Comptes & Références",
    desc: "Intégration de références majeures : Carrefour, AGIL, Valeo, Sagemcom, Somfy, SEBN.",
    side: "right",
  },
  {
    year: "2025",
    title: "19 ans d'Excellence",
    desc: "Plus de 19 ans d'expérience, des centaines de projets réalisés, une réputation solide en Tunisie.",
    side: "left",
  },
];

export default function AboutTimelineOptima() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Notre Parcours
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            19 Ans d'Histoire et de Croissance
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Une trajectoire régulière construite sur la qualité, la confiance et l'innovation.
          </p>
        </div>

        {/* Timeline verticale */}
        <div className="relative max-w-4xl mx-auto">

          {/* Ligne centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-buisness-red via-buisness-red/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
                data-aos={item.side === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Contenu */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 hover:border-buisness-red/40 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-xs font-bold text-buisness-red uppercase tracking-widest mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="font-semibold text-xl text-main-black mb-2 group-hover:text-buisness-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-paragraph text-sm">{item.desc}</p>
                </div>

                {/* Point central */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-buisness-red text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Espace opposé sur desktop */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}