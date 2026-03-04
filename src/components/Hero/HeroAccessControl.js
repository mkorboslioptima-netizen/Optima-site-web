import React from "react";

export default function HeroAccessControl() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-buisness-red/5 to-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte */}
          <div data-aos="fade-right">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              Sécurité Biométrique
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-main-black mb-6 leading-tight">
              Sécurisez vos Accès avec la Biométrie
            </h1>

            <p className="text-lg text-paragraph mb-8 leading-relaxed">
              Contrôle d'accès intelligent et biométrique : gestion centralisée, supervision multi-sites en temps réel et traçabilité complète. Intégration IDEMIA, Horoquartz et ZKTeco pour une sécurité maximale.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button className="px-8 py-4 bg-buisness-red text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
                Découvrir la Démo
              </button>

              <button className="px-8 py-4 border-2 border-buisness-red text-buisness-red rounded-lg font-semibold hover:bg-buisness-red/5 transition-all duration-300">
                Contacter Nous
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
    </section>
  );
}
