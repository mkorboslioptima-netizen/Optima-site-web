import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

export default function FooterCta() {
  const sceneRef = useRef(null);

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
    <section className="py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-5 md:grid-cols-10 h4-cta-bg rounded-xl py-10 md:py-[70px] px-5 md:px-[110px] relative">
          <div className="relative z-10 col-span-6">
            <div className="px-5 py-0.5 font-medium text-white rounded-[30px] border border-white/10 mb-5 w-fit bg-main-gray/5">
              <span>Get Consultations</span>
            </div>
            <div className="mb-6">
              <h2 className="text-white font-semibold text-24 sm:text-48 max-w-[449px]">
                AI Generate Content in One Seconds
              </h2>
            </div>
            <p className="mb-10 text-white text-18">
              No credit card required, 10+ tools to explore
            </p>

            <Link href="/pricing" className="">
              <div className="group w-fit bg-white px-10 h-[56px] flex justify-center items-center gap-2.5 rounded-[40px] relative price_button_bg before:inline-block before:absolute before:w-full before:h-full before:scale-x-0 hover:before:scale-x-100 overflow-hidden before:transition-transform before:ease-out before:duration-300 before:origin-right hover:before:origin-left before:z-0">
                <span className="relative z-10 font-semibold transition-all duration-300 font-inter text-purple group-hover:text-white">
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
                    className="transition-all duration-300 group-hover:stroke-white"
                    d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                    stroke="#794AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div
            ref={sceneRef}
            id="home-four-cta-mouse-move"
            className="relative flex items-center justify-center col-span-4"
          >
            <div data-depth="0.80" className="relative z-10 layer">
              <img
                data-aos="zoom-in"
                data-aos-delay="100"
                src="/assets/images/home-four/cta-img.webp"
                alt=""
              />
            </div>
            <div data-depth="0.20" className="absolute z-0 layer -right-10">
              <img src="/assets/images/home-four/cta-box.svg" alt="" />
            </div>
          </div>

          <img
            src="/assets/images/home-four/dot-img.webp"
            alt=""
            className="absolute bottom-0 left-0 z-0"
          />
        </div>
      </div>
    </section>
  );
}
