import React, { useEffect } from "react";
import GLightbox from "glightbox";
import { Link } from "react-router-dom";

export default function VideoCta() {
  useEffect(() => {
    let lightbox = GLightbox({
      // Optional GLightbox configuration options
      selector: ".video-play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section id="cta">
      <div className="w-full max-w-[1590px] rounded-b-[20px] overflow-hidden mx-auto relative flex flex-col items-center">
        <img
          src="/assets/images/home-eight/cta-circle.svg"
          alt=""
          className="absolute top-0 max-w-full"
        />
        <a
          href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
          aria-label="play-video"
          className="video-play-btn flex space-x-8 ml-7 sm:ml-0 items-center mt-[130px]"
        >
          <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-blue-sass/10 relative">
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
                  fill="#007AFF"
                />
              </svg>
            </span>
            <div className="absolute w-full h-full rounded-full h8-play-btn-line1"></div>
            <div className="absolute w-[130%] h-[130%] rounded-full h8-play-btn-line2"></div>
            <div className="absolute w-[160%] h-[160%] rounded-full h8-play-btn-line3"></div>
          </span>
        </a>
        <h1 className="text-24 sm:text-48 font-semibold text-main-black my-10 max-w-[640px] text-center">
          Start automating your design system effectively today
        </h1>
        <Link to="/pricing">
          <div className="text-white home-two-btn-white group before:bg-blue-sass after:bg-blue-sass hover:text-main-black hover:border-main-black/10">
            <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 delay-100 group-hover:text-main-black font-inter">
              Start Free 14-days Trial
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
                className="transition-all duration-300 group-hover:stroke-main-black stroke-white"
                d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
        <img
          src="/assets/images/home-eight/cta.png"
          alt=""
          className="mt-[130px] relative z-10"
        />
        <img
          src="/assets/images/home-eight/cta-1.svg"
          alt=""
          className="absolute bottom-0 left-0 z-0 cta_bg_anim"
        />
        <img
          src="/assets/images/home-eight/cta-2.svg"
          alt=""
          className="absolute bottom-0 right-0 z-0 cta_bg_anim"
        />
      </div>
    </section>
  );
}
