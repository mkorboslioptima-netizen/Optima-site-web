import React from "react";
import { Link } from "react-router-dom";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlCTA() {
  const { cta } = accessControlData;
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-r from-buisness-red to-buisness-red/80 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h2 className="text-40 md:text-65 font-bold text-white mb-6">
            {cta.title}
          </h2>

          {/* Description */}
          <p className="text-18 text-white/90 mb-10 leading-relaxed">
            {cta.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {cta.buttons.map((btn) => (
              <Link key={btn.id} to={btn.link}>
                {btn.type === "primary" ? (
                  <button className="w-full sm:w-auto bg-white text-buisness-red hover:bg-buisness-gray px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                    {btn.label}
                  </button>
                ) : (
                  <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all duration-300">
                    {btn.label}
                  </button>
                )}
              </Link>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
            {cta.trustBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-2">
                <span className="text-xl">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cta.processSteps.map((item, idx) => (
            <div key={item.id} className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-white text-buisness-red font-bold rounded-full flex items-center justify-center mb-4 text-lg">
                  {item.step}
                </div>
                <h3 className="text-18 font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>

              {/* Arrow */}
              {idx < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final info box */}
        <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>{cta.finalInfo.about.icon}</span> {cta.finalInfo.about.title}
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {cta.finalInfo.about.content}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>{cta.finalInfo.why.icon}</span> {cta.finalInfo.why.title}
              </h4>
              <ul className="text-white/80 text-sm space-y-2">
                {cta.finalInfo.why.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
