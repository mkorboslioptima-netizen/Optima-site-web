import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    id: "sage-commerciale",
    label: "Sage 100 Gestion Commerciale",
    desc: "Gestion des ventes, achats, stocks et facturation",
  },
  {
    id: "sage-comptabilite",
    label: "Sage 100 Comptabilité",
    desc: "Comptabilité générale, analytique et budgétaire",
  },
  {
    id: "sage-paie",
    label: "Sage 100 Paie & RH",
    desc: "Gestion de la paie, absences et ressources humaines",
  },
  {
    id: "sage-bi",
    label: "Sage BI / Reporting",
    desc: "Tableaux de bord et business intelligence",
  },
  {
    id: "horoquartz",
    label: "Horoquartz",
    desc: "Gestion des temps, planification et contrôle d'accès",
  },
  {
    id: "formation",
    label: "Formation",
    desc: "Formations certifiées Sage et Horoquartz",
  },
];

const STEPS = [
  { label: "Modules", icon: "1" },
  { label: "Entreprise", icon: "2" },
  { label: "Contact", icon: "3" },
  { label: "Résumé", icon: "4" },
];

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

// URL de l'API backend
const API_URL = process.env.REACT_APP_API_URL || '';

export default function DevisForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    modules: [],
    entreprise: "",
    secteur: "",
    effectif: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleModule(id) {
    setForm((prev) => ({
      ...prev,
      modules: prev.modules.includes(id)
        ? prev.modules.filter((m) => m !== id)
        : [...prev.modules, id],
    }));
  }

  function canNext() {
    if (step === 0) return form.modules.length > 0;
    if (step === 1) return form.entreprise.trim() && form.effectif;
    if (step === 2) return form.nom.trim() && form.email.trim() && form.telephone.trim();
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/devis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Une erreur est survenue');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Impossible d\'envoyer la demande. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-[130px]">
        <div className="theme-container w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-[600px] mx-auto text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-10 md:p-16"
          >
            <div className="w-20 h-20 rounded-full bg-[#007a55]/10 flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-main-black mb-4">
              Demande envoyée !
            </h2>
            <p className="text-paragraph text-base leading-relaxed">
              Merci <strong>{form.nom}</strong>, votre demande de devis a bien été prise en compte.
              Notre équipe vous contactera sous <strong>24h</strong> à l'adresse{" "}
              <strong>{form.email}</strong>.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-[130px]">
      <div className="theme-container w-full mx-auto">
        <div className="max-w-[800px] mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-12">
            {STEPS.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      i <= step
                        ? "bg-[#007a55] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {i < step ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      s.icon
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      i <= step ? "text-[#007a55]" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors ${
                      i < step ? "bg-[#007a55]" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10"
          >
            <AnimatePresence mode="wait">
              {/* Step 1 — Modules */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-main-black mb-2">
                    Quels modules vous intéressent ?
                  </h3>
                  <p className="text-paragraph text-sm mb-6">
                    Sélectionnez un ou plusieurs modules pour votre devis.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MODULES.map((mod) => {
                      const selected = form.modules.includes(mod.id);
                      return (
                        <button
                          type="button"
                          key={mod.id}
                          onClick={() => toggleModule(mod.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${
                            selected
                              ? "border-[#007a55] bg-[#007a55]/5"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                                selected
                                  ? "border-[#007a55] bg-[#007a55]"
                                  : "border-gray-300"
                              }`}
                            >
                              {selected && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-sm text-main-black">
                                {mod.label}
                              </p>
                              <p className="text-xs text-paragraph mt-0.5">
                                {mod.desc}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2 — Entreprise */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-main-black mb-2">
                    Votre entreprise
                  </h3>
                  <p className="text-paragraph text-sm mb-6">
                    Parlez-nous de votre structure pour adapter notre offre.
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Nom de l'entreprise *
                      </label>
                      <input
                        type="text"
                        value={form.entreprise}
                        onChange={(e) => update("entreprise", e.target.value)}
                        placeholder="Ex: Société ABC"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Secteur d'activité
                      </label>
                      <input
                        type="text"
                        value={form.secteur}
                        onChange={(e) => update("secteur", e.target.value)}
                        placeholder="Ex: Distribution, Industrie, Services..."
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Effectif *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["1-10", "11-50", "51-200", "200+"].map((val) => (
                          <button
                            type="button"
                            key={val}
                            onClick={() => update("effectif", val)}
                            className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              form.effectif === val
                                ? "border-[#007a55] bg-[#007a55]/5 text-[#007a55]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Contact */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-main-black mb-2">
                    Vos coordonnées
                  </h3>
                  <p className="text-paragraph text-sm mb-6">
                    Comment pouvons-nous vous recontacter ?
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={form.nom}
                        onChange={(e) => update("nom", e.target.value)}
                        placeholder="Votre nom et prénom"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="votre@email.com"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        value={form.telephone}
                        onChange={(e) => update("telephone", e.target.value)}
                        placeholder="+216 XX XXX XXX"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main-black mb-1.5">
                        Message (optionnel)
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        rows={3}
                        placeholder="Décrivez brièvement votre besoin..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] outline-none transition-colors bg-gray-50 resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4 — Résumé */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-main-black mb-2">
                    Récapitulatif
                  </h3>
                  <p className="text-paragraph text-sm mb-6">
                    Vérifiez les informations avant d'envoyer votre demande.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Modules sélectionnés
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {form.modules.map((id) => {
                          const mod = MODULES.find((m) => m.id === id);
                          return (
                            <span
                              key={id}
                              className="inline-block px-3 py-1.5 bg-[#007a55]/10 text-[#007a55] text-xs font-medium rounded-lg"
                            >
                              {mod?.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Entreprise
                      </p>
                      <p className="text-sm text-main-black font-medium">
                        {form.entreprise}
                        {form.secteur && ` — ${form.secteur}`}
                      </p>
                      <p className="text-sm text-paragraph mt-1">
                        Effectif : {form.effectif} personnes
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Contact
                      </p>
                      <p className="text-sm text-main-black font-medium">
                        {form.nom}
                      </p>
                      <p className="text-sm text-paragraph mt-1">
                        {form.email} · {form.telephone}
                      </p>
                      {form.message && (
                        <p className="text-sm text-paragraph mt-2 italic">
                          "{form.message}"
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-main-black transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Précédent
                </button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    canNext()
                      ? "bg-[#007a55] text-white hover:bg-[#005f43]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Suivant
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#007a55] text-white hover:bg-[#005f43]"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer la demande
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
