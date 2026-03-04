import React from "react";

export default function AboutCompanyOverview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-gray-900">Qui sommes-nous</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">OPTIMA accompagne les organisations dans la transformation de leurs pratiques RH et de sécurité. Notre approche combine expertise métiers, maîtrise technologique et conseil stratégique pour améliorer la performance opérationnelle et la conformité.</p>

            <h3 className="mt-6 text-lg font-semibold">Domaines d'expertise</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-inside">
              <li>Gestion des temps et paie</li>
              <li>Contrôle d'accès et vidéosurveillance</li>
              <li>Digitalisation des processus RH</li>
              <li>Accompagnement projet & formation</li>
            </ul>
          </div>

          <aside className="bg-gray-50 p-6 border-l-4 border-red-600" data-aos="fade-left">
            <h4 className="font-bold text-gray-900">Notre valeur ajoutée</h4>
            <p className="mt-3 text-gray-700">Des solutions adaptées, un support durable et un ROI mesurable grâce à une mise en œuvre pragmatique.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
