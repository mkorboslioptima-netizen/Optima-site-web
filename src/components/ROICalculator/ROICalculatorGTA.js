import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

// Données sectorielles : demandes de congés/mois par employé + risque conformité
const SECTORS = [
  { value: "industrie",    label: "Industrie & Production",     requests: 1.8, overtime: 12 },
  { value: "distribution", label: "Distribution & Logistique",  requests: 1.5, overtime: 10 },
  { value: "services",     label: "Services & Conseil",         requests: 1.2, overtime:  8 },
  { value: "hotellerie",   label: "Hôtellerie & Restauration",  requests: 2.5, overtime: 18 },
  { value: "sante",        label: "Santé & Pharmaceutique",     requests: 2.0, overtime: 14 },
  { value: "btp",          label: "BTP & Construction",         requests: 1.6, overtime: 16 },
];

// Hypothèses de calcul
const MIN_PER_REQUEST_MANUAL = 35;   // minutes pour traiter manuellement 1 demande
const MIN_PER_REQUEST_ETMPT  = 3;    // minutes avec eTemptation
const HR_HOURLY_RATE         = 18;   // TND/h pour un RH en Tunisie
const PAYROLL_ERROR_COST      = 120; // TND coût moyen d'une erreur de paie (correction + litige)
const ERROR_RATE_MANUAL       = 0.08; // 8% des fiches de paie avec erreur (manuel)
const ERROR_REDUCTION         = 0.92; // eTemptation réduit les erreurs de 92%

function StatCard({ label, value, unit, color, max, icon, sub }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-gray-500 mb-1">{label}</p>
          <p className="text-4xl font-bold" style={{ color }}>
            {value}
            <span className="text-xl font-medium text-gray-400 ml-1">{unit}</span>
          </p>
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
             style={{ backgroundColor: color + "18" }}>
          {icon}
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div className="h-2 rounded-full transition-all duration-700"
             style={{ width: `${Math.min(100, Math.round((parseFloat(value.toString().replace(/\s/g, "")) / max) * 100))}%`, backgroundColor: color }} />
      </div>
      {sub && <p className="text-xs text-gray-400 mt-2">{sub}</p>}
    </div>
  );
}

export default function ROICalculatorGTA() {
  const [sector, setSector]       = useState(SECTORS[0]);
  const [employees, setEmployees] = useState(80);
  const [animated, setAnimated]   = useState(false);
  const sectionRef = useRef(null);

  // Calculs ROI eTemptation
  const monthlyRequests     = Math.round(employees * sector.requests);
  const minSavedPerMonth    = monthlyRequests * (MIN_PER_REQUEST_MANUAL - MIN_PER_REQUEST_ETMPT);
  const hoursSavedPerMonth  = Math.round(minSavedPerMonth / 60);
  const hrSavingsMonthly    = Math.round(hoursSavedPerMonth * HR_HOURLY_RATE);
  const hrSavingsAnnual     = hrSavingsMonthly * 12;

  const monthlyPayrollErrors    = Math.round(employees * ERROR_RATE_MANUAL);
  const errorsAvoided           = Math.round(monthlyPayrollErrors * ERROR_REDUCTION * 12);
  const payrollSavingsAnnual    = Math.round(errorsAvoided * PAYROLL_ERROR_COST);

  const totalAnnualSavings = hrSavingsAnnual + payrollSavingsAnnual;
  const complianceScore    = 97; // % conformité avec eTemptation

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, [sector, employees]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-[100px] bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Déco fond */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.04] -translate-y-1/2 translate-x-1/2"
           style={{ background: "#007a55" }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.04] translate-y-1/2 -translate-x-1/2"
           style={{ background: "#890011" }} />

      <div className="relative z-10 w-full mx-auto theme-container">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium text-sm">
            Calculateur ROI — eTemptation
          </span>
          <h2 className="text-main-black text-24 md:text-48 font-semibold max-w-[720px]">
            Combien coûte la gestion manuelle des temps&nbsp;?
          </h2>
          <p className="text-paragraph max-w-[560px]">
            Calculez vos gains réels avec eTemptation : moins de saisies manuelles,
            moins d'erreurs de paie et une conformité CNSS assurée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ── INPUTS ── */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-main-black font-semibold text-xl mb-6">Votre organisation</h3>

            {/* Secteur */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d'activité</label>
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
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Nombre d'employés</label>
                <span className="text-[#007a55] font-bold text-lg">{employees}</span>
              </div>
              <input
                type="range" min={10} max={1000} step={10} value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: "#007a55" }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>10</span><span>1 000</span>
              </div>
            </div>

            {/* Résumé situation actuelle */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
              <p className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wide">Sans eTemptation</p>
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Demandes de congés/mois</span>
                  <strong className="text-gray-800">{monthlyRequests}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Temps de traitement par demande</span>
                  <strong className="text-red-600">{MIN_PER_REQUEST_MANUAL} min</strong>
                </div>
                <div className="flex justify-between">
                  <span>Fiches de paie erronées/mois</span>
                  <strong className="text-red-600">{monthlyPayrollErrors}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Heures sup. non tracées/mois/employé</span>
                  <strong className="text-red-600">~{sector.overtime}h</strong>
                </div>
              </div>
            </div>
          </div>

          {/* ── RÉSULTATS ── */}
          <div className="flex flex-col gap-5">
            {/* Heures RH économisées */}
            <StatCard
              label="Heures RH économisées / mois"
              value={animated ? <CountUp end={hoursSavedPerMonth} duration={1.2} separator=" " /> : "0"}
              unit="h"
              color="#007a55"
              max={300}
              sub={`Traitement réduit de ${MIN_PER_REQUEST_MANUAL} min → ${MIN_PER_REQUEST_ETMPT} min par demande`}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#007a55" strokeWidth="2"/>
                  <path d="M12 7v5l3 3" stroke="#007a55" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
            />

            {/* Économies annuelles globales */}
            <StatCard
              label="Économies annuelles totales"
              value={animated ? <CountUp end={totalAnnualSavings} duration={1.5} separator=" " /> : "0"}
              unit="TND"
              color="#007a55"
              max={employees * 500}
              sub={`RH : ${animated ? "" : ""}${hrSavingsAnnual.toLocaleString("fr-TN")} TND + Erreurs paie : ${payrollSavingsAnnual.toLocaleString("fr-TN")} TND`}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="#007a55" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
            />

            {/* Conformité CNSS */}
            <StatCard
              label="Taux de conformité légale"
              value={animated ? <CountUp end={complianceScore} duration={1} /> : "0"}
              unit="%"
              color="#890011"
              max={100}
              sub="Déclarations CNSS, contrats et plannings toujours conformes"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4L2 12l3-3V5h4l3-3z" stroke="#890011" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              }
            />

            {/* CTA */}
            <Link
              to="/devis"
              className="w-full py-4 rounded-2xl text-white font-semibold text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #007a55, #00a371)" }}
            >
              Demander une démonstration eTemptation →
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          * Estimations basées sur des benchmarks sectoriels. Les résultats réels dépendent de votre organisation.
        </p>
      </div>
    </section>
  );
}
