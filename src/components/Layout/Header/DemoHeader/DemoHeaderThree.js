import React from "react";
import { demoLinkData, pagesLinkData } from "../data";
import { Link } from "react-router-dom";

export default function DemoHeaderThree() {
  return (
    <header className="sticky top-0 z-50 flex-col items-center hidden bg-main-black xl:flex">
      <img
        src="/assets/images/home-three/hero/header-shadow.svg"
        alt=""
        className="absolute z-30 -bottom-14 anim-light-shadow"
      />
      <div className="relative top-0 left-0 z-50 w-full h3-header-wrapper bg-main-black">
        <div className="relative w-full mx-auto theme-container">
          <div className="relative z-10 flex items-center justify-between w-full py-5">
            <div>
              <Link to="/" aria-label="logo-home">
                <img src="/assets/images/home-three/logo.svg" alt="" />
              </Link>
            </div>
            <div className="flex space-x-[100px] items-center">
              <div>
                <ul className="flex gap-10 text-base font-medium leading-5 text-paragraph font-inter">
                  <li className="group">
                    <a
                      href="#"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Home'] delay-200 hover:text-purple before:text-purple before:border-purple flex items-center gap-2"
                    >
                      Home
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-3 left-0 h-0 group-hover:h-[880px] overflow-hidden overflow-y-scroll no-scrollbar top-20 transition-all duration-700 z-50 bg-main-black group-hover:border-b group-hover:border-r group-hover:border-l border-[#e7e8e9]/10">
                      <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-3 top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-6">
                        {demoLinkData.map((item, index) => (
                          <li
                            key={index}
                            className="relative py-1 flex flex-col items-center bg-[#1B2230]"
                          >
                            <div className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter">
                              <div className="absolute flex flex-col items-center w-full h-full gap-5 transition-all duration-300 opacity-0 pt-14 bg-black/80 group-hover/item:opacity-100">
                                <Link to={item.landingLink}>
                                  <div className="home-two-btn-white group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-purple hover:border-white">
                                    <span className="relative z-10 py-1 text-sm font-semibold text-white transition-all duration-300 font-inter">
                                      Single Page
                                    </span>
                                  </div>
                                </Link>
                                <Link to={item.demoLink}>
                                  <div className="home-two-btn-white-rev group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-white hover:border-purple">
                                    <span className="text-sm text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                                      Multi page
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <img
                                src={item.demoThumb}
                                alt=""
                                className="w-[228px] transition-all duration-300"
                              />
                              <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                                <span className="w-fit"> {item.demoTitle}</span>
                              </span>
                            </div>
                          </li>
                        ))}
                        {/* <!-- single item  --> */}
                        <li className="relative py-1 flex flex-col items-center bg-[#1B2230]">
                          <a
                            href=""
                            className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter"
                            aria-disabled="true"
                          >
                            <img
                              src="./assets/images/demo-8.png"
                              alt=""
                              className="w-[240px] group-hover/item:scale-110 transition-all duration-300 blur-sm"
                            />
                            <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                              <span className="w-fit">Coming Soon</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Company'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      to="/about"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Services'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Blogs'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="relative group">
                    <a
                      href=""
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Pages'] delay-200 hover:text-purple before:text-purple before:border-purple flex gap-2 items-center"
                    >
                      Pages
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[320px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-main-black mt-8 shadow-card-sm transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {pagesLinkData.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative leading-5 text-white home-two-nav-item hover:text-purple w-fit"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link
                      to="/contact"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Contact'] delay-200 hover:text-purple before:text-purple before:border-purple"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-[30px] items-center">
              <Link to="/contact">
                <div className="home-two-btn-bg py-2.5 group bg-purple border-purple">
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
      </div>
    </header>
  );
}
