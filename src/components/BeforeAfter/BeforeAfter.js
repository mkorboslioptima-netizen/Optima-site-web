import React, { useState, useRef, useCallback } from "react";

const beforeItems = [
  {
    // Facture / document
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Saisie manuelle des factures et bons de commande",
  },
  {
    // Horloge / pointage
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#DC2626" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Pointage sur feuilles papier, erreurs fréquentes",
  },
  {
    // Tableur / grille
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#DC2626" strokeWidth="2"/>
        <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="#DC2626" strokeWidth="2"/>
      </svg>
    ),
    text: "Tableurs Excel dispersés, données non fiables",
  },
  {
    // Calculatrice / paie
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#DC2626" strokeWidth="2"/>
        <rect x="8" y="6" width="8" height="4" rx="1" stroke="#DC2626" strokeWidth="2"/>
        <circle cx="9" cy="14" r="1" fill="#DC2626"/><circle cx="12" cy="14" r="1" fill="#DC2626"/><circle cx="15" cy="14" r="1" fill="#DC2626"/>
        <circle cx="9" cy="18" r="1" fill="#DC2626"/><circle cx="12" cy="18" r="1" fill="#DC2626"/><circle cx="15" cy="18" r="1" fill="#DC2626"/>
      </svg>
    ),
    text: "Calcul de paie complexe et sujet aux erreurs",
  },
  {
    // Oeil barré / pas de visibilité
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20C7 20 2.73 16.11 1 12C1.99 9.83 3.56 7.94 5.54 6.54M9.9 4.24A9.12 9.12 0 0112 4C17 4 21.27 7.89 23 12C22.44 13.22 21.68 14.33 20.77 15.28M14.12 14.12A3 3 0 019.88 9.88" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1L23 23" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: "Aucune visibilité en temps réel sur l'activité",
  },
];

const afterItems = [
  {
    // Éclair / automatisation
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Facturation automatisée avec Sage 100 Gestion Commerciale",
  },
  {
    // Badge / fingerprint
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10V14M18.36 6.64A9 9 0 115.64 6.64" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="#16A34A" strokeWidth="2"/>
        <path d="M12 2V4M12 20V22M4 12H2M22 12H20" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: "Badgeuse Horoquartz avec suivi en temps réel",
  },
  {
    // Base de données
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#16A34A" strokeWidth="2"/>
        <path d="M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" stroke="#16A34A" strokeWidth="2"/>
        <path d="M3 5V19C3 20.66 7 22 12 22C17 22 21 20.66 21 19V5" stroke="#16A34A" strokeWidth="2"/>
      </svg>
    ),
    text: "Base de données centralisée, reporting instantané",
  },
  {
    // Bouclier / conformité
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Paie automatique conforme à la législation tunisienne",
  },
  {
    // Dashboard / graphique
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10M12 20V4M6 20V14" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Tableaux de bord dynamiques avec Sage BI",
  },
];

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseUp, handleMouseMove]);

  return (
    <section className="py-[70px] sm:py-[130px] bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto theme-container">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="px-5 bg-buisness-red/5 border border-buisness-red/10 text-buisness-red font-medium rounded-[30px] w-fit mx-auto">
            Pourquoi Optima
          </h1>
          <h2 className="max-w-[700px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
            La différence Optima
          </h2>
          <p className="text-paragraph mt-4 max-w-[550px] mx-auto">
            Ce qui change concrètement avec nos solutions
          </p>
        </div>

        {/* Slider interactif */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1000px] mx-auto h-[520px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
        >
          {/* Côté AVANT (rouge) */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div
              className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-red-400 font-bold text-xl sm:text-2xl tracking-wide uppercase">Avant</span>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {beforeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                  >
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Côté APRÈS (vert) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-green-600 font-bold text-xl sm:text-2xl tracking-wide uppercase">Après</span>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {afterItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-green-50 rounded-xl px-4 py-3 border border-green-100"
                  >
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ligne du slider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-30 pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            {/* Bouton draggable */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border-2 border-gray-200 hover:border-buisness-red hover:scale-110 transition-all duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 12H4M4 12L6 10M4 12L6 14M16 12H20M20 12L18 10M20 12L18 14" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-paragraph mt-6">
          Glissez le curseur pour comparer
        </p>
      </div>
    </section>
  );
}
