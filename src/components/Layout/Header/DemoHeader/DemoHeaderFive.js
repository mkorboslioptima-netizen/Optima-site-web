import React, { useState } from "react";
import { demoLinkData, pagesLinkData, Horoquartzlink,Idemialink} from "../data";
import { Link } from "react-router-dom";
import LogoOptima from '../../../../assets/images/home-five/logo.svg';
import LogoOptima2 from '../../../../assets/images/home-five/Optima.png';
import ContactModalEtemptation from "../../../Services/ContactModalEtemptation";

export default function DemoHeaderFour() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 xl:block hidden">
        <div className="relative z-20 w-full px-6 lg:px-10 xl:px-20 2xl:px-40">
          <div className="w-full h-[95px] flex justify-between items-center">
            <div className="flex space-x-6 xl:space-x-[40px] 2xl:space-x-[60px] items-center">
              <div>
                <Link to="/">
                  <img src="/assets/images/logo.svg" alt="logo" className="h-20 xl:h-24 2xl:h-28 w-auto" />
                
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-6 xl:space-x-10 2xl:space-x-12 whitespace-nowrap">
                  <Link
                  href="#"
                   className="
                   relative
                   text-gray-800 font-semibold text-sm 2xl:text-base
                   transition-all duration-300
                   hover:text-[#890011]

                   after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-[#890011]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  
                  "
                  to="/"
                  >
                   Accueil
                  </Link>

                    <li className="relative group">
                    <a
                  href="#"
                   className="
                   relative
                   text-gray-800 font-semibold text-sm 2xl:text-base
                   transition-all duration-300
                   hover:text-[#890011]

                   after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-[#890011]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  w-fit flex gap-2 items-center
                  "
                  >
                      Gestion d'entreprise
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
                              className="relative leading-5 text-white home-two-nav-item hover:text-[#890011] w-fit text-s"
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
                      className="
                      relative
                      text-gray-800 font-semibold text-sm 2xl:text-base
                      transition-all duration-300
                      hover:text-[#890011]

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:w-0
                      after:h-[2px]
                      after:bg-[#890011]
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                      w-fit flex gap-2 items-center"
                    >
                        Gestion des temps
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
                              className="relative leading-5 text-white home-two-nav-item hover:text-[#890011] w-fit"
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
                      className="
                      relative
                      text-gray-800 font-semibold text-sm 2xl:text-base
                      transition-all duration-300
                      hover:text-[#890011]

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:w-0
                      after:h-[2px]
                      after:bg-[#890011]
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                      w-fit"
                      to="/outsourcing"
                    >
                      Outsourcing de la paie
                    </Link>
                  </li>
                   <li className="relative group">

                      <a
                      href="#"
                      className="
                      relative
                      text-gray-800 font-semibold text-sm 2xl:text-base
                      transition-all duration-300
                      hover:text-[#890011]

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:w-0
                      after:h-[2px]
                      after:bg-[#890011]
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                      w-fit flex gap-2 items-center"
                    >
                     
                       </a>
                       <div className="absolute px-2 -left-7 h-0 group-hover:h-[420px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-[#0A0118] border-t-[#0A0118] border border-white/10 mt-[38px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {Idemialink.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative leading-5 text-white home-two-nav-item hover:text-[#890011] w-fit"
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
                      className="
                      relative
                      text-gray-800 font-semibold text-sm 2xl:text-base
                      transition-all duration-300
                      hover:text-[#890011]

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:w-0
                      after:h-[2px]
                      after:bg-[#890011]
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                      w-fit"
                      to="/about"
                    >
                      À propos
                    </Link>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <button onClick={() => setModalOpen(true)}>
                  <div className="home-two-btn-bg py-2 px-4 group bg-buisness-red border-buisness-red w-fit whitespace-nowrap">
                    <span className="relative z-10 text-xs font-semibold text-white transition-all duration-300 group-hover:text-[#890011] font-inter">
                      Contactez-nous
                    </span>
                    <svg className="relative z-10" width="6" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="transition-all duration-300 group-hover:stroke-buisness-red"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <a
                  href="tel:+21671715397"
                  className="flex items-center gap-1 text-gray-500 hover:text-[#890011] transition-colors duration-300"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="text-xs font-medium whitespace-nowrap">+216 71 715 397</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-four-border w-full h-[1px]"></div>
      </div>

      <ContactModalEtemptation isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
