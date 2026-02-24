import React from "react";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlFeatures() {
  const { features } = accessControlData;

  return (
    <section className="w-full py-20 md:py-32 bg-buisness-gray">
      <div className="w-full mx-auto theme-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-buisness-red"></span>
            <span className="text-sm font-semibold text-buisness-red">
              FONCTIONNALITÉS CLÉS
            </span>
          </div>
          <h2 className="text-34 md:text-48 font-bold text-main-black mb-6">
            Les fonctionnalités qui font <br />
            <span className="text-buisness-red">la différence</span>
          </h2>
          <p className="text-18 text-paragraph max-w-2xl mx-auto">
            Une solution complète conçue pour simplifier la gestion des accès et
            renforcer la sécurité de votre entreprise
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl border border-buisness-red/10 p-8 hover:shadow-lg hover:border-buisness-red/30 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-20 font-bold text-main-black mb-3">
                {feature.title}
              </h3>
              <p className="text-paragraph leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
