import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Blogs" href="/blogs" currentPage="Blogs" />
      <section className="py-16 md:py-[130px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
          {/* <!-- blogs start  --> */}
          <div className="col-span-8">
            {/* <!-- single blog start --> */}
            <div className="w-full">
              <img
                src="./assets/images/blogs/1.webp"
                alt=""
                className="object-cover w-full"
              />
              <div className="flex flex-col sm:flex-row mt-5 gap-2 md:gap-[30px]">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./assets/images/blogs/author-1.webp"
                    alt=""
                    className="w-[30px] aspect-square rounded-full object-cover"
                  />
                  <p className="text-paragraph">Leroy H. Levin</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">January 15, 2023</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">Comments (5)</p>
                </div>
              </div>
              <hr className="mt-5 border-purple/10" />
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
                People The Office Analyzing Checking Finance Graphs
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                Meet our Support Engineer, the backbone of our technical
                assistance and customer satisfaction. Armed with a robust blend
                of technical acumen and exceptional problem-solving skills, our
                Support dedicated
              </p>
              <Link to="/blog-details">
                <div className="flex items-center gap-2 group">
                  <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Read_More'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Read More
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 group-hover:stroke-purple group-hover:delay-0"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#6D6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              {/* <!-- comments  --> */}
              <div className="w-full border border-purple/10 mt-[50px] rounded-[10px] px-4 md:px-[50px] pb-10 bg-main-gray">
                <div className="flex mt-5 gap-1.5 sm:gap-[30px]">
                  <p className="text-paragraph">January 15, 2023</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                    <p className="text-paragraph">Comments (5)</p>
                  </div>
                </div>
                <hr className="mt-5 border-purple/10" />
                <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-[30px] mt-[30px]">
                  <svg
                    className="mt-2"
                    width="35"
                    height="26"
                    viewBox="0 0 35 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.8125 23.4375C1.9375 21.375 0.8125 19.125 0.8125 15.375C0.8125 8.8125 5.5 3 12.0625 0L13.75 2.4375C7.5625 5.8125 6.25 10.125 5.875 12.9375C6.8125 12.375 8.125 12.1875 9.4375 12.375C12.8125 12.75 15.4375 15.375 15.4375 18.9375C15.4375 20.625 14.6875 22.3125 13.5625 23.625C12.25 24.9375 10.75 25.5 8.875 25.5C6.8125 25.5 4.9375 24.5625 3.8125 23.4375ZM22.5625 23.4375C20.6875 21.375 19.5625 19.125 19.5625 15.375C19.5625 8.8125 24.25 3 30.8125 0L32.5 2.4375C26.3125 5.8125 25 10.125 24.625 12.9375C25.5625 12.375 26.875 12.1875 28.1875 12.375C31.5625 12.75 34.1875 15.375 34.1875 18.9375C34.1875 20.625 33.4375 22.3125 32.3125 23.625C31.1875 24.9375 29.5 25.5 27.625 25.5C25.5625 25.5 23.6875 24.5625 22.5625 23.4375Z"
                      fill="#794AFF"
                    />
                  </svg>
                  <div className="flex-1">
                    <h1 className="text-20 sm:text-24 md:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold">
                      Support Engineer Extraordinaire Navigating Technical
                      Challenges with Precision Expertise
                    </h1>
                    <div className="flex items-center gap-5 mt-5">
                      <img
                        src="./assets/images/blogs/review-1.webp"
                        alt=""
                        className="object-cover rounded-full w-9 aspect-square"
                      />
                      <p className="font-semibold text-paragraph">
                        Michael D. Reimers
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- single blog end --> */}
            {/* <!-- single blog start --> */}
            <div className="w-full mt-[50px]">
              <img
                src="./assets/images/blogs/2.webp"
                alt=""
                className="object-cover w-full"
              />
              <div className="flex flex-col sm:flex-row mt-5 gap-2 md:gap-[30px]">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./assets/images/blogs/author-1.webp"
                    alt=""
                    className="w-[30px] aspect-square rounded-full object-cover"
                  />
                  <p className="text-paragraph">Leroy H. Levin</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">January 15, 2023</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">Comments (5)</p>
                </div>
              </div>
              <hr className="mt-5 border-purple/10" />
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
                People The Office Analyzing Checking Finance Graphs
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                Meet our Support Engineer, the backbone of our technical
                assistance and customer satisfaction. Armed with a robust blend
                of technical acumen and exceptional problem-solving skills, our
                Support dedicated
              </p>
              <Link to="/blog-details">
                <div className="flex items-center gap-2 group">
                  <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Read_More'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Read More
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 group-hover:stroke-purple group-hover:delay-0"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#6D6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              {/* <!-- comments  --> */}
              <div className="w-full border border-purple/10 mt-[50px] rounded-[10px] px-4 md:px-[50px] pb-10 bg-main-gray">
                <div className="flex mt-5 gap-1.5 sm:gap-[30px]">
                  <p className="text-paragraph">January 15, 2023</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                    <p className="text-paragraph">Comments (5)</p>
                  </div>
                </div>
                <hr className="mt-5 border-purple/10" />
                <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-[30px] mt-[30px]">
                  <svg
                    className="mt-2"
                    width="35"
                    height="26"
                    viewBox="0 0 35 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.8125 23.4375C1.9375 21.375 0.8125 19.125 0.8125 15.375C0.8125 8.8125 5.5 3 12.0625 0L13.75 2.4375C7.5625 5.8125 6.25 10.125 5.875 12.9375C6.8125 12.375 8.125 12.1875 9.4375 12.375C12.8125 12.75 15.4375 15.375 15.4375 18.9375C15.4375 20.625 14.6875 22.3125 13.5625 23.625C12.25 24.9375 10.75 25.5 8.875 25.5C6.8125 25.5 4.9375 24.5625 3.8125 23.4375ZM22.5625 23.4375C20.6875 21.375 19.5625 19.125 19.5625 15.375C19.5625 8.8125 24.25 3 30.8125 0L32.5 2.4375C26.3125 5.8125 25 10.125 24.625 12.9375C25.5625 12.375 26.875 12.1875 28.1875 12.375C31.5625 12.75 34.1875 15.375 34.1875 18.9375C34.1875 20.625 33.4375 22.3125 32.3125 23.625C31.1875 24.9375 29.5 25.5 27.625 25.5C25.5625 25.5 23.6875 24.5625 22.5625 23.4375Z"
                      fill="#794AFF"
                    />
                  </svg>
                  <div className="flex-1">
                    <h1 className="text-20 sm:text-24 md:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold">
                      Support Engineer Extraordinaire Navigating Technical
                      Challenges with Precision Expertise
                    </h1>
                    <div className="flex items-center gap-5 mt-5">
                      <img
                        src="./assets/images/blogs/review-1.webp"
                        alt=""
                        className="object-cover rounded-full w-9 aspect-square"
                      />
                      <p className="font-semibold text-paragraph">
                        Michael D. Reimers
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- single blog end --> */}
            {/* <!-- single blog start --> */}
            <div className="w-full mt-[50px]">
              <img
                src="/assets/images/blogs/3.webp"
                alt=""
                className="object-cover w-full"
              />
              <div className="flex flex-col sm:flex-row mt-5 gap-2 md:gap-[30px]">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./assets/images/blogs/author-1.webp"
                    alt=""
                    className="w-[30px] aspect-square rounded-full object-cover"
                  />
                  <p className="text-paragraph">Leroy H. Levin</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">January 15, 2023</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                  <p className="text-paragraph">Comments (5)</p>
                </div>
              </div>
              <hr className="mt-5 border-purple/10" />
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
                People The Office Analyzing Checking Finance Graphs
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                Meet our Support Engineer, the backbone of our technical
                assistance and customer satisfaction. Armed with a robust blend
                of technical acumen and exceptional problem-solving skills, our
                Support dedicated
              </p>
              <Link to="/blog-details">
                <div className="flex items-center gap-2 group">
                  <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Read_More'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Read More
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 group-hover:stroke-purple group-hover:delay-0"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#6D6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              {/* <!-- comments  --> */}
              <div className="w-full border border-purple/10 mt-[50px] rounded-[10px] px-4 md:px-[50px] pb-10 bg-main-gray">
                <div className="flex mt-5 gap-1.5 sm:gap-[30px]">
                  <p className="text-paragraph">January 15, 2023</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                    <p className="text-paragraph">Comments (5)</p>
                  </div>
                </div>
                <hr className="mt-5 border-purple/10" />
                <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-[30px] mt-[30px]">
                  <svg
                    className="mt-2"
                    width="35"
                    height="26"
                    viewBox="0 0 35 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.8125 23.4375C1.9375 21.375 0.8125 19.125 0.8125 15.375C0.8125 8.8125 5.5 3 12.0625 0L13.75 2.4375C7.5625 5.8125 6.25 10.125 5.875 12.9375C6.8125 12.375 8.125 12.1875 9.4375 12.375C12.8125 12.75 15.4375 15.375 15.4375 18.9375C15.4375 20.625 14.6875 22.3125 13.5625 23.625C12.25 24.9375 10.75 25.5 8.875 25.5C6.8125 25.5 4.9375 24.5625 3.8125 23.4375ZM22.5625 23.4375C20.6875 21.375 19.5625 19.125 19.5625 15.375C19.5625 8.8125 24.25 3 30.8125 0L32.5 2.4375C26.3125 5.8125 25 10.125 24.625 12.9375C25.5625 12.375 26.875 12.1875 28.1875 12.375C31.5625 12.75 34.1875 15.375 34.1875 18.9375C34.1875 20.625 33.4375 22.3125 32.3125 23.625C31.1875 24.9375 29.5 25.5 27.625 25.5C25.5625 25.5 23.6875 24.5625 22.5625 23.4375Z"
                      fill="#794AFF"
                    />
                  </svg>
                  <div className="flex-1">
                    <h1 className="text-20 sm:text-24 md:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold">
                      Support Engineer Extraordinaire Navigating Technical
                      Challenges with Precision Expertise
                    </h1>
                    <div className="flex items-center gap-5 mt-5">
                      <img
                        src="./assets/images/blogs/review-1.webp"
                        alt=""
                        className="object-cover rounded-full w-9 aspect-square"
                      />
                      <p className="font-semibold text-paragraph">
                        Michael D. Reimers
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <!-- single blog end --> */}
            {/* <!-- pagination start --> */}
            <div className="flex items-center gap-[15px] mt-[70px]">
              <button aria-label="left" className="p-4 group">
                <svg
                  width="7"
                  height="14"
                  viewBox="0 0 7 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-colors duration-300 group-hover:stroke-main-black"
                    d="M5.80078 1L1.00078 7L5.80078 13"
                    stroke="#6D6D6D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center text-white transition-all duration-300 rounded-full w-11 aspect-square bg-purple hover:bg-purple hover:text-white">
                <span>1</span>
              </button>
              <button className="flex items-center justify-center transition-all duration-300 rounded-full w-11 aspect-square bg-purple/10 text-paragraph hover:bg-purple hover:text-white">
                <span>2</span>
              </button>
              <button className="flex items-center justify-center transition-all duration-300 rounded-full w-11 aspect-square bg-purple/10 text-paragraph hover:bg-purple hover:text-white">
                <span>3</span>
              </button>
              <button className="flex items-center justify-center transition-all duration-300 rounded-full w-11 aspect-square bg-purple/10 text-paragraph hover:bg-purple hover:text-white">
                <span>4</span>
              </button>
              <button aria-label="right" className="p-4 group">
                <svg
                  width="7"
                  height="14"
                  viewBox="0 0 7 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-colors duration-300 group-hover:stroke-main-black"
                    d="M1 1L5.8 7L0.999999 13"
                    stroke="#6D6D6D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- pagination end --> */}
          </div>
          {/* <!-- blogs end  --> */}
          {/* <!-- side bar start --> */}
          <div className="col-span-8 lg:col-span-4">
            <div className="relative flex items-center">
              <label htmlFor="search" className="absolute right-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2 14.2L17 17M16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6Z"
                    stroke="#794AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <input
                placeholder="Email Address"
                id="search"
                type="text"
                className="placeholder:text-paragraph w-full h-[65px] bg-transparent border border-purple/10 focus:border-purple focus:outline-none focus:right-0 rounded-[10px] px-[25px]"
              />
            </div>
            {/* <!-- links  --> */}
            <div className="mt-[60px]">
              <h1 className="font-semibold text-22 text-main-black">
                Category
              </h1>
              <ul className="mt-6">
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Digital Marketing</span>
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Cyber Security</span>
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Web Design & Development</span>
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>SEO Optimizations</span>
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>IT Design Solutions</span>
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href=""
                    className="flex items-center gap-3 transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.92285L4.59655 6.63592L1 11.349"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Design & Branding</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- recent blogs  --> */}
            <div className="mt-[54px]">
              <h1 className="font-semibold text-22 text-main-black">
                Recent News
              </h1>
              <div className="mt-8">
                {/* <!-- single --> */}
                <a
                  href=""
                  className="flex gap-2 sm:gap-[25px] items-center group mb-6"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="./assets/images/blogs/recent-1.webp"
                      alt=""
                      className="object-cover w-full transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">January 15, 2023</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Navigating the Cosmos To Space Exploration Office
                      Analyzing
                    </p>
                  </div>
                </a>
                {/* <!-- single --> */}
                <a
                  href=""
                  className="flex gap-2 sm:gap-[25px] items-center group mb-6"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="./assets/images/blogs/recent-1.webp"
                      alt=""
                      className="object-cover w-full transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">January 15, 2023</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Navigating the Cosmos To Space Exploration Office
                      Analyzing
                    </p>
                  </div>
                </a>
                {/* <!-- single --> */}
                <a
                  href=""
                  className="flex gap-2 sm:gap-[25px] items-center group"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="./assets/images/blogs/recent-1.webp"
                      alt=""
                      className="object-cover w-full transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">January 15, 2023</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Navigating the Cosmos To Space Exploration Office
                      Analyzing
                    </p>
                  </div>
                </a>
              </div>
              {/* <!-- tags  --> */}
              <div className="mt-[54px]">
                <h1 className="font-semibold text-22 text-main-black">
                  Popular Tags
                </h1>
                <div className="mt-8 flex gap-2.5 flex-wrap">
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      IT Manage
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      IT Design
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      UX/UI
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      Data
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      Cyber Security
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      Development
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      Recovery
                    </span>
                  </a>
                </div>
              </div>
              {/* <!-- banner  --> */}
              <div className="mt-[30px] flex justify-center items-end relative w-full rounded-2xl overflow-hidden">
                <img
                  src="./assets/images/service/detail-3.webp"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="absolute w-full h-full black_overlay"></div>
                <div className="w-full max-w-[277px] absolute bottom-[30px]">
                  <h1 className="mb-5 font-semibold text-center text-white text-24">
                    Modern IT Design Consulting Services
                  </h1>
                  <a href="#">
                    <div className="inline-flex w-full py-3 home-two-btn-bg group bg-purple border-purple">
                      <svg
                        className="relative z-10"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:fill-purple"
                          d="M24.1094 2.17188C24.625 2.3125 25 2.73438 25 3.25C25 15.2969 15.25 25 3.25 25C2.6875 25 2.26562 24.6719 2.125 24.1562L1 19.2812C0.90625 18.7656 1.14062 18.2031 1.65625 17.9688L6.90625 15.7188C7.375 15.5312 7.89062 15.6719 8.21875 16.0469L10.5625 18.9062C14.2188 17.1719 17.1719 14.1719 18.8594 10.6094L16 8.26562C15.625 7.9375 15.4844 7.42188 15.6719 6.95312L17.9219 1.70312C18.1562 1.1875 18.7188 0.90625 19.2344 1.04688L24.1094 2.17188Z"
                          fill="white"
                        />
                      </svg>

                      <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                        +236 (456) 896 22
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- side bar end  --> */}
        </div>
      </section>
    </InnerPageLayout>
  );
}
