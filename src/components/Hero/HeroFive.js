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
    // centeredSlides: true,
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
      // Optional GLightbox configuration options
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
        src="/assets/images/home-five/hero/bg.webp"
        alt=""
        className="w-full object-cover absolute top-0 z-0 buisness-dark-black min-h-[520px]"
      />
      {/* <!-- content  --> */}

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="grid grid-cols-7 lg:grid-cols-12 pt-[113px] xl:pt-[213px] pb-[114px]">
          <div className="col-span-7">
            <div>
              <Swiper {...swiperOptions} className="h5_hero_slider">
                <SwiperSlide className="pb-4">
                  <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
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
                    <span className="font-semibold text-white text-18 sm:text-20">
                      Quland Business Agency
                    </span>
                  </div>
                  <h1 className="mt-4 font-semibold text-white text-24 sm:text-48 xl:text-75 sm:mt-8">
                    The Innovating Solutions for Your Business Challenges
                  </h1>
                  <div className="flex flex-col gap-8 pt-5 sm:flex-row sm:pt-11">
                    <Link to="/services">
                      <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
                        <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
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
                            className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
                            d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                    <a
                      href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                      aria-label="play-video"
                      className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                    >
                      <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                        <span>
                          <svg
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                              fill="#D90A2C"
                            />
                          </svg>
                        </span>
                        <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                      </span>
                      <span className="font-semibold text-white border-b border-white">
                        How IT Works
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
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
                    <span className="font-semibold text-white text-18 sm:text-20">
                      Quland Business Agency
                    </span>
                  </div>
                  <h1 className="mt-4 font-semibold text-white text-24 sm:text-48 xl:text-75 sm:mt-8">
                    Quland digital agency We’re Modern & effective DIGITAL
                  </h1>
                  <div className="flex flex-col gap-8 pt-5 sm:flex-row sm:pt-11">
                    <Link to="/services">
                      <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
                        <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
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
                            className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
                            d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                    <a
                      href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                      aria-label="play-video"
                      className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                    >
                      <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                        <span>
                          <svg
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                              fill="#D90A2C"
                            />
                          </svg>
                        </span>
                        <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                      </span>
                      <span className="font-semibold text-white border-b border-white">
                        How IT Works
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
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
                    <span className="font-semibold text-white text-18 sm:text-20">
                      Quland Business Agency
                    </span>
                  </div>
                  <h1 className="mt-4 font-semibold text-white text-24 sm:text-48 xl:text-75 sm:mt-8">
                    The Innovating Solutions for Your Business Challenges
                  </h1>
                  <div className="flex flex-col gap-8 pt-5 sm:flex-row sm:pt-11">
                    <Link to="/services">
                      <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
                        <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
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
                            className="transition-all duration-300 group-hover:stroke-buisness-red stroke-white"
                            d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                    <a
                      href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                      aria-label="play-video"
                      className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                    >
                      <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                        <span>
                          <svg
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                              fill="#D90A2C"
                            />
                          </svg>
                        </span>
                        <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                      </span>
                      <span className="font-semibold text-white border-b border-white">
                        How IT Works
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
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
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] pb-16 sm:pb-[130px]">
          {/* <!-- single card start  --> */}
          <div
            data-aos="fade-up"
            className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card"
          >
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 group-hover:stroke-white"
                  d="M10 7V5.5C10 3.01472 12.0147 1 14.5 1H17.5C19.9853 1 22 3.01472 22 5.5V7M1 13.5212C1 13.5212 5.67706 16.6367 12.9665 17.3663M31 13.5212C31 13.5212 26.3229 16.6367 19.0335 17.3663M7 31H25C28.3137 31 31 28.3137 31 25V13C31 9.68629 28.3137 7 25 7H7C3.68629 7 1 9.68629 1 13V25C1 28.3137 3.68629 31 7 31Z"
                  stroke="#D90A2C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="transition-all duration-300 group-hover:stroke-white"
                  d="M19 16.2402V17.7402C19 17.7552 19 17.7552 19 17.7702C19 19.4052 18.985 20.7402 16 20.7402C13.03 20.7402 13 19.4202 13 17.7852V16.2402C13 14.7402 13 14.7402 14.5 14.7402H17.5C19 14.7402 19 14.7402 19 16.2402Z"
                  stroke="#D90A2C"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link to="/services">
              <h1 className="pt-6 font-semibold text-22 text-main-black">
                Tailored Solutions
              </h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Modern business agencies to customized solutions tailored specific
              needs
            </p>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card"
          >
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="transition-all duration-300 group-hover:fill-white"
                  cx="16"
                  cy="16"
                  r="3"
                  fill="#D90A2C"
                />
                <path
                  className="transition-all duration-300 group-hover:stroke-white"
                  d="M16 16L31 1M25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16ZM31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z"
                  stroke="#D90A2C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <Link to="/services" className="">
              <h1 className="pt-6 font-semibold text-22 text-main-black">
                Multi-disciplinary Expertise
              </h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Business agencies often feature a diverse team of professionals
              with expertise
            </p>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-6 py-5 sm:px-[50px] col-span-4 sm:py-10 bg-white rounded-[20px] group shadow-card"
          >
            <div className="p-5 transition-all duration-300 ease-out rounded-full bg-buisness-red/5 group-hover:bg-buisness-red group-hover:shadow-business-red w-fit">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 group-hover:fill-white"
                  d="M19.75 10.5C19.1977 10.5 18.75 10.9477 18.75 11.5C18.75 12.0523 19.1977 12.5 19.75 12.5V10.5ZM23.9146 12.3292L23.0202 12.7764V12.7764L23.9146 12.3292ZM24.1056 14.9472C24.3526 15.4412 24.9532 15.6414 25.4472 15.3944C25.9412 15.1474 26.1414 14.5468 25.8944 14.0528L24.1056 14.9472ZM23.5863 12.7983L24.1346 11.9619L22.4619 10.8654L21.9137 11.7017L23.5863 12.7983ZM18.6466 18.5093L17.8103 17.961L18.6466 18.5093ZM16.1089 18.4636L15.2535 18.9815L16.1089 18.4636ZM13.2467 13.7351L12.3912 14.2529L13.2467 13.7351ZM10.6457 13.7953L9.76714 13.3176L10.6457 13.7953ZM6.12148 20.0223C5.85765 20.5075 6.03711 21.1147 6.5223 21.3785C7.0075 21.6423 7.6147 21.4629 7.87852 20.9777L6.12148 20.0223ZM7 2H25V0H7V2ZM30 7V25H32V7H30ZM25 30H7V32H25V30ZM2 25V7H0V25H2ZM7 30C4.23858 30 2 27.7614 2 25H0C0 28.866 3.13401 32 7 32V30ZM30 25C30 27.7614 27.7614 30 25 30V32C28.866 32 32 28.866 32 25H30ZM25 2C27.7614 2 30 4.23858 30 7H32C32 3.13401 28.866 0 25 0V2ZM7 0C3.13401 0 0 3.13401 0 7H2C2 4.23858 4.23858 2 7 2V0ZM19.75 12.5H22.573V10.5H19.75V12.5ZM23.0202 12.7764L24.1056 14.9472L25.8944 14.0528L24.809 11.882L23.0202 12.7764ZM22.573 12.5C22.7623 12.5 22.9355 12.607 23.0202 12.7764L24.809 11.882C24.3855 11.035 23.5199 10.5 22.573 10.5V12.5ZM21.9137 11.7017L17.8103 17.961L19.4829 19.0575L23.5863 12.7983L21.9137 11.7017ZM16.9644 17.9458L14.1022 13.2173L12.3912 14.2529L15.2535 18.9815L16.9644 17.9458ZM9.76714 13.3176L6.12148 20.0223L7.87852 20.9777L11.5242 14.273L9.76714 13.3176ZM14.1022 13.2173C13.1028 11.5663 10.689 11.6222 9.76714 13.3176L11.5242 14.273C11.7086 13.9339 12.1913 13.9227 12.3912 14.2529L14.1022 13.2173ZM17.8103 17.961C17.6086 18.2687 17.1549 18.2605 16.9644 17.9458L15.2535 18.9815C16.206 20.5551 18.4745 20.5959 19.4829 19.0575L17.8103 17.961Z"
                  fill="#D90A2C"
                />
              </svg>
            </div>
            <Link to="/services">
              <h1 className="pt-6 font-semibold text-22 text-main-black">
                Innovative Technologies
              </h1>
            </Link>
            <p className="text-paragraph pt-3.5">
              Leading business agencies to innovative technologies and tools to
              enhance
            </p>
          </div>
          {/* <!-- single card end  --> */}
        </div>
      </div>
    </section>
  );
}
