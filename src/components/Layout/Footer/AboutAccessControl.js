import React from "react";

export default function AboutAccessControl() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Vidéo/Image */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/service/fingerprint-access-control-range-idemia.jpg"
                alt="Système de Contrôle d'Accès Biométrique"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenu */}
          <div data-aos="fade-left">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              À Propos du Contrôle d'Accès
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6 leading-tight">
              La Sécurité Intégrée de votre Entreprise
            </h2>

            <p className="text-paragraph mb-6 leading-relaxed">
              Notre solution de contrôle d'accès n'est pas juste une technologie de sécurité : c'est une plateforme complète de gestion et protection intégrée pour votre entreprise. Elle redéfinit la relation entre sécurité physique et systèmes d'information en mettant la certitude et la traçabilité au cœur.
            </p>

            <p className="text-paragraph mb-8 leading-relaxed">
              Grâce aux partenaires mondiaux comme IDEMIA pour la biométrie, Horoquartz pour la supervision centralisée et ZKTeco pour les terminaux intelligents, vous obtenez une infrastructure sécurisée, certifiée et complètement intégrée à vos systèmes RH et de gestion.
            </p>

            <div className="space-y-4">
              {[
                { title: "Partenaires Certifiés", desc: "IDEMIA, Horoquartz, ZKTeco, MorphoManager" },
                { title: "Biométrie Multi-Modale", desc: "Reconnaissance faciale, empreinte, iris" },
                { title: "ROI & Sécurité", desc: "Réduction fraude et conformité garanties" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-buisness-red font-bold text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-main-black">{item.title}</h4>
                    <p className="text-sm text-paragraph">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
