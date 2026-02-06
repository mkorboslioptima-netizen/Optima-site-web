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
                La Gestion de la Paie
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                    La gestion de la paie regroupe l’ensemble des processus permettant de calculer, éditer et distribuer les salaires des collaborateurs tout en respectant la législation sociale et fiscale.
                    Elle inclut le calcul des cotisations, des primes, des absences, des heures supplémentaires ainsi que l’édition des bulletins de paie et des déclarations sociales.

                    Grâce à l’automatisation et à l’externalisation, les entreprises sécurisent leurs traitements, réduisent les erreurs et gagnent un temps précieux.

              </p>
              <h1 className="mt-10 font-semibold text-24 text-main-black">
                Qu’est-ce que la paie ?
              </h1>
              <p className="mt-4 text-paragraph">
                La paie ne se limite pas à verser un salaire. C’est un processus sensible qui combine le calcul précis des rémunérations, l’intégration des absences, des congés et des heures supplémentaires, ainsi que le respect des lois sociales et fiscales en vigueur. Elle comprend également la production des bulletins de paie et la gestion des déclarations sociales obligatoires. La moindre erreur peut avoir un impact sur la conformité légale de l’entreprise et sur la confiance des employés.
                <br />
                <br />
                <h1 className="mt-10 font-semibold text-24 text-main-black">
                Pourquoi externaliser la gestion de la paie ? 
              </h1>
                Imaginez ne plus avoir à vous soucier des mises à jour légales, des erreurs de calcul ou des retards dans l’édition des bulletins de salaire.
                Avec un service de paie externalisé, votre entreprise bénéficie d’un traitement fiable, sécurisé et toujours conforme.

               Vous gagnez du temps, vous réduisez les risques juridiques et vous pouvez vous concentrer sur votre cœur de métier.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Vidéo - pleine largeur */}
      <div ref={containerRef} className="w-full h-[600px] my-21">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          controls
        >
          <source src="./assets/images/about/paie11.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>

<section className="mt-0 md:mt-20 pb-0 md:pb-[0px]">
  <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
    <div className="col-span-12 lg:col-start-0">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-semibold text-24 text-main-black text-center">
          Pourquoi choisir OPTIMA pour la gestion de votre paie ?
        </h1>
        <ul className="grid grid-cols-2 gap-x-24 gap-y-6 mt-6">
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Entreprise certifiée ISO 27001 & ISO 9001
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Externalisation rapide et automatisée de la paie
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Sécurité et confidentialité des données
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
           Une équipe d’experts dédiée à la paie
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="mt-0 md:mt-20 pb-0 md:pb-[0px]">
  <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
    <div className="col-span-12 lg:col-start-0">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-semibold text-24 text-main-black text-center">
          Les avantages des services de paie
        </h1>
        <ul className="grid grid-cols-2 gap-x-24 gap-y-6 mt-6">
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Réduction des erreurs de calcul
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Gain de temps pour les équipes RH
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Respect des délais de paiement
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <span className="mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#DC2626"/>
                <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Production automatique des déclarations sociales
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
