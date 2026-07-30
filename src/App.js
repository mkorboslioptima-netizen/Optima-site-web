import React, { useEffect, useLayoutEffect, useRef, useState, useCallback, Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

import AOS from "aos";
import FloatingDevis from "./components/Devis/FloatingDevis";
import TawkToChat from "./components/TawkToChat";
import CookieBanner from "./components/CookieBanner";

/* Pages — chargées à la demande (code splitting) : chaque page ne télécharge
   que son propre code au lieu du site entier en un seul bundle.
   L'accueil reste chargé immédiatement (première visite la plus fréquente). */
import Acceuil from "./pages/Acceuil";
const About = lazy(() => import("./pages/About"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const SageCommerciale = lazy(() => import("./pages/SageCommerciale"));
const Horoquartz = lazy(() => import("./pages/Horoquartz"));
const ETemptation = lazy(() => import("./pages/etemptation"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Faq = lazy(() => import("./pages/Faq"));
const Teams = lazy(() => import("./pages/Teams"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Devis = lazy(() => import("./pages/Devis"));
const GTA = lazy(() => import("./pages/Gestion_Du_Temps"));
const Outsourcing = lazy(() => import("./pages/Outsourcing"));
const GestionEntreprise = lazy(() => import("./pages/GestionEntreprise"));
const SageCompta = lazy(() => import("./pages/SageCompta"));
const SageBI = lazy(() => import("./pages/SageBI"));
const Immobilisation = lazy(() => import("./pages/Immobilisation"));
const SagePaieRh = lazy(() => import("./pages/SagePaieRh"));
const SelfService = lazy(() => import("./pages/SelfService"));
const AccessControl = lazy(() => import("./pages/AccessControl"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
/* Détecte le pré-rendu (puppeteer) et les robots : pas de loader pour eux,
   le contenu doit être visible immédiatement */
export const IS_PRERENDER =
  typeof navigator !== "undefined" &&
  /HeadlessChrome|Prerender|Googlebot|bingbot/i.test(navigator.userAgent);

/* ─── Page Loader ─── */
function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            gsap.to(loaderRef.current, {
              yPercent: -100,
              duration: 0.4,
              ease: "power3.inOut",
              onComplete,
            });
          }, 100);
          return 100;
        }
        return Math.min(prev + Math.random() * 30 + 20, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <img
        src="/assets/images/logo.webp"
        alt="Optima"
        className="h-20 w-auto mb-10 animate-pulse"
      />
      <div className="w-56 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #890011, #b30016)",
          }}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-400">
        {Math.round(progress)}%
      </p>
    </div>
  );
}

/* ─── Scroll Progress Bar ─── */
const ScrollProgressBar = React.forwardRef(function ScrollProgressBar(_, ref) {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9998] bg-transparent">
      <div
        ref={ref}
        style={{
          height: "100%",
          width: "0%",
          background: "linear-gradient(90deg, #890011, #ff4444)",
          willChange: "width",
        }}
      />
    </div>
  );
});

/* ─── Konami Easter Egg ─── */
function useKonamiCode(callback) {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const indexRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === konamiCode.length) {
          callback();
          indexRef.current = 0;
        }
      } else {
        indexRef.current = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
}

/* ─── Confetti burst (Easter Egg) ─── */
function triggerConfetti() {
  const colors = ["#007a55", "#00dc87", "#890011", "#FFD700", "#4A90D9"];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    el.style.cssText = `
      position:fixed;width:8px;height:8px;border-radius:50%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:50%;top:50%;z-index:99999;pointer-events:none;
    `;
    document.body.appendChild(el);
    gsap.to(el, {
      x: (Math.random() - 0.5) * window.innerWidth,
      y: (Math.random() - 0.5) * window.innerHeight,
      opacity: 0,
      scale: Math.random() * 2 + 0.5,
      duration: 1.2 + Math.random() * 0.8,
      ease: "power2.out",
      onComplete: () => el.remove(),
    });
  }
}

/* ═══════════════════════════════════════ */
/*                  APP                    */
/* ═══════════════════════════════════════ */

export default function App() {
  const location = useLocation();
  const progressBarRef = useRef(null);
  const [loading, setLoading] = useState(!IS_PRERENDER);
  const isFirstLoad = useRef(true);

  /* ── Google Analytics : page_view à chaque changement de route ──
     gtag('config') est appelé avec send_page_view:false dans index.html,
     c'est donc ici que TOUTES les vues sont envoyées (SPA-friendly). */
  useEffect(() => {
    if (IS_PRERENDER || typeof window.gtag !== "function") return;
    // Laisser le temps à react-helmet de mettre à jour document.title
    const id = setTimeout(() => {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 100);
    return () => clearTimeout(id);
  }, [location.pathname, location.search]);

  /* ── Konami Code Easter Egg ── */
  useKonamiCode(useCallback(() => triggerConfetti(), []));

  /* ── Scroll natif : progress bar + parallax ── */
  useEffect(() => {
    let speedEls = null;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (progressBarRef.current && docHeight > 0) {
        progressBarRef.current.style.width = `${(scrollTop / docHeight) * 100}%`;
      }

      if (!speedEls) speedEls = [...document.querySelectorAll("[data-speed]")];
      speedEls.forEach((el) => {
        el.style.transform = `translateY(${scrollTop * parseFloat(el.dataset.speed)}px)`;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── AOS (désactivé pendant le pré-rendu : le contenu doit rester visible) ── */
  useEffect(() => {
    if (IS_PRERENDER) return;
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  /* ── Scroll to top on route change ── */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* ── Loader complete handler ── */
  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    isFirstLoad.current = false;
  }, []);

  return (
    <>
      {/* Page Loader */}
      {loading && <PageLoader onComplete={handleLoaderComplete} />}

      {/* Scroll Progress Bar */}
      {!loading && <ScrollProgressBar ref={progressBarRef} />}

      {/* Routes with page transitions */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="min-h-screen" />}>

          <Routes location={location}>
            {/* ── Page d'accueil ── */}
            <Route path="/" element={<Acceuil />} />

            {/* ── À propos ── */}
            <Route path="/about" element={<About />} />
            <Route path="/a-propos" element={<Navigate replace to="/about" />} />

            {/* ── Gestion des temps ── */}
            <Route path="/Gestion_Du_Temps" element={<Navigate replace to="/gestion-des-temps" />} />
            <Route path="/gestion-des-temps" element={<GTA />} />

            {/* ── Outsourcing ──
                ATTENTION : le matching de React Router est INSENSIBLE à la casse.
                Une route <Navigate> "/Outsourcing" capturerait aussi "/outsourcing"
                et créerait une boucle de redirection infinie (page blanche).
                Les anciennes URLs sont redirigées en 301 par backend/server.js. */}
            <Route path="/outsourcing" element={<Outsourcing />} />

            {/* ── Sage 100 ERP ── */}
            <Route path="/sage-100-gestion-commerciale" element={<SageCommerciale />} />

            <Route path="/Sage-100-Gestion-comptabilite" element={<Navigate replace to="/sage-100-comptabilite" />} />
            <Route path="/sage-100-comptabilite" element={<SageCompta />} />

            <Route path="/sage-bi" element={<SageBI />} />

            <Route path="/Immobilisation" element={<Navigate replace to="/sage-100-immobilisations" />} />
            <Route path="/sage-100-immobilisations" element={<Immobilisation />} />

            <Route path="/Sage-100-Gestion-Paie-RH" element={<Navigate replace to="/sage-100-paie-rh" />} />
            <Route path="/sage-100-paie-rh" element={<SagePaieRh />} />

            {/* ── Gestion entreprise ── */}
            <Route path="/GestionEntreprise" element={<Navigate replace to="/gestion-entreprise" />} />
            <Route path="/gestion-entreprise" element={<GestionEntreprise />} />

            {/* ── Solutions Horoquartz ── */}
            <Route path="/horoquartz" element={<Horoquartz />} />
            <Route path="/etemptation" element={<ETemptation />} />
            <Route path="/self-service" element={<SelfService />} />

            {/* ── Contrôle d'accès IDEMIA ── */}
            <Route path="/controle-acces" element={<AccessControl />} />

            {/* ── Pages utilitaires ── */}
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/devis" element={<Devis />} />

            {/* ── Pages légales ── */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

            {/* ── 404 — doit être EN DERNIER ── */}
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Suspense>
      </AnimatePresence>

      {/* Devis & Chat */}
      {!loading && <FloatingDevis />}
      {!loading && !IS_PRERENDER && <TawkToChat />}
      <CookieBanner />
    </>
  );
}
