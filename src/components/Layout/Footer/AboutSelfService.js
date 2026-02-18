import React from "react";

export default function AboutSelfService() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Vidéo */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <video
                src="/videos/Le Self-Service eTemptation _ des  gestion des temps.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* Contenu */}
          <div data-aos="fade-left">
            <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
              À Propos de Self Service
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6 leading-tight">
              La Transformation Digitale de votre Département RH
            </h2>

            <p className="text-paragraph mb-6 leading-relaxed">
              Self Service n'est pas juste un portail employé : c'est une plateforme complète de transformation numérique pour votre département RH. Elle redéfinit la relation entre les collaborateurs et l'administration RH en mettant l'autonomie et la transparence au cœur.
            </p>

            <p className="text-paragraph mb-8 leading-relaxed">
              Avec Self Service, vos collaborateurs obtiennent les informations et outils qu'ils demandent, quand ils en ont besoin. Votre équipe RH se concentre sur les initiatives stratégiques plutôt que sur les tâches répétitives. Le résultat : une meilleure expérience pour tous.
            </p>

            <div className="space-y-4">
              {[
                { title: "Déploiement Rapide", desc: "Mise en place en 30-60 jours" },
                { title: "Adoption Maximale", desc: "Interface intuitive pour 100% des utilisateurs" },
                { title: "ROI Immédiat", desc: "Économies visibles dès les premiers mois" }
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
