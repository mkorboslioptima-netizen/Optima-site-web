import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GLightbox from "glightbox";
import { Link } from "react-router-dom";

export default function HeroFive() {
  const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: {
      nextEl: ".h5-hero-next",
      prevEl: ".h5-hero-prev",
    },
  };

  useEffect(() => {
    let lightbox = GLightbox({
      selector: ".video-play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  
  return (
    <section
      className="relative w-full py-3 overflow-hidden bg-white"
      id="banner"
    >
      {/* <!-- background  --> */}
      <img
        src="/assets/images/home-five/hero/erp.jpeg"
        alt=""
        className="w-full object-cover absolute top-0 z-0 buisness-dark-black min-h-[520px]"
      />
      {/* <!-- content  --> */}

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="grid grid-cols-7 lg:grid-cols-12 pt-[113px] xl:pt-[213px] pb-[114px]">
          <div className="col-span-7">
            <div>
              <h1 className="font-semibold text-white text-24 sm:text-48 xl:text-75 drop-shadow-lg">
                Gestion d'Entreprise & ERP
              </h1>
            </div>
          </div>
          
          <div className="flex items-end justify-end w-full h-full col-span-7 gap-2 xl:col-span-5 xl:flex-col xl:justify-center">
            <button className="group h5-hero-prev border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="group rotate-180 h5-hero-next border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- cards  --> */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] pb-16 sm:pb-[200px]">
          {/* Contenu des cartes si nécessaire */}
        </div>
      </div>


    </section>
  );
}
