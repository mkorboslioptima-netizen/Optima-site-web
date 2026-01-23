import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen p-4 overflow-hidden">
        <img
          data-aos="zoom-in"
          src="/assets/images/404.webp"
          alt=""
          className=""
        />

        <h1 className="text-20 lg:text-48 text-main-black font-semibold mt-5 md:mt-[70px] text-center">
          OPPS! This Page Are Can’t Be Found
        </h1>
        <h2 className="text-18 lg:text-24 text-paragraph mt-2.5 md:mt-5 mb-5 md:mb-10 text-center">
          We can’t find this page your looking for
        </h2>
        <Link to="/">
          <div className="home-two-btn-bg py-3 group bg-[#4A7DFF] border-[#4A7DFF] inline-flex">
            <span className="text-base text-white group-hover:text-[#4A7DFF] transition-all duration-300 font-inter relative z-10">
              Go to Home
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
                className="group-hover:stroke-[#4A7DFF] transition-all duration-300"
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
      <div className="absolute z-10 shape-1 left-40 top-96">
        <img src="/assets/images/home-four/shape-1.webp" alt="" />
      </div>
      <div className="absolute z-10 shape-2 right-96 top-96">
        <img src="/assets/images/home-four/shape-2.webp" alt="" />
      </div>
      <div className="shape-3 absolute left-96 top-[550px] z-10">
        <img src="/assets/images/home-four/shape-3.webp" alt="" />
      </div>
      <div className="shape-4 absolute right-96 top-[550px] z-10">
        <img src="/assets/images/home-four/shape-4.webp" alt="" />
      </div>
    </div>
  );
}
