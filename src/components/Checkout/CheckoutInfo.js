"use client";
import React, { useState } from "react";
import CheckoutSidebar from "./CheckoutSidebar";

export default function CheckoutInfo() {
  const [open, setOpen] = useState(false);
  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <section className="py-16 md:py-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[60px] course-description">
        {/* <!-- Course  --> */}
        <div className="col-span-8">
          <h1 className="font-semibold text-24 text-main-black">
            Contact Information
          </h1>
          <p className="pb-5 text-paragraph">
            We’ll use this email to send you details and updates about your
            order
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
          />

          <h1 className="text-24 font-semibold text-main-black mt-[50px]">
            Shipping Address
          </h1>
          <p className="pb-5 text-paragraph">
            Enter the address where you want your order delivered
          </p>
          <div className="flex flex-col sm:flex-row gap-[30px]">
            <input
              type="text"
              placeholder="Fast Name"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc (optional)"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Country / Region"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <div className="flex flex-col sm:flex-row gap-[30px] mt-5">
            <input
              type="text"
              placeholder="Postal Code"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <div className="flex h-fit items-center mt-5 gap-2.5">
            <input
              type="checkbox"
              className="w-5 h-5 border accent-purple border-purple"
              id="use_same_address_for_billing"
            />
            <label
              htmlFor="use_same_address_for_billing"
              className="font-semibold text-main-black"
            >
              Use same address for billing
            </label>
          </div>
          {/* <!-- billing address  --> */}
          <h1 className="text-24 font-semibold text-main-black mt-[50px]">
            Billing Address
          </h1>
          <p className="pb-5 text-paragraph">
            Enter the billing address that matches your payments method
          </p>
          <div className="flex flex-col sm:flex-row gap-[30px]">
            <input
              type="text"
              placeholder="Fast Name"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc (optional)"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Country / Region"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <div className="flex flex-col sm:flex-row gap-[30px] mt-5">
            <input
              type="text"
              placeholder="Postal Code"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="outline-none focus:outline-none border border-purple/10 rounded-xl px-[30px] py-3 w-full mt-5"
          />
          <h1 className="text-24 font-semibold text-main-black mt-[50px]">
            Payment Options
          </h1>
          <p className="pb-5 text-paragraph">
            Enter the billing address that matches your payments method
          </p>
          <div className="relative h-[60px]">
            <div className="w-full border block cursor-pointer border-purple/10 rounded-xl px-[30px] py-3 absolute bg-white z-30">
              <div
                id="dropdown-box"
                className="flex items-center justify-between w-full "
                onClick={handleDropdown}
              >
                <span className="pointer-events-none text-paragraph">
                  Cash on Delivery
                </span>
                <svg
                  className="pointer-events-none"
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 0.999999L8.04289 7.29289C8.37623 7.62623 8.54289 7.79289 8.75 7.79289C8.95711 7.79289 9.12377 7.62623 9.45711 7.29289L15.75 1"
                    stroke="#794AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`dropdown dropdown-div overflow-hidden transition-all duration-300 text-paragraph h-[100px] ${
                  open ? "" : "dropdown-deActive"
                }`}
              >
                <p
                  className="transition-all duration-300 hover:text-main-black"
                  onClick={handleDropdown}
                >
                  Cash On Delivery
                </p>
                <p
                  className="transition-all duration-300 hover:text-main-black"
                  onClick={handleDropdown}
                >
                  Cash On Delivery
                </p>
                <p
                  className="transition-all duration-300 hover:text-main-black"
                  onClick={handleDropdown}
                >
                  Cash On Delivery
                </p>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="inline-flex py-3 mt-3 home-two-btn-bg group bg-purple border-purple">
              <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                Place Order
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
        {/* <!-- blogs end  --> */}
        {/* <!-- side bar start --> */}
        <CheckoutSidebar />
        {/* <!-- side bar end  --> */}
      </div>
    </section>
  );
}
