import React from "react";
import { demoLinkData } from "../data";
import { Link } from "react-router-dom";

export default function LandingHeaderSix() {
  return (
    <div className="fixed top-0 z-50 justify-center hidden w-full h-24 xl:flex bg-green-dark">
      <div className="px-[70px] w-full">
        <header className="relative flex items-center justify-between w-full h-full py-6 mx-auto border-b border-white/10">
          <div className="flex items-center gap-24">
            <Link href="#">
              <img src="/assets/images/home-six/logo.svg" alt="logo" />
            </Link>
            <ul className="flex items-center gap-10 text-base font-medium leading-5 text-white font-inter h-fit">
              <li className="group">
                <a
                  className="home-two-nav-item leading-5 relative before:content-['Banner'] before:text-white before:border-white w-fit flex items-center gap-2"
                  href="#banner"
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
                <div className="absolute px-3 left-0 h-0 group-hover:h-[660px] overflow-hidden top-[90px] transition-all duration-700 z-50 bg-green-dark group-hover:border-b group-hover:border-r group-hover:border-l border-white/10">
                  <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-10 top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-[42px]">
                    {/* <!-- single item  --> */}
                    {demoLinkData.map((item, index) => (
                      <li
                        key={index}
                        className="relative py-1 flex flex-col items-center bg-[#1D4136]"
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
                            className="w-[240px] transition-all duration-300"
                          />
                          <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                            <span className="w-fit"> {item.demoTitle}</span>
                          </span>
                        </div>
                      </li>
                    ))}

                    {/* <!-- single item  --> */}
                    <li className="relative py-1 flex flex-col items-center bg-[#1D4136]">
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
                  href="#about"
                  className="home-two-nav-item relative before:content-['About'] before:text-white before:border-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-[' Courses'] before:text-white before:border-white"
                  href="#courses"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Services'] before:text-white before:border-white"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Testimonials'] before:text-white before:border-white"
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Faq'] before:text-white before:border-white"
                  href="#faq"
                >
                  Faq
                </a>
              </li>
              <li className="flex items-center gap-1">
                <input
                  id="hh-search"
                  type="text"
                  className="w-0 px-0 py-1 text-white transition-all duration-300 bg-transparent border-0 border-white rounded-md focus:outline-none focus:border focus:w-48 focus:mr-2 focus:px-2"
                  placeholder="Search..."
                />
                <label
                  className="cursor-pointer"
                  htmlFor="hh-search"
                  type="button"
                >
                  <svg
                    className="cursor-pointer"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9729 7.46687C13.9729 10.922 11.172 13.7229 7.71687 13.7229C4.26176 13.7229 1.46084 10.922 1.46084 7.46687C1.46084 4.01176 4.26176 1.21084 7.71687 1.21084C11.172 1.21084 13.9729 4.01176 13.9729 7.46687ZM7.71687 14.9337C11.8407 14.9337 15.1837 11.5907 15.1837 7.46687C15.1837 3.34303 11.8407 0 7.71687 0C3.59303 0 0.25 3.34303 0.25 7.46687C0.25 11.5907 3.59303 14.9337 7.71687 14.9337ZM16.5333 16.2832C15.9108 16.9056 14.9016 16.9056 14.2791 16.2832L12.7673 14.7713C13.6473 14.1617 14.4118 13.3972 15.0214 12.5172L16.5333 14.029C17.1557 14.6515 17.1557 15.6607 16.5333 16.2832Z"
                      fill="#ffff"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-7">
            <a
              className="relative flex leading-5 text-white home-two-nav-item before:text-white before:border-white w-fit"
              href="#"
            >
              <span>Log in</span>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8429 11.625H11.8496M8.09961 11.625H8.10633"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.17547 14.1336C4.34413 15.3862 5.38171 16.3676 6.64435 16.4257C7.70682 16.4745 8.78609 16.5 9.97461 16.5C11.1631 16.5 12.2424 16.4745 13.3049 16.4257C14.5675 16.3676 15.6051 15.3862 15.7738 14.1336C15.8838 13.316 15.9746 12.4782 15.9746 11.625C15.9746 10.7718 15.8838 9.93399 15.7738 9.11644C15.6051 7.86377 14.5675 6.88237 13.3049 6.82432C12.2424 6.77548 11.1631 6.75 9.97461 6.75C8.78609 6.75 7.70681 6.77548 6.64435 6.82432C5.38171 6.88237 4.34413 7.86377 4.17547 9.11644C4.06539 9.93399 3.97461 10.7718 3.97461 11.625C3.97461 12.4782 4.06539 13.316 4.17547 14.1336Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.59961 6.75V4.875C6.59961 3.01104 8.11065 1.5 9.97461 1.5C11.8386 1.5 13.3496 3.01104 13.3496 4.875V6.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <Link to="/blogs">
              <div className="home-two-btn-white-rev home-two-btn-white-rev-sm group">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-green-dark font-inter">
                  Sign Up
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
                    className="transition-all duration-300 group-hover:stroke-green-dark stroke-white"
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
        </header>
      </div>
    </div>
  );
}
