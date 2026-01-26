import React from "react";
import { demoLinkData, pagesLinkData, Horoquartzlink,Idemialink} from "../data";
import { Link } from "react-router-dom";

export default function DemoHeaderFour() {
  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-20 bg-[#0A0118] xl:block hidden">
        <div className="relative z-20 mx-auto theme-container">
          <div className="w-full h-[95px] flex justify-between items-center">
            <div className="flex space-x-[100px] items-center">
              <div>
                <Link to="/">
                  <img src="/assets/images/home-four/logo.webp" alt="logo" />
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                  <li className="group">
                    <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Acceuil'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
                    >
                      Acceuil
                      
                    </a>
                  </li>
                    <li className="relative group">
                    <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Sage'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
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
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[420px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-[#0A0118] border-t-[#0A0118] border border-white/10 mt-[38px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {pagesLinkData.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative leading-5 text-white home-two-nav-item hover:text-purple w-fit"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                    <li className="relative group">
                  
                       <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Horoquartz'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
                    >
                        Horoquartz
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
                     <div className="absolute px-2 -left-7 h-0 group-hover:h-[420px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-[#0A0118] border-t-[#0A0118] border border-white/10 mt-[38px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {Horoquartzlink.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative leading-5 text-white home-two-nav-item hover:text-purple w-fit"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </li>
                   <li className="relative group">
                  
                      <a
                      href="#"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['IDEMIA'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
                    >
                      IDEMIA
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
                       <div className="absolute px-2 -left-7 h-0 group-hover:h-[420px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-[#0A0118] border-t-[#0A0118] border border-white/10 mt-[38px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {Idemialink.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative leading-5 text-white home-two-nav-item hover:text-purple w-fit"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </li>
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Company'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/about"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Services'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:content-['Contact'] before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-[30px] items-center">
              <a href="#">
                
              </a>
              <Link to="/contact">
                <div className="home-two-btn-bg py-2.5 group bg-purple border-purple">
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
              </Link>
            </div>
          </div>
        </div>
        <div className="header-four-border w-full h-[1px]"></div>
      </div>
    </header>
  );
}
