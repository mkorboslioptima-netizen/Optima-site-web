import React from "react";
import { Link } from "react-router-dom";

export default function CtaSeven() {
  return (
    <section id="consultation" className="relative bg-white">
      <div className="absolute -bottom-2 w-full bg-it-black h-[152px]"></div>
      <div className="relative w-full consultation-section-wrapper">
        <div className="relative z-10 mx-auto theme-container">
          <div className="w-full py-[80px] bg-it-blue rounded-[20px] md:flex relative overflow-hidden">
            {/* <!-- bg shapes  --> */}
            <img
              src="/assets/images/home-seven/cta-shape-1.svg"
              alt=""
              className="absolute top-10 left-10"
            />
            <img
              src="/assets/images/home-seven/cta-shape-1.svg"
              alt=""
              className="absolute bottom-10 left-28 h7-cta-open-anim"
            />
            <img
              src="/assets/images/home-seven/cta-shape-3.svg"
              alt=""
              className="absolute top-10 right-10"
            />
            <img
              src="/assets/images/home-seven/cta-shape-3.svg"
              alt=""
              className="absolute bottom-10 right-28 h7-cta-open-anim-rev"
            />
            <img
              src="/assets/images/home-seven/cta-shape-5.svg"
              alt=""
              className="absolute bottom-0 left-0 cta-dot-anim"
            />

            <div className="flex flex-col items-center w-full">
              <h1 className="py-0.5 px-5 bg-white/10 border-white/20 border rounded-[30px] font-medium text-white w-fit mx-auto">
                Get Consultations
              </h1>
              <h2 className="md:text-48 text-24 font-semibold text-white mb-[32px] mt-2.5 w-full text-center">
                Ready to Get Consultations?
              </h2>
              <p className="text-white mb-[45px] w-full text-center">
                We’ve 25+ years of experience in digital marketing
              </p>

              <Link to="/blogs">
                <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-white after:bg-white hover:border-it-blue w-fit">
                  <span className="text-base group-hover:text-it-blue text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                    Get Consultation
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
                      className="transition-all duration-300 group-hover:stroke-it-blue stroke-white"
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
        </div>
      </div>
    </section>
  );
}
