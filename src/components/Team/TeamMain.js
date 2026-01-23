import React from "react";
import { Link } from "react-router-dom";

export default function TeamMain() {
  return (
    <section className="mt-16 md:mt-[130px]">
      <div className="theme-container mx-auto px-[78px] grid grid-cols-5 xl:grid-cols-10 gap-y-16 md:gap-x-[140px]">
        <div className="flex flex-col justify-center col-span-5">
          <h1 className="font-medium text-purple border border-purple/20 bg-purple/10 px-5 rounded-[30px] py-1 w-fit">
            Who We Are
          </h1>
          <h2 className="pt-5 font-semibold text-main-black text-24 sm:text-48">
            We Have a Dedicated Team member to grow your business
          </h2>
          <p className="mt-10 text-paragraph">
            Transform your educational journey accessible online courses believe
            learning should convenient, and tailored to your needs
          </p>
          <hr className="my-[70px]" />
          <div className="flex justify-between gap-4 mb-10">
            <div className="">
              <h1
                className="font-semibold text-black text-34 sm:text-48"
                data-scroll-qs="scroll"
                data-count-qs="35"
                data-type-qs="+"
                data-speed-qs="1000"
              ></h1>
              <p className="text-paragraph">Team Member</p>
            </div>
            <div className="">
              <h1
                className="font-semibold text-black text-34 sm:text-48"
                data-scroll-qs="scroll"
                data-count-qs="12"
                data-type-qs="+"
                data-speed-qs="1"
              ></h1>
              <p className="text-paragraph">Years Of Experience</p>
            </div>
            <div className="">
              <h1
                className="font-semibold text-black text-34 sm:text-48"
                data-scroll-qs="scroll"
                data-count-qs="8"
                data-type-qs="+"
                data-speed-qs=""
              ></h1>
              <p className="text-paragraph">Clients Satisfaits</p>
            </div>
          </div>
          <Link to="/teams">
            <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
              <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                Read More
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
                ></path>
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
