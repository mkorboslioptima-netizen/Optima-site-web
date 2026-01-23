import React from "react";
import { Link } from "react-router-dom";

export default function CaseStudyOne() {
  return (
    <section
      id="caseStudies"
      className="bg-main-gray w-full py-16 md:py-[130px]"
    >
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[661px] w-full flex flex-col items-center mx-auto">
          <h1 className="border text-purple border-purple/10 py-0.5 px-5 rounded-[30px] w-fit bg-main-gray mb-1">
            Case Studies
          </h1>
          <h2 className="pt-5 font-semibold text-center text-black text-24 sm:text-48">
            We Have 253+ Projects Discover Our Case Studies
          </h2>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-6 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">Website Design</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="/project-details"> Modern Website Design </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                Defined by digital dynamism our digital marketing agency emerges
                as a beacon
              </p>
              <Link to="/project-details">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-three/case/1.svg"
                alt=""
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-6 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">Product Design</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="/project-details">
                  Mobile Apps Design & Development
                </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                Defined by digital dynamism our digital marketing agency emerges
                as a beacon
              </p>
              <Link to="/project-details">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-three/case/2.svg"
                alt=""
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-6 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">Mobile Apps Design</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="/project-details">Task Management Mobile Apps</Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                Defined by digital dynamism our digital marketing agency emerges
                as a beacon
              </p>
              <Link to="/project-details">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-three/case/3.svg"
                alt=""
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-6 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">Branding Design</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="/project-details">
                  Modern Website Design & Branding
                </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                Defined by digital dynamism our digital marketing agency emerges
                as a beacon
              </p>
              <Link to="/project-details">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-three/case/4.svg"
                alt=""
                className="object-cover w-full"
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
