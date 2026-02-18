import React from "react";

export default function CTASelfService() {
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
            <button className="px-8 py-4 bg-white text-buisness-red rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Démarrer une Démo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Contacter l'Équipe
            </button>
          </div>

          <p className="text-white/80 text-sm mt-8">
            Pas de carte bancaire requise. Accès complet à la plateforme pendant 30 jours.
          </p>
        </div>
      </div>
    </section>
  );
}
