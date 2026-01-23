import React from "react";
import { Link } from "react-router-dom";
import LogoSliderFour from "../ClientLogoSlider/LogoSliderFour";

export default function AboutSix() {
  return (
    <div className="bg-it-black" id="about">
      {/* <!-- partner start  --> */}
      <LogoSliderFour />
      {/* <!-- partner end  --> */}
      {/* <!-- about start  --> */}
      <section className="bg-it-black py-[70px] sm:py-[130px]">
        <div className="grid grid-cols-7 mx-auto theme-container lg:grid-cols-12">
          <div className="col-span-6 md:col-span-7">
            <div className="relative w-fit">
              <img
                src="/assets/images/home-seven/about.png"
                alt=""
                className=""
              />
              <div className="w-[100px] aspect-square rounded-[10px] bg-it-blue flex justify-center items-center absolute -top-[50px] -right-[50px]">
                <svg
                  width="64"
                  height="45"
                  viewBox="0 0 64 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5136 0H48.4158L27.9021 30.4053H0L20.5136 0Z"
                    fill="white"
                  />
                  <path
                    d="M21.7364 33.2233L13.791 45H43.0167L63.5303 14.5947H41.96L29.3917 33.2233H21.7364Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-7 md:col-span-5">
            <div className="flex items-center h-full">
              <div className="mt-10 md:mt-0">
                <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit">
                  About Company
                </h1>
                <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-white mt-5">
                  High-impact IT service to grow your business
                </h2>
                <p className="mb-10 text-white mt-9">
                  Welcome to Lumina Learning Institute, where education meets
                  innovation. Our institute is dedicated to providing
                  high-quality online learning experiences to individuals
                  seeking enhance
                </p>

                <Link to="/blogs">
                  <div className="transition-all duration-500 home-two-btn-white-rev group border-white/10 before:bg-it-blue after:bg-it-blue hover:border-it-blue w-fit">
                    <span className="text-base group-hover:text-white text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
                        className="transition-all duration-300 group-hover:stroke-white stroke-white"
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
      {/* <!-- about end  --> */}
    </div>
  );
}
