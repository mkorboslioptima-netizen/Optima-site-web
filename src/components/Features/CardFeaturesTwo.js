import React from "react";
import { Link } from "react-router-dom";

export default function CardFeaturesTwo() {
  return (
    <section>
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 gap-y-10">
          <div className="col-span-3 xl:px-[62px]">
            <div className="max-w-[476px]">
              <h1 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                Finance with simple and modern all in one platform
              </h1>
              <p className="pt-5 text-paragraph sm:pt-10">
                Welcome to Lumina Learning Institute, where education meets
                innovation. Our institute is dedicated to providing high-quality
                online learning experiences to individuals seeking their skills
              </p>
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:mt-1.5 before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      Manage your spending and save
                    </h1>
                    <p className="text-paragraph mt-0.5">
                      Track expenses in real-time compare them budgeted amounts
                      businesses drive innovation
                    </p>
                  </div>
                </li>
                <li className="flex gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:mt-1.5 before:bg-purple tick-before before:flex before:justify-center before:items-center text-main-black mt-6">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      Easily view and manage your bills
                    </h1>
                    <p className="text-paragraph mt-0.5">
                      Automatically categorize transactions and provide insights
                      into spending patterns.
                    </p>
                  </div>
                </li>
              </ul>
              <Link to="/services">
                <div className="home-two-btn-bg group bg-transparent border-main-black/10 hover:border-app-main py-[15px] w-fit before:bg-app-main after:bg-app-main">
                  <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
                    Explore Service
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
                      className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
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
          <div className="relative col-span-3 flex justify-center items-end xl:px-[62px]">
            <img
              src="/assets/images/home-nine/features-bg.svg"
              alt=""
              className="absolute z-0 cta_bg_anim"
            />
            <img
              src="/assets/images/home-nine/features-img-2.png"
              alt=""
              className="relative z-10 moving-h2-hero-main-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
