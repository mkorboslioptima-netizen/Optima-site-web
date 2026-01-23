import React from "react";
import { Link } from "react-router-dom";

export default function HeroTwo() {
  return (
    <section
      id="banner-two"
      className="relative w-full py-3 overflow-hidden bg-blue-seo pt-28"
    >
      {/* <!-- content start --> */}
      <div className="w-full max-w-[1506px] relative theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 z-10">
        <img
          src="/assets/images/home-two/hero-dot-bg.svg"
          alt="img"
          className="absolute top-[75px] -left-[145px] moving-h2-hero-main-img"
        />
        <div className="col-span-5 my-auto">
          <h1
            className="pr-2 text-4xl font-semibold tracking-tight text-white md:text-65"
            data-depth="-0.28"
          >
            Your Trusted <br className="hidden md:block" />
            SEO Company for Real Results
          </h1>
          <p className="mt-5 font-medium text-white text-18 font-inter md:mt-5">
            Digital marketing agency, craft compelling narratives & leverage
            cutting-edge technologies to propel brands towards
          </p>
          <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
            <Link to="/pricing">
              <div className="home-two-btn-white group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
                  Get SEO Proposal
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-blue-seo"
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
              <div className="home-two-btn-white-rev group">
                <span className="text-base group-hover:text-blue-seo text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
                    className="transition-all duration-300 group-hover:stroke-blue-seo stroke-white"
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[70px] mt-5 md:mt-12">
            <div className="pr-12 py-1.5 sm:border-r-2 border-white">
              <p className="text-white text-base leading-[30px] font-semibold">
                Avg rating 4.8
              </p>
              <div className="flex gap-2.5 mt-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42625 1.01713C7.07 -0.339042 8.93 -0.339044 9.57375 1.01713L10.6863 3.36094C10.9419 3.89948 11.4361 4.27275 12.0077 4.35911L14.4955 4.73495C15.9349 4.95243 16.5097 6.79163 15.4681 7.84727L13.6679 9.67167C13.2543 10.0909 13.0656 10.6948 13.1632 11.2867L13.5882 13.8628C13.8341 15.3534 12.3293 16.4901 11.0418 15.7864L8.81666 14.5701C8.3054 14.2906 7.6946 14.2906 7.18334 14.5701L4.95821 15.7864C3.67071 16.4901 2.16594 15.3534 2.41183 13.8628L2.83679 11.2867C2.93443 10.6948 2.74569 10.0909 2.33207 9.67167L0.5319 7.84727C-0.509707 6.79164 0.0650626 4.95243 1.50453 4.73496L3.9923 4.35911C4.56391 4.27275 5.05805 3.89948 5.31369 3.36094L6.42625 1.01713Z"
                    fill="#FFDC40"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42625 1.01713C7.07 -0.339042 8.93 -0.339044 9.57375 1.01713L10.6863 3.36094C10.9419 3.89948 11.4361 4.27275 12.0077 4.35911L14.4955 4.73495C15.9349 4.95243 16.5097 6.79163 15.4681 7.84727L13.6679 9.67167C13.2543 10.0909 13.0656 10.6948 13.1632 11.2867L13.5882 13.8628C13.8341 15.3534 12.3293 16.4901 11.0418 15.7864L8.81666 14.5701C8.3054 14.2906 7.6946 14.2906 7.18334 14.5701L4.95821 15.7864C3.67071 16.4901 2.16594 15.3534 2.41183 13.8628L2.83679 11.2867C2.93443 10.6948 2.74569 10.0909 2.33207 9.67167L0.5319 7.84727C-0.509707 6.79164 0.0650626 4.95243 1.50453 4.73496L3.9923 4.35911C4.56391 4.27275 5.05805 3.89948 5.31369 3.36094L6.42625 1.01713Z"
                    fill="#FFDC40"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42625 1.01713C7.07 -0.339042 8.93 -0.339044 9.57375 1.01713L10.6863 3.36094C10.9419 3.89948 11.4361 4.27275 12.0077 4.35911L14.4955 4.73495C15.9349 4.95243 16.5097 6.79163 15.4681 7.84727L13.6679 9.67167C13.2543 10.0909 13.0656 10.6948 13.1632 11.2867L13.5882 13.8628C13.8341 15.3534 12.3293 16.4901 11.0418 15.7864L8.81666 14.5701C8.3054 14.2906 7.6946 14.2906 7.18334 14.5701L4.95821 15.7864C3.67071 16.4901 2.16594 15.3534 2.41183 13.8628L2.83679 11.2867C2.93443 10.6948 2.74569 10.0909 2.33207 9.67167L0.5319 7.84727C-0.509707 6.79164 0.0650626 4.95243 1.50453 4.73496L3.9923 4.35911C4.56391 4.27275 5.05805 3.89948 5.31369 3.36094L6.42625 1.01713Z"
                    fill="#FFDC40"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42625 1.01713C7.07 -0.339042 8.93 -0.339044 9.57375 1.01713L10.6863 3.36094C10.9419 3.89948 11.4361 4.27275 12.0077 4.35911L14.4955 4.73495C15.9349 4.95243 16.5097 6.79163 15.4681 7.84727L13.6679 9.67167C13.2543 10.0909 13.0656 10.6948 13.1632 11.2867L13.5882 13.8628C13.8341 15.3534 12.3293 16.4901 11.0418 15.7864L8.81666 14.5701C8.3054 14.2906 7.6946 14.2906 7.18334 14.5701L4.95821 15.7864C3.67071 16.4901 2.16594 15.3534 2.41183 13.8628L2.83679 11.2867C2.93443 10.6948 2.74569 10.0909 2.33207 9.67167L0.5319 7.84727C-0.509707 6.79164 0.0650626 4.95243 1.50453 4.73496L3.9923 4.35911C4.56391 4.27275 5.05805 3.89948 5.31369 3.36094L6.42625 1.01713Z"
                    fill="#FFDC40"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42625 1.01713C7.07 -0.339042 8.93 -0.339044 9.57375 1.01713L10.6863 3.36094C10.9419 3.89948 11.4361 4.27275 12.0077 4.35911L14.4955 4.73495C15.9349 4.95243 16.5097 6.79163 15.4681 7.84727L13.6679 9.67167C13.2543 10.0909 13.0656 10.6948 13.1632 11.2867L13.5882 13.8628C13.8341 15.3534 12.3293 16.4901 11.0418 15.7864L8.81666 14.5701C8.3054 14.2906 7.6946 14.2906 7.18334 14.5701L4.95821 15.7864C3.67071 16.4901 2.16594 15.3534 2.41183 13.8628L2.83679 11.2867C2.93443 10.6948 2.74569 10.0909 2.33207 9.67167L0.5319 7.84727C-0.509707 6.79164 0.0650626 4.95243 1.50453 4.73496L3.9923 4.35911C4.56391 4.27275 5.05805 3.89948 5.31369 3.36094L6.42625 1.01713Z"
                    fill="#FFDC40"
                  />
                </svg>
              </div>
            </div>
            <div className="">
              <p
                className="text-white text-base leading-[30px] font-semibold"
                data-scroll-qs="scroll"
                data-count-qs="5"
                data-type-qs="m+ Global Customer"
                data-speed-qs="1000"
              >
                5m+ Global Customer
              </p>
              <div className="relative flex mt-4 cursor-pointer">
                <img
                  src="/assets/images/home-two/customer/1.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full overflow-hidden hover:z-10 transition-all duration-300"
                />
                <img
                  src="/assets/images/home-two/customer/2.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full overflow-hidden relative -left-1 hover:z-10 transition-all duration-300"
                />
                <img
                  src="/assets/images/home-two/customer/3.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full overflow-hidden relative -left-2 hover:z-10 transition-all duration-300"
                />
                <img
                  src="/assets/images/home-two/customer/4.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full overflow-hidden relative -left-3 hover:z-10 transition-all duration-300"
                />
                <img
                  src="/assets/images/home-two/customer/5.webp"
                  alt=""
                  className="w-[25px] h-[25px] object-cover rounded-full overflow-hidden relative -left-4 hover:z-10 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- circle animations elements  --> */}

        <img
          src="/assets/images/home-two/hero-img.webp"
          alt="img"
          className="relative bottom-0 right-0 self-end col-span-7 2xl:-right-52 moving-h2-hero-main-img"
        />
      </div>
      <div className="rotating_circle z-0 absolute flex justify-center items-center -bottom-4 xl:-bottom-[150px] right-0 xl:-right-20 h-0 w-full xl:w-[880px] 2xl:max-w-[1250px]">
        <img
          src="/assets/images/home-two/round-shape-1.svg"
          alt=""
          className="w-full"
        />
        <img
          src="/assets/images/home-two/round-shape-2.svg"
          alt=""
          className="absolute w-10/12"
        />
        <img
          src="/assets/images/home-two/round-shape-3.svg"
          alt=""
          className="absolute w-8/12"
        />
        <img
          src="/assets/images/home-two/round-shape-4.svg"
          alt=""
          className="absolute w-6/12"
        />
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
