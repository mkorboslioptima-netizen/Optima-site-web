import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

export default function CtaSix() {
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
    <section
      data-aos="fade-up"
      id="consultation"
      className="bg-green-dark pt-[130px]"
    >
      <div className="relative w-full consultation-section-wrapper">
        <div className="relative z-10 mx-auto theme-container">
          <div className="w-full py-[80px] xl:pl-[110px] pl-10 border border-[#102922] rounded-[20px] bg-[#102922] md:flex relative">
            <div className="absolute bottom-0 left-0 pointer-events-none">
              <img src="/assets/images/cta-dot-shape.webp" alt="" />
            </div>
            <div className="md:w-[432px] w-full">
              <h1 className="py-0.5 px-5 bg-white/10 border-white/20 border rounded-[30px] font-medium text-white w-fit">
                Get Consultations
              </h1>
              <h2 className="md:text-48 text-24 font-semibold text-white mb-[32px] mt-5">
                Get your free digital marketing audit
              </h2>
              <p className="text-white mb-[45px]">
                We’ve 25+ years of experience in digital marketing
              </p>

              <Link href="/blogs">
                <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-white after:bg-white hover:border-green-dark w-fit">
                  <span className="text-base group-hover:text-green-dark text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                    Learn More
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
                      className="transition-all duration-300 group-hover:stroke-green-dark stroke-white"
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
            <div className="flex-1">
              <div
                ref={sceneRef}
                id="consaltaion-mouse-move-anim"
                className="relative flex justify-end w-full mt-10"
              >
                <div className="mr-10 moving-h2-hero-main-img">
                  <img src="/assets/images/home-six/cta-shape.png" alt="" />
                </div>
                <div data-depth="0.40" className="layer">
                  <img src="/assets/images/home-six/cta-img.png" alt="" />
                </div>
                <div
                  data-depth="0.20"
                  className="absolute layer md:right-40 right-10"
                >
                  <img src="/assets/images/home-six/cta-img-2.png" alt="" />
                </div>
                <div
                  data-depth="0.30"
                  className="absolute bottom-0 layer md:right-40 right-10 w-fit left-top-auto"
                >
                  <img src="/assets/images/home-six/cta-img-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
