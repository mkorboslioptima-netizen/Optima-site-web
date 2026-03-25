import React, { useEffect } from "react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import GLightbox from "glightbox";
import { Link } from "react-router-dom";

/* ── icône étoile partagée ── */
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#star)">
      <path d="M9.99955 10.9371L0.0498047 7.62184C0.131053 7.4156 0.315423 7.26529 0.534167 7.23435L6.68714 6.32812L9.99955 10.9371Z" fill="#FEC461"/>
      <path d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z" fill="#F7B84E"/>
      <path d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z" fill="#FEC461"/>
      <path d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z" fill="#F7B84E"/>
      <path d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z" fill="#FEC461"/>
      <path d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z" fill="#F7B84E"/>
      <path d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z" fill="#FEC461"/>
      <path d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z" fill="#F7B84E"/>
      <path d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z" fill="#FEC461"/>
      <path d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z" fill="#F7B84E"/>
    </g>
    <defs><clipPath id="star"><rect width="20" height="20" fill="white"/></clipPath></defs>
  </svg>
);

/* ── bouton CTA principal ── */
const CtaBtn = ({ to, label }) => (
  <Link to={to}>
    <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
      <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
        {label}
      </span>
      <svg className="relative z-10" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
          d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
          stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </Link>
);

/* ── données des 3 slides ── */
const SLIDES = [
  {
    badge: "Partenaire officiel SAGE & HOROQUARTZ depuis 2006",
    title: "L'ERP qui transforme votre gestion d'entreprise",
    subtitle: "Commerciale, comptabilité, paie, immobilisations — toutes vos opérations dans une seule plateforme intégrée et certifiée.",
    cta: { to: "/GestionEntreprise", label: "Découvrir nos ERP" },
    video: "https://www.youtube.com/watch?v=TpnFiQm-uVg&list=PL85MFMSouYfQa7FVSc_tf2DqlmzOiM9cp",
  },
  {
    badge: "Leader en Gestion des Temps & Contrôle d'Accès",
    title: "Présences, horaires et activités — maîtrisés à 100 %",
    subtitle: "Avec HOROQUARTZ eTemptation, pilotez en temps réel les pointages, absences et plannings de vos équipes depuis n'importe où.",
    cta: { to: "/Gestion_Du_Temps", label: "Explorer HOROQUARTZ" },
    video: "https://www.youtube.com/watch?v=3PNt8fZ2xtE",
  },
  {
    badge: "Externalisation Paie & RH — 98 % de satisfaction",
    title: "Externalisez votre paie, concentrez-vous sur votre cœur de métier",
    subtitle: "Bulletins conformes, virements sécurisés, déclarations sociales — nous gérons tout à votre place avec rigueur et confidentialité.",
    cta: { to: "/outsourcing", label: "Nos offres Outsourcing" },
    video: "https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa",
  },
];

export default function HeroFive() {
  const swiperOptions = {
    modules: [Autoplay, Navigation, EffectFade],
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    speed: 900,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".h5-hero-next",
      prevEl: ".h5-hero-prev",
    },
  };

  useEffect(() => {
    GLightbox({ selector: ".video-play-btn", touchNavigation: true, loop: false });
  }, []);

  return (
    <section className="relative w-full bg-white" id="banner">
      {/* ── zone hero avec image ── */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/images/home-five/hero/a.jpg"
          alt=""
          className="w-full object-cover absolute top-0 left-0 z-0 buisness-dark-black h-full min-h-[400px]"
        />

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="grid grid-cols-7 lg:grid-cols-12 pt-[130px] xl:pt-[150px] 2xl:pt-[140px] pb-14 sm:pb-[70px] 2xl:pb-[90px]">
          <div className="col-span-7">
            <Swiper {...swiperOptions} className="h5_hero_slider">
              {SLIDES.map((slide, i) => (
                <SwiperSlide key={i} className="pb-4">
                  {/* badge */}
                  <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-sm items-center w-fit">
                    <StarIcon />
                    <span
                      className="font-semibold text-white text-14 sm:text-18"
                      style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.8)" }}
                    >
                      {slide.badge}
                    </span>
                  </div>

                  {/* titre */}
                  <h1
                    className="mt-4 font-semibold text-white text-24 sm:text-48 xl:text-55 2xl:text-65 sm:mt-5 2xl:mt-8 max-w-[620px]"
                    style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.85)" }}
                  >
                    {slide.title}
                  </h1>

                  {/* sous-titre */}
                  <p
                    className="mt-3 text-white/85 text-base sm:text-lg max-w-[520px] leading-relaxed"
                    style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.7)" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* boutons */}
                  <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center">
                    <CtaBtn to={slide.cta.to} label={slide.cta.label} />

                    <a
                      href={slide.video}
                      aria-label="Voir la vidéo"
                      className="hidden sm:flex items-center gap-4 video-play-btn"
                    >
                      <span className="flex size-11 sm:size-[52px] rounded-full justify-center items-center bg-white relative flex-shrink-0">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z" fill="#890011"/>
                        </svg>
                        <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                      </span>
                      <span className="font-semibold text-white border-b border-white/60 text-sm">
                        Voir la vidéo
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* flèches navigation */}
          <div className="hidden xl:flex items-end justify-end w-full h-full col-span-7 gap-2 xl:col-span-5 xl:flex-col xl:justify-center">
            <button className="group h5-hero-prev border border-white/15 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg className="relative z-10 pointer-events-none" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="group rotate-180 h5-hero-next border border-white/15 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg className="relative z-10 pointer-events-none" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>{/* fin theme-container */}
      </div>{/* fin zone hero avec image */}

      {/* ── cards en bas — chevauchement sur l'image ── */}
      <div className="w-full mx-auto theme-container -mt-16 relative z-10">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] pb-12 sm:pb-[60px]">
          <div data-aos="fade-up" className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card">
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="transition-all duration-300 group-hover:stroke-white" cx="16" cy="16" r="14" stroke="#890011" strokeWidth="2"/>
                <path className="transition-all duration-300 group-hover:stroke-white" d="M16 8V16L21 21" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="16" cy="4" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="28" cy="16" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="16" cy="28" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="4" cy="16" r="1.5" fill="#890011"/>
              </svg>
            </div>
            <Link to="/Gestion_Du_Temps" className="flex flex-col items-start">
              <h1 className="pt-3 font-semibold text-22 text-main-black">Gestion des Temps</h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Leader en Tunisie, nous digitalisons le suivi des présences, des horaires et des activités pour aider les entreprises à gagner en fiabilité, productivité et visibilité sur leurs ressources humaines.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card">
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="transition-all duration-300 group-hover:stroke-white" cx="16" cy="16" r="14" stroke="#890011" strokeWidth="2"/>
                <path className="transition-all duration-300 group-hover:stroke-white" d="M16 8V16L21 21" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="16" cy="4" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="28" cy="16" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="16" cy="28" r="1.5" fill="#890011"/>
                <circle className="transition-all duration-300 group-hover:fill-white" cx="4" cy="16" r="1.5" fill="#890011"/>
              </svg>
            </div>
            <Link to="/outsourcing" className="flex flex-col items-start">
              <h1 className="pt-3 font-semibold text-22 text-main-black">Outsourcing de la Paie & RH</h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Entreprise reconnue sur le marché tunisien, nous assurons l'externalisation complète de la paie avec sécurité, conformité et fiabilité, pour une gestion RH simple et sans stress.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card">
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition-all duration-300 group-hover:stroke-white" d="M12 2L20 5V11C20 16.55 16.16 20.74 12 22C7.84 20.74 4 16.55 4 11V5L12 2Z" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="transition-all duration-300 group-hover:stroke-white" d="M9 12L11 14L15 10" stroke="#890011" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Link to="/GestionEntreprise" className="flex flex-col items-start">
              <h1 className="pt-3 font-semibold text-22 text-main-black">Gestion d'Entreprise & ERP</h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Solutions logicielles et ERP pour moderniser votre gestion : commerce, paie, comptabilité et finance. Des outils intégrés et performants adaptés à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
