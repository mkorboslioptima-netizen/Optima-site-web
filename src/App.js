import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import ChatBot from "./components/ChatBot";
import FloatingDevis from "./components/Devis/FloatingDevis";

/* Pages */
import HomeOne from "./pages/HomeOne";
import Acceuil from "./pages/Acceuil";
import About from "./pages/About";

import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SageCommerciale from "./pages/SageCommerciale";
import Horoquartz from "./pages/Horoquartz";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import Notfound from "./pages/Notfound";
import Devis from "./pages/Devis";
import GTA from "./pages/Gestion_Du_Temps"
import Outsourcing from "./pages/Outsourcing";
import GestionEntreprise from "./pages/GestionEntreprise";
import SageCompta  from "./pages/SageCompta";
import Immobilisation from "./pages/Immobilisation";
import SagePaieRh from "./pages/SagePaieRh";
/* ─── Page transition variants ─── */
const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};
const pageTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

/* ─── Animated Page wrapper ─── */
function PageWrap({ children, skipAnimation }) {
  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial={skipAnimation ? false : "initial"}
      animate="animate"
      exit={skipAnimation ? undefined : "exit"}
      transition={pageTransition}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

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
              duration: 0.7,
              ease: "power3.inOut",
              onComplete,
            });
          }, 300);
          return 100;
        }
        return Math.min(prev + Math.random() * 25 + 5, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <img
        src="/assets/images/Optima-Logo.png"
        alt="Optima"
        className="w-32 mb-8 animate-pulse"
      />
      <div className="w-48 h-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #007a55, #00dc87)",
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
function ScrollProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9998] bg-transparent">
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #D90A2C, #ff4444)",
        }}
      />
    </div>
  );
}

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
  const colors = ["#007a55", "#00dc87", "#D90A2C", "#FFD700", "#4A90D9"];
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
  const lenisRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isFirstLoad = useRef(true);

  /* ── Konami Code Easter Egg ── */
  useKonamiCode(useCallback(() => triggerConfetti(), []));

  /* ── INIT LENIS ── */
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.0,
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      normalizeWheel: true,
      syncTouch: false,
      syncTouchLerp: 0.1,
      touchInertiaMultiplier: 35,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* ── Scroll Progress ── */
    lenis.on("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
    });

    /* ── Parallax data-speed ── */
    lenis.on("scroll", ({ scroll }) => {
      document.querySelectorAll("[data-speed]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed);
        el.style.transform = `translateY(${scroll * speed}px)`;
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  /* ── AOS ── */
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  /* ── Scroll to top on route change ── */
  useLayoutEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
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
      {!loading && <ScrollProgressBar progress={scrollProgress} />}

      {/* Routes with page transitions */}
      <AnimatePresence mode="wait">
     
          <Routes location={location}>
            <Route path="/" element={<Acceuil />} />
            <Route path="/about" element={<About />} />
            <Route path="/Gestion_Du_Temps" element={<GTA />} />
            <Route path="/Outsourcing" element={<Outsourcing />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Sage-100-Gestion-Commerciale" element={<SageCommerciale />} />
            <Route path="/Sage-100-Gestion-comptabilite" element={<SageCompta />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/horoquartz" element={<Horoquartz />} />
            <Route path="/GestionEntreprise" element={<GestionEntreprise />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/Immobilisation" element={<Immobilisation />} />
            <Route path="/Sage-100-Gestion-Paie-RH" element={<SagePaieRh />} />
          </Routes>
      
      </AnimatePresence>

      {/* ChatBot & Devis */}
      {!loading && <ChatBot />}
      {!loading && <FloatingDevis />}
    </>
  );
}
