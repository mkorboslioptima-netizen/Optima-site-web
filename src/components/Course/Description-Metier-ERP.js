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
                La Gestion d'Entreprise avec un ERP
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                La gestion d'entreprise regroupe l'ensemble des processus permettant de piloter efficacement votre activité : gestion commerciale, financière, comptable, ressources humaines et immobilisations. Un ERP (Enterprise Resource Planning) centralise ces fonctions dans une solution unique et interconnectée. Il assure la cohérence des données, automatise les flux d'informations entre les services et fournit une vision globale en temps réel pour une meilleure prise de décision. Grâce au paramétrage et à l'intégration sur mesure, les entreprises optimisent leurs processus, réduisent les erreurs et gagnent en agilité.
              </p>
              
              <h1 className="mt-10 font-semibold text-24 text-main-black">
                Qu'est-ce qu'un ERP ?
              </h1>
              <p className="mt-4 text-paragraph">
                Un ERP ne se limite pas à l'installation d'un logiciel. C'est un écosystème qui connecte tous les métiers de l'entreprise : les ventes alimentent automatiquement la comptabilité, les achats mettent à jour les stocks, la paie s'intègre aux écritures comptables. Le paramétrage de l'ERP est une étape clé qui adapte la solution aux spécificités de votre organisation : workflows, règles de gestion, tableaux de bord personnalisés. Une mauvaise configuration peut entraîner des blocages opérationnels, des pertes de données ou des non-conformités réglementaires. C'est pourquoi l'expertise métier et technique est essentielle pour réussir votre projet ERP.
              </p>
              
              <h1 className="mt-10 font-semibold text-24 text-main-black">
                Pourquoi faire appel à un partenaire ERP ?
              </h1>
              <p className="mt-4 text-paragraph">
                Imaginez ne plus avoir à gérer les complexités techniques, les mises à jour critiques ou les problèmes d'interfaçage entre modules. Avec un partenaire expert en ERP, votre entreprise bénéficie d'un paramétrage professionnel, d'une intégration sécurisée et d'un accompagnement continu. Vous gagnez du temps, vous sécurisez vos données et vous pouvez vous concentrer sur votre cœur de métier. Un projet ERP bien mené, c'est l'assurance d'une transformation digitale réussie.
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
          <source src="/videos/erpoptima.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>

      
    </>
  );
}
