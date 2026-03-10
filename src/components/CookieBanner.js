import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "optima_cookie_consent";

function enableAnalytics() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("event", "page_view");
  }
}

function disableAnalytics() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
}

export default function CookieBanner() {
  const [status, setStatus] = useState(null); // null | "accepted" | "refused"
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setStatus(saved);
    } else {
      // Afficher le bandeau après 1.5s
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setStatus("accepted");
    setVisible(false);
    enableAnalytics();
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setStatus("refused");
    setVisible(false);
    disableAnalytics();
  };

  if (!visible || status !== null) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 pointer-events-none"
      role="dialog"
      aria-label="Bandeau de consentement aux cookies"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 pointer-events-auto">
        {/* Icône */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
             style={{ backgroundColor: "#007a55" + "15" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"
                  fill="#007a55"/>
          </svg>
        </div>

        {/* Texte */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">🍪 Ce site utilise des cookies</strong> pour mesurer l'audience
            et améliorer votre expérience (Google Analytics). Aucune donnée n'est
            partagée à des fins publicitaires.{" "}
            <Link to="/faqs" className="text-[#007a55] underline hover:no-underline text-xs">
              En savoir plus
            </Link>
          </p>
        </div>

        {/* Boutons */}
        <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
          <button
            onClick={refuse}
            className="flex-1 md:flex-none px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none px-5 py-2 rounded-xl text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: "#007a55" }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
