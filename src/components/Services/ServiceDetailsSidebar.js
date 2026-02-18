import React, { useState } from "react";

export default function ServiceDetailsSidebar() {
  const [form, setForm] = useState({
    entreprise: "",
    effectif: "",
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Votre logique d'envoi du formulaire ici
      console.log("Formulaire soumis:", form);
      
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Réinitialiser le formulaire après succès
      setForm({
        entreprise: "",
        effectif: "",
        nom: "",
        email: "",
        telephone: "",
        message: ""
      });
      
      alert("Demande de devis envoyée avec succès !");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="col-span-8 lg:col-span-4"
    >
      {/* Formulaire de demande de devis */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5">
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
              <h3 className="text-white font-semibold">Demande de devis</h3>
              <p className="text-white/80 text-xs">Solutions Horoquartz</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-main-black mb-1.5">
              Entreprise *
            </label>
            <input
              type="text"
              value={form.entreprise}
              onChange={(e) => setForm({...form, entreprise: e.target.value})}
              placeholder="Nom de votre entreprise"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm"
            />
          </div>

          {/* Effectif */}
          <div>
            <label className="block text-sm font-medium text-main-black mb-1.5">
              Effectif *
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["1-10", "11-50", "51-200", "200+"].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setForm({...form, effectif: val})}
                  className={`py-2 rounded-lg border text-xs font-medium transition-all ${
                    form.effectif === val
                      ? "border-red-600 bg-red-600/5 text-red-600"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={form.nom}
              onChange={(e) => setForm({...form, nom: e.target.value})}
              placeholder="Nom complet *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              placeholder="Email *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm"
            />
            <input
              type="tel"
              value={form.telephone}
              onChange={(e) => setForm({...form, telephone: e.target.value})}
              placeholder="Téléphone *"
              required
              className="w-full h-11 px-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm"
            />
          </div>

          {/* Message */}
          <textarea
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            placeholder="Message (optionnel)"
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none text-sm resize-none"
          />

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
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
                Demander un devis
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
            <a href="tel:+21671234567" className="flex items-center justify-center gap-2 text-red-600 font-semibold hover:underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +216 71 234 567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
