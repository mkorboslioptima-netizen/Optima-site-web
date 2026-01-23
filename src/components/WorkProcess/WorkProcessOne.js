"use client";
import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

export default function WorkProcessOne() {
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
    <section id="working-process">
      <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid-cols-12 xl:grid">
            <div className="col-span-5">
              <div className="title-area">
                <span className="mb-5 section-title-top-tag">Our Fun Fact</span>
                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                  Efficiency in Motion Navigating the Working Process
                </h2>
                <div
                  id="progress-wrapper"
                  className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
                >
                  <div
                    data-aos="fade-up"
                    className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                  >
                    <div className="relative z-10 flex flex-col space-y-5">
                      <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                        <span className="font-semibold text-purple">01</span>
                      </div>
                      <div>
                        <p className="mb-4 font-semibold text-20 text-main-black">
                          Discover & Analysis
                        </p>
                        <p className="text-paragraph">
                          Discover & Analysis" encapsulates the crucial initial
                          stages of any project or venture. During this phase,
                          teams
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                      <img
                        src="./assets/images/home-one-ff-item-shape-2.webp"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div
                    data-aos-delay="100"
                    data-aos="fade-up"
                    className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                  >
                    <div className="relative z-10 flex flex-col space-y-5">
                      <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                        <span className="font-semibold text-purple">02</span>
                      </div>
                      <div>
                        <p className="mb-4 font-semibold text-20 text-main-black">
                          Strategy Development
                        </p>
                        <p className="text-paragraph">
                          Discover & Analysis" encapsulates the crucial initial
                          stages of any project or venture. During this phase,
                          teams
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                      <img
                        src="./assets/images/home-one-ff-item-shape-2.webp"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div
                    data-aos-delay="200"
                    data-aos="fade-up"
                    className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                  >
                    <div className="relative z-10 flex flex-col space-y-5">
                      <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                        <span className="font-semibold text-purple">03</span>
                      </div>
                      <div>
                        <p className="mb-4 font-semibold text-20 text-main-black">
                          Launch & Execution
                        </p>
                        <p className="text-paragraph">
                          Discover & Analysis" encapsulates the crucial initial
                          stages of any project or venture. During this phase,
                          teams
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                      <img
                        src="./assets/images/home-one-ff-item-shape-2.webp"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="relative flex justify-center w-full h-full xl:justify-end">
                <div className="right-0 h-full xl:absolute">
                  <div className="sticky top-[155px]">
                    <div
                      ref={sceneRef}
                      id="home-working-cursor-anim"
                      className="relative"
                    >
                      <div data-depth="0.30" className="z-10 layer h-fit">
                        <span className="px-[30px] py-2.5 bg-purple shadow-small shadow-purple text-pone text-white rounded-br-none rounded-full md:inline-block hidden">
                          Sales and marketing
                        </span>
                      </div>
                      <div data-depth="0.40" className="z-10 layer h-fit">
                        <div className="hidden md:inline-block">
                          <img
                            src="./assets/images/teer.webp"
                            alt=""
                            className="drop-shadow-xl"
                          />
                        </div>
                      </div>
                      <div data-depth="0.20" className="layer h-fit">
                        <span className="md:inline-block hidden px-[30px] py-2.5 bg-blue-sass text-pone text-white rounded-br-none rounded-full shadow-small shadow-blue-sass">
                          Marketing & Growth
                        </span>
                      </div>
                    </div>
                    <div id="progressThumbHeight">
                      <img
                        src="/assets/images/working-process-thumb.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
