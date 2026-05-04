import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModalEtemptation from "../Services/ContactModalEtemptation";

export default function HeroAboutOptima() {
  const [modalOpen, setModalOpen] = useState(false);
  const stats = [
    { value: "20+", label: "Ans d'expérience" },
    { value: "2", label: "Partenaires mondiaux" },
    { value: "100+", label: "Projets réalisés" },
  ];

  return (
    <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contenu Gauche */}
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <div className="mb-6">
              <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm">
                Conseil & solutions de gestion
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-main-black leading-tight mb-6">
              OPTIMA — Votre partenaire informatique depuis 2006
            </h1>

            <p className="text-lg text-paragraph mb-8">
              Société tunisienne de conseil et services informatiques, spécialisée dans
              les solutions de gestion, finance et ressources humaines. Nous intervenons
              en conseil, intégration, développement sur-mesure et support premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3 bg-buisness-red text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous
              </button>

              <Link to="/devis">
                <button className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-buisness-red text-buisness-red font-semibold rounded-lg hover:bg-buisness-red/5 transition-all duration-300">
                  Demander un devis
                </button>
              </Link>
            </div>

            {/* Chiffres Clés */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-gray-200">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-buisness-red">{stat.value}</p>
                  <p className="text-sm text-paragraph mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Droite */}
          <div className="relative flex items-center justify-center" data-aos="fade-left">
            <div className="relative w-full max-w-2xl">
              <img
                src="/assets/images/about/a.png"
                alt="OPTIMA Bureau"
                className="w-full h-auto object-contain drop-shadow-lg"
              />

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-buisness-red text-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Fondée en
                </p>
                <p className="text-2xl font-bold">2006</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}