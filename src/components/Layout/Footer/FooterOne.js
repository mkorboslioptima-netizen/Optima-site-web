import React from "react";
import { Link } from "react-router-dom";
export default function FooterOne() {
  return (
    <footer>
      <div className="footer-one-wrapper w-full pt-[130px]">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="top-bar w-full flex md:flex-row md:justify-between items-center flex-col space-y-10 md:space-y-0 md:mb-[80px] mb-10">
              <div>
                <img src="/assets/images/logo-1.webp" alt="" />
              </div>
              <ul className="flex flex-wrap gap-5 md:gap-14 md:items-center">
                <li className="font-semibold text-18 hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">Facebook</a>
                </li>
                <li className="font-semibold text-18 hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">Twitter</a>
                </li>
                <li className="font-semibold text-18 hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">Instagram</a>
                </li>
                <li className="font-semibold text-18 hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="w-full py-[80px] border-t border-[e7e3fa] grid xl:grid-cols-12 md:grid-cols-3 md:gap-10 grid-cols-2 gap-8">
              <div className="xl:col-span-3">
                <div className="w-full mb-10">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Address
                  </p>
                  <p className="font-medium text-paragraph">
                    55 Street, 2nd block, 3rd Floor <br />
                    Melbourne, Australia
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Contact
                  </p>
                  <p className="font-medium text-paragraph">
                    infoquland@gmail.com <br />
                    +880 456 852 99
                  </p>
                </div>
              </div>
              <div className="xl:col-span-2">
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Services
                  </p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/project-details">Keyword Research</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/project-details">Email marketing</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/project-details">Content marketing</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/project-details">Web Development</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/project-details">Social Marketing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:col-span-2">
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Quick Link
                  </p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/contact">Help center</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/blogs">Tutorials</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/contact">Create a ticket </Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/teams">Meet Our Team</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:col-span-2">
                <div className="w-full">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Company
                  </p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/about">About us</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/projects">Careers</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/blogs">News & Blog </Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/blog-details">Our Reviews</Link>
                    </li>
                    <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 xl:col-span-3 md:col-span-1">
                <div className="w-full mb-10">
                  <p className="text-main-black text-18 font-semibold mb-[30px]">
                    Newsletter
                  </p>
                  <p className="font-medium text-paragraph mb-[30px]">
                    Subscribe newsletter to get updates
                  </p>
                  <div className="mb-2.5">
                    <input
                      placeholder="Email Address"
                      className="placeholder:text-paragraph typewriter-input w-full h-[56px] bg-main-gray border border-[#e7e3fa] focus:border-buisness-red focus:outline-none focus:right-0 rounded-full px-[25px]"
                      type="text"
                    />
                  </div>

                  <a to="#">
                    <div className="inline-flex py-3 home-two-btn-bg group bg-buisness-red border-buisness-red">
                      <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-buisness-red font-inter">
                        Subscribe
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
                          className="transition-all duration-300 group-hover:stroke-buisness-red"
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
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient( 90deg, #890011 0%, #f3f4f9 63.23%)",
          }}
          className="w-full md:h-[65px] h-10"
        >
          <div className="h-full mx-auto theme-container">
            <div className="flex items-center justify-between w-full h-full text-xs md:text-base">
              <span className="text-white">
                2024 © All rights reserved by <b>Quland</b>
              </span>
              <div className="relative hidden md:block">
                <a
                  href="#"
                  aria-label="go top"
                  className="w-[45px] h-[45px] rounded-full border-[3px] border-white flex justify-center items-center bg-blue-sass absolute -top-[55px]"
                >
                  <span>
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="22.5"
                        cy="22.5"
                        r="21"
                        fill="#890011"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <path
                        d="M19 21L23 17M23 17L27 21M23 17V29"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <ul className="items-center hidden md:space-x-6 md:flex">
                <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">Privacy Policy</a>
                </li>
                <li className="font-medium text-paragraph">|</li>
                <li className="font-medium hover:text-buisness-red hover:underline common-transition text-paragraph">
                  <a to="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
