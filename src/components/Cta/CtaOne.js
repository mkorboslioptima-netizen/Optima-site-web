import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";
import lineAnimation from "../../lottie/left_lines.json";
import Lottie from "lottie-react";

export default function CtaOne() {
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
    <section data-aos="fade-up" id="consultation">
      <div className="relative w-full consultation-section-wrapper">
        <div className="relative z-10 mx-auto theme-container">
          <div className="w-full py-[80px] xl:pl-[110px] pl-10 border border-[#e7e3fa] rounded-[20px] bg-main-gray md:flex relative">
            <div className="absolute bottom-0 left-0 pointer-events-none">
              <img src="/assets/images/cta-dot-shape.webp" alt="" />
            </div>
            <div className="md:w-[432px] w-full">
              <span className="mb-5 section-title-top-tag">
                Get Consultations
              </span>
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[32px]">
                Get your free digital marketing audit
              </h2>
              <p className="text-paragraph mb-[45px]">
                We’ve 25+ years of experience in digital marketing
              </p>

              <Link href="/contact">
                <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
                  <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-blue-seo"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <div
                ref={sceneRef}
                id="consaltaion-mouse-move-anim"
                className="relative flex justify-end w-full mt-10"
              >
                <div className="mr-10 moving-h2-hero-main-img">
                  <img src="/assets/images/cta-shape.webp" alt="" />
                </div>
                <div data-depth="0.40" className="layer">
                  <img src="/assets/images/cta-p-1.webp" alt="" />
                </div>
                <div
                  data-depth="0.20"
                  className="absolute layer md:right-40 right-10"
                >
                  <img src="/assets/images/cta-p-2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between top-20">
          <Lottie animationData={lineAnimation} loop={true} />
          <Lottie
            animationData={lineAnimation}
            className="transform rotate-180"
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}
