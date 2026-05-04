import React, { useState } from "react";

const InfoBlock = ({ icon, title, lines }) => (
  <div className="col-span-1">
    <h2 className="flex gap-2.5 items-center font-semibold text-18 text-main-black mb-3">
      <span className="w-9 h-9 rounded-full bg-buisness-red/10 flex items-center justify-center text-buisness-red shrink-0">
        {icon}
      </span>
      {title}
    </h2>
    {lines.map((line, i) =>
      line.href ? (
        <a key={i} href={line.href} className="block text-paragraph hover:text-buisness-red transition-colors mt-1">
          {line.text}
        </a>
      ) : (
        <p key={i} className="text-paragraph mt-1">{line.text}</p>
      )
    )}
  </div>
);

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", sujet: "", message: "" });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@optima.tn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Contact Optima${form.sujet ? " — " + form.sujet : ""} — ${form.nom}`,
          name: form.nom,
          email: form.email,
          telephone: form.telephone,
          sujet: form.sujet,
          message: form.message,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm({ nom: "", email: "", telephone: "", sujet: "", message: "" });
      } else {
        throw new Error(data.message || "Erreur");
      }
    } catch (err) {
      console.error("FormSubmit error:", err.message);
      setStatus("error");
    }
  }

  return (
    <section className="py-16 md:py-[100px]">
      <div className="theme-container w-full mx-auto grid grid-cols-7 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">

        {/* ── Informations de contact ── */}
        <div className="col-span-7 lg:col-span-5">
          <span className="inline-block px-4 py-1 text-sm font-medium text-buisness-red bg-buisness-red/10 rounded-full mb-4">
            Contactez-nous
          </span>
          <h1 className="font-bold text-main-black text-[32px] leading-tight mb-4">
            Notre équipe est à votre écoute
          </h1>
          <p className="text-paragraph leading-relaxed mb-10">
            Vous souhaitez déployer un ERP Sage 100, optimiser votre gestion des temps ou
            externaliser votre paie ? Nos experts vous répondent sous 24h.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InfoBlock
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              }
              title="Siège social"
              lines={[
                { text: "6, Rue Echih — 2ème étage" },
                { text: "App B2.1 — 2080 Ariana, Tunisie" },
              ]}
            />
            <InfoBlock
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              }
              title="Téléphone"
              lines={[
                { text: "+216 71 715 397", href: "tel:+21671715397" },
                
              ]}
            />
            <InfoBlock
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              }
              title="Email"
              lines={[
                { text: "info@optima.tn", href: "mailto:info@optima.tn" },
                { text: "support@optima.tn", href: "mailto:support@optima.tn" },
              ]}
            />
            <InfoBlock
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              }
              title="Horaires"
              lines={[
                { text: "Lun – Ven : 8h00 – 17h30" },
                { text: "Sam : 8h30 – 13h00" },
              ]}
            />
          </div>

          <hr className="border-gray-100 mt-10 mb-6" />

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-main-black">Suivez-nous :</span>
            <a href="https://www.linkedin.com/company/optima-tn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-buisness-red hover:text-white hover:border-buisness-red transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/optima.tn" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-buisness-red hover:text-white hover:border-buisness-red transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Formulaire de contact ── */}
        <div className="col-span-7">
          <div className="border border-gray-100 bg-gray-50 rounded-2xl p-6 md:p-10">
            <h2 className="text-[26px] font-bold text-main-black mb-2">
              Envoyez-nous un message
            </h2>
            <p className="text-paragraph text-sm mb-7">
              Tous les champs marqués <span className="text-buisness-red">*</span> sont obligatoires.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-main-black mb-2">Message envoyé !</h3>
                <p className="text-paragraph text-sm">Notre équipe vous répondra dans les 24 heures ouvrables.</p>
                <button onClick={() => setStatus(null)} className="mt-6 text-sm text-buisness-red hover:underline font-medium">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-6 md:grid-cols-12 gap-5">
                <div className="col-span-6">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Nom complet <span className="text-buisness-red">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    placeholder="Votre nom et prénom"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-white"
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email professionnel <span className="text-buisness-red">*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="vous@entreprise.tn"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-white"
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Téléphone <span className="text-buisness-red">*</span></label>
                  <input
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="+216 XX XXX XXX"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-white"
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Sujet</label>
                  <input
                    type="text"
                    value={form.sujet}
                    onChange={(e) => update("sujet", e.target.value)}
                    placeholder="Ex : Demande de démo Sage 100"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-white"
                  />
                </div>
                <div className="col-span-6 md:col-span-12">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Votre message <span className="text-buisness-red">*</span></label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={4}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-buisness-red focus:ring-1 focus:ring-buisness-red outline-none text-sm bg-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="col-span-6 md:col-span-12 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
                  </div>
                )}

                <div className="col-span-6 md:col-span-12">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="home-two-btn-bg py-3 group bg-buisness-red border-buisness-red inline-flex disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 relative z-10 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span className="text-base text-white relative z-10 font-inter">Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-base font-semibold text-white group-hover:text-buisness-red transition-all duration-300 font-inter relative z-10">
                          Envoyer le message
                        </span>
                        <svg className="relative z-10" width="7" height="12" viewBox="0 0 7 12" fill="none">
                          <path className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
                            d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
