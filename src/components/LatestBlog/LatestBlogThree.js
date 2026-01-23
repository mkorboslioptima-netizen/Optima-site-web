import React from "react";
import { Link } from "react-router-dom";

export default function LatestBlogThree() {
  return (
    <section
      id="blogs"
      className="bg-white w-full py-16 md:py-[130px] overflow-hidden"
    >
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[777px] w-full flex flex-col items-center mx-auto">
          <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 mb-1 font-medium">
            News & Blog
          </h1>
          <h2 className="pt-5 font-semibold text-center text-24 sm:text-48 text-main-black">
            Read and explore Our latest news
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-span-4 bg-white"
          >
            <img
              src="/assets/images/home-three/blogs/1.webp"
              alt=""
              className="w-full max-w-[410px] object-cover"
            />
            <div className="flex items-center w-full gap-5 py-4">
              <p className="font-semibold transition-all duration-300 cursor-pointer text-paragraph hover:text-buisness-red">
                Marketing
              </p>
              <span className="w-[5px] h-[5px] rounded-full bg-buisness-red"></span>
              <p className="text-paragraph">December 25, 2023</p>
            </div>
            <hr className="border-purple/10" />
            <h3 className="pt-4 font-semibold text-black case_card_title text-20 sm:text-24">
              <a href="#">
                People The Office Analyzing and Checking Finance Graphs
              </a>
            </h3>
            <Link to="/service-details">
              <div className="flex items-center gap-2 mt-4 group w-fit">
                <span className="relative font-medium leading-5 transition-all duration-300 border-b border-transparent group-hover:text-buisness-red text-paragraph font-inter before:inline-block before:border-buisness-red before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 group-hover:before:w-full before:overflow-hidden before:h-5">
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
                    className="transition-all duration-300 stroke-paragraph group-hover:stroke-buisness-red"
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
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="col-span-4 bg-white"
          >
            <img
              src="assets/images/home-three/blogs/2.webp"
              alt=""
              className="w-full max-w-[410px] object-cover"
            />
            <div className="flex items-center w-full gap-5 py-4">
              <p className="font-semibold transition-all duration-300 text-paragraph hover:text-buisness-red">
                Web Design
              </p>
              <span className="w-[5px] h-[5px] rounded-full bg-buisness-red"></span>
              <p className="text-paragraph">December 25, 2023</p>
            </div>
            <hr className="border-purple/10" />
            <h3 className="pt-4 font-semibold text-black case_card_title text-20 sm:text-24">
              <a href="#">
                People The Office Analyzing and Checking Finance Graphs
              </a>
            </h3>
            <Link to="/service-details">
              <div className="flex items-center gap-2 mt-4 group w-fit">
                <span className="relative font-medium leading-5 transition-all duration-300 border-b border-transparent group-hover:text-buisness-red text-paragraph font-inter before:inline-block before:border-buisness-red before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 group-hover:before:w-full before:overflow-hidden before:h-5">
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
                    className="transition-all duration-300 stroke-paragraph group-hover:stroke-buisness-red"
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
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="col-span-4 bg-white"
          >
            <img
              src="/assets/images/home-three/blogs/3.webp"
              alt=""
              className="w-full max-w-[410px] object-cover"
            />
            <div className="flex items-center w-full gap-5 py-4">
              <p className="font-semibold transition-all duration-300 text-paragraph hover:text-buisness-red">
                Web Design
              </p>
              <span className="w-[5px] h-[5px] rounded-full bg-buisness-red"></span>
              <p className="text-paragraph">December 25, 2023</p>
            </div>
            <hr className="border-purple/10" />
            <h3 className="pt-4 font-semibold text-black case_card_title text-20 sm:text-24">
              <a href="#">
                People The Office Analyzing and Checking Finance Graphs
              </a>
            </h3>
            <Link to="/service-details">
              <div className="flex items-center gap-2 mt-4 group w-fit">
                <span className="relative font-medium leading-5 transition-all duration-300 border-b border-transparent group-hover:text-buisness-red text-paragraph font-inter before:inline-block before:border-buisness-red before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                    className="transition-all duration-300 stroke-paragraph group-hover:stroke-buisness-red"
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
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
