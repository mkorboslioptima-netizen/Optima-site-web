import React from "react";
import { Link } from "react-router-dom";

export default function CtaFive() {
  return (
    <>
      <section className="relative">
        <img
          src="/assets/images/home-five/cta.webp"
          alt=""
          className="absolute z-0 object-cover h-full"
        />
        <div className="relative z-10 w-full mx-auto theme-container">
          <div className="py-10 md:py-[100px] grid grid-cols-6 md:grid-cols-12 gap-y-20">
            <div className="col-span-6">
              <div className="max-w-[476px]">
                <h1 className="border text-white border-white/10 py-0.5 px-5 rounded-[30px] w-fit bg-white/5 font-medium">
                  Get Consultations
                </h1>
                <h2 className="pt-5 font-semibold text-white text-24 sm:text-48">
                  Get free business consultation today
                </h2>
                <p className="pt-5 pb-5 font-medium text-white md:pb-10">
                  No credit card required, 10+ tools to explore
                </p>

                <Link to="/pricing">
                  <div className="home-two-btn-white group w-fit">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter text-main-black">
                      Start Free Trial
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
                        className="transition-all duration-300 group-hover:stroke-white stroke-main-black"
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
            <div className="relative flex items-center justify-center w-full h-full col-span-6">
              <img
                src="/assets/images/home-five/video_play.svg"
                alt=""
                className="absolute moving-h2-hero-main-img"
              />
              <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
                <span className="size-[56px] rounded-full flex justify-center items-center bg-white relative">
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
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        id="video-player"
        aria-label="play-video"
        className="video-play-btn fixed top-0 left-0 w-screen h-screen bg-black/70 z-[51] hidden justify-center items-center player-open-anim transition-all duration-300 overflow-hidden origin-top-left"
      >
        <button className="absolute transition-all duration-300 text-24 text-white/90 hover:text-white/100 right-10 top-10">
          X
        </button>
        <iframe
          className="absolute"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/ZUXNCY2R5Wo?si=E8zWRcLieSpVH2z4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
