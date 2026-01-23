import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

export default function HeroThree() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  };
  const sceneRef = useRef(null);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);
  const perspectiveValue = 20; // Initial perspective value

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (imageRef.current) {
        if (top > 500) {
          imageRef.current.style.transform = "none";
        } else {
          const calcValue = perspectiveValue + top / 2;
          imageRef.current.style.transform = `perspective(${calcValue}px) rotateX(1deg)`;
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      // Cleanup the parallax instance on component unmount
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);
  return (
    <section
      id="banner"
      className="bg-main-black relative mt-8 md:mt-0 pb-16 md:pb-[130px] h3-hero overflow-x-hidden"
    >
      {/* <!-- background --> */}
      <div
        id="hero-three-cm-anim"
        ref={sceneRef}
        className="absolute top-0 left-0"
      >
        <div data-depth="0.30" className="layer">
          <img src="/assets/images/home-three/hero/bg.svg" alt="" />
        </div>
      </div>
      <div className="z-10 w-full mx-auto theme-container xl:pt-24">
        <div className="w-full max-w-[792px] mx-auto flex flex-col items-center pt-20 xl:pt-[150px]">
          <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-2 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_460_23214)">
                <path
                  d="M9.99955 10.9371L0.0498047 7.62184C0.131053 7.4156 0.315423 7.26529 0.534167 7.23435L6.68714 6.32812L9.99955 10.9371Z"
                  fill="#FEC461"
                />
                <path
                  d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                  fill="#F7B84E"
                />
                <path
                  d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                  fill="#FEC461"
                />
                <path
                  d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                  fill="#F7B84E"
                />
                <path
                  d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                  fill="#FEC461"
                />
                <path
                  d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                  fill="#F7B84E"
                />
                <path
                  d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                  fill="#FEC461"
                />
                <path
                  d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                  fill="#F7B84E"
                />
                <path
                  d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                  fill="#FEC461"
                />
                <path
                  d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                  fill="#F7B84E"
                />
              </g>
              <defs>
                <clipPath id="clip0_460_23214">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold text-white text-18 md:text-20">
              Quland Creative Agency
            </span>
          </div>
          <h1 className="mt-8 text-3xl font-semibold text-center text-white md:text-65 md:mt-10">
            We Make Creative & Interesting Think to build Design & Branding
          </h1>
          <h2 className="mt-8 text-center text-white text-20 md:text-24 md:mt-14">
            25+ Years Of Experience In Creative Agency Solutions
          </h2>
          <div className="flex flex-col gap-6 mt-8 md:flex-row md:mt-12">
            <Link href="/projects">
              <div className="home-two-btn-bg group bg-[#4A7DFF] border-[#4A7DFF] py-[15px]">
                <span className="text-base group-hover:text-[#4A7DFF] text-white transition-all duration-300 font-semibold font-inter relative z-10">
                  Explore Service
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-[#4A7DFF] stroke-white transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <Link href="/projects">
              <div className="home-two-btn-white-rev group">
                <span className="text-base group-hover:text-[#4A7DFF] text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                  Learn More
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-#4A7DFF stroke-white transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="flex items-center justify-center"
          id="hero-banner"
          ref={bannerRef}
        >
          <img
            src="/assets/images/home-three/hero/img.webp"
            alt=""
            className="relative z-10 pt-12 img"
            ref={imageRef}
          />
          <img
            src="/assets/images/home-three/hero/line-bg-1.svg"
            alt=""
            className="absolute z-0 translate-y-12"
          />
        </div>
        <div className="w-full pt-10 xl:pt-[123px]">
          <h1 className="w-full font-medium text-center text-white">
            We’ve more then 200+ global clients
          </h1>
          <Swiper
            {...swiperOptions}
            className="overflow-hidden h3-partner_slider mt-11"
          >
            {/* <!-- Slides --> */}
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/spotify.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/dropbox.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/hootsuite.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/indeed.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/linkedIn.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/mailchimp.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/assets/images/home-three/partner/metacritic.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
