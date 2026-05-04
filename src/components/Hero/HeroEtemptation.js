import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModalEtemptation from "../Services/ContactModalEtemptation";

export default function HeroEtemptation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full mx-auto theme-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu Gauche */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <div className="mb-6">
                <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm">
                  Gestion des Absences & Congés
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-main-black leading-tight mb-6">
                Simplifiez la Gestion de vos Absences
              </h1>

              <p className="text-lg text-paragraph mb-8">
                eTemptation est la plateforme complète pour gérer les congés, absences maladie, formations et roulements d'équipes. Automatisez votre administration RH et gagnez du temps précieux.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto px-8 py-3 bg-buisness-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Calculer mon ROI
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-buisness-red text-buisness-red font-semibold rounded-lg hover:bg-buisness-red/5 transition-all duration-300"
                >
                  Nous Contacter
                </button>
              </div>

              {/* Chiffres Clés */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-buisness-red">2M+</p>
                  <p className="text-sm text-paragraph mt-2">Collaborateurs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-buisness-red">30+</p>
                  <p className="text-sm text-paragraph mt-2">Pays</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-buisness-red">25+</p>
                  <p className="text-sm text-paragraph mt-2">Années</p>
                </div>
              </div>
            </div>

            {/* Image Droite */}
            <div className="relative flex items-center justify-center" data-aos="fade-left">
              <div className="relative w-full aspect-square max-w-md">
                <img
                  src="/assets/images/service/gta5.png"
                  alt="eTemptation Platform"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-buisness-red/5 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
