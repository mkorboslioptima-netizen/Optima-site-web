import React from "react";

export default function AboutHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-red-700 via-red-800 to-black text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">OPTIMA — Expert en Solutions RH & Sécurité</h1>
          <p className="mt-4 text-lg text-gray-100">Accompagnement complet en gestion des temps, contrôle d’accès et optimisation des processus RH pour les entreprises exigeantes.</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
