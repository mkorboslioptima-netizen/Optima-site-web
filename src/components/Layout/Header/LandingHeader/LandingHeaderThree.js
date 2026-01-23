import React from "react";
import { demoLinkData } from "../data";
import { Link } from "react-router-dom";

export default function LandingHeaderThree() {
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
              <Link href="#" aria-label="logo-home">
                <img src="/assets/images/home-three/logo.svg" alt="" />
              </Link>
            </div>
            <div className="flex space-x-[100px] items-center">
              <div>
                <ul className="flex gap-10 text-base font-medium leading-5 text-paragraph font-inter">
                  <li className="group">
                    <a
                      href="#banner"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Banner'] delay-200 hover:text-purple before:text-purple before:border-purple flex items-center gap-2"
                    >
                      Banner
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
                        {/* <!-- single item  --> */}

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
                                <span className="w-fit">{item.demoTitle}</span>
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
                    <a
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['About'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Services'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      before="Case&nbsp;Studies"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-[attr(before)] delay-200 hover:text-purple before:text-purple before:border-purple"
                      href="#caseStudies"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Pricing'] delay-200 hover:text-purple before:text-purple before:border-purple"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#testimonials"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Testimonials'] delay-200 hover:text-purple before:text-purple before:border-purple"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#blogs"
                      className="home-two-nav-item text-white pb-[1px] leading-5 font-inter relative before:content-['Blogs'] delay-200 hover:text-purple before:text-purple before:border-purple"
                    >
                      Blogs
                    </a>
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
