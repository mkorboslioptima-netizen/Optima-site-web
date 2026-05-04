import React, { useState } from "react";
import ContactModalEtemptation from "./ContactModalEtemptation";
import VideoModalSelfService from "./VideoModalSelfService";

export default function CTASelfService() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-buisness-red to-red-600">
      <div className="w-full mx-auto theme-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer votre Expérience RH?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Découvrez comment Self Service peut libérer le potentiel de votre département RH et améliorer la satisfaction collaborateur.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => setVideoOpen(true)}
              className="px-8 py-4 bg-white text-buisness-red rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Démarrer une Démo
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contacter l'Équipe
            </button>
          </div>

          <p className="text-white/80 text-sm mt-8">
            Pas de carte bancaire requise. Accès complet à la plateforme pendant 30 jours.
          </p>
        </div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultSubject="Démo Self Service" />
      <VideoModalSelfService isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
