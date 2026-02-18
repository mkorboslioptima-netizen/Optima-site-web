import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ServiceBI() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".h2-case-study-next",
      prevEl: ".h2-case-study-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 50 },
    },
  };

  return (
    <section id="services" className="w-full py-16 md:py-[130px] -top-2/4 bg-white relative overflow-hidden">
      <div>
        <img src="./assets/images/home-two/shape-1.svg" alt="bg-shape" className="absolute bottom-20 moving-anim tran filter grayscale transition-all duration-500" />
      </div>

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full gap-5">
          <p className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium">Nos Services BI</p>
          <h1 className="text-main-black text-24 md:text-48 font-semibold max-w-[684px] w-full text-center">Des tableaux de bord et analyses pour piloter votre activité</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-7 md:mt-[70px]">
          <div data-aos-duration="1000" data-aos="fade-left" className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 transition-all duration-300 ">
            <div className="relative z-10">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="12" width="44" height="30" rx="4" stroke="#007a55" strokeWidth="2.5" />
                <path d="M14 28H44" stroke="#007a55" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="20" r="2" fill="#007a55" />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300 group-hover:text-black text-main-black text-22">Reporting avancé avec Excel</h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">Créez et actualisez vos tableaux de bord en temps réel à partir des données Sage. Automatisez vos calculs et générez facilement des états financiers, commerciaux ou opérationnels.</p>
            </div>
          </div>

          <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="100" className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 ">
            <div className="relative z-10">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 18H14C10.7 18 8 20.7 8 24V28" stroke="#007a55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 12L44 18L38 24" stroke="#007a55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 40H44C47.3 40 50 37.3 50 34V30" stroke="#007a55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300  text-main-black text-22">Partage simple et sécurisé</h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">Diffusez vos reportings par email, impression ou consultation sécurisée, avec ou sans Excel®. Publication rapide, sans compétences techniques.</p>
            </div>
          </div>

          <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="300" className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 ">
            <div className="relative z-10">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="18" stroke="#007a55" strokeWidth="2.5" />
                <path d="M18 26L24 32L34 20" stroke="#007a55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300  text-main-black text-22">Tableaux de bord dynamiques en temps réel</h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">Bénéficiez d’analyses précises et actualisées grâce au moteur In-Memory. Visualisez vos données avec des graphiques, courbes et dashboards clairs et performants.</p>
            </div>
          </div>

          <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="300" className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 transition-all duration-300 ">
            <div className="relative z-10">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="50" height="50" rx="6" stroke="#007a55" strokeWidth="2.5" />
                <path d="M12 42V30M22 42V26M32 42V34M42 42V22" stroke="#007a55" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300 group-hover:text-black text-main-black text-22">Alertes & KPIs en temps réel</h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">Recevez des alertes automatiques dès qu'un indicateur critique dépasse un seuil défini.</p>
            </div>
          </div>
        </div>

        <div className="pt-16 md:pt-[130px]" id="caseStudies">
          <p className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium w-fit">Méthodologie</p>
          <div className="flex flex-col items-end justify-between w-full mt-5 sm:flex-row">
            <h1 className="max-w-[660px] text-24 sm:text-48 text-main-black font-semibold">Découvrez les fonctionnalités BI de Sage BI Reporting</h1>
            <div className="flex gap-2.5">
              <button className="h2-case-study-next w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg className="relative z-10 pointer-events-none" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75" stroke="#007a55" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button className="h2-case-study-prev rotate-180 w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg className="relative z-10 pointer-events-none" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75" stroke="#007a55" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>

          <Swiper {...swiperOptions} className="mt-10 overflow-hidden swiper case_study_slider md:mt-16">
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 text-[#007a55] group-hover:text-black">Connectivité et accès aux données</p>
                  <a href=""><h1 className="pt-1 font-semibold text-24 text-main-black group-hover:text-black underlines">Accédez facilement à vos données et suivez vos indicateurs clés en temps réel.</h1></a>
                </div>
                <img src="./assets/images/home-two/case_study/analyse-commerciale.webp" alt="" className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 text-[#007a55] group-hover:text-black">Exploration de données</p>
                  <a href=""><h1 className="pt-1 font-semibold text-24 text-main-black group-hover:text-black underlines">Explorez vos données librement pour des analyses rapides et personnalisées.</h1></a>
                </div>
                <img src="./assets/images/home-two/case_study/suivi-processus-vente.webp" alt="" className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 text-[#007a55] group-hover:text-black">Consolidation multi‑sources</p>
                  <a href=""><h1 className="pt-1 font-semibold text-24 text-main-black group-hover:text-black underlines">Consolidez efficacement vos sources d’information pour un reporting global et fiable.</h1></a>
                </div>
                <img src="./assets/images/home-two/case_study/Sage-100-cloud-Dashboard.png" alt="" className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
