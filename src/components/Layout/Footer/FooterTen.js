import React from "react";
import { Link } from "react-router-dom";

export default function FooterTen() {
  return (
    <footer className="pt-10 md:pt-20 bg-main-black">
      <div className="flex flex-wrap justify-between gap-5 mx-auto mb-20 theme-container">
        <div className="w-fit max-w-[300px]">
          <img src="./assets/images/home-two/logo-footer.svg" alt="logo" />
          <p className="max-w-[300px] text-white/50 my-6">
            SEO agencies typically work businesses of all sizes across various
            industries to help them achieve their online
          </p>

          <Link to="/about">
            <div className="flex items-center gap-2 mt-4 group">
              <span className="relative font-medium leading-5 transition-all duration-300 border-b border-transparent group-hover:text-white text-white/50 font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                Read More
              </span>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 stroke-white/50 group-hover:stroke-white"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="#ffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="w-fit max-w-[300px]">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-white text-18">Services</h1>
              <ul className="mt-3.5">
                <li className="">
                  <a href="#">
                    <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                      <svg
                        className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 6L1 11"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-all duration-300 group-hover:translate-x-4">
                        Keyword Research
                      </span>
                    </div>
                  </a>
                </li>
                <li className="">
                  <Link to="/project-details">
                    <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                      <svg
                        className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 6L1 11"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-all duration-300 group-hover:translate-x-4">
                        Email marketing
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link to="/project-details">
                    <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                      <svg
                        className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 6L1 11"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-all duration-300 group-hover:translate-x-4">
                        Content marketing
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link to="/project-details">
                    <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                      <svg
                        className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 6L1 11"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-all duration-300 group-hover:translate-x-4">
                        Web Development
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link to="/project-details">
                    <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                      <svg
                        className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 6L1 11"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="transition-all duration-300 group-hover:translate-x-4">
                        Social Marketing
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-fit max-w-[300px]">
          <div className="max-w-[223px]">
            <h1 className="font-semibold text-white text-18">Address</h1>
            <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
              <span className="transition-all duration-300">
                55 Street, 2nd block, 3rd Floor Melbourne, Australia
              </span>
            </div>
            <h1 className="mt-6 font-semibold text-white text-18">Contact</h1>
            <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
              <span className="transition-all duration-300">
                infoquland@gmail.com <br />
                +880 456 852 99
              </span>
            </div>
          </div>
        </div>
        <div className="w-fit max-w-[300px]">
          <h1 className="font-semibold text-white text-18">Newsletter</h1>
          <p className="transition-all duration-300 text-white/50 pt-3.5">
            Subscribe newsletter to get updates
          </p>
          <input
            type="email"
            id="eThree"
            placeholder="Email Address"
            className="bg-white py-2.5 px-6 rounded-[28px] focus:outline-none focus:border-none w-full mt-5"
          />
          <a href="#">
            <div className="home-two-btn-bg py-3.5 group bg-[#4A7DFF] border-[#4A7DFF] w-fit mt-2.5">
              <span className="text-base text-white group-hover:text-[#4A7DFF] transition-all duration-300 font-semibold font-inter relative z-10">
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
                  className="group-hover:stroke-[#4A7DFF] transition-all duration-300"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[65px] bg-[#1C2433]">
        <div className="h-full mx-auto theme-container">
          <div className="flex flex-wrap items-center justify-between w-full h-full">
            <span className="text-white/50 max-w-80">
              2024 © All rights reserved by
              <b className="text-white">Quland</b>
            </span>
            <div className="relative flex justify-center w-full sm:w-fit">
              <a
                href="#"
                aria-label="go top"
                className="w-[45px] h-[45px] rounded-full border-[3px] border-[#323239] flex justify-center items-center bg-blue-sass absolute -top-[75px] sm:-top-[55px]"
              >
                <span>
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="21"
                      fill="#4A7DFF"
                      stroke="#323239"
                      strokeWidth="3"
                    />
                    <path
                      d="M19 21L23 17M23 17L27 21M23 17V29"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <ul className="flex items-center space-x-3 max-w-80 md:space-x-6">
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-medium text-paragraph">|</li>
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
