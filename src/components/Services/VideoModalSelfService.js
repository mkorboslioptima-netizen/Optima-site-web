import React, { useEffect } from "react";

const VIDEO_SRC = "/videos/Le Self-Service eTemptation _ des  gestion des temps.mp4";

export default function VideoModalSelfService({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 flex items-center gap-2 text-sm font-medium transition-colors"
        >
          Fermer
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Vidéo 16:9 */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingTop: "56.25%" }}>
          <video
            className="absolute inset-0 w-full h-full"
            src={VIDEO_SRC}
            controls
            autoPlay
            title="Démo Self Service"
          />
        </div>

        <p className="text-center text-white/70 text-sm mt-4">
          Portail Self-Service — Démo complète de la solution
        </p>
      </div>
    </div>
  );
}
