import React from "react";

export default function AboutStoryOptima() {
  const highlights = [
    {
      number: "01",
      title: "Notre Mission",
      desc: "Accompagner les organisations tunisiennes avec les meilleures solutions de gestion, adaptées à leur secteur et à leur taille.",
    },
    {
      number: "02",
      title: "Notre Vision",
      desc: "Être le partenaire informatique de référence en Tunisie, reconnu pour la qualité, la réactivité et l'innovation de nos services.",
    },
    {
      number: "03",
      title: "Nos Valeurs",
      desc: "Excellence, proximité client, veille technologique permanente et engagement total dans chaque projet que nous menons.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Gauche — Image avec overlay */}
          <div className="relative" data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden h-[480px]">
              <img
                src="/assets/images/about/d.webp"
                alt="OPTIMA Office Ariana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card info flottante */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-2xl rounded-2xl p-6 max-w-[220px]">
              <p className="text-4xl font-bold text-buisness-red">19+</p>
              <p className="text-sm text-paragraph mt-1">ans au service des entreprises tunisiennes</p>
            </div>
          </div>

          {/* Droite — Texte + blocs */}
          <div data-aos="fade-left">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Notre Histoire
            </span>
            <h2 className="text-4xl font-bold text-main-black leading-tight mb-6">
              Créée en 2006, une croissance bâtie sur la confiance
            </h2>
            <p className="text-paragraph mb-10">
              OPTIMA est une société de conseil et de service informatique spécialisée
              dans la mise en place des solutions de gestion pour la finance et les RH.
              Bénéficiant de plus de 19 ans d'expérience, elle a connu une croissance
              régulière en se forgeant une solide réputation quant à la qualité de ses
              services. Partenaire SAGE et HOROQUARTZ, OPTIMA développe depuis 2010
              une activité de consulting et développement autour de ces deux leaders mondiaux.
            </p>

            <div className="flex flex-col gap-6">
              {highlights.map((item) => (
                <div key={item.number} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-buisness-red text-white flex items-center justify-center font-bold text-sm">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-main-black text-lg mb-1">{item.title}</h4>
                    <p className="text-paragraph text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}