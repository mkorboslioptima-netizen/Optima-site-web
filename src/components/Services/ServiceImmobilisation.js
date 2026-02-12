import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ServiceTwo() {
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
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section
      id="services"
      className="w-full py-16 md:py-[130px] -top-2/4 bg-white relative overflow-hidden"
    >
      <div>
        <img
          src="./assets/images/home-two/shape-1.svg"
          alt="bg-shape"
  className="absolute bottom-20 moving-anim tran filter grayscale transition-all duration-500"></img>    
    </div>
      {/* <!-- animated circle bg  --> */}
      <div className="absolute z-0 flex items-center justify-center w-2 h-2 -top-1 -left-1">
        <div className="animated_circle bg-black/5"></div>
        <div className="animated_circle2 bg-black/5"></div>
        <div className="animated_circle3 bg-black/5"></div>
        <div className="animated_circle4 bg-black/5"></div>
      </div>
      {/* <!-- animated circle bg  --> */}

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full gap-5">
          <p className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium">
            Nos Services
          </p>
          <h1 className="text-main-black text-24 md:text-48 font-semibold max-w-[684px] w-full text-center">
            Des services avancés pour faire croître votre entreprise
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-7 md:mt-[70px]">
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 transition-all duration-300 "
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-white/10"></div>
              <div className="animated_circle_sm2 bg-white/10"></div>
              <div className="animated_circle_sm3 bg-white/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 "
                  d="M4 6C4 4.9 4.9 4 6 4H26L54 32L32 54L4 26V6Z"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  className="transition-all duration-300 "
                  cx="16"
                  cy="16"
                  r="4"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <path
                  className="transition-all duration-300 "
                  d="M36 28L28 36"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M42 34L34 42"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300 group-hover:text-black text-main-black text-22">
                Une conformité optimale
              </h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">
             Les écritures d’achats d’immobilisations de la comptabilité sont automatiquement transformées en fiches d’immobilisation. Vous pouvez lier les immobilisations entre elles et les céder simultanément.
              </p>
             
            </div>
          </div>
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="100"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 "
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-[#007a55]/10"></div>
              <div className="animated_circle_sm2 bg-black/10"></div>
              <div className="animated_circle_sm3 bg-gray/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 "
                  d="M29 2L52 14V44L29 56L6 44V14L29 2Z"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M29 56V29"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M52 14L29 29L6 14"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M40.5 8L17.5 21.5"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300  text-main-black text-22">
                Une évaluation immédiate
              </h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">
                Choisissez votre mode de calcul pour l’amortissement. Profitez des fonctions de fractionnement, de réévaluation des immobilisations et de révision des plans d’amortissement.
              </p>
             
            </div>
          </div>
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="300"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 "
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
            <div className="animated_circle_sm bg-[#007a55]/10"></div>
              <div className="animated_circle_sm2 bg-black/10"></div>
              <div className="animated_circle_sm3 bg-gray/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 "
                  d="M2 2H10L16 38H46L54 14H12"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  className="transition-all duration-300 "
                  cx="19"
                  cy="50"
                  r="4"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <circle
                  className="transition-all duration-300 "
                  cx="43"
                  cy="50"
                  r="4"
                  stroke="#007a55"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300  text-main-black text-22">
                Un gain de productivité avéré

              </h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">
                Votre logiciel s’interface et communique en temps réel avec Sage 100 Comptabilité, vous évitant de ressaisir vos données. Vous pouvez suivre les acquisitions et cessions et établir des budgets de prévisions de charges.
              </p>
              
            </div>
          </div>
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="300"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-gray-200 transition-all duration-300 "
          >
            {/* <!-- animation circle  --> */}
         
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 "
                  d="M4 54H54"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M4 54V4"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  className="transition-all duration-300 "
                  x="10"
                  y="34"
                  width="8"
                  height="20"
                  rx="1"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <rect
                  className="transition-all duration-300 "
                  x="22"
                  y="24"
                  width="8"
                  height="30"
                  rx="1"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <rect
                  className="transition-all duration-300 "
                  x="34"
                  y="14"
                  width="8"
                  height="40"
                  rx="1"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <rect
                  className="transition-all duration-300 "
                  x="46"
                  y="22"
                  width="8"
                  height="32"
                  rx="1"
                  stroke="#007a55"
                  strokeWidth="2"
                />
                <path
                  className="transition-all duration-300 "
                  d="M10 28L22 18L34 10L50 6"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all duration-300 "
                  d="M44 6H50V12"
                  stroke="#007a55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold transition-all duration-300 group-hover:text-black text-main-black text-22">
                Une administration simplifiée
              </h1>
              <p className="mt-4 transition-all duration-300 text-paragraph group-hover:text-black">
                Vous disposez d'un accès permanant à vos rapports clés : états des immobilisations, des amortissements et des cessions ; états préparatoires à la liasse fiscale ; état comparatif.
              </p>
              
            </div>
          </div>
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- case study start  --> */}
        <div className="pt-16 md:pt-[130px]" id="caseStudies">
          <p className="px-5 py-1 text-white rounded-[30px] bg-buisness-red font-medium w-fit">
            Notre Méthodologie
          </p>
          <div className="flex flex-col items-end justify-between w-full mt-5 sm:flex-row">
            <h1 className="max-w-[660px] text-24 sm:text-48 text-main-black font-semibold">
              Une Suite 100% Intégrée
            </h1>
            <div className="flex gap-2.5">
              <button className="h2-case-study-next w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="#007a55"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="h2-case-study-prev rotate-180 w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="#007a55"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            {...swiperOptions}
            className="mt-10 overflow-hidden swiper case_study_slider md:mt-16"
          >
            <SwiperSlide>
              {" "}
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-[#d4d4d8] before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-[#007a55] group-hover:text-black">
                    Gestion des immobilisations
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-black underlines">
                      Suivi complet du cycle de vie des actifs
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/sage_100c_immobilisations-functions_de_base.jpg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
              
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-[#007a55]/10"></div>
              <div className="animated_circle_sm2 bg-black/10"></div>
              <div className="animated_circle_sm3 bg-gray/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-[#d4d4d8] before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-[#007a55] group-hover:text-black">
                  Amortissements & Révisions
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-black underlines">
                      Calculs d’amortissement flexibles et évolutifs
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/sage_100c_immobilisations-inventaire_comptable.jpg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
               
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-[#d4d4d8] before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-[#007a55] group-hover:text-black">
                    Conformité fiscale et inventaire
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-black underlines">
                      Fiscalité et arrêtés simplifiés
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/sage_100c_immobilisations-code_analytique.jpg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                
              </div>
            </SwiperSlide>
            
            
         
          </Swiper>
        </div>
        {/* <!-- case study end  --> */}
      </div>
    </section>
  );
}
