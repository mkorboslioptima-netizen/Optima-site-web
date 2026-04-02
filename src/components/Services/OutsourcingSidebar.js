import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function OutsourcingSidebar() {
  const [form, setForm] = useState({
    entreprise: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/devis`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          modules: ["externalisation-paie"],
          secteur: "Externalisation Paie",
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Une erreur est survenue");
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSuccess(false);
    setForm({ entreprise: "", nom: "", email: "", telephone: "", message: "" });
  }

  if (success) {
    return (
      <div className="lg:sticky lg:top-[100px]">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[rgba(137,0,17,0.08)] flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#890011" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-main-black mb-2">Demande envoyée !</h3>
            <p className="text-paragraph text-sm mb-6">Merci <strong>{form.nom}</strong>, notre équipe vous contactera sous <strong>24h</strong>.</p>
            <button onClick={handleReset} className="text-sm font-medium text-[#890011] hover:underline">Nouvelle demande</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:sticky lg:top-[100px]">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#890011] to-[#a3001a] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">Contactez-nous</h3>
              <p className="text-white/80 text-xs">Externalisation Paie</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form id="audit-form" onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-main-black mb-1.5">Entreprise *</label>
            <input
              type="text"
              value={form.entreprise}
              onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
              placeholder="Nom de votre entreprise"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-[#890011] focus:ring-1 focus:ring-[#890011] outline-none text-sm"
            />
          </div>

          {/* Effectif removed on Outsourcing page per request */}

          {/* Contact info */}
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              placeholder="Nom complet *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-[#890011] focus:ring-1 focus:ring-[#890011] outline-none text-sm"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-[#890011] focus:ring-1 focus:ring-[#890011] outline-none text-sm"
            />
            <input
              type="tel"
              value={form.telephone}
              onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              placeholder="Téléphone *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-[#890011] focus:ring-1 focus:ring-[#890011] outline-none text-sm"
            />
          </div>

          {/* Message */}
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message (optionnel)"
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#890011] focus:ring-1 focus:ring-[#890011] outline-none text-sm resize-none"
          />

          {/* Error */}
          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">{error}</div>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
              loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#890011] hover:bg-[#a3001a]"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Envoi...
              </>
            ) : (
              <>
                Contactez-nous
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Phone CTA */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-500 mb-2">Besoin d'aide immédiate ?</p>
            <a href="tel:+21671715397" className="flex items-center justify-center gap-2 text-[#890011] font-semibold hover:underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +21671715397
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
