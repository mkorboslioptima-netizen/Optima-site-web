import React, { useState } from "react";
import ContactModalEtemptation from "../Services/ContactModalEtemptation";

export default function HeroAccessControl() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-buisness-red/5 to-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte */}
          <div data-aos="fade-right">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Sécurité biométrique
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-main-black mb-6 leading-tight">
              Sécurisez vos accès avec la biométrie
            </h1>

            <p className="text-lg text-paragraph mb-8 leading-relaxed">
              Contrôle d'accès intelligent et biométrique : gestion centralisée, supervision multi-sites en temps réel et traçabilité complète. Intégration IDEMIA, Horoquartz et ZKTeco pour une sécurité maximale.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-buisness-red text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Audit gratuit
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 border-2 border-buisness-red text-buisness-red rounded-lg font-semibold hover:bg-buisness-red/5 transition-all duration-300"
              >
                Nous contacter
              </button>
            </div>
          </div>

          {/* Image sans cadre */}
          <div data-aos="fade-left">
            <img
              src="/assets/images/service/badging_wincom.jpeg"
              alt="Système de Contrôle d'Accès Biométrique"
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultSubject="Audit Contrôle d'accès" />
    </section>
  );
}
