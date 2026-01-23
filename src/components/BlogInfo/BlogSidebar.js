import React from "react";
import { Link } from "react-router-dom";

export default function BlogSidebar() {
  return (
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
        <h1 className="font-semibold text-22 text-main-black">Category</h1>
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
        <h1 className="font-semibold text-22 text-main-black">Recent News</h1>
        <div className="mt-8">
          {/* <!-- single --> */}
          <Link
            href="/blog-details"
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
                Navigating the Cosmos To Space Exploration Office Analyzing
              </p>
            </div>
          </Link>
          {/* <!-- single --> */}
          <Link
            href="/blog-details"
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
                Navigating the Cosmos To Space Exploration Office Analyzing
              </p>
            </div>
          </Link>
          {/* <!-- single --> */}
          <Link
            href="/blog-details"
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
                Navigating the Cosmos To Space Exploration Office Analyzing
              </p>
            </div>
          </Link>
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
  );
}
