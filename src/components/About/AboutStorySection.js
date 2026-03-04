import React from "react";

export default function AboutStorySection() {
  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="theme-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre histoire
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Fondée en 2006, OPTIMA est née de la volonté de proposer aux
              entreprises tunisiennes des outils de gestion performants et
              sur mesure. Depuis plus de quinze ans, nous avons évolué avec nos
              clients, épaulant PME, grandes structures et organismes publics
              dans leur transformation digitale.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Notre positionnement s’est toujours appuyé sur l’innovation,
              l’agilité et un engagement fort en matière de qualité de service.
              Aujourd’hui, nous sommes reconnus comme un leader dans les
              solutions de gestion des temps, contrôle d’accès biométrique et
              externalisation de la paie.
            </p>
          </div>
          <div data-aos="fade-left">
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/assets/images/about/hero-img.webp"
                alt="Historique Optima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
