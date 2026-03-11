import React from "react";
import { Link } from "react-router-dom";

const CONTACT_DETAILS = [
  {
    label: "Adresse",
    value: "6, Rue Echih - 2ème étage\nApp B2.1 — 2080 Ariana",
    href: "https://maps.google.com/?q=36.85239734774137,10.189998108317226",
  },
  {
    label: "Horaires",
    value: "Lun – Ven : 08h00 – 17h30",
  },
];

export default function AboutMapOptima() {
  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: "620px" }}>

      {/* ── Carte en arrière-plan plein écran ── */}
      <iframe
        title="Localisation OPTIMA Ariana Tunisie"
        src="https://maps.google.com/maps?q=36.85239734774137,10.189998108317226&output=embed&hl=fr&z=17"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block", position: "absolute", inset: 0, minHeight: "620px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* ── Dégradé gauche pour lisibilité ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, transparent 75%)",
        }}
      />

      {/* ── Contenu flottant ── */}
      <div className="relative z-10 w-full mx-auto theme-container py-16 md:py-20 flex flex-col justify-center" style={{ minHeight: "620px" }}>

        {/* Titre */}
        <div data-aos="fade-right">
          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm inline-block mb-5 border border-white/30">
            Où nous trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Notre Siège<br />Ariana, Tunisie
          </h2>
          <p className="text-white/70 text-base max-w-sm">
            Venez nous rencontrer ou contactez-nous pour discuter de vos projets.
          </p>
        </div>

        {/* Cards coordonnées */}
        <div className="mt-8 flex flex-col gap-3 max-w-xs" data-aos="fade-right" data-aos-delay="150">
          {CONTACT_DETAILS.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300"
            >
              <p className="text-xs font-bold text-buisness-red uppercase tracking-widest mb-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-buisness-red transition-colors duration-200"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white/80 text-sm" style={{ whiteSpace: "pre-line" }}>
                  {item.value}
                </p>
              )}
            </div>
          ))}

          {/* Boutons CTA */}
          <div className="sm:col-span-2 flex flex-wrap gap-3 mt-2">
          
            <a
              href="https://maps.google.com/?q=36.85239734774137,10.189998108317226"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white hover:text-main-black transition-all duration-300 border border-white/30 text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              Ouvrir dans Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
