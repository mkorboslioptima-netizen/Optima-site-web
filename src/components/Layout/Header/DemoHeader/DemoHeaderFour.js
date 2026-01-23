import React from "react";
import { demoLinkData, pagesLinkData } from "../data";
import { Link } from "react-router-dom";

export default function DemoHeaderFour() {
  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-20 bg-[#0A0118] xl:block hidden">
        <div className="relative z-20 mx-auto theme-container">
          <div className="w-full h-[95px] flex justify-between items-center">
            <div className="flex space-x-[100px] items-center">
              <div>
                <Link to="/">
                  <img src="/assets/images/home-four/logo.webp" alt="logo" />
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                  <li className="group">
                    <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Home'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
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
                    <div className="absolute px-3 z-50 left-0 h-0 group-hover:h-[880px] overflow-hidden overflow-y-scroll no-scrollbar top-[95px] transition-all duration-700 bg-[#0A0118] group-hover:border-b group-hover:border-r group-hover:border-l border-[#231b2f]">
                      <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-[18px] top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-6">
                        {demoLinkData.map((item, index) => (
                          <li
                            key={index}
                            className="relative py-1 flex flex-col items-center bg-[#17092D]"
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
                                className="w-[234px] transition-all duration-300"
                              />
                              <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                                <span className="w-fit"> {item.demoTitle}</span>
                              </span>
                            </div>
                          </li>
                        ))}
                        <li className="relative py-1 flex flex-col items-center bg-[#17092D]">
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
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Company'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/about"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Services'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Blogs'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="relative group">
                    <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Pages'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
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
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[420px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-[#0A0118] border-t-[#0A0118] border border-white/10 mt-[38px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
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
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Contact'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-[30px] items-center">
              <a href="#">
                <div className="flex space-x-1.5 items-center text-white">
                  <span className="font-semibold">Sign Up</span>
                  <span>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.84289 11.625H8.84961M5.09961 11.625H5.10633"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.17547 14.1336C1.34413 15.3862 2.38171 16.3676 3.64435 16.4257C4.70682 16.4745 5.78609 16.5 6.97461 16.5C8.16313 16.5 9.24241 16.4745 10.3049 16.4257C11.5675 16.3676 12.6051 15.3862 12.7738 14.1336C12.8838 13.316 12.9746 12.4782 12.9746 11.625C12.9746 10.7718 12.8838 9.93399 12.7738 9.11644C12.6051 7.86377 11.5675 6.88237 10.3049 6.82432C9.24241 6.77548 8.16313 6.75 6.97461 6.75C5.78609 6.75 4.70681 6.77548 3.64435 6.82432C2.38171 6.88237 1.34413 7.86377 1.17547 9.11644C1.06539 9.93399 0.974609 10.7718 0.974609 11.625C0.974609 12.4782 1.06539 13.316 1.17547 14.1336Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.59961 6.75V4.875C3.59961 3.01104 5.11065 1.5 6.97461 1.5C8.83857 1.5 10.3496 3.01104 10.3496 4.875V6.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
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
        <div className="header-four-border w-full h-[1px]"></div>
      </div>
    </header>
  );
}
