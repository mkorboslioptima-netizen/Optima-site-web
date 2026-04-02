import React, { useEffect, useRef, useState } from "react";
import OutsourcingSidebar from "../Services/OutsourcingSidebar";

export default function CourseDetailsInfo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;
          if (entry.isIntersecting && !isPlayingRef.current) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.then(() => { isPlayingRef.current = true; }).catch(() => {});
            }
          } else if (!entry.isIntersecting && isPlayingRef.current) {
            video.pause();
            isPlayingRef.current = false;
          }
        });
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  const tabs = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      label: "Calcul & Bulletins",
      blocs: [
        {
          title: "Calcul et édition des bulletins",
          badge: "ISO 9001",
          content: "Salaires de base, heures supplémentaires, primes, congés et absences. Bulletins de paie conformes et horodatés chaque mois, sans retard — dans le cadre d'un processus qualité certifié ISO 9001.",
        },
        {
          title: "Fichiers de virement & archivage",
          badge: "Automatisé",
          content: "Génération automatique des fichiers de virement bancaire et archivage sécurisé des bulletins. Accès en ligne pour vos collaborateurs, historique complet et téléchargement à tout moment.",
        },
      ],
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      label: "Déclarations",
      blocs: [
        {
          title: "Déclarations sociales — CNSS",
          badge: "Mensuel",
          content: "Préparation et transmission des déclarations CNSS dans les délais légaux, avec accusés de réception. Veille continue sur les évolutions des taux et des bases de cotisation.",
        },
        {
          title: "Déclarations fiscales — RAS & IRPP",
          badge: "Annuel",
          content: "RAS sur salaires, déclaration employeur annuelle et intégration des mises à jour fiscales dès leur entrée en vigueur — sans aucune action requise de votre part.",
        },
      ],
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Sécurité & ISO 27001",
      blocs: [
        {
          title: "Environnement certifié ISO 27001",
          badge: "ISO 27001",
          content: "Vos données salariales sont traitées dans un environnement certifié ISO 27001 : politique de sécurité documentée, accès contrôlés par principe du moindre privilège et traçabilité complète.",
        },
        {
          title: "Confidentialité & continuité de service",
          badge: "Garanti",
          content: "Convention de confidentialité systématique, plan de continuité en cas d'incident et audits de surveillance annuels pour le maintien de la certification. Zéro exposition de vos données.",
        },
      ],
    },
  ];

  const benefits = [
    { text: "Double certification ISO 9001 & ISO 27001 — rigueur et conformité auditée" },
    { text: "Expertise terrain : tous secteurs en Tunisie" },
    { text: "Zéro retard : délais contractualisés" },
    { text: "Conformité garantie : veille CT, IRPP, circulaires CNSS" },
    { text: "Interlocuteur unique : gestionnaire dédié et joignable" },
    { text: "Outil certifié : traitement via Sage Paie" },
  ];

  return (
    <>
      {/* ── Section principale ── */}
      <section className="py-16 md:pb-0 md:pt-[50px] bg-white">
        <div className="theme-container w-full mx-auto">
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">

            {/* Contenu gauche */}
            <div className="col-span-8" data-aos="fade-right">

              {/* Badge + Titre + Intro */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-buisness-red/10 text-buisness-red text-sm font-semibold rounded-full mb-4">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Certifiés ISO 9001 & ISO 27001
                </span>
                <h2 className="text-[28px] sm:text-[36px] font-bold text-main-black leading-tight mb-4">
                  Ce que recouvre notre prestation
                </h2>
                <p className="text-paragraph text-base leading-relaxed max-w-2xl">
                  OPTIMA prend en charge l'intégralité de votre cycle de paie dans le strict
                  respect du Code du Travail tunisien, des obligations CNSS et des déclarations
                  fiscales (RAS, IRPP).
                </p>
              </div>

              {/* Tabs navigation */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeTab === i
                        ? "bg-buisness-red text-white shadow-md shadow-buisness-red/30"
                        : "bg-gray-100 text-paragraph hover:bg-gray-200"
                    }`}
                  >
                    <span className={activeTab === i ? "text-white" : "text-buisness-red"}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 2 blocs côte à côte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tabs[activeTab].blocs.map((bloc, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-md hover:border-buisness-red/20 transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 bg-buisness-red/10 text-buisness-red text-xs font-semibold rounded-full mb-3">
                      {bloc.badge}
                    </span>
                    <h3 className="text-[17px] font-bold text-main-black mb-3">
                      {bloc.title}
                    </h3>
                    <p className="text-paragraph text-sm leading-relaxed">
                      {bloc.content}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Sidebar */}
            <div className="col-span-8 lg:col-span-4" id="audit-form" data-aos="fade-left">
              <OutsourcingSidebar />
            </div>

          </div>
        </div>
      </section>

      {/* ── Vidéo ── */}
      <div ref={containerRef} className="w-full h-[500px] mt-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-buisness-red/10 z-10 pointer-events-none" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted playsInline loop controls
        >
          <source src="./assets/images/about/paie11.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>

      {/* ── Avantages ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="theme-container w-full mx-auto">

          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-buisness-red/10 text-buisness-red text-sm font-semibold rounded-full mb-4">
              Nos Atouts
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-main-black">
              Pourquoi confier votre paie à OPTIMA ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-buisness-red/30 transition-all duration-300"
              >
                {/* Cercle rouge checkmark */}
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-buisness-red flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.5 10.5L8 14L15.5 6.5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm text-paragraph leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}