import React from "react";
import { Link } from "react-router-dom";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlHero() {
  const { hero } = accessControlData;
  return (
    <section className="relative w-full py-3 overflow-hidden bg-gradient-to-br from-buisness-red/5 to-white min-h-[600px] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-buisness-red/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L10.5 6H15.5L11.5 9.5L13 15L8 11.5L3 15L4.5 9.5L0.5 6H5.5L8 1Z"
                  fill="#890011"
                />
              </svg>
              <span className="text-sm font-semibold text-buisness-red">
                {hero.badge}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-48 md:text-65 font-bold text-main-black mt-6 mb-6 leading-tight">
              {hero.title} <br />
              <span className="text-buisness-red">{hero.highlight}</span>
            </h1>

            {/* Subheading */}
            <p className="text-18 text-paragraph mb-8 max-w-xl">
              {hero.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {hero.ctaButtons.map((btn) => (
                <Link key={btn.id} to={btn.link}>
                  {btn.type === "primary" ? (
                    <div className="home-two-btn-bg group bg-buisness-red border-buisness-red px-8 py-4">
                      <span className="text-base group-hover:text-buisness-red text-white transition-all duration-300 font-semibold font-inter relative z-10">
                        {btn.label}
                      </span>
                    </div>
                  ) : (
                    <div className="border-2 border-buisness-red rounded-lg px-8 py-4 hover:bg-buisness-red hover:bg-opacity-5 transition-all duration-300">
                      <span className="text-base text-buisness-red font-semibold">
                        {btn.label}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12">
              {hero.trustIndicators.map((indicator, idx) => (
                <div key={indicator.id}>
                  <p className="text-24 font-bold text-buisness-red">
                    {indicator.stat}
                  </p>
                  <p className="text-sm text-paragraph">{indicator.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-buisness-red/10 to-transparent rounded-3xl"></div>
              <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-buisness-red mx-auto mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-main-black mb-2">
                    Sécurité Multi-niveaux
                  </h3>
                  <p className="text-sm text-paragraph">
                    Biométrie + Code + Carte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
