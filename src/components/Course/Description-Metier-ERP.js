import React, { useEffect, useRef } from "react";

export default function CourseDetailsInfo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;

          if (entry.isIntersecting && !isPlayingRef.current) {
            // La vidéo est visible, on démarre la lecture
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  isPlayingRef.current = true;
                })
                .catch(() => {
                  // Ignorer l'erreur si play() est interrompu
                });
            }
          } else if (!entry.isIntersecting && isPlayingRef.current) {
            // La vidéo n'est plus visible, on met en pause
            video.pause();
            isPlayingRef.current = false;
          }
        });
      },
      {
        threshold: 0.5, // Démarre quand 50% de la vidéo est visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="py-16 md:pb-0 md:pt-[50px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px] course-description">
          {/* <!-- Course  --> */}
          <div className="col-span-8">
            <div className="w-full">
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
                Qu’est-ce que la Gestion des temps (GTA) ?
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                La Gestion des temps et des Activités (GTA) est un système qui permet de suivre et d’enregistrer précisément les heures travaillées par les collaborateurs : présences, absences, retards, heures supplémentaires et congés. Grâce à l’automatisation, les entreprises améliorent leur productivité, leur conformité réglementaire et la qualité de vie au travail.

              </p>
              <h1 className="mt-10 font-semibold text-24 text-main-black">
                Pourquoi bien gérer le temps ?
              </h1>
              <p className="mt-4 text-paragraph">
                Imaginez une journée où vous n'avez plus à vous inquiéter de savoir si vos heures sont bien enregistrées, si vos absences sont validées ou si votre équipe est correctement planifiée. C'est exactement ce que vous offre le module Etemptation et Self-Service du Horoquartz.
                Conçu pour les managers comme pour les collaborateurs, cet outil transforme la Gestion des temps en une tâche simple et transparente. Vous suivez vos activités en quelques clics, vous demandez vos congés sans paperasse, et vous avez une visibilité instantanée sur l'ensemble de votre équipe.

                <br />
                <br />
                Au-delà du suivi quotidien, l'Horoquartz génère automatiquement les données nécessaires pour le traitement de la paie, vous économisant ainsi des heures de travail manuel chaque mois. C'est un gain de temps qui se répercute directement sur votre productivité et votre bien-être au travail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo - pleine largeur */}
      <div ref={containerRef} className="w-full h-[400px] my-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          controls
        >
          <source src="/videos/GTA.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
<section className="mt-0 md:mt-20 pb-0 md:pb-[0px]">
  <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
    <div className="col-span-12 lg:col-start-0">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-semibold text-24 text-main-black text-center">
          Tout ce dont vous avez besoin pour piloter le temps de travail
        </h1>
        <ul className="grid grid-cols-2 gap-x-24 gap-y-6 mt-6">
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Suivi des Présences en Temps Réel
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Absences, Congés & Autorisations
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Données Fiables pour la Paie
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Gestion des Plannings & Horaires
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
