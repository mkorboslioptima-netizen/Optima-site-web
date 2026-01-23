import React from "react";

export default function CheckoutSidebar() {
  return (
    <div className="col-span-8 lg:col-span-4">
      <div className="p-2 border border-purple/10 md:p-9 bg-main-gray rounded-xl">
        <div className="flex flex-col gap-4 pb-8 sm:flex-row">
          <div className="relative w-full sm:w-20 sm:h-20 aspect-square">
            <div className="bg-[#101828]/50 w-full h-full flex justify-center items-center absolute">
              <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 scale-150 video-play-btn ml-7 sm:ml-0 sm:scale-100"
              >
                <span className="relative flex items-center justify-center bg-white rounded-full size-6">
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
              src="./assets/images/checkout-product.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-18 text-main-black">
              Complete Website Design
            </h1>
            <h2 className="mt-2 font-semibold text-18 text-paragraph">
              Price : $49
            </h2>
            <p className="text-paragraph">
              It gives huge self-satisfaction when look at your work
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2.5 w-[300px] max-w-full">
            <input
              placeholder="Coupon Code"
              id="coupon"
              type="text"
              className="placeholder:text-paragraph w-full h-[56px] bg-white focus:border-purple focus:outline-none focus:right-0 rounded-full px-[25px]"
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
        <div className="flex justify-between pb-5 border-b border-main-black/5 mt-11">
          <p className="text-main-black">Subtotals</p>
          <p className="font-semibold text-main-black">$49</p>
        </div>
        <div className="flex justify-between pt-3 pb-5 border-b border-main-black/5">
          <p className="text-main-black">Shipping</p>
          <p className="font-semibold text-main-black">Free Shipping</p>
        </div>
        <div className="flex justify-between pt-3 border-main-black/5">
          <p className="text-main-black">Total</p>
          <p className="font-bold text-main-black text-24">$49</p>
        </div>
      </div>
    </div>
  );
}
