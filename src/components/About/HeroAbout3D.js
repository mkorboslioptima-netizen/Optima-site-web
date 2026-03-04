import React from "react";

export default function HeroAbout3D() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-buisness-red rounded-lg opacity-20 animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-buisness-red rounded-full opacity-15 animate-float-slower" />
      </div>

      <div className="relative z-10 theme-container mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          OPTIMA – Expertise & Innovation au service des entreprises
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Depuis 2006, OPTIMA accompagne les organisations tunisiennes avec des
          solutions de gestion des temps, de contrôle d'accès biométrique et de
          paie externalisée, alliant technologie de pointe et service premium.
        </p>
      </div>

      {/* 3D cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="w-40 h-56 bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl transform perspective-1000 hover:rotate-y-6 hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
