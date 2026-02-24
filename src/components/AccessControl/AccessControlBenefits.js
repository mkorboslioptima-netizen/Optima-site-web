import React from "react";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlBenefits() {
  const { benefits, useCases, roi } = accessControlData;

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-buisness-red"></span>
            <span className="text-sm font-semibold text-buisness-red">
              LES AVANTAGES
            </span>
          </div>
          <h2 className="text-34 md:text-48 font-bold text-main-black mb-6">
            Les bénéfices <span className="text-buisness-red">pour votre entreprise</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-gradient-to-br from-buisness-gray to-white hover:from-buisness-red/5 hover:to-white rounded-2xl border border-buisness-red/10 hover:border-buisness-red/30 p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-20 font-bold text-main-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-paragraph text-sm mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="pt-4 border-t border-buisness-red/10">
                <p className="text-buisness-red font-semibold text-sm">
                  {benefit.stats}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Use cases section */}
        <div className="mb-16">
          <h3 className="text-28 font-bold text-main-black mb-12 text-center">
            Adaptée à tous les secteurs d'activité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="bg-gradient-to-br from-white to-buisness-gray border border-buisness-red/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h4 className="text-18 font-bold text-main-black mb-4">
                  {useCase.sector}
                </h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex gap-2 text-sm text-paragraph items-start"
                    >
                      <span className="text-buisness-red flex-shrink-0 mt-1">
                        ▸
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-buisness-red/5 to-white border border-buisness-red/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-28 font-bold text-main-black mb-6">
                {roi.title}
              </h3>
              <p className="text-paragraph mb-6 leading-relaxed">
                {roi.description}
              </p>
              <ul className="space-y-4">
                {roi.advantages.map((adv) => (
                  <li key={adv.id} className="flex gap-3">
                    <span className="text-buisness-red flex-shrink-0">✓</span>
                    <span className="text-paragraph">
                      <strong>{adv.statistic}</strong> {adv.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-buisness-red/10">
                <div className="text-center">
                  <p className="text-sm text-buisness-red font-semibold uppercase tracking-wide mb-2">
                    Comparatif économique
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-paragraph mb-1">
                        {roi.comparison.traditional.label}
                      </p>
                      <div className="bg-buisness-gray rounded h-2">
                        <div
                          className="bg-buisness-red/40 h-2 rounded"
                          style={{
                            width: `${roi.comparison.traditional.percentage}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-paragraph mt-1">
                        {roi.comparison.traditional.amount}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-paragraph mb-1">
                        {roi.comparison.optima.label}
                      </p>
                      <div className="bg-buisness-gray rounded h-2">
                        <div
                          className="bg-buisness-red h-2 rounded"
                          style={{
                            width: `${roi.comparison.optima.percentage}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-paragraph mt-1">
                        {roi.comparison.optima.amount}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-buisness-red/10">
                      <p className="text-buisness-red font-bold">
                        {roi.comparison.savings.label} :{" "}
                        <span className="text-2xl">
                          {roi.comparison.savings.amount}
                        </span>
                        /an
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
