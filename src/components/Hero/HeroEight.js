import React from "react";
import { Link } from "react-router-dom";

export default function HeroEight() {
  return (
    <section
      id="banner"
      className="w-full bg-white pt-[100px] sm:pt-[196px] relative overflow-hidden"
    >
      <img
        src="/assets/images/home-eight/line-1.svg"
        alt=""
        className="absolute top-0"
      />
      {/* <!-- content start --> */}
      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full">
          <h1
            className="text-4xl md:text-75 tracking-tight font-semibold text-main-black pr-2 max-w-[1020px] mt-7 text-center"
            data-depth="-0.28"
          >
            Unified Observability for Micro services & Applications
          </h1>
          <p className="text-18 font-medium font-inter text-paragraph mt-5 md:mt-8 max-w-[808px] text-center">
            Welcome to our innovative Software as a Service SaaS platform, where
            seamless integration meets unparalleled functionality cutting-edge
            solution is designed to revolutionize
          </p>
          <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-10">
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
            <Link to="/blog">
              <div className="border home-two-btn-white-rev group before:bg-blue-sass after:bg-blue-sass border-main-black/10 hover:border-blue-sass">
                <span className="text-base group-hover:text-white text-main-black transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                  Case Studies
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
          <div className="">
            <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center mt-[30px]">
              <li className="flex gap-2.5 items-center">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="#007AFF"
                  />
                </svg>
                <span className="text-paragraph">No credit card required</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="#007AFF"
                  />
                </svg>
                <span className="text-paragraph">Access to all content</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="#007AFF"
                  />
                </svg>
                <span className="text-paragraph"> Best Products 2023 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- img sector  --> */}
      <div className="pt-[70px] sm:pt-[140px] relative h-fit">
        <img
          src="/assets/images/home-eight/line.svg"
          alt=""
          className="absolute right-0 -top-2.5"
        />
        <div className="relative h-fit">
          <div className="relative z-10 w-full mx-auto theme-container">
            <img
              src="/assets/images/home-eight/hero-img.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-full h-1/2 absolute bottom-0 bg-[#007aff]/10 z-0"></div>
        </div>
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
