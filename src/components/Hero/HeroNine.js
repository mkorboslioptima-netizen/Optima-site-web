import React from "react";
import { Link } from "react-router-dom";

export default function HeroNine() {
  return (
    <section
      id="banner"
      className="relative flex justify-center w-full py-3 pt-24 overflow-hidden bg-white"
    >
      <div className="relative w-full max-w-[1860px] overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="./assets/images/home-nine/hero-bg.png"
          alt=""
          className="absolute z-0 w-full h-full mx-auto cta_bg_anim"
        />
        {/* <!-- content start --> */}
        <div className="w-full max-w-[1506px] theme-container mx-auto">
          <div className="grid grid-cols-6 xl:grid-cols-12 z-10 pt-[70px] lg:pt-[120px] lg:pb-[120px]">
            <div className="col-span-6 my-auto">
              <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_460_33032)">
                    <path
                      d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
                      fill="#FEC461"
                    />
                    <path
                      d="M9.99999 10.937V16.6775L4.497 19.6149C4.28451 19.7274 4.0317 19.709 3.83765 19.5649L9.99999 10.937Z"
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
                      d="M10 0.312012V10.9367L6.68762 6.32748L9.44068 0.665128C9.5438 0.449196 9.76254 0.312012 10 0.312012Z"
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
                    <clipPath id="clip0_460_33032">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="font-semibold text-white text-18 sm:text-20">
                  Average App Rating 4.8
                </span>
              </div>
              <h1
                className="text-4xl md:text-65 tracking-tight font-semibold text-white pr-2 mt-7 max-w-[586px] relative z-10"
                data-depth="-0.28"
              >
                Manage your ultimate financial companion fast
              </h1>
              <p className="text-18 font-medium font-inter text-white mt-5 md:mt-5 max-w-[580px] relative z-10">
                Welcome to our innovative Software as a Service SaaS platform,
                where seamless integration meets unparalleled functionality
              </p>
              <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
                <Link href="/pricing">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white text-main-black font-inter">
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
                <Link href="/blogs">
                  <div className="home-two-btn-white-rev group before:bg-app-main after:bg-app-main hover:border-app-main">
                    <span className="text-base group-hover:text-main-black text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
              </div>
              <div className="flex gap-2.5 items-center mt-5 relative z-10">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47571 13.0406C2.73638 12.21 2.13915 11.3975 1.56224 10.6106C1.03507 9.8951 0.57798 9.13054 0.197276 8.32748C-0.0410056 7.84021 -0.146474 7.34682 0.369659 7.02959C1.84884 6.12056 2.15196 6.98853 2.95595 7.99564C3.43251 8.5924 4.13524 9.57646 4.57556 10.1982C4.99614 10.792 5.50888 9.72033 5.71356 9.41795C6.44106 8.3433 8.33189 5.71236 9.11325 4.73986C9.85505 3.81666 12.2494 1.23033 12.6957 0.818964C13.0756 0.46869 13.8778 -0.299591 14.4172 0.124237C14.984 0.569549 15.2609 1.41603 14.8625 1.96642C14.1686 2.92463 13.0786 3.83615 12.3245 4.74853C10.7978 6.59541 9.35247 8.58619 7.96509 10.5684C7.49364 11.242 6.83173 12.3701 6.42079 13.1006C5.65208 14.4672 4.97688 14.7273 3.47571 13.0406Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">No credit card required</p>
              </div>
            </div>
            <img
              src="./assets/images/home-nine/hero-img.png"
              alt="img"
              className="relative self-end col-span-5 lg:absolute -right-16 -bottom-3 moving-h2-hero-main-img"
            />
          </div>
        </div>
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
