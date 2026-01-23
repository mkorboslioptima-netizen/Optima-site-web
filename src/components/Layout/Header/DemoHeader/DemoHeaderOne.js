import React, { useEffect, useRef } from "react";
import { demoLinkData, pagesLinkData } from "../data";
import { Link } from "react-router-dom";

export default function DemoHeaderOne() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 76) {
          headerRef.current.classList.remove("h1-header-sticky-qs");
        } else {
          headerRef.current.classList.add("h1-header-sticky-qs");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        ref={headerRef}
        className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs"
      >
        <div className="2xl:px-[110px] px-5 mx-auto relative">
          
          <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
            <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
              <div>
                <Link to="/" aria-label="logo">
                  <img src="/assets/images/logo_optima.png" alt="" />
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                  <li className="z-50 group">
                    <a
                      href=""
                      className="flex items-center gap-2 font-semibold text-paragraph hover:underline hover:text-buisness-red"
                    >
                      Acceuil
                     
                    </a>
                    
                  </li>
                  <li className="relative group">
                    <a
                      className="flex items-center gap-2 font-semibold text-paragraph hover:underline hover:text-buisness-red"
                      href="#"
                    >
                      Sage
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[480px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-white mt-8 transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {pagesLinkData.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative font-medium leading-5 home-two-nav-item hover:text-buisness-red w-fit text-paragraph font-inter"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-buisness-red">
                    <Link to="/about">Horoquartz</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-buisness-red">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-buisness-red">
                    <Link to="/blog-details">Blogs</Link>
                  </li>
                  
                  <li className="font-semibold text-paragraph hover:underline hover:text-buisness-red">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="hh-search"
                      type="text"
                      className="w-0 px-0 transition-all duration-300 border-0 rounded-md border-buisness-red/10 focus:outline-none focus:border focus:w-48 focus:mr-2 focus:px-2"
                      placeholder="Search..."
                    />
                    <label
                      className="cursor-pointer"
                      htmlFor="hh-search"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9729 7.46687C13.9729 10.922 11.172 13.7229 7.71687 13.7229C4.26176 13.7229 1.46084 10.922 1.46084 7.46687C1.46084 4.01176 4.26176 1.21084 7.71687 1.21084C11.172 1.21084 13.9729 4.01176 13.9729 7.46687ZM7.71687 14.9337C11.8407 14.9337 15.1837 11.5907 15.1837 7.46687C15.1837 3.34303 11.8407 0 7.71687 0C3.59303 0 0.25 3.34303 0.25 7.46687C0.25 11.5907 3.59303 14.9337 7.71687 14.9337ZM16.5333 16.2832C15.9108 16.9056 14.9016 16.9056 14.2791 16.2832L12.7673 14.7713C13.6473 14.1617 14.4118 13.3972 15.0214 12.5172L16.5333 14.029C17.1557 14.6515 17.1557 15.6607 16.5333 16.2832Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex hidden space-x-[30px] items-center">
              <a href="#">
                <div className="flex space-x-1.5 items-center">
                  <span className="font-semibold">Sign Up</span>
                  <span>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.84289 11.625H8.84961M5.09961 11.625H5.10633"
                        stroke="#101828"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.17547 14.1336C1.34413 15.3862 2.38171 16.3676 3.64435 16.4257C4.70682 16.4745 5.78609 16.5 6.97461 16.5C8.16313 16.5 9.24241 16.4745 10.3049 16.4257C11.5675 16.3676 12.6051 15.3862 12.7738 14.1336C12.8838 13.316 12.9746 12.4782 12.9746 11.625C12.9746 10.7718 12.8838 9.93399 12.7738 9.11644C12.6051 7.86377 11.5675 6.88237 10.3049 6.82432C9.24241 6.77548 8.16313 6.75 6.97461 6.75C5.78609 6.75 4.70681 6.77548 3.64435 6.82432C2.38171 6.88237 1.34413 7.86377 1.17547 9.11644C1.06539 9.93399 0.974609 10.7718 0.974609 11.625C0.974609 12.4782 1.06539 13.316 1.17547 14.1336Z"
                        stroke="#101828"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.59961 6.75V4.875C3.59961 3.01104 5.11065 1.5 6.97461 1.5C8.83857 1.5 10.3496 3.01104 10.3496 4.875V6.75"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
              <Link to="/blog">
                <div className="py-3 home-two-btn-bg group bg-blue-seo border-blue-seo">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                    Contacter nous
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
          </div>
        </div>
      </div>
    </header>
  );
}
