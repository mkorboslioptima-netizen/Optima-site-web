import React, { useState, useEffect } from "react";

export default function ContactModalEtemptation({ isOpen, onClose, defaultSubject = "" }) {
  const [form, setForm] = useState({ nom: "", entreprise: "", email: "", telephone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@optima.tn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${defaultSubject || "Demande de contact"} — ${form.nom}`,
          name: form.nom,
          entreprise: form.entreprise,
          email: form.email,
          telephone: form.telephone,
          message: form.message,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSuccess(true);
      } else {
        throw new Error(data.message || "Erreur d'envoi");
      }
    } catch (err) {
      setError(err.message || "Impossible d'envoyer le message. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSuccess(false);
    setError(null);
    setForm({ nom: "", entreprise: "", email: "", telephone: "", message: "" });
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-main-black">Nous Contacter</h2>
            <p className="text-sm text-paragraph mt-0.5">eTemptation — Notre équipe vous répond sous 24h</p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-buisness-red/10 flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-main-black mb-2">Message envoyé !</h3>
              <p className="text-paragraph text-sm">Notre équipe vous contactera dans les 24 heures.</p>
              <button onClick={handleClose} className="mt-6 px-6 py-2 bg-buisness-red text-white text-sm font-medium rounded-lg hover:bg-red-800 transition-colors">
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Nom complet <span className="text-buisness-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    placeholder="Votre nom"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Téléphone <span className="text-buisness-red">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="+216 XX XXX XXX"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    value={form.entreprise}
                    onChange={(e) => update("entreprise", e.target.value)}
                    placeholder="Nom de votre société"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Email <span className="text-buisness-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="vous@entreprise.tn"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Message <span className="text-buisness-red">*</span>
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  placeholder="Décrivez votre besoin concernant eTemptation..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-gray-50 resize-none"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-buisness-red text-white font-semibold rounded-lg hover:bg-red-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
