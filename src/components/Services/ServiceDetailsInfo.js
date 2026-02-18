import React, { useRef, useEffect } from "react";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

export default function ServiceDetailsInfo() {
  // Refs pour la vidéo et son container
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);

  // IntersectionObserver pour autoplay/pause
  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;

          if (entry.isIntersecting && !isPlayingRef.current) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  isPlayingRef.current = true;
                })
                .catch(() => {});
            }
          } else if (!entry.isIntersecting && isPlayingRef.current) {
            video.pause();
            isPlayingRef.current = false;
          }
        });
      },
      { threshold: 0.5 } // Démarre quand 50% de la vidéo est visible
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
    <section className="pt-16 md:pt-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">
          <div data-aos="fade-up" className="col-span-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/assets/images/service/logo-horoquartz.png"
                alt="Horoquartz"
                className="max-w-[250px] w-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-paragraph mt-[30px] mb-10 max-w-[786px]">
              Leader et pionnier des solutions de gestion des temps depuis sa création en 1971, Horoquartz accompagne aujourd'hui plus de 3 500 clients sur 2 domaines d'expertise : - l'optimisation des Ressources Humaines avec eTemptation, pour superviser la gestion des présences, le suivi d'activité et la gestion des plannings - une solution de gestion des temps dédiée à la PME eTsentiel - la sûreté et la sécurité avec Protecsys 2 Suite, pour assurer la sécurité des biens et des personnes grâce à des solutions de contrôle d'accès, détection intrusion, vidéosurveillance, supervision et gestion des visiteurs; Aujourd'hui, près de 4 millions de salariés sont gérés au quotidien grâce aux solutions Horoquartz, dans tous les secteurs d'activité : industrie, agroalimentaire, banque et assurance, distribution, santé, BTP, enseignement, hôtellerie et restauration, secteur public, services, transport et logistique... Répartis dans 40 pays, les clients Horoquartz bénéficient de solutions globales parfaitement adaptées aux spécificités locales, grâce à une expérience de plus de 50 ans.
            </p>

            {/* Engagement & Expertise */}
            <h2 className="font-semibold text-[27px] leading-[35px] tracking-tight text-main-black mt-10">
              Engagement & Expertise
            </h2>
            <p className="mt-5 text-paragraph">
              Nous mettons notre expertise au service de votre performance RH en vous accompagnant à chaque étape de votre projet Horoquartz. De l'analyse des besoins au paramétrage personnalisé, en passant par la formation et le support continu, nous nous engageons à vous fournir une solution fiable, conforme et parfaitement adaptée à votre organisation.
            </p>

            {/* Cartes */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[75px]">
              {/* Card 1 */}
              <div className="col-span-4 py-10 border-b border-gray-200">
                <h1 className="flex items-center gap-4 mt-4 font-semibold text-18 text-main-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#f25151"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z" fill="white"/>
                  </svg>
                  Audit & Analyse des besoins
                </h1>
                <p className="mt-3 text-paragraph">
                  Analyse complète de votre organisation pour définir une solution adaptée à vos objectifs RH.
                </p>
              </div>
              {/* Card 2 */}
              <div className="col-span-4 py-10 border-b border-gray-200">
                <h1 className="flex items-center gap-4 mt-4 font-semibold text-18 text-main-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#f25151"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z" fill="white"/>
                  </svg>
                  Paramétrage sur mesure
                </h1>
                <p className="mt-3 text-paragraph">
                  Configuration personnalisée selon vos règles métier et exigences réglementaires.
                </p>
              </div>
              {/* Card 3 */}
              <div className="col-span-4 pt-[30px] pb-10">
                <h1 className="flex items-center gap-4 mt-4 font-semibold text-18 text-main-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#f25151"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z" fill="white"/>
                  </svg>
                  Formation & Support
                </h1>
                <p className="mt-3 text-paragraph">
                  Formation des équipes et assistance continue pour garantir une utilisation optimale.
                </p>
              </div>
              {/* Card 4 */}
              <div className="col-span-4 pt-[30px] pb-10">
                <h1 className="flex items-center gap-4 mt-4 font-semibold text-18 text-main-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#f25151"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z" fill="white"/>
                  </svg>
                  Suivi & Maintenance
                </h1>
                <p className="mt-3 text-paragraph">
                 Accompagnement durable avec mises à jour régulières et veille réglementaire active.
                </p>
              </div>
            </div>

          </div>

          <ServiceDetailsSidebar />
        </div>
        <hr className="bg-purple/10 mt-[120px]" />
      </div>

      {/* Section OPTIMA - Centrée entre devis et vidéo */}
      <div className="w-full mx-auto theme-container my-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-semibold text-[27px] leading-[35px] tracking-tight text-main-black">
            HOROQUARTZ DÉCOUVREZ L'EXPÉRIENCE
          </h2>
          <p className="mt-5 text-paragraph">
            Plongez dans l'univers fascinant de HoroQuartz et laissez vos énergies guider votre quotidien. De la lecture des cycles lunaires à l'interprétation des vibrations des cristaux, nos experts partagent leurs conseils, expériences et prédictions. Explorez les tendances astrales, découvrez le pouvoir caché de vos quartz et laissez-vous inspirer pour harmoniser votre esprit, votre corps et votre énergie. Chaque jour apporte son lot de révélations, et nous sommes là pour vous aider à les déchiffrer.
          </p>
        </div>
      </div>

      {/* Vidéo - PLEINE LARGEUR ABSOLUE (en dehors de theme-container) */}
      <div ref={containerRef} className="w-screen h-[400px] md:h-[500px] lg:h-[600px] my-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
    </section>
  );
}
