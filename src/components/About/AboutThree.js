import React from "react";

import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutThree() {
  return (
    <section
      id="about"
      className="bg-white w-full py-16 md:py-[130px] overflow-x-hidden"
    >
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-y-10">
          <div className="col-span-6">
            <h1 className="border text-purple border-purple/10 py-0.5 px-5 rounded-[30px] w-fit bg-main-gray">
              About Company
            </h1>
            <h2 className="pt-5 font-semibold text-black text-24 sm:text-48">
              Leading curated design agency, we create modern friendly & clean
              design
            </h2>
          </div>
          <div className="flex flex-col col-span-6 lg:items-end">
            <div className="w-full max-w-[528px]">
              <h1 className="font-semibold text-black sm:text-18">
                A creative agency is a dynamic hub where innovative ideas merge
                with strategic thinking bring visions life agency thrives on the
                power of imagination, leveraging various
              </h1>
              <p className="pt-4 leading-7 text-paragraph md:pt-9">
                Through a blend of artistry, technology storytelling, creative
                agencies craft compelling narratives emotion, spark inspiration
                drive action. With diverse team of designers, writers,
                strategists, and technologists, these navigate the ever-evolving
                landscape of creativity, constantly
              </p>
              <Link to="/contact">
                <div className="home-two-btn-bg py-3.5 group bg-purple border-purple w-fit mt-12">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-purple"
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
        <div
          data-aos="fade-up"
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-[30px] h3-about-card relative overflow-hidden w-full pt-10 md:pt-20"
        >
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={15} />
                %
              </h1>

              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Project Complete
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={10} /> K+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Taux de Satisfaction
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={500} />
                +
              </h1>

              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Années d'Expérience
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={50} />+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Expert Team Member
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
