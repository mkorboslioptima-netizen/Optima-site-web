import React from "react";
import { Link } from "react-router-dom";

export default function WhyChooseUsTwo() {
  return (
    <section id="about" className="py-[70px] md:py-[130px]">
      <div className="grid w-full grid-cols-6 mx-auto theme-container lg:grid-cols-12">
        <div className="flex flex-col justify-center h-full col-span-6">
          <h1 className="px-5 bg-blue-sass/10 border border-blue-sass/20 text-blue-sass font-medium rounded-[30px] w-fit">
            Why Use Us
          </h1>
          <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[32px] mt-[18px] w-full max-w-[487px]">
            Quland is a better way to build products
          </h2>
          <p className="text-paragraph mb-[45px] w-full max-w-[508px]">
            Welcome to Lumina Learning Institute, where education meets
            innovation. Our institute is dedicated to providing high-quality
            online learning experiences to individuals seeking their skills
          </p>

          <Link to="/blogs">
            <div className="transition-all duration-500 home-two-btn-white-rev group bg-blue-sass before:bg-white after:bg-white hover:border-blue-sass w-fit">
              <span className="text-base group-hover:text-blue-sass text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                Get Started Now
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
                  className="transition-all duration-300 group-hover:stroke-blue-sass stroke-white"
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
        <div className="col-span-6 mt-5 lg:mt-0">
          <img src="/assets/images/home-eight/why-us.png" alt="" className="" />
        </div>
      </div>
    </section>
  );
}
