import React from "react";

export default function AboutCTAAnimated() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="theme-container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Parlons de votre projet
        </h2>
        <button className="mt-4 px-10 py-4 bg-buisness-red text-white font-semibold rounded-lg shadow-lg relative overflow-hidden hover:shadow-red-500/50 transition-all duration-300">
          <span className="relative z-10">Contactez-nous</span>
          <span className="absolute inset-0 bg-buisness-red/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </button>
      </div>
    </section>
  );
}
