import React from "react";

export default function AboutContactCallToAction() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-lg p-8 bg-gradient-to-r from-red-700 to-red-600 text-white flex flex-col md:flex-row items-center justify-between" data-aos="zoom-in">
          <div>
            <h4 className="text-2xl font-bold">Besoin d'un accompagnement personnalisé ?</h4>
            <p className="mt-2 text-red-100">Nos experts sont à votre écoute pour définir la solution la plus adaptée.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/contact" className="inline-block bg-white text-red-700 font-semibold px-6 py-3 rounded hover:opacity-95 transition">Contactez-nous</a>
          </div>
        </div>
      </div>
    </section>
  );
}
