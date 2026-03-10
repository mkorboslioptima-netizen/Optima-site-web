import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const SECTORS = [
  { value: "distribution",  label: "Distribution & Logistique", hours: 15 },
  { value: "industrie",     label: "Industrie & Fabrication",   hours: 12 },
  { value: "services",      label: "Services & Conseil",        hours: 18 },
  { value: "commerce",      label: "Commerce de détail",        hours: 20 },
  { value: "btp",           label: "BTP & Construction",        hours: 14 },
  { value: "hotellerie",    label: "Hôtellerie & Restauration", hours: 16 },
];

const HOURLY_RATE = 12.5; // TND/h moyen Tunisie
const EFFICIENCY  = 0.35; // 35% gain de temps avec Sage 100

function AnimatedBar({ value, max, color }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-700"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [sector, setSector]       = useState(SECTORS[0]);
  const [employees, setEmployees] = useState(50);
  const [animated, setAnimated]   = useState(false);
  const sectionRef = useRef(null);

  const hoursSaved    = Math.round(employees * sector.hours * EFFICIENCY);
  const monthlySaving = Math.round(hoursSaved * HOURLY_RATE);
  const annualSaving  = monthlySaving * 12;
  const errorReduct   = 85;

  // Déclencher l'animation CountUp quand la section entre dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Réinitialiser l'animation quand les valeurs changent
  useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(t);
  }, [sector, employees]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-[100px] bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Déco fond */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
           style={{ background: "#007a55" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"
           style={{ background: "#890011" }} />

      <div className="relative z-10 w-full mx-auto theme-container">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium text-sm">
            Calculateur ROI
          </span>
          <h2 className="text-main-black text-24 md:text-48 font-semibold max-w-[700px]">
            Combien pouvez-vous économiser avec Sage&nbsp;100 ?
          </h2>
          <p className="text-paragraph max-w-[560px]">
            Estimez en 30 secondes votre gain de temps et vos économies potentielles
            en automatisant votre gestion avec Optima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ── INPUTS ── */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-main-black font-semibold text-xl mb-6">Votre situation actuelle</h3>

            {/* Secteur */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SECTORS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSector(s)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 border ${
                      sector.value === s.value
                        ? "border-[#007a55] bg-[#007a55]/5 text-[#007a55]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre d'employés */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Nombre d'employés
                </label>
                <span className="text-[#007a55] font-bold text-lg">{employees}</span>
              </div>
              <input
                type="range"
                min={5}
                max={500}
                step={5}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: "#007a55" }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5</span>
                <span>500</span>
              </div>
            </div>

            {/* Info secteur */}
            <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-xs text-gray-500">
                Dans le secteur <strong className="text-gray-700">{sector.label}</strong>,
                un employé consacre en moyenne <strong className="text-[#007a55]">{sector.hours}h/mois</strong> à
                des tâches administratives pouvant être automatisées.
              </p>
            </div>
          </div>

          {/* ── RÉSULTATS ── */}
          <div className="flex flex-col gap-5">
            {/* Card 1 — Heures */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Heures économisées / mois</p>
                  <p className="text-4xl font-bold text-main-black">
                    {animated ? (
                      <CountUp end={hoursSaved} duration={1.2} separator=" " />
                    ) : "0"}
                    <span className="text-xl font-medium text-gray-400 ml-1">h</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                     style={{ backgroundColor: "#007a55" + "15" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#007a55" strokeWidth="2"/>
                    <path d="M12 7v5l3 3" stroke="#007a55" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <AnimatedBar value={hoursSaved} max={employees * sector.hours} color="#007a55" />
              <p className="text-xs text-gray-400 mt-2">
                {Math.round(EFFICIENCY * 100)}% du temps admin récupéré
              </p>
            </div>

            {/* Card 2 — Économies annuelles */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Économies annuelles estimées</p>
                  <p className="text-4xl font-bold" style={{ color: "#007a55" }}>
                    {animated ? (
                      <CountUp end={annualSaving} duration={1.5} separator=" " />
                    ) : "0"}
                    <span className="text-xl font-medium text-gray-400 ml-1">TND</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                     style={{ backgroundColor: "#007a55" + "15" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#007a55" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="4" stroke="#007a55" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <AnimatedBar value={annualSaving} max={employees * sector.hours * HOURLY_RATE * 12} color="#007a55" />
              <p className="text-xs text-gray-400 mt-2">
                soit ~{animated ? <CountUp end={monthlySaving} duration={1} separator=" " /> : "0"} TND / mois
              </p>
            </div>

            {/* Card 3 — Réduction erreurs */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Réduction des erreurs</p>
                  <p className="text-4xl font-bold text-main-black">
                    {animated ? (
                      <CountUp end={errorReduct} duration={1} />
                    ) : "0"}
                    <span className="text-xl font-medium text-gray-400 ml-1">%</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                     style={{ backgroundColor: "#890011" + "15" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#890011" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <AnimatedBar value={errorReduct} max={100} color="#890011" />
              <p className="text-xs text-gray-400 mt-2">
                Saisies automatisées, zéro double-saisie
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/devis"
              className="w-full py-4 rounded-2xl text-white font-semibold text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #007a55, #00a371)" }}
            >
              Obtenez votre analyse personnalisée →
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          * Estimations basées sur des données sectorielles moyennes. Les résultats réels peuvent varier selon votre organisation.
        </p>
      </div>
    </section>
  );
}
