import React from "react";
import { Link } from "react-router-dom";

export default function ServiceMain() {
  return (
    <section id="service" className="w-full">
      <div className="mx-auto max-w-[1600px] w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-0 bg-main-gray rounded-[10px] border border-[#e7e3fa]">
        <div className="relative w-full service-section-wrapper">
          <div className="relative z-10 mx-auto theme-container">
            <div className="flex flex-col items-center">
              <span className="text-purple font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                Explore Services
              </span>
              <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                High Impact Marketing Services to grow your business
              </h2>
            </div>
            <div className="w-full grid xl:grid-cols-12 md:grid-cols-6 grid-cols-3 xl:gap-[30px] gap-5">
              <div
                data-aos="zoom-out"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="45"
                        className="fill-current"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.8125 13.125C22.8125 18.4753 18.4753 22.8125 13.125 22.8125C7.77474 22.8125 3.4375 18.4753 3.4375 13.125C3.4375 7.77474 7.77474 3.4375 13.125 3.4375C18.4753 3.4375 22.8125 7.77474 22.8125 13.125ZM13.125 24.6875C19.5108 24.6875 24.6875 19.5108 24.6875 13.125C24.6875 6.73921 19.5108 1.5625 13.125 1.5625C6.73921 1.5625 1.5625 6.73921 1.5625 13.125C1.5625 19.5108 6.73921 24.6875 13.125 24.6875ZM26.7771 26.7771C25.8132 27.741 24.2505 27.741 23.2866 26.7771L20.9454 24.436C22.3081 23.492 23.492 22.3081 24.436 20.9454L26.7771 23.2865C27.741 24.2504 27.741 25.8132 26.7771 26.7771Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Keyword Research
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="200"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        className="fill-current"
                        width="45"
                        height="45"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.5 15.5H0.5V17.5H1.5V15.5ZM26.5 17.5H27.5V15.5H26.5V17.5ZM10.25 25.5C9.69771 25.5 9.25 25.9477 9.25 26.5C9.25 27.0523 9.69771 27.5 10.25 27.5V25.5ZM17.75 27.5C18.3023 27.5 18.75 27.0523 18.75 26.5C18.75 25.9477 18.3023 25.5 17.75 25.5V27.5ZM15 21.5C15 20.9477 14.5523 20.5 14 20.5C13.4477 20.5 13 20.9477 13 21.5H15ZM5.25 2.5H22.75V0.5H5.25V2.5ZM25.5 5.25V17.75H27.5V5.25H25.5ZM22.75 20.5H5.25V22.5H22.75V20.5ZM2.5 17.75V5.25H0.5V17.75H2.5ZM5.25 20.5C3.73122 20.5 2.5 19.2688 2.5 17.75H0.5C0.5 20.3734 2.62665 22.5 5.25 22.5V20.5ZM25.5 17.75C25.5 19.2688 24.2688 20.5 22.75 20.5V22.5C25.3734 22.5 27.5 20.3734 27.5 17.75H25.5ZM22.75 2.5C24.2688 2.5 25.5 3.73122 25.5 5.25H27.5C27.5 2.62665 25.3734 0.5 22.75 0.5V2.5ZM5.25 0.5C2.62665 0.5 0.5 2.62665 0.5 5.25H2.5C2.5 3.73122 3.73122 2.5 5.25 2.5V0.5ZM1.5 17.5H26.5V15.5H1.5V17.5ZM10.25 27.5H14V25.5H10.25V27.5ZM14 27.5H17.75V25.5H14V27.5ZM15 26.5V21.5H13V26.5H15Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Website Optimization
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="400"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 7.75V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H7.75C8.30228 2.5 8.75 2.94772 8.75 3.5V7.75C8.75 8.30228 8.30228 8.75 7.75 8.75H3.5C2.94772 8.75 2.5 8.30228 2.5 7.75Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.25 7.75V3.5C21.25 2.94772 21.6977 2.5 22.25 2.5H26.5C27.0523 2.5 27.5 2.94772 27.5 3.5V7.75C27.5 8.30228 27.0523 8.75 26.5 8.75H22.25C21.6977 8.75 21.25 8.30228 21.25 7.75Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.25 26.5V22.25C21.25 21.6977 21.6977 21.25 22.25 21.25H26.5C27.0523 21.25 27.5 21.6977 27.5 22.25V26.5C27.5 27.0523 27.0523 27.5 26.5 27.5H22.25C21.6977 27.5 21.25 27.0523 21.25 26.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 26.5V22.25C2.5 21.6977 2.94772 21.25 3.5 21.25H7.75C8.30228 21.25 8.75 21.6977 8.75 22.25V26.5C8.75 27.0523 8.30228 27.5 7.75 27.5H3.5C2.94772 27.5 2.5 27.0523 2.5 26.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5 16.25H17.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11.25 18.75L15 10L18.75 18.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.75 5.625H21.25M24.375 8.75V21.25M21.25 24.375H8.75M5.625 21.25V8.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Content Marketing
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="600"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 2.5L26.6161 4.11612C27.1043 4.60427 27.1043 5.39573 26.6161 5.88388L25 7.5M20 5H26.25M7.5 16.25L10.25 18.3125C11.5833 19.3125 13.4167 19.3125 14.75 18.3125L17.5 16.25M6.25 27.5H18.75C20.8211 27.5 22.5 25.8211 22.5 23.75V13.75C22.5 11.6789 20.8211 10 18.75 10H6.25C4.17893 10 2.5 11.6789 2.5 13.75V23.75C2.5 25.8211 4.17893 27.5 6.25 27.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      MorphoManager
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="800"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-8 py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.75H24M4 12.75C2.61929 12.75 1.5 11.6307 1.5 10.25V9C1.5 7.61929 2.61929 6.5 4 6.5H24C25.3807 6.5 26.5 7.61929 26.5 9V10.25C26.5 11.6307 25.3807 12.75 24 12.75M4 12.75L4 24C4 25.3807 5.11929 26.5 6.5 26.5H21.5C22.8807 26.5 24 25.3807 24 24V12.75M14 6.5H19C20.3807 6.5 21.5 5.38071 21.5 4C21.5 2.61929 20.3807 1.5 19 1.5C16.2386 1.5 14 3.73858 14 6.5ZM14 6.5H9C7.61929 6.5 6.5 5.38071 6.5 4C6.5 2.61929 7.61929 1.5 9 1.5C11.7614 1.5 14 3.73858 14 6.5ZM14 6.5V26.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Social Media Marketing
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="1000"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 8.75H21.25M8.75 15H15M20 21.25L23.75 27.5M10 21.25L6.25 27.5M15 21.25V25M23.75 2.5L6.25 2.5C4.17893 2.5 2.5 4.17893 2.5 6.25L2.5 17.5C2.5 19.5711 4.17893 21.25 6.25 21.25L23.75 21.25C25.8211 21.25 27.5 19.5711 27.5 17.5L27.5 6.25C27.5 4.17893 25.8211 2.5 23.75 2.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Website Development
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="1200"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="54"
                        height="49"
                        viewBox="0 0 54 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.3158 2H39.379C40.8974 2 42.3433 2.6575 43.352 3.80668L50.6573 12.1287C52.3526 14.06 52.4535 16.9387 50.8976 18.9869L31.2134 44.8991C29.0855 47.7003 24.9145 47.7003 22.7866 44.8991L3.10238 18.9869C1.54651 16.9387 1.6474 14.06 3.34273 12.1287L10.648 3.80668C11.6567 2.6575 13.1026 2 14.621 2H22.2748M32.3158 2L37.6316 15.4571M32.3158 2H22.2748M37.6316 15.4571H50.9211M37.6316 15.4571L27 46.4085L16.3684 15.4571M37.6316 15.4571H16.3684M22.2748 2L16.3684 15.4571M3.07891 15.4571H16.3684"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Website Design
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="1400"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="45"
                        height="49"
                        viewBox="0 0 45 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.3787 38.2384L24.5566 46.6037C23.3678 47.1321 22.0109 47.1321 20.8221 46.6037L2 38.2384M43.3787 26.7443L24.5566 35.1097C23.3678 35.638 22.0109 35.638 20.8221 35.1097L2 26.7443M3.81343 15.0075L20.6332 23.4174C21.9276 24.0646 23.4511 24.0646 24.7455 23.4174L41.5653 15.0075C43.2596 14.1604 43.2596 11.7424 41.5653 10.8953L24.7455 2.48539C23.4511 1.83821 21.9276 1.8382 20.6332 2.48538L3.81344 10.8953C2.1191 11.7424 2.11909 14.1604 3.81343 15.0075Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Design & branding
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="60"
                        height="49"
                        viewBox="0 0 60 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M58.25 47L54.0312 42.7812M16.0625 30.125H2M16.0625 16.0625H2M38.5625 2H2M58.25 30.125C58.25 39.4448 50.6948 47 41.375 47C32.0552 47 24.5 39.4448 24.5 30.125C24.5 20.8052 32.0552 13.25 41.375 13.25C50.6948 13.25 58.25 20.8052 58.25 30.125Z"
                          stroke="#794AFF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      SEO Optimization
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="1800"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="49"
                        height="49"
                        viewBox="0 0 49 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.9352 20.2887C33.2682 16.1619 29.2242 13.25 24.5 13.25C18.2868 13.25 13.25 18.2868 13.25 24.5C13.25 29.2241 16.1619 33.2682 20.2887 34.9352M24.31 46.9992C11.9711 46.8972 2 36.863 2 24.5C2 12.0736 12.0736 2 24.5 2C36.863 2 46.8972 11.9711 46.9992 24.31M24.6289 27.703L30.5073 45.3383C31.2459 47.5539 34.3799 47.5539 35.1184 45.3383L37.2891 38.8262C37.531 38.1005 38.1005 37.531 38.8262 37.2891L45.3383 35.1184C47.5539 34.3799 47.5539 31.2459 45.3383 30.5073L27.703 24.6289C25.8031 23.9956 23.9956 25.8031 24.6289 27.703Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Digital Marketing
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="2000"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full text-purple common-transition">
                    <span>
                      <svg
                        width="49"
                        height="49"
                        viewBox="0 0 49 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.25 13.25H35.75M13.25 24.5H24.5M33.5 35.75L40.25 47M15.5 35.75L8.75 47M24.5 35.75V42.5M40.25 2L8.75 2C5.02208 2 2 5.02208 2 8.75L2 29C2 32.7279 5.02208 35.75 8.75 35.75L40.25 35.75C43.9779 35.75 47 32.7279 47 29L47 8.75C47 5.02208 43.9779 2 40.25 2Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Business Consulting
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-delay="2200"
                className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear"
              >
                <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full common-transition text-purple">
                    <span>
                      <svg
                        width="35"
                        height="49"
                        viewBox="0 0 35 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.75 20C20.2353 20 22.25 22.0147 22.25 24.5C22.25 26.9853 20.2353 29 17.75 29C15.2647 29 13.25 26.9853 13.25 24.5C13.25 22.0147 15.2647 20 17.75 20ZM17.75 20V2M6.5 38H29C31.4853 38 33.5 40.0147 33.5 42.5C33.5 44.9853 31.4853 47 29 47H6.5C4.01472 47 2 44.9853 2 42.5C2 40.0147 4.01472 38 6.5 38ZM6.48194 38H29.0181L32.8746 26.0116C33.9926 23.1885 33.5966 20.0425 31.8071 17.5321L19.8917 3.06642C18.8781 1.64453 16.6219 1.64453 15.6083 3.06642L3.69286 17.5321C1.90342 20.0425 1.50737 23.1885 2.62538 26.0116L6.48194 38Z"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      Design & branding
                    </p>
                    <p className="text-center text-paragraph">
                      This involve optimizes website headers content internal
                    </p>
                  </div>
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group text-paragraph hover:text-purple">
                      <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
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
        </div>
      </div>
    </section>
  );
}
