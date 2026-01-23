import React from "react";

export default function CtaThree() {
  return (
    <section className="bg-main-black">
      <div className="py-16 md:py-[130px] border-b border-white/5">
        <div className="grid w-full grid-cols-6 mx-auto theme-container lg:grid-cols-12 gap-y-5">
          <div className="col-span-6">
            <h1 className="font-medium text-white border border-white/10 bg-white/5 px-5 rounded-[30px] py-1 w-fit">
              Get Consultations
            </h1>
            <h2 className="pt-5 font-semibold text-white text-24 sm:text-48">
              Ready to Talk Our Expertise
            </h2>
            <a href="#">
              <div className="home-two-btn-bg py-2.5 sm:py-3.5 group bg-purple border-purple w-fit mt-5 md:mt-12">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
                  Contact US
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
                    className="transition-all duration-300 group-hover:stroke-purple"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="col-span-6">
            <div className="flex w-full lg:justify-end">
              <div className="w-full lg:max-w-[440px]">
                <h1 className="font-semibold text-white text-22">
                  Follow Social Media
                </h1>
                <div className="flex gap-5 flex-wrap pt-[30px]">
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">Facebook</span>
                    </div>
                  </a>
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">
                        Instagram
                      </span>
                    </div>
                  </a>
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">Dribbble</span>
                    </div>
                  </a>
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">Twitter</span>
                    </div>
                  </a>
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">LinkedIn</span>
                    </div>
                  </a>
                  <a href="#" target="blank">
                    <div className="overflow-hidden flex gap-2 items-center justify-center border bg-white/5 border-white/10 rounded-[41px] px-6 sm:px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-[#4A7DFF] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                      <span className="relative z-10 text-white">YouTube</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
