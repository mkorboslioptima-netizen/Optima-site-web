import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

/* ── slider avec label ── */
function Slider({ label, value, min, max, step = 1, unit = "", onChange, hint }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-main-black">{label}</span>
        <span className="text-sm font-bold text-buisness-red bg-buisness-red/10 px-3 py-0.5 rounded-full">
          {value.toLocaleString("fr-TN")} {unit}
        </span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-buisness-red rounded-full transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-buisness-red rounded-full shadow transition-all duration-150 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

/* ── carte résultat ── */
function ResultCard({ label, value, unit = "TND", highlight = false, animate = true }) {
  return (
    <div className={`rounded-2xl p-5 flex flex-col gap-1 ${highlight ? "bg-buisness-red text-white" : "bg-white border border-gray-100 shadow-sm"}`}>
      <p className={`text-xs font-semibold uppercase tracking-widest ${highlight ? "text-white/70" : "text-gray-400"}`}>
        {label}
      </p>
      <p className={`text-2xl sm:text-3xl font-bold ${highlight ? "text-white" : "text-main-black"}`}>
        {animate ? (
          <CountUp end={value} duration={1} separator=" " decimals={0} />
        ) : value.toLocaleString("fr-TN")}
        {" "}<span className={`text-base font-semibold ${highlight ? "text-white/80" : "text-buisness-red"}`}>{unit}</span>
      </p>
    </div>
  );
}

export default function ROICalculatorGTA() {
  const [employes,      setEmployes]      = useState(150);
  const [gestionnaires, setGestionnaires] = useState(2);
  const [heures,        setHeures]        = useState(35);
  const [salaire,       setSalaire]       = useState(2000);
  const [absences,      setAbsences]      = useState(20);

  const result = useMemo(() => {
    // Coût actuel
    const tauxHoraire   = salaire / 168;
    const coutSaisie    = gestionnaires * heures * tauxHoraire * 12;       // saisie manuelle/an
    const coutAbsences  = absences * 140 * 12;                              // 140 TND/absence non traitée
    const totalCoutActuel = coutSaisie + coutAbsences;

    // Économies avec eTemptation / HOROQUARTZ
    const economieSaisie   = coutSaisie   * 0.80;   // 80 % du temps de saisie récupéré
    const economieAbsences = coutAbsences * 0.85;   // 85 % d'absences mieux gérées
    const totalEconomies   = economieSaisie + economieAbsences;

    // Investissement estimé selon taille
    const invest =
      employes < 50   ? 5500  :
      employes < 150  ? 9800  :
      employes < 400  ? 16500 :
      employes < 800  ? 26000 : 42000;

    const gain    = Math.max(0, Math.round(totalEconomies - invest));
    const roi     = Math.round(((totalEconomies - invest) / invest) * 100);
    const payback = Math.round(invest / (totalEconomies / 12));

    return {
      coutActuel:   Math.round(totalCoutActuel),
      economiesAn:  Math.round(totalEconomies),
      investissement: invest,
      gainNet:      gain,
      roi:          roi,
      payback:      Math.max(1, payback),
    };
  }, [employes, gestionnaires, heures, salaire, absences]);

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="roi-calculator">
      <div className="w-full mx-auto theme-container">

        {/* en-tête */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block border border-buisness-red/20 bg-buisness-red/5 text-buisness-red font-medium text-sm px-5 py-1.5 rounded-full mb-4">
            Calculateur ROI
          </span>
          <h2 className="text-24 sm:text-40 font-bold text-main-black">
            Combien vous coûte la gestion manuelle <br className="hidden sm:block" />
            des temps <span className="text-buisness-red">chaque année ?</span>
          </h2>
          <p className="mt-4 text-paragraph max-w-xl mx-auto">
            Ajustez les curseurs selon votre situation et découvrez votre retour sur investissement avec HOROQUARTZ eTemptation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── colonne gauche : sliders ── */}
          <div className="bg-white rounded-3xl shadow-card p-8" data-aos="fade-right">
            <h3 className="text-lg font-bold text-main-black mb-6">Votre situation actuelle</h3>

            <Slider
              label="Nombre d'employés"
              value={employes} min={10} max={2000} step={10}
              unit="employés"
              onChange={setEmployes}
              hint="Tous types de contrats confondus"
            />
            <Slider
              label="Gestionnaires RH / Paie"
              value={gestionnaires} min={1} max={15} step={1}
              unit="personnes"
              onChange={setGestionnaires}
            />
            <Slider
              label="Heures/mois consacrées aux pointages manuels"
              value={heures} min={5} max={120} step={5}
              unit="h / gestionnaire"
              onChange={setHeures}
              hint="Saisie, corrections, consolidations, rapports"
            />
            <Slider
              label="Salaire mensuel d'un gestionnaire RH"
              value={salaire} min={800} max={5000} step={100}
              unit="TND"
              onChange={setSalaire}
            />
            <Slider
              label="Absences non déclarées ou mal gérées / mois"
              value={absences} min={0} max={100} step={1}
              unit="absences"
              onChange={setAbsences}
              hint="Retards, demi-journées oubliées, congés non validés..."
            />
          </div>

          {/* ── colonne droite : résultats ── */}
          <div className="flex flex-col gap-5" data-aos="fade-left">

            {/* bloc résultats */}
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h3 className="text-lg font-bold text-main-black mb-6">Votre estimation</h3>
              <div className="grid grid-cols-2 gap-4">
                <ResultCard
                  label="Coût gestion manuelle / an"
                  value={result.coutActuel}
                />
                <ResultCard
                  label="Économies estimées / an"
                  value={result.economiesAn}
                />
                <ResultCard
                  label="Investissement estimé / an"
                  value={result.investissement}
                />
                <ResultCard
                  label="Gain net / an"
                  value={result.gainNet}
                  highlight
                />
              </div>
            </div>

            {/* bloc ROI */}
            <div className="bg-buisness-dark-black rounded-3xl p-8 text-white flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Retour sur investissement</p>
                <p className="text-5xl font-extrabold text-buisness-red">
                  <CountUp end={Math.max(0, result.roi)} duration={1} />%
                </p>
                <p className="text-white/70 text-sm mt-1">ROI sur 12 mois</p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Retour sur invest.</p>
                <p className="text-5xl font-extrabold text-white">
                  <CountUp end={result.payback} duration={1} />
                </p>
                <p className="text-white/70 text-sm mt-1">mois de payback</p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Pour</p>
                <p className="text-5xl font-extrabold text-white">
                  <CountUp end={employes} duration={0.5} />
                </p>
                <p className="text-white/70 text-sm mt-1">employés</p>
              </div>
            </div>

            {/* disclaimer + CTA */}
            <p className="text-xs text-gray-400 text-center px-2">
              * Estimation indicative basée sur des moyennes marché. Contactez-nous pour une analyse personnalisée et gratuite.
            </p>
            <Link to="/devis">
              <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-[15px] w-full flex justify-center">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                  Obtenir mon étude ROI personnalisée
                </span>
                <svg className="relative z-10" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
