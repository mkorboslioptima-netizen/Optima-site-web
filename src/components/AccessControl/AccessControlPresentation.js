import React from "react";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlPresentation() {
  const { presentation } = accessControlData;
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-buisness-red/10 to-transparent rounded-2xl p-8">
              <img
                src="/assets/images/home-five/hero/GTA.webp"
                alt="Contrôle d'accès"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            {/* Section label */}
            <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-buisness-red"></span>
              <span className="text-sm font-semibold text-buisness-red">
                {presentation.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-34 md:text-48 font-bold text-main-black mb-6">
              {presentation.title}
              <span className="text-buisness-red"> {presentation.highlight}</span>
            </h2>

            {/* Description */}
            <p className="text-18 text-paragraph mb-8 leading-relaxed">
              {presentation.description}
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-10">
              {presentation.keyPoints.map((point) => (
                <div key={point.id} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-buisness-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 4.5L6 12L2.5 8.5"
                        stroke="#890011"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-main-black">{point.title}</p>
                    <p className="text-paragraph text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-action */}
            <p className="text-paragraph italic">
              {presentation.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
