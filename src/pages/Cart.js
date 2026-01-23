import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CtaOne from "../components/Cta/CtaOne";

export default function Cart() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Cart" currentPage="Cart" href="/cart" />
      <section className="py-16 md:py-[130px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px] course-description">
          {/* <!-- Course  --> */}
          <div className="col-span-8">
            <div className="w-full rounded-[10px] bg-main-gray flex justify-between py-4 px-[30px]">
              <h1 className="">Course</h1>
              <h1 className="">Subtotal</h1>
            </div>

            <div className="flex gap-2.5 sm:gap-[30px] mt-[30px] border-b border-purple/10 pb-[30px] mb-[30px]">
              <button className="flex items-center h-full my-auto">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0.53125C13.8164 0.53125 17.7188 4.43359 17.7188 9.25C17.7188 14.0664 13.8164 17.9688 9 17.9688C4.18359 17.9688 0.28125 14.0664 0.28125 9.25C0.28125 4.43359 4.18359 0.53125 9 0.53125ZM9 16.2812C12.8672 16.2812 16.0312 13.1523 16.0312 9.25C16.0312 5.38281 12.8672 2.21875 9 2.21875C5.09766 2.21875 1.96875 5.38281 1.96875 9.25C1.96875 13.1523 5.09766 16.2812 9 16.2812ZM12.5508 7.07031L10.3711 9.25L12.5508 11.4648C12.7266 11.6055 12.7266 11.8867 12.5508 12.0625L11.7773 12.8359C11.6016 13.0117 11.3203 13.0117 11.1797 12.8359L9 10.6562L6.78516 12.8359C6.64453 13.0117 6.36328 13.0117 6.1875 12.8359L5.41406 12.0625C5.23828 11.8867 5.23828 11.6055 5.41406 11.4648L7.59375 9.25L5.41406 7.07031C5.23828 6.92969 5.23828 6.64844 5.41406 6.47266L6.1875 5.69922C6.36328 5.52344 6.64453 5.52344 6.78516 5.69922L9 7.87891L11.1797 5.69922C11.3203 5.52344 11.6016 5.52344 11.7773 5.69922L12.5508 6.47266C12.7266 6.64844 12.7266 6.92969 12.5508 7.07031Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </button>
              <div className="flex-1 flex flex-col sm:flex-row gap-2.5 sm:gap-[30px]">
                <div className="relative">
                  <div className="bg-[#101828]/50 w-full h-full flex justify-center items-center absolute">
                    <button
                      type="button"
                      aria-label="play-video"
                      className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                    >
                      <span className="flex size-[30px] rounded-full justify-center items-center bg-white relative">
                        <span>
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.6871 5.05938L1.82551 7.83743C1.01209 8.30225 0 7.71491 0 6.77805V1.22195C0 0.285093 1.01209 -0.302245 1.82551 0.162566L6.6871 2.94062C7.50681 3.40902 7.50681 4.59098 6.6871 5.05938Z"
                              fill="#4A7DFF"
                            />
                          </svg>
                        </span>
                        <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                        <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                        <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                      </span>
                    </button>
                  </div>
                  <img
                    src="./assets/images/home-ten/cart-img.png"
                    alt=""
                    className=""
                  />
                </div>
                <div className="">
                  <h1 className="font-semibold text-18 text-main-black">
                    Complete Website Design
                  </h1>
                  <h2 className="mt-2 font-semibold text-18 text-paragraph">
                    Price : $49
                  </h2>
                </div>
              </div>
              <div className="pr-[30px]">
                <h1 className="text-22 text-[#4A7DFF] font-semibold">$49.00</h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-[20px]">
              <div className="mb-2.5 w-[300px]">
                <input
                  placeholder="Coupon Code"
                  id="cpupon"
                  type="text"
                  className="placeholder:text-paragraph w-full h-[56px] bg-main-gray border border-[#e7e3fa] focus:border-purple focus:outline-none focus:right-0 rounded-full px-[25px]"
                />
              </div>
              <a href="#">
                <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
                  <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                    Apply Coupon
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
              </a>
            </div>
          </div>
          {/* <!-- blogs end  --> */}
          {/* <!-- side bar start --> */}
          <div className="col-span-8 lg:col-span-4">
            <div className="p-10 border border-purple/10 bg-main-gray rounded-xl">
              <h1 className="font-medium text-22 text-main-black">
                Cart Totals
              </h1>
              <div className="flex justify-between pt-3 pb-5 border-b border-main-black/5">
                <p className="text-main-black">Subtotals</p>
                <p className="font-semibold text-main-black">$49</p>
              </div>
              <div className="flex justify-between pt-3 pb-5 border-b border-main-black/5">
                <p className="text-main-black">Shipping</p>
                <p className="font-semibold text-main-black">Free Shipping</p>
              </div>
              <div className="flex justify-between pt-3 pb-5 border-b border-main-black/5">
                <p className="text-main-black">Total</p>
                <p className="font-semibold text-main-black">$49</p>
              </div>
              <a href="#">
                <div className="inline-flex py-3 mt-10 home-two-btn-bg group bg-purple border-purple">
                  <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                    Proceed to Checkout
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
              </a>
            </div>
          </div>
          {/* <!-- side bar end  --> */}
        </div>
      </section>
      <CtaOne />
    </InnerPageLayout>
  );
}
