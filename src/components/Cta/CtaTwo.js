import React from "react";

export default function CtaTwo() {
  return (
    <section className="relative w-full border-b bg-black-seo border-white/5">
      <div className="grid w-full grid-cols-1 mx-auto theme-container xl:grid-cols-2">
        <div className="col-span-1 py-10 md:py-[130px] xl:border-r border-white/5 relative">
          {/* <!-- bg shape  --> */}
          <img
            src="/assets/images/home-two/shape-2.svg"
            alt="bg-shape"
            className="absolute bottom-24 -left-56 moving-anim-left"
          />
          <h1 className="text-white font-medium py-1 px-5 rounded-[30px] border-[1.2px] border-white/10 w-fit">
            Get Consultations
          </h1>
          <h2 className="max-w-[470px] font-semibold text-24 sm:text-48 text-white pt-5 mb-10">
            Get a Free SEO Audit! Let’s Talk Experts
          </h2>
          <a href="#">
            <div className="py-3 home-two-btn-bg group w-fit bg-blue-seo border-blue-seo">
              <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                Contact US
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
                  className="transition-all duration-300 group-hover:stroke-blue-seo"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="col-span-1 pb-16 pt-0 xl:pt-[130px] md:pb-[130px] flex flex-col xl:items-end">
          {/* <!-- bg anim  --> */}
          <div className="absolute top-0 right-0 z-0 w-full h-full anim-light-bg"></div>
          <div>
            <h1 className="text-white font-medium py-1 px-5 rounded-[30px] border-[1.2px] border-white/10 w-fit">
              Newsletter
            </h1>
            <h2 className="max-w-[380px] font-semibold text-24 md:text-48 text-white pt-5 mb-10">
              Subscribe To Our Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row gap-3.5">
              <input
                type="email"
                id="eTwo"
                placeholder="Email Address"
                className="py-1.5 px-6 border border-white/10 rounded-[28px] bg-main-gray/5 w-[295px] max-w-full relative z-10 focus:border-white focus:outline-none text-white"
              />
              <a href="#">
                <div className="home-two-btn-white-rev group w-fit">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                    Sign Up
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
                      className="transition-all duration-300 group-hover:stroke-blue-seo stroke-white"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
