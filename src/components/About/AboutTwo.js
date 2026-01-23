import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutTwo() {
  return (
    <section id="about" className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="relative col-span-6">
            <img
              src="/assets/images/home-two/about.webp"
              alt="img"
              className="mt-9"
            />
            <div className="p-3 sm:p-5 rounded-[30px] right-0 sm:right-32 bg-blue-seo absolute top-0 moving-h2-hero-main-img min-w-[180px]">
              <p className="w-full text-sm font-medium leading-7 text-center text-white">
                Monthly Traffic
              </p>

              <h1 className="text-[42px] leading-[56px] tracking-tight font-semibold w-full text-center text-white">
                <CountUp start={0} end={120} /> K+
              </h1>

              <p className="flex items-center justify-center w-full gap-1 text-base leading-6 text-white">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.65692 0.828427H9.31378M9.31378 0.828427V6.48528M9.31378 0.828427L0.828497 9.31371"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span> 55.8%</span>
              </p>
            </div>
            <div className="px-[30px] w-10/12 max-w-[330px] flex items-center shadow-style-h2 rounded-[28px] overflow-hidden absolute right-5 sm:right-[65px] bottom-5 sm:bottom-12 z-10 bg-white">
              <input
                id="h2_search_input"
                type="text"
                placeholder="Keyword search"
                className="py-1.5 sm:py-3 w-full focus:outline-none focus:border-none"
              />
              <label htmlFor="h2_search_input">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7229 7.46687C13.7229 10.922 10.922 13.7229 7.46687 13.7229C4.01176 13.7229 1.21084 10.922 1.21084 7.46687C1.21084 4.01176 4.01176 1.21084 7.46687 1.21084C10.922 1.21084 13.7229 4.01176 13.7229 7.46687ZM7.46687 14.9337C11.5907 14.9337 14.9337 11.5907 14.9337 7.46687C14.9337 3.34303 11.5907 0 7.46687 0C3.34303 0 0 3.34303 0 7.46687C0 11.5907 3.34303 14.9337 7.46687 14.9337ZM16.2833 16.2832C15.6608 16.9056 14.6516 16.9056 14.0291 16.2832L12.5173 14.7713C13.3973 14.1617 14.1618 13.3972 14.7714 12.5172L16.2833 14.029C16.9057 14.6515 16.9057 15.6607 16.2833 16.2832Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="col-span-6 lg:pl-[87px]">
            <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
              <h1 className="text-base font-medium leading-5 tracking-tight text-purple">
                About Company
              </h1>
            </div>
            <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
              Team of SEO experts Is ready to help you
            </h1>
            <p className="mt-5 md:mt-10 text-paragraph">
              SEO agencies typically work with businesses sizes across various
              industries help them achieve their online marketing objectives
              such as increasing website traffic, generating leads
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-10 gap-8 md:gap-[70px]">
              <div className="grid-cols-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#5D51F2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                    fill="white"
                  />
                </svg>
                <h1 className="mt-4 font-semibold text-18 text-main-black">
                  Expert Team Member
                </h1>
                <p className="mt-3 text-paragraph">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
              <div className="grid-cols-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#5D51F2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                    fill="white"
                  />
                </svg>
                <h1 className="mt-4 font-semibold text-18 text-main-black">
                  Expert Team Member
                </h1>
                <p className="mt-3 text-paragraph">
                  An SEO Optimization agency is company that specializes
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-6 sm:flex-row md:gap-12 md:mt-12">
              <Link to="/blogs">
                <div className="py-3 home-two-btn-bg group bg-blue-seo border-blue-seo">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-blue-seo"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <Link to="/service-details">
                <div className="flex items-center gap-2 group">
                  <p className="mb-[1px] font-medium text-main-black leading-5 font-inter border-b border-main-black before:block before:pb-[1px] before:border-blue-seo before:font-medium before:text-blue-seo before:leading-5 before:font-inter before:border-b before:content-['Explore_SEO_Services'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Explore SEO Services
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 group-hover:stroke-blue-seo"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
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
  );
}
