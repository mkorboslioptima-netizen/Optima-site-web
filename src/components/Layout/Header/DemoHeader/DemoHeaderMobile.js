import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const menuData = [
  { title: "Accueil", href: "/" },
  {
    title: "Gestion d'entreprise",
    subMenu: [
      { title: "Gestion commerciale", href: "/Sage-100-Gestion-Commerciale" },
      { title: "Comptabilité", href: "/Sage-100-Gestion-comptabilite" },
      { title: "Immobilisation", href: "/Immobilisation" },
      { title: "Paie & RH", href: "/Sage-100-Gestion-Paie-RH" },
      { title: "Sage BI", href: "/Sage-BI" },
    ],
  },
  {
    title: "Gestion des temps",
    subMenu: [
      { title: "Présentation Horoquartz", href: "/horoquartz" },
      { title: "eTemptation", href: "/etemptation" },
      { title: "Self Service", href: "/self-service" },
      { title: "Contrôle d'accès", href: "/controle-acces" },
    ],
  },
  { title: "Outsourcing de la Paie", href: "/outsourcing" },
  {
    title: "IDEMIA",
    subMenu: [
      { title: "Présentation IDEMIA", href: "/projects" },
      { title: "Morpho Manager Suite", href: "/project-details" },
      { title: "Pointeuses IDEMIA", href: "/service-details" },
    ],
  },
  { title: "À propos", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => { setIsOpen(false); setActiveSubNav(null); };

  return (
    <header className="xl:hidden">
      {/* ── Top bar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
        style={{ height: "64px" }}
      >
        <div className="flex items-center justify-between h-full px-5">
          {/* Logo */}
          <Link to="/" onClick={close}>
            <img src="/assets/images/logo.svg" alt="Optima" className="h-11 w-auto" />
          </Link>

          {/* Right: CTA + burger */}
          <div className="flex items-center gap-2">
            <Link
              to="/devis"
              onClick={close}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#890011] text-white text-xs font-semibold hover:bg-[#6d0009] transition-colors"
            >
              Devis gratuit
            </Link>

            {/* Burger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Menu"
              className="flex flex-col items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition-all gap-[5px]"
            >
              <span className={`block h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
              <span className={`block h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 w-0" : "w-3.5"}`} />
              <span className={`block h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "64px" }} />

      {/* ── Overlay ── */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Side Drawer (right) ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white flex flex-col transition-transform duration-350 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link to="/" onClick={close}>
            <img src="/assets/images/logo.svg" alt="Optima" className="h-10 w-auto" />
          </Link>
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-3">
          <ul className="flex flex-col gap-0.5">
            {menuData.map((item, index) => (
              <li key={index}>
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => setActiveSubNav((p) => (p === index ? null : index))}
                      className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-gray-800 font-semibold text-sm hover:bg-[#890011]/5 hover:text-[#890011] transition-all"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`transition-transform duration-300 text-gray-400 shrink-0 ${activeSubNav === index ? "rotate-180 text-[#890011]" : ""}`}
                        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${activeSubNav === index ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                      <ul className="ml-3 mb-1 pl-4 border-l-2 border-[#890011]/20 flex flex-col gap-0.5">
                        {item.subMenu.map((sub, si) => (
                          <li key={si}>
                            <Link
                              to={sub.href}
                              onClick={close}
                              className="block py-2.5 px-2 text-sm text-gray-500 hover:text-[#890011] font-medium rounded-lg hover:bg-[#890011]/5 transition-all"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={close}
                    className="flex items-center py-3 px-3 rounded-xl text-gray-800 font-semibold text-sm hover:bg-[#890011]/5 hover:text-[#890011] transition-all"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-6 pt-3 border-t border-gray-100 space-y-2.5">
          <a
            href="tel:+21671715397"
            className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#890011]/10 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 leading-none mb-0.5">Appelez-nous</p>
              <p className="text-sm font-bold text-gray-800">+216 71 715 397</p>
            </div>
          </a>

          <Link
            to="/devis"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#890011] text-white font-semibold text-sm hover:bg-[#6d0009] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
