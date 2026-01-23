import React from "react";
import { Link } from "react-router-dom";

export default function HeroSeven() {
  return (
    <section
      id="banner"
      className="w-full bg-white pt-[130px] sm:pt-[196px] pb-[70px] sm:pb-[120px] relative overflow-hidden"
    >
      {/* <!-- content start --> */}
      <div className="relative z-10 grid w-full grid-cols-6 mx-auto theme-container xl:grid-cols-12">
        <div className="flex items-center h-full col-span-7">
          <div className="h-fit">
            <h1 className="flex text-20 font-semibold text-main-black bg-it-blue/10 border border-it-blue/20 items-center gap-2.5 w-fit px-6 py-1 rounded-[40px]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_460_29187)">
                  <path
                    d="M10.4996 10.9371L0.549805 7.62184C0.631053 7.4156 0.815423 7.26529 1.03417 7.23435L7.18714 6.32812L10.4996 10.9371Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M10.5002 10.937V16.6775L4.99725 19.6149C4.78475 19.7274 4.53195 19.709 4.33789 19.5649L10.5002 10.937Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M10.5005 10.937L4.33784 19.5646C4.14753 19.4243 4.05035 19.1837 4.09128 18.9431L5.14094 12.7248L10.5005 10.937Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M10.5 10.9368L5.14079 12.7246L0.690595 8.31813C0.519037 8.14938 0.456226 7.89595 0.531224 7.66814C0.537786 7.65252 0.540599 7.63658 0.550286 7.62158L10.5 10.9368Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M10.4999 0.312012V10.9367L7.1875 6.32748L9.94055 0.665128C10.0437 0.449196 10.2624 0.312012 10.4999 0.312012Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M13.8124 6.32748L10.5 10.9367V0.312012C10.7375 0.312012 10.9562 0.449196 11.0594 0.665128L13.8124 6.32748Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M20.4497 7.62167L10.5 10.9369L13.8124 6.32764L19.9654 7.23386C20.1841 7.26511 20.3685 7.41511 20.4497 7.62167Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M20.3123 8.31813L15.8592 12.7246L10.5 10.9368L20.4497 7.62158C20.4591 7.63689 20.4622 7.65283 20.4688 7.66814C20.5435 7.89626 20.481 8.14938 20.3123 8.31813Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M16.6623 19.5646L10.5 10.937L15.8592 12.7248L16.9092 18.9431C16.9498 19.184 16.853 19.4243 16.6623 19.5646Z"
                    fill="#5F57FF"
                  />
                  <path
                    d="M16.6623 19.5646C16.4686 19.7087 16.2155 19.7274 16.0033 19.6146L10.5 16.6775V10.937L16.6623 19.5646Z"
                    fill="#5F57FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_460_29187">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Quland IT Business
            </h1>
            <h1
              className="text-4xl md:text-65 tracking-tight font-semibold text-main-black pr-2 max-w-[658px] mt-7"
              data-depth="-0.28"
            >
              The Platform to help your IT business grow on fast to success
            </h1>
            <p className="text-18 font-medium font-inter text-paragraph mt-5 md:mt-8 max-w-[571px]">
              Digital marketing agency, craft compelling narratives & leverage
              cutting-edge technologies to propel brands towards
            </p>
            <div className="flex flex-col gap-3 mt-5 mb-20 sm:mb-0 sm:flex-row sm:gap-6 md:mt-10">
              <Link to="/pricing">
                <div className="text-white home-two-btn-white group before:bg-it-blue after:bg-it-blue hover:text-paragraph hover:border-paragraph">
                  <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 delay-100 group-hover:text-paragraph font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-paragraph stroke-white"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <Link to="/blogs">
                <div className="border home-two-btn-white-rev group before:bg-it-blue after:bg-it-blue border-paragraph hover:border-it-blue">
                  <span className="text-base group-hover:text-white text-paragraph transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                    Case Studies
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
                      className="transition-all duration-300 group-hover:stroke-white stroke-paragraph"
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
        <div className="col-span-5">
          <img src="/assets/images/home-seven/hero.png" alt="" className="" />
        </div>
      </div>
      {/* <!-- content end  --> */}
      <div className="absolute bottom-0 right-0 w-fit h-fit bg-it-blue">
        <img src="/assets/images/home-seven/dot.svg" alt="" className="" />
      </div>
    </section>
  );
}
