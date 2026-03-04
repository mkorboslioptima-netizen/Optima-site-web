import React from "react";

export default function AboutHeroSection() {
  return (
    <section className="rounded-md overflow-hidden mb-12" data-aos="fade-up">
      <div className="w-full rounded-md bg-gradient-to-r from-buisness-red via-buisness-red/90 to-black text-white py-24 px-6 md:px-12">
        <div className="theme-container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">À propos d’OPTIMA</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl">Expert tunisien en gestion des temps, contrôle d’accès et solutions RH depuis 2006. Nous proposons des solutions robustes et un accompagnement métier pour sécuriser et optimiser vos processus RH.</p>
        </div>
      </div>
    </section>
  );
}
