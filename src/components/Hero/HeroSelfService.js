import React, { useState } from "react";
import ContactModalEtemptation from "../Services/ContactModalEtemptation";
import VideoModalSelfService from "../Services/VideoModalSelfService";

export default function HeroSelfService() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-buisness-red/5 to-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte */}
          <div data-aos="fade-right">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Portail Self-Service
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-main-black mb-6 leading-tight">
              Autonomie & Liberté pour Vos Collaborateurs
            </h1>

            <p className="text-lg text-paragraph mb-8 leading-relaxed">
              Self Service vous offre une plateforme intuitive où vos collaborateurs gèrent simplement leurs demandes de congés, consultent leur solde, accèdent à leurs fiches de paie et communiquent avec leurs responsables. Une interface moderne, accessible 24/7 depuis n'importe quel appareil.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button
                onClick={() => setVideoOpen(true)}
                className="px-8 py-4 bg-buisness-red text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2"/>
                  <polygon points="10,8 16,12 10,16" fill="white"/>
                </svg>
                Voir la Démo
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 border-2 border-buisness-red text-buisness-red rounded-lg font-semibold hover:bg-buisness-red/5 transition-all duration-300"
              >
                Contacter Nous
              </button>
            </div>
          </div>

          {/* Image sans cadre */}
          <div data-aos="fade-left">
            <img
              src="/assets/images/service/aaa-removebg-preview.png"
              alt="Plateforme Self-Service"
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultSubject="Démo Self Service" />
      <VideoModalSelfService isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
