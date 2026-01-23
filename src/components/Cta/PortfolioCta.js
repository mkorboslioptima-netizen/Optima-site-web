import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioCta() {
  return (
    <section className="relative w-full overflow-hidden" id="cta">
      <div className="flex justify-center w-full">
        <img
          src="/assets/images/home-ten/cta-bg.png"
          alt=""
          className="absolute mx-auto lighting-hue"
        />
      </div>

      <div className="max-w-[1860px] w-full mx-auto relative overflow-hidden">
        <div className="w-full mx-auto theme-container">
          <div className="py-10 md:py-[130px] relative z-10">
            <h2 className="text-4xl md:text-[120px] tracking-tight font-semibold text-white pr-2 mt-5 text-center relative z-10 md:leading-[130px]">
              Let’s Start A Project
            </h2>
            <p className="font-inter text-24 font-medium text-center text-white mt-6 mb-[50px]">
              We’ve 25+ years of experience in digital marketing
            </p>
            <Link href="/pricing">
              <div className="mx-auto home-two-btn-white group border-caribbean-green before:bg-caribbean-green after:bg-caribbean-green border-cabbg-caribbean-green hover:border-white hover:text-white text-main-black w-fit">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                  Let’s Talk Your Project
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
                    d="M0.999878 10.4995L4.79277 6.70662C5.1261
                          6.37328 5.29277 6.20662 5.29277 5.99951C5.29277 5.7924
                          5.1261 5.62574 4.79277 5.2924L0.999878 1.49951"
                    stroke="currentColor"
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
    </section>
  );
}
