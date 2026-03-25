import { useEffect, useState } from "react";

const TAWKTO_PROPERTY_ID = "69b1781e791b0a1c352a422c";
const TAWKTO_WIDGET_ID   = "1jjejqdq9";

/* cache tous les éléments natifs Tawk.to */
const HIDE_TAWK_CSS = `
  #tawk-bubble-container,
  .tawk-min-container,
  .tawk-button-circle,
  .tawk-min-container--active,
  .tawk-branding,
  iframe[title*="chat widget"],
  iframe[title*="Tawk"],
  iframe[title*="tawk"],
  div[data-id="tawkchat-minified-wrapper"],
  div[id^="tawk-"],
  div[class^="tawk-"],
  #tawkchat-minified-wrapper,
  #tawkchat-bubble-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    width: 0 !important;
    height: 0 !important;
    position: absolute !important;
    overflow: hidden !important;
  }
`;

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <rect x="3" y="9" width="4" height="6" rx="2" fill="white"/>
    <rect x="17" y="9" width="4" height="6" rx="2" fill="white"/>
    <path d="M21 14V16C21 17.1046 20.1046 18 19 18H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <rect x="12" y="17" width="4" height="3" rx="1.5" fill="white"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export default function TawkToChat() {
  const [ready,      setReady]      = useState(false);
  const [isOpen,     setIsOpen]     = useState(false);
  const [unread,     setUnread]     = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    /* injecter le CSS qui masque les éléments natifs Tawk */
    const style = document.createElement("style");
    style.innerHTML = HIDE_TAWK_CSS;
    document.head.appendChild(style);

    /* callbacks AVANT le script */
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
      setReady(true);
      /* tooltip d'invitation après 6s */
      setTimeout(() => setShowTooltip(true), 6000);
      /* cache le tooltip après 8s */
      setTimeout(() => setShowTooltip(false), 14000);
    };

    window.Tawk_API.onChatMaximized = function () {
      setIsOpen(true);
      setShowTooltip(false);
    };

    window.Tawk_API.onChatMinimized = function () {
      setIsOpen(false);
      window.Tawk_API.hideWidget();
    };

    window.Tawk_API.onChatHidden = function () {
      setIsOpen(false);
      window.Tawk_API.hideWidget();
    };

    window.Tawk_API.onUnreadCountChanged = function (count) {
      setUnread(count);
      if (count > 0) setShowTooltip(true);
    };

    /* injecter le script une seule fois */
    if (!document.querySelector(`script[src*="${TAWKTO_PROPERTY_ID}"]`)) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://embed.tawk.to/${TAWKTO_PROPERTY_ID}/${TAWKTO_WIDGET_ID}`;
      s1.setAttribute("crossorigin", "*");
      document.head.appendChild(s1);
    }
  }, []);

  const toggle = () => {
    if (!window.Tawk_API) return;
    setShowTooltip(false);
    if (isOpen) {
      window.Tawk_API.minimize();
    } else {
      window.Tawk_API.maximize();
      setUnread(0);
    }
  };

  return (
    <div className="fixed z-50 bottom-6 right-4 sm:bottom-7 sm:right-7">

      {/* ── tooltip d'invitation ── */}
      <div
        className="absolute right-16 bottom-1 pointer-events-none transition-all duration-500"
        style={{
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? "translateX(0) scale(1)" : "translateX(10px) scale(0.95)",
          transitionProperty: "opacity, transform",
        }}
      >
        <div className="bg-white text-main-black text-sm font-semibold px-4 py-3 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap flex items-center gap-2">
          <span className="text-base">👋</span>
          <span>Besoin d'aide ? Chattez avec nous !</span>
          {/* petite flèche */}
          <span
            className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0"
            style={{ borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "8px solid white" }}
          />
        </div>
      </div>

      {/* ── bouton principal — masqué quand chat ouvert ── */}
      <button
        onClick={toggle}
        aria-label="Chat en direct"
        className={`relative flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95
          ${ready && !isOpen ? "animate-bounce" : ""}`}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #890011 0%, #b30016 100%)",
          boxShadow: "0 8px 32px rgba(137,0,17,0.45)",
          animationDuration: ready && !isOpen ? "2s" : undefined,
          animationIterationCount: ready && !isOpen ? "3" : undefined,
        }}
      >
        {/* badge non lus */}
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 bg-white text-buisness-red text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-buisness-red">
            {unread}
          </span>
        )}

        {/* pulse ring */}
        {ready && !isOpen && (
          <span
            className="absolute inset-0 animate-ping opacity-25 bg-buisness-red"
            style={{ borderRadius: "50%", animationDuration: "2s" }}
          />
        )}

        <span className="relative z-10">
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </span>
      </button>
    </div>
  );
}
