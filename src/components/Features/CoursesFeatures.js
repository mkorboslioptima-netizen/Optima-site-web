import React from "react";
import { Link } from "react-router-dom";

export default function CoursesFeatures() {
  return (
    <section className="py-16 md:py-[130px] bg-green-dark">
      <div className="theme-container mx-auto px-[78px] grid grid-cols-5 xl:grid-cols-10 gap-y-16 md:gap-x-[110px]">
        <div className="flex flex-col justify-center col-span-5">
          <h1 className="font-medium text-white border border-white/20 bg-white/10 px-5 rounded-[30px] py-0.5 w-fit">
            Online Learning
          </h1>
          <h2 className="pt-5 font-semibold text-white text-24 sm:text-48">
            Transform Your Education with Our Accessible Online Courses
          </h2>
          <p className="mt-10 text-white">
            Transform your educational journey with our accessible online
            courses believe that learning should be flexible, convenient, and
            tailored to your needs
          </p>
          <div className="flex justify-between gap-4 mt-8 mb-10">
            <div className="">
              <h1 className="flex items-center justify-center w-10 font-semibold text-white border border-white rounded-full aspect-square">
                <span>01</span>
              </h1>
              <p className="mt-3 font-medium text-white text-18 font-inter">
                Flexible your time
              </p>
            </div>
            <div className="">
              <h1 className="flex items-center justify-center w-10 font-semibold text-white border border-white rounded-full aspect-square">
                <span>02</span>
              </h1>
              <p className="mt-3 font-medium text-white text-18 font-inter">
                Course Certificate
              </p>
            </div>
            <div className="">
              <h1 className="flex items-center justify-center w-10 font-semibold text-white border border-white rounded-full aspect-square">
                <span>03</span>
              </h1>
              <p className="mt-3 font-medium text-white text-18 font-inter">
                Access anywhere
              </p>
            </div>
          </div>
          <Link href="/blogs">
            <div className="text-white transition-all duration-300 home-two-btn-white before:bg-orange after:bg-orange border-orange hover:border-white group w-fit">
              <span className="text-base group-hover:text-white text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
                  className="transition-all duration-300 group-hover:stroke-white stroke-white"
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
        <div className="grid grid-cols-2 col-span-5 gap-6 md:grid-cols-3">
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/1.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/2.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/3.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/4.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/5.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/6.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="700"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/7.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/8.webp" alt="" className="w-full" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="900"
            data-aos-duration="1000"
            className="col-span-1 w-full rounded-[20px] overflow-hidden"
          >
            <img src="/assets/images/team/9.webp" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
