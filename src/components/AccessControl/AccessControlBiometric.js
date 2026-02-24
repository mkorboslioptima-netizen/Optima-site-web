import React from "react";
import { accessControlData } from "../../data/accessControlData";

export default function AccessControlBiometric() {
  const { biometric } = accessControlData;

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex gap-2.5 px-4 py-2 rounded-full border border-buisness-red/20 bg-buisness-red/5 items-center w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-buisness-red"></span>
            <span className="text-sm font-semibold text-buisness-red">
              {biometric.badge}
            </span>
          </div>
          <h2 className="text-34 md:text-48 font-bold text-main-black mb-6">
            {biometric.title} <br />
            <span className="text-buisness-red">{biometric.highlight}</span>
          </h2>
          <p className="text-18 text-paragraph max-w-2xl mx-auto">
            {biometric.description}
          </p>
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {biometric.technologies.map((tech) => (
            <div
              key={tech.id}
              className="group bg-gradient-to-br from-white to-buisness-gray hover:from-buisness-red/5 hover:to-white rounded-2xl border border-buisness-red/10 hover:border-buisness-red/30 p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-20 font-bold text-main-black mb-2">
                {tech.title}
              </h3>
              <p className="text-paragraph text-sm">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-buisness-gray rounded-2xl p-8 border border-buisness-red/10">
          <h3 className="text-24 font-bold text-main-black mb-8 text-center">
            Comparatif des technologies
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-buisness-red/5">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-main-black">
                    Technologie
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-main-black">
                    Sécurité
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-main-black">
                    Rapidité
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-main-black">
                    Coût
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-main-black">
                    Utilisation
                  </th>
                </tr>
              </thead>
              <tbody>
                {biometric.comparisonTable.map((row, idx) => (
                  <tr key={row.id} className="border-b border-buisness-red/10">
                    <td className="px-4 py-3 font-medium">{row.technology}</td>
                    <td className="px-4 py-3 text-center">
                      {"★".repeat(row.security)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {"★".repeat(row.speed)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {"★".repeat(row.cost)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-buisness-red">{row.usage}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Best practices */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-buisness-red/5 border border-buisness-red/20 rounded-2xl p-8">
            <h4 className="text-20 font-bold text-main-black mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-buisness-red/20 rounded-full flex items-center justify-center">
                <span className="text-buisness-red font-bold">
                  {biometric.expertTip.icon}
                </span>
              </span>
              {biometric.expertTip.title}
            </h4>
            <p className="text-paragraph">{biometric.expertTip.content}</p>
          </div>

          <div className="bg-buisness-red/5 border border-buisness-red/20 rounded-2xl p-8">
            <h4 className="text-20 font-bold text-main-black mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-buisness-red/20 rounded-full flex items-center justify-center">
                <span className="text-buisness-red font-bold">
                  {biometric.optimaAdvantage.icon}
                </span>
              </span>
              {biometric.optimaAdvantage.title}
            </h4>
            <p className="text-paragraph">{biometric.optimaAdvantage.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
