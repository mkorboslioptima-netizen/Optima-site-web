import React, { useState } from "react";
import ContactModalEtemptation from "./ContactModalEtemptation";

export default function CTAEtemptation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-buisness-red to-red-700">
      <div className="w-full mx-auto theme-container">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Gestion des Absences ?
          </h2>

          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Rejoignez les milliers d'entreprises qui font confiance à eTemptation pour simplifier leur administration RH. Demandez une démonstration personnalisée et découvrez comment nous pouvons faire gagner du temps à votre équipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-buisness-red font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Demander une Démo
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-lg"
            >
              Nous Contacter
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-12 border-t border-white/30">
            <p className="text-white/80 text-sm mb-6">Nos avantages</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">30 jours</p>
                <p className="text-white/80 text-sm mt-2">Essai gratuit</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-white/80 text-sm mt-2">Support clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Zéro</p>
                <p className="text-white/80 text-sm mt-2">Contrats bloquants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultSubject="Demande Démo eTemptation" />
    </section>
  );
}
