import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  { id: "sage-commerciale", label: "Sage 100 Gestion Commerciale", desc: "Gestion des ventes, achats, stocks et facturation" },
  { id: "sage-comptabilite", label: "Sage 100 Comptabilité", desc: "Comptabilité générale, analytique et budgétaire" },
  { id: "sage-paie", label: "Sage 100 Paie & RH", desc: "Gestion de la paie, absences et ressources humaines" },
  { id: "sage-bi", label: "Sage BI / Reporting", desc: "Tableaux de bord et business intelligence" },
  { id: "horoquartz", label: "Horoquartz", desc: "Gestion des temps, planification et contrôle d'accès" },
  { id: "formation", label: "Formation", desc: "Formations certifiées Sage et Horoquartz" },
];

const STEPS = ["Modules", "Entreprise", "Contact", "Résumé"];

const stepVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export default function FloatingDevis() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
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

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setStep(0);
    setSubmitted(false);
    setForm({ modules: [], entreprise: "", secteur: "", effectif: "", nom: "", email: "", telephone: "", message: "" });
    setIsOpen(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-[9997] w-14 h-14 rounded-full bg-[#ADACAC] text-white shadow-lg hover:bg-[#b8081f] transition-colors flex items-center justify-center"
        aria-label="Demander un devis"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[9997] w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-[#edede9] text-black px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Devis Express</p>
                  <p className="text-xs text-black">
                    {submitted ? "Terminé" : `Étape ${step + 1} / ${STEPS.length} — ${STEPS[step]}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper mini */}
            {!submitted && (
              <div className="flex gap-1 px-5 pt-3 shrink-0">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-[#D90A2C]" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-main-black mb-2">Demande envoyée !</h3>
                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    Merci <strong>{form.nom}</strong>, nous vous recontacterons sous <strong>24h</strong>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-sm font-medium text-[#D90A2C] hover:underline"
                  >
                    Fermer
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      {/* Step 0 — Modules */}
                      {step === 0 && (
                        <motion.div key="s0" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                          <p className="text-sm font-semibold text-main-black mb-1">Quels modules vous intéressent ?</p>
                          <p className="text-xs text-gray-400 mb-3">Sélectionnez un ou plusieurs.</p>
                          <div className="space-y-2">
                            {MODULES.map((mod) => {
                              const sel = form.modules.includes(mod.id);
                              return (
                                <button
                                  type="button"
                                  key={mod.id}
                                  onClick={() => toggleModule(mod.id)}
                                  className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                                    sel ? "border-[#D90A2C] bg-[#D90A2C]/5" : "border-gray-100 hover:border-gray-200"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                                      sel ? "border-[#D90A2C] bg-[#D90A2C]" : "border-gray-300"
                                    }`}>
                                      {sel && (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                      )}
                                    </div>
                                    <div>
                                      <p className="font-medium text-xs text-main-black">{mod.label}</p>
                                      <p className="text-[11px] text-gray-400 mt-0.5">{mod.desc}</p>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 1 — Entreprise */}
                      {step === 1 && (
                        <motion.div key="s1" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                          <p className="text-sm font-semibold text-main-black mb-3">Votre entreprise</p>
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={form.entreprise}
                              onChange={(e) => update("entreprise", e.target.value)}
                              placeholder="Nom de l'entreprise *"
                              className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50"
                            />
                            <input
                              type="text"
                              value={form.secteur}
                              onChange={(e) => update("secteur", e.target.value)}
                              placeholder="Secteur d'activité"
                              className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50"
                            />
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-2">Effectif *</p>
                              <div className="grid grid-cols-4 gap-2">
                                {["1-10", "11-50", "51-200", "200+"].map((val) => (
                                  <button
                                    type="button"
                                    key={val}
                                    onClick={() => update("effectif", val)}
                                    className={`py-2 rounded-lg border-2 text-xs font-medium transition-all ${
                                      form.effectif === val
                                        ? "border-[#D90A2C] bg-[#D90A2C]/5 text-[#D90A2C]"
                                        : "border-gray-100 text-gray-500 hover:border-gray-200"
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

                      {/* Step 2 — Contact */}
                      {step === 2 && (
                        <motion.div key="s2" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                          <p className="text-sm font-semibold text-main-black mb-3">Vos coordonnées</p>
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={form.nom}
                              onChange={(e) => update("nom", e.target.value)}
                              placeholder="Nom complet *"
                              className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50"
                            />
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              placeholder="Email *"
                              className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50"
                            />
                            <input
                              type="tel"
                              value={form.telephone}
                              onChange={(e) => update("telephone", e.target.value)}
                              placeholder="Téléphone *"
                              className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50"
                            />
                            <textarea
                              value={form.message}
                              onChange={(e) => update("message", e.target.value)}
                              rows={2}
                              placeholder="Message (optionnel)"
                              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#D90A2C] focus:ring-1 focus:ring-[#D90A2C] outline-none text-sm bg-gray-50 resize-none"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3 — Résumé */}
                      {step === 3 && (
                        <motion.div key="s3" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                          <p className="text-sm font-semibold text-main-black mb-3">Récapitulatif</p>
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Modules</p>
                              <div className="flex flex-wrap gap-1.5">
                                {form.modules.map((id) => {
                                  const mod = MODULES.find((m) => m.id === id);
                                  return (
                                    <span key={id} className="inline-block px-2 py-1 bg-[#D90A2C]/10 text-[#D90A2C] text-[11px] font-medium rounded-md">
                                      {mod?.label}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Entreprise</p>
                              <p className="text-xs text-main-black font-medium">{form.entreprise}{form.secteur && ` — ${form.secteur}`}</p>
                              <p className="text-xs text-gray-400">Effectif : {form.effectif}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Contact</p>
                              <p className="text-xs text-main-black font-medium">{form.nom}</p>
                              <p className="text-xs text-gray-400">{form.email} · {form.telephone}</p>
                              {form.message && <p className="text-xs text-gray-400 mt-1 italic">"{form.message}"</p>}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-main-black transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          canNext()
                            ? "bg-[#D90A2C] text-white hover:bg-[#b8081f]"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Suivant
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#007a55] text-white hover:bg-[#005f43] transition-all"
                      >
                        Envoyer
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
