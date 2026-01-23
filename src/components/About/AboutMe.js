import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("about_me");
  const mainTabSectionRef = useRef(null);

  const handleTabClick = (name, index) => {
    setActiveTab(name);
    const scrollAmount =
      mainTabSectionRef.current.querySelector(`#${name}`).clientWidth * index;
    mainTabSectionRef.current.scrollLeft = scrollAmount;
  };

  const tabs = [
    { name: "about_me", label: "About Me" },
    { name: "experience", label: "Experience" },
    { name: "skills", label: "Skills" },
    { name: "education", label: "Education" },
    { name: "awards", label: "Awards" },
  ];
  return (
    <section
      id="about"
      className="pt-[70px] md:pt-[175px] max-w-full overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-full mx-auto theme-container h-fit">
        <img
          src="/assets/images/home-ten/about_shadow.png"
          alt=""
          className="absolute z-0 -right-24 lighting-hue"
        />
        <div className="relative z-10 grid grid-cols-3 gap-3 xl:grid-cols-12 gap-y-10">
          <div className="relative col-span-8">
            <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit">
              About Me
            </h1>
            <h2 className="sm:text-48 text-24 font-semibold text-white mb-[42px] mt-[18px] w-full max-w-[795px]">
              I Have 13+ Years Experience <br />
              With 450+ Projects Done
            </h2>
            <div className="max-w-[665px]">
              {/* <!-- menu  --> */}
              <div className="border border-white/10 rounded-[41px] p-[7px] flex justify-between flex-col sm:flex-row items-center">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.name}
                    name={tab.name}
                    className={`relative flex items-center justify-center overflow-hidden text-white border rounded-full w-fit hover:text-main-black border-main-black/10 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 h10-about-menu-btn tab_item ${
                      activeTab === tab.name ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick(tab.name, index)}
                  >
                    <span className="relative z-10 flex items-center gap-2 px-5 py-2 text-base font-semibold pointer-events-none h-fit">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
              <div
                ref={mainTabSectionRef}
                className="max-w-[698px] h-[560px] md:h-[440px] overflow-y-scroll overflow-x-scroll flex transition-all duration-300 scroll-smooth relative no-scrollbar py-5 sm:py-10 max-h-fit main-tab-section w-full"
              >
                <div
                  id="about_me"
                  className="relative max-w-full min-w-full h-fit"
                >
                  <p className="text-dark-silver">
                    As a web designer, my passion lies in crafting digital
                    experiences that captivate, engage, and inspire. With a keen
                    eye for aesthetics and a deep understanding of user
                    experience principles, I strive to create websites that not
                    only look stunning
                  </p>
                  <div className="flex pt-10 gap-[100px] pb-10">
                    <div className="">
                      <h1 className="font-semibold text-18 text-caribbean-green">
                        Address
                      </h1>
                      <p className="font-medium text-white">
                        55 Street, 2nd block, 3rd Floor
                      </p>
                      <p className="font-medium text-white">
                        Melbourne, Australia
                      </p>
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-18 text-caribbean-green">
                        Contact
                      </h1>
                      <p className="font-medium text-white">
                        infoquland@gmail.com
                      </p>
                      <p className="font-medium text-white">+880 456 852 99</p>
                    </div>
                  </div>
                  <Link href="/services" className="pointer-events-auto">
                    <div className="home-two-btn-bg group bg-transparent border-white/10 py-[15px] w-fit before:bg-caribbean-green after:bg-caribbean-green hover:border-caribbean-green">
                      <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
                        Contact Me
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
                          className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
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
                <div id="experience" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Senior UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior UX Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Lead UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior Team Leader
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div id="skills" className="relative max-w-full min-w-full">
                  <div className="flex w-full gap-[30px]">
                    <div className="w-full flex flex-col gap-[30px]">
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Figma</p>
                          <p className="">85%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[85%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Sketch</p>
                          <p className="">63%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[63%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Photoshop</p>
                          <p className="">88%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[88%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Adobe XD</p>
                          <p className="">76%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[76%] before:bg-caribbean-green mt-3"></div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-[30px]">
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Wireframe</p>
                          <p className="">81%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[81%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Prototype</p>
                          <p className="">72%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[72%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">HTML CSS</p>
                          <p className="">45%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[45%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">WordPress</p>
                          <p className="">55%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[55%] before:bg-caribbean-green mt-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="education" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Senior UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior UX Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Lead UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015-2018</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior Team Leader
                      </h1>
                      <p className="text-[#8E8E8E] text-sm leading-[30px]">
                        Quomodosoft
                      </p>
                      <p className="text-dark-silver">
                        Modern business agencies the ways customized the most
                        solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div id="awards" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015</span>
                      </div>
                      <div className="text-caribbean-green py-[38px]">
                        <svg
                          width="85"
                          height="69"
                          viewBox="0 0 85 69"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.1978 53.5023L53.9949 46.4903C53.8642 45.7275 53.1399 45.215 52.3772 45.3463C51.6144 45.4771 51.1022 46.2014 51.2332 46.9641L51.956 51.1781L43.1516 46.5494C42.7432 46.3349 42.2557 46.3349 41.8477 46.5494L33.0434 51.1782L34.7248 41.3742C34.8028 40.9196 34.6521 40.456 34.322 40.1341L27.1991 33.1909L37.0425 31.7606C37.8085 31.6493 38.3389 30.9384 38.2277 30.1725C38.1165 29.4065 37.4031 28.876 36.6398 28.9874L23.9869 30.8261C23.4591 30.9026 23.0205 31.2723 22.8557 31.7795C22.691 32.2867 22.8284 32.8436 23.2101 33.2158L31.8384 41.6264L29.8017 53.5025C29.7116 54.0279 29.9276 54.5593 30.3591 54.8728C30.7904 55.186 31.3623 55.2275 31.8344 54.9795L42.4996 49.3723L53.165 54.9795C53.3703 55.0871 53.5941 55.1402 53.8169 55.1402C54.1076 55.1402 54.3966 55.0499 54.6405 54.8724C55.072 54.559 55.2881 54.0277 55.1978 53.5023Z"
                            fill="currentColor"
                          />
                          <path
                            d="M62.1432 31.7792C61.9785 31.272 61.5399 30.9023 61.0119 30.8258L49.0879 29.0931L43.7553 18.2879C43.5192 17.8096 43.0321 17.5068 42.4987 17.5068C41.9653 17.5068 41.4784 17.8096 41.2421 18.2879L38.0722 24.7108C37.7306 25.4044 38.0154 26.2446 38.7092 26.5869C39.4035 26.9299 40.2434 26.6445 40.5857 25.9506L42.499 22.0736L46.9011 30.9934C47.1053 31.4068 47.4996 31.6937 47.956 31.7599L57.7995 33.1903L50.6765 40.1334C50.1223 40.6735 50.1112 41.5607 50.6511 42.1147C50.9258 42.3964 51.2899 42.5378 51.6546 42.5378C52.0071 42.5378 52.36 42.4055 52.6325 42.1401L61.7884 33.2154C62.1706 32.8432 62.3079 32.2865 62.1432 31.7792Z"
                            fill="currentColor"
                          />
                          <path
                            d="M36.6215 65.8465C31.9036 64.7784 27.5117 62.4603 23.8962 59.181C23.444 58.6811 22.9189 58.1542 22.3245 57.643C21.7456 57.0316 21.191 56.3936 20.6642 55.7295C18.2024 52.626 16.4024 49.036 15.352 45.2178C15.2621 44.7866 15.1513 44.3352 15.016 43.8725C14.5298 41.7201 14.2773 39.507 14.2773 37.2762C14.2773 30.1811 16.7839 23.3379 21.3354 18.0073C21.3987 17.9331 21.453 17.8542 21.4981 17.7721C21.5019 17.7709 21.5056 17.7702 21.5094 17.7689C23.2223 17.2166 27.4181 15.522 29.3814 11.7283C31.339 7.94476 30.3459 3.4728 29.8281 1.72548C29.686 1.24619 29.3488 0.836468 28.9026 0.601224C28.4596 0.367474 27.9352 0.320657 27.4635 0.472395C25.7506 1.02473 21.5549 2.71908 19.5916 6.51304C17.7013 10.1662 18.5621 14.4605 19.0897 16.3249C17.5679 18.1277 16.2575 20.0848 15.1744 22.1579C15.0195 21.022 14.7056 19.865 14.1539 18.761C13.484 17.4199 11.3421 14.1058 5.9368 12.3013C5.46116 12.1423 4.92942 12.1841 4.47752 12.4157C4.02148 12.649 3.67351 13.0605 3.52277 13.5445C2.94819 15.3851 1.82791 20.0994 3.83288 24.1124C4.50276 25.4533 6.64469 28.7673 12.0503 30.572C12.0872 30.5843 12.1244 30.5943 12.1617 30.6042C11.7093 32.7827 11.4754 35.0176 11.4754 37.2761C11.4754 37.5271 11.4789 37.7781 11.4847 38.0286C10.1768 36.9105 7.08679 34.9135 1.83754 35.0745C1.33667 35.09 0.852073 35.3131 0.507756 35.6865C0.160784 36.0632 -0.0234938 36.5697 0.00240468 37.0759C0.0996898 39.0015 0.678918 43.8124 3.94727 46.8846C5.00114 47.8747 7.97364 50.1134 13.2946 50.1134C13.4903 50.1134 13.6896 50.1104 13.8914 50.1043C13.9575 50.1023 14.0236 50.096 14.0888 50.0868C14.7793 51.7105 15.6002 53.2768 16.5467 54.7666C14.8701 54.4992 11.1592 54.3981 6.73799 57.3334C6.32046 57.6105 6.02612 58.0554 5.93032 58.5543C5.83387 59.0572 5.94427 59.5847 6.2333 60.0019C7.33116 61.5871 10.3598 65.3699 14.756 66.2571C15.2033 66.3474 15.8775 66.4424 16.7336 66.4424C18.6919 66.4422 21.6004 65.9443 24.9036 63.7511C24.9436 63.7245 24.9814 63.695 25.0193 63.6656C28.3273 66.0021 32.0605 67.6871 36.0024 68.5796C36.1067 68.6032 36.2106 68.6143 36.313 68.6143C36.953 68.6143 37.5311 68.1729 37.6783 67.5225C37.8497 66.7677 37.3762 66.0175 36.6215 65.8465ZM22.0803 7.80099C23.2962 5.45104 25.853 4.10747 27.3877 3.48226C27.7514 5.12947 28.119 8.0701 26.8926 10.4403C25.6767 12.7903 23.1199 14.1338 21.5853 14.759C21.2215 13.1118 20.854 10.1714 22.0803 7.80099ZM12.0419 27.5788C10.425 26.913 7.62916 25.4415 6.33955 22.8601C5.03683 20.2527 5.52276 17.03 5.94543 15.2948C7.56209 15.9605 10.358 17.4319 11.6476 20.0134V20.0136C12.95 22.6207 12.464 25.8439 12.0419 27.5788ZM5.86641 44.8426C3.74257 42.8462 3.08415 39.6546 2.88045 37.88C4.62793 37.9458 7.75998 38.3598 9.86257 40.3359C11.1429 41.539 11.8881 43.1754 12.3249 44.6754C12.4102 45.0426 12.5029 45.408 12.6007 45.7719C12.7205 46.3402 12.7986 46.8623 12.8485 47.2984C11.101 47.2327 7.96883 46.8185 5.86641 44.8426ZM15.3112 63.5104C12.4544 62.9338 10.2122 60.5682 9.10355 59.1681C10.6231 58.3028 13.5026 57.003 16.3312 57.5743C17.9203 57.895 19.3185 58.7698 20.4381 59.7235C20.9001 60.2048 21.3761 60.6705 21.8657 61.1199C22.1212 61.4043 22.3479 61.6752 22.5392 61.9164C21.0197 62.7819 18.1408 64.0809 15.3112 63.5104Z"
                            fill="currentColor"
                          />
                          <path
                            d="M84.4921 35.6866C84.1477 35.3132 83.6633 35.0904 83.1629 35.075C77.9142 34.9141 74.8233 36.9115 73.5154 38.0294C73.5213 37.7787 73.5247 37.5279 73.5247 37.2765C73.5247 35.0179 73.2907 32.7832 72.8384 30.6047C72.8758 30.5947 72.913 30.585 72.9497 30.5725C78.3558 28.7676 80.4976 25.4537 81.1674 24.1128C83.1717 20.1006 82.052 15.3861 81.4774 13.5448C81.3263 13.0605 80.9778 12.6491 80.5225 12.4162C80.0707 12.1851 79.5392 12.1433 79.0637 12.3018C73.6582 14.1062 71.5161 17.4202 70.8461 18.7615C70.2944 19.8655 69.9803 21.0224 69.8256 22.1582C68.7427 20.0853 67.4323 18.128 65.9106 16.3252C66.4384 14.461 67.2992 10.1667 65.4087 6.51335C63.4454 2.71923 59.2497 1.02487 57.5369 0.472704C57.0656 0.320468 56.5408 0.36745 56.0974 0.601532C55.6513 0.836943 55.3142 1.247 55.1725 1.72579C54.6546 3.47294 53.6615 7.94473 55.6191 11.7284C57.5824 15.5224 61.7781 17.2165 63.4909 17.769C63.4946 17.7702 63.4984 17.7709 63.5022 17.7722C63.5474 17.8544 63.6016 17.9334 63.6649 18.0076C68.2164 23.3382 70.7231 30.1814 70.7231 37.2765C70.7231 39.5075 70.4707 41.7209 69.9843 43.8735C69.849 44.3357 69.7384 44.7866 69.6486 45.2172C68.5982 49.0359 66.7983 52.6262 64.3361 55.7298C63.8095 56.3936 63.2553 57.0312 62.6766 57.6422C62.0814 58.1542 61.5555 58.6818 61.103 59.1823C57.488 62.4611 53.0964 64.7787 48.379 65.8468C47.6243 66.0178 47.1512 66.7681 47.322 67.5228C47.4692 68.1732 48.047 68.6146 48.6873 68.6146C48.7899 68.6146 48.8937 68.6032 48.9979 68.58C52.9398 67.6873 56.673 66.0022 59.981 63.6659C60.0185 63.6954 60.0562 63.7247 60.0962 63.7512C63.4006 65.9451 66.3082 66.4428 68.2665 66.4428C69.1222 66.4428 69.7969 66.3477 70.2438 66.2576C74.641 65.3702 77.669 61.5875 78.7668 60.0024C79.0559 59.5852 79.1663 59.0578 79.0698 58.5548C78.974 58.0559 78.6797 57.611 78.2627 57.3344C73.8415 54.3989 70.13 54.5 68.4536 54.7675C69.4001 53.2776 70.221 51.7109 70.9115 50.0875C70.9769 50.0966 71.0426 50.1027 71.1089 50.1049C71.3113 50.111 71.51 50.114 71.7057 50.114C77.0265 50.114 79.9997 47.8753 81.053 46.8852C84.3217 43.8131 84.901 39.0023 84.9982 37.0763C85.0235 36.5695 84.8392 36.0628 84.4921 35.6866ZM63.4149 14.7593C61.8801 14.1343 59.3234 12.7907 58.1077 10.4408C56.8813 8.07074 57.2486 5.13027 57.6126 3.48273C59.1475 4.10778 61.7039 5.45135 62.9198 7.8013C64.146 10.1713 63.779 13.1118 63.4149 14.7593ZM68.6689 57.5748C71.4975 57.0042 74.3771 58.3031 75.8968 59.1685C74.7886 60.5687 72.5462 62.9341 69.6889 63.5108C66.8615 64.0809 63.9808 62.7825 62.4613 61.9171C62.652 61.676 62.8787 61.4054 63.1338 61.1212C63.6241 60.671 64.1007 60.2045 64.5635 59.7225C65.6827 58.7693 67.0803 57.8954 68.6689 57.5748ZM73.3527 20.0139C74.6425 17.4324 77.4382 15.961 79.055 15.2952C79.4772 17.0306 79.9632 20.2535 78.6609 22.8606C77.3713 25.4416 74.5756 26.9132 72.9586 27.5792C72.5359 25.8444 72.05 22.6215 73.3527 20.0139ZM79.1337 44.843C77.0312 46.8193 73.8991 47.2332 72.1516 47.2989C72.2018 46.8626 72.2798 46.3403 72.3998 45.7716C72.4973 45.4087 72.5897 45.0439 72.6751 44.6774C73.1117 43.1772 73.8573 41.54 75.1381 40.3365C77.2407 38.3603 80.3726 37.9464 82.1202 37.8807C81.9162 39.6547 81.2577 42.8467 79.1337 44.843Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Senior UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] mt-1 leading-[30px]">
                        Quomodosoft
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015</span>
                      </div>
                      <div className="text-caribbean-green py-[38px]">
                        <svg
                          width="85"
                          height="69"
                          viewBox="0 0 85 69"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.1978 53.5023L53.9949 46.4903C53.8642 45.7275 53.1399 45.215 52.3772 45.3463C51.6144 45.4771 51.1022 46.2014 51.2332 46.9641L51.956 51.1781L43.1516 46.5494C42.7432 46.3349 42.2557 46.3349 41.8477 46.5494L33.0434 51.1782L34.7248 41.3742C34.8028 40.9196 34.6521 40.456 34.322 40.1341L27.1991 33.1909L37.0425 31.7606C37.8085 31.6493 38.3389 30.9384 38.2277 30.1725C38.1165 29.4065 37.4031 28.876 36.6398 28.9874L23.9869 30.8261C23.4591 30.9026 23.0205 31.2723 22.8557 31.7795C22.691 32.2867 22.8284 32.8436 23.2101 33.2158L31.8384 41.6264L29.8017 53.5025C29.7116 54.0279 29.9276 54.5593 30.3591 54.8728C30.7904 55.186 31.3623 55.2275 31.8344 54.9795L42.4996 49.3723L53.165 54.9795C53.3703 55.0871 53.5941 55.1402 53.8169 55.1402C54.1076 55.1402 54.3966 55.0499 54.6405 54.8724C55.072 54.559 55.2881 54.0277 55.1978 53.5023Z"
                            fill="currentColor"
                          />
                          <path
                            d="M62.1432 31.7792C61.9785 31.272 61.5399 30.9023 61.0119 30.8258L49.0879 29.0931L43.7553 18.2879C43.5192 17.8096 43.0321 17.5068 42.4987 17.5068C41.9653 17.5068 41.4784 17.8096 41.2421 18.2879L38.0722 24.7108C37.7306 25.4044 38.0154 26.2446 38.7092 26.5869C39.4035 26.9299 40.2434 26.6445 40.5857 25.9506L42.499 22.0736L46.9011 30.9934C47.1053 31.4068 47.4996 31.6937 47.956 31.7599L57.7995 33.1903L50.6765 40.1334C50.1223 40.6735 50.1112 41.5607 50.6511 42.1147C50.9258 42.3964 51.2899 42.5378 51.6546 42.5378C52.0071 42.5378 52.36 42.4055 52.6325 42.1401L61.7884 33.2154C62.1706 32.8432 62.3079 32.2865 62.1432 31.7792Z"
                            fill="currentColor"
                          />
                          <path
                            d="M36.6215 65.8465C31.9036 64.7784 27.5117 62.4603 23.8962 59.181C23.444 58.6811 22.9189 58.1542 22.3245 57.643C21.7456 57.0316 21.191 56.3936 20.6642 55.7295C18.2024 52.626 16.4024 49.036 15.352 45.2178C15.2621 44.7866 15.1513 44.3352 15.016 43.8725C14.5298 41.7201 14.2773 39.507 14.2773 37.2762C14.2773 30.1811 16.7839 23.3379 21.3354 18.0073C21.3987 17.9331 21.453 17.8542 21.4981 17.7721C21.5019 17.7709 21.5056 17.7702 21.5094 17.7689C23.2223 17.2166 27.4181 15.522 29.3814 11.7283C31.339 7.94476 30.3459 3.4728 29.8281 1.72548C29.686 1.24619 29.3488 0.836468 28.9026 0.601224C28.4596 0.367474 27.9352 0.320657 27.4635 0.472395C25.7506 1.02473 21.5549 2.71908 19.5916 6.51304C17.7013 10.1662 18.5621 14.4605 19.0897 16.3249C17.5679 18.1277 16.2575 20.0848 15.1744 22.1579C15.0195 21.022 14.7056 19.865 14.1539 18.761C13.484 17.4199 11.3421 14.1058 5.9368 12.3013C5.46116 12.1423 4.92942 12.1841 4.47752 12.4157C4.02148 12.649 3.67351 13.0605 3.52277 13.5445C2.94819 15.3851 1.82791 20.0994 3.83288 24.1124C4.50276 25.4533 6.64469 28.7673 12.0503 30.572C12.0872 30.5843 12.1244 30.5943 12.1617 30.6042C11.7093 32.7827 11.4754 35.0176 11.4754 37.2761C11.4754 37.5271 11.4789 37.7781 11.4847 38.0286C10.1768 36.9105 7.08679 34.9135 1.83754 35.0745C1.33667 35.09 0.852073 35.3131 0.507756 35.6865C0.160784 36.0632 -0.0234938 36.5697 0.00240468 37.0759C0.0996898 39.0015 0.678918 43.8124 3.94727 46.8846C5.00114 47.8747 7.97364 50.1134 13.2946 50.1134C13.4903 50.1134 13.6896 50.1104 13.8914 50.1043C13.9575 50.1023 14.0236 50.096 14.0888 50.0868C14.7793 51.7105 15.6002 53.2768 16.5467 54.7666C14.8701 54.4992 11.1592 54.3981 6.73799 57.3334C6.32046 57.6105 6.02612 58.0554 5.93032 58.5543C5.83387 59.0572 5.94427 59.5847 6.2333 60.0019C7.33116 61.5871 10.3598 65.3699 14.756 66.2571C15.2033 66.3474 15.8775 66.4424 16.7336 66.4424C18.6919 66.4422 21.6004 65.9443 24.9036 63.7511C24.9436 63.7245 24.9814 63.695 25.0193 63.6656C28.3273 66.0021 32.0605 67.6871 36.0024 68.5796C36.1067 68.6032 36.2106 68.6143 36.313 68.6143C36.953 68.6143 37.5311 68.1729 37.6783 67.5225C37.8497 66.7677 37.3762 66.0175 36.6215 65.8465ZM22.0803 7.80099C23.2962 5.45104 25.853 4.10747 27.3877 3.48226C27.7514 5.12947 28.119 8.0701 26.8926 10.4403C25.6767 12.7903 23.1199 14.1338 21.5853 14.759C21.2215 13.1118 20.854 10.1714 22.0803 7.80099ZM12.0419 27.5788C10.425 26.913 7.62916 25.4415 6.33955 22.8601C5.03683 20.2527 5.52276 17.03 5.94543 15.2948C7.56209 15.9605 10.358 17.4319 11.6476 20.0134V20.0136C12.95 22.6207 12.464 25.8439 12.0419 27.5788ZM5.86641 44.8426C3.74257 42.8462 3.08415 39.6546 2.88045 37.88C4.62793 37.9458 7.75998 38.3598 9.86257 40.3359C11.1429 41.539 11.8881 43.1754 12.3249 44.6754C12.4102 45.0426 12.5029 45.408 12.6007 45.7719C12.7205 46.3402 12.7986 46.8623 12.8485 47.2984C11.101 47.2327 7.96883 46.8185 5.86641 44.8426ZM15.3112 63.5104C12.4544 62.9338 10.2122 60.5682 9.10355 59.1681C10.6231 58.3028 13.5026 57.003 16.3312 57.5743C17.9203 57.895 19.3185 58.7698 20.4381 59.7235C20.9001 60.2048 21.3761 60.6705 21.8657 61.1199C22.1212 61.4043 22.3479 61.6752 22.5392 61.9164C21.0197 62.7819 18.1408 64.0809 15.3112 63.5104Z"
                            fill="currentColor"
                          />
                          <path
                            d="M84.4921 35.6866C84.1477 35.3132 83.6633 35.0904 83.1629 35.075C77.9142 34.9141 74.8233 36.9115 73.5154 38.0294C73.5213 37.7787 73.5247 37.5279 73.5247 37.2765C73.5247 35.0179 73.2907 32.7832 72.8384 30.6047C72.8758 30.5947 72.913 30.585 72.9497 30.5725C78.3558 28.7676 80.4976 25.4537 81.1674 24.1128C83.1717 20.1006 82.052 15.3861 81.4774 13.5448C81.3263 13.0605 80.9778 12.6491 80.5225 12.4162C80.0707 12.1851 79.5392 12.1433 79.0637 12.3018C73.6582 14.1062 71.5161 17.4202 70.8461 18.7615C70.2944 19.8655 69.9803 21.0224 69.8256 22.1582C68.7427 20.0853 67.4323 18.128 65.9106 16.3252C66.4384 14.461 67.2992 10.1667 65.4087 6.51335C63.4454 2.71923 59.2497 1.02487 57.5369 0.472704C57.0656 0.320468 56.5408 0.36745 56.0974 0.601532C55.6513 0.836943 55.3142 1.247 55.1725 1.72579C54.6546 3.47294 53.6615 7.94473 55.6191 11.7284C57.5824 15.5224 61.7781 17.2165 63.4909 17.769C63.4946 17.7702 63.4984 17.7709 63.5022 17.7722C63.5474 17.8544 63.6016 17.9334 63.6649 18.0076C68.2164 23.3382 70.7231 30.1814 70.7231 37.2765C70.7231 39.5075 70.4707 41.7209 69.9843 43.8735C69.849 44.3357 69.7384 44.7866 69.6486 45.2172C68.5982 49.0359 66.7983 52.6262 64.3361 55.7298C63.8095 56.3936 63.2553 57.0312 62.6766 57.6422C62.0814 58.1542 61.5555 58.6818 61.103 59.1823C57.488 62.4611 53.0964 64.7787 48.379 65.8468C47.6243 66.0178 47.1512 66.7681 47.322 67.5228C47.4692 68.1732 48.047 68.6146 48.6873 68.6146C48.7899 68.6146 48.8937 68.6032 48.9979 68.58C52.9398 67.6873 56.673 66.0022 59.981 63.6659C60.0185 63.6954 60.0562 63.7247 60.0962 63.7512C63.4006 65.9451 66.3082 66.4428 68.2665 66.4428C69.1222 66.4428 69.7969 66.3477 70.2438 66.2576C74.641 65.3702 77.669 61.5875 78.7668 60.0024C79.0559 59.5852 79.1663 59.0578 79.0698 58.5548C78.974 58.0559 78.6797 57.611 78.2627 57.3344C73.8415 54.3989 70.13 54.5 68.4536 54.7675C69.4001 53.2776 70.221 51.7109 70.9115 50.0875C70.9769 50.0966 71.0426 50.1027 71.1089 50.1049C71.3113 50.111 71.51 50.114 71.7057 50.114C77.0265 50.114 79.9997 47.8753 81.053 46.8852C84.3217 43.8131 84.901 39.0023 84.9982 37.0763C85.0235 36.5695 84.8392 36.0628 84.4921 35.6866ZM63.4149 14.7593C61.8801 14.1343 59.3234 12.7907 58.1077 10.4408C56.8813 8.07074 57.2486 5.13027 57.6126 3.48273C59.1475 4.10778 61.7039 5.45135 62.9198 7.8013C64.146 10.1713 63.779 13.1118 63.4149 14.7593ZM68.6689 57.5748C71.4975 57.0042 74.3771 58.3031 75.8968 59.1685C74.7886 60.5687 72.5462 62.9341 69.6889 63.5108C66.8615 64.0809 63.9808 62.7825 62.4613 61.9171C62.652 61.676 62.8787 61.4054 63.1338 61.1212C63.6241 60.671 64.1007 60.2045 64.5635 59.7225C65.6827 58.7693 67.0803 57.8954 68.6689 57.5748ZM73.3527 20.0139C74.6425 17.4324 77.4382 15.961 79.055 15.2952C79.4772 17.0306 79.9632 20.2535 78.6609 22.8606C77.3713 25.4416 74.5756 26.9132 72.9586 27.5792C72.5359 25.8444 72.05 22.6215 73.3527 20.0139ZM79.1337 44.843C77.0312 46.8193 73.8991 47.2332 72.1516 47.2989C72.2018 46.8626 72.2798 46.3403 72.3998 45.7716C72.4973 45.4087 72.5897 45.0439 72.6751 44.6774C73.1117 43.1772 73.8573 41.54 75.1381 40.3365C77.2407 38.3603 80.3726 37.9464 82.1202 37.8807C81.9162 39.6547 81.2577 42.8467 79.1337 44.843Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior UX Designer
                      </h1>
                      <p className="text-[#8E8E8E] mt-1 leading-[30px]">
                        Quomodosoft
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015</span>
                      </div>
                      <div className="text-caribbean-green py-[38px]">
                        <svg
                          width="85"
                          height="69"
                          viewBox="0 0 85 69"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.1978 53.5023L53.9949 46.4903C53.8642 45.7275 53.1399 45.215 52.3772 45.3463C51.6144 45.4771 51.1022 46.2014 51.2332 46.9641L51.956 51.1781L43.1516 46.5494C42.7432 46.3349 42.2557 46.3349 41.8477 46.5494L33.0434 51.1782L34.7248 41.3742C34.8028 40.9196 34.6521 40.456 34.322 40.1341L27.1991 33.1909L37.0425 31.7606C37.8085 31.6493 38.3389 30.9384 38.2277 30.1725C38.1165 29.4065 37.4031 28.876 36.6398 28.9874L23.9869 30.8261C23.4591 30.9026 23.0205 31.2723 22.8557 31.7795C22.691 32.2867 22.8284 32.8436 23.2101 33.2158L31.8384 41.6264L29.8017 53.5025C29.7116 54.0279 29.9276 54.5593 30.3591 54.8728C30.7904 55.186 31.3623 55.2275 31.8344 54.9795L42.4996 49.3723L53.165 54.9795C53.3703 55.0871 53.5941 55.1402 53.8169 55.1402C54.1076 55.1402 54.3966 55.0499 54.6405 54.8724C55.072 54.559 55.2881 54.0277 55.1978 53.5023Z"
                            fill="currentColor"
                          />
                          <path
                            d="M62.1432 31.7792C61.9785 31.272 61.5399 30.9023 61.0119 30.8258L49.0879 29.0931L43.7553 18.2879C43.5192 17.8096 43.0321 17.5068 42.4987 17.5068C41.9653 17.5068 41.4784 17.8096 41.2421 18.2879L38.0722 24.7108C37.7306 25.4044 38.0154 26.2446 38.7092 26.5869C39.4035 26.9299 40.2434 26.6445 40.5857 25.9506L42.499 22.0736L46.9011 30.9934C47.1053 31.4068 47.4996 31.6937 47.956 31.7599L57.7995 33.1903L50.6765 40.1334C50.1223 40.6735 50.1112 41.5607 50.6511 42.1147C50.9258 42.3964 51.2899 42.5378 51.6546 42.5378C52.0071 42.5378 52.36 42.4055 52.6325 42.1401L61.7884 33.2154C62.1706 32.8432 62.3079 32.2865 62.1432 31.7792Z"
                            fill="currentColor"
                          />
                          <path
                            d="M36.6215 65.8465C31.9036 64.7784 27.5117 62.4603 23.8962 59.181C23.444 58.6811 22.9189 58.1542 22.3245 57.643C21.7456 57.0316 21.191 56.3936 20.6642 55.7295C18.2024 52.626 16.4024 49.036 15.352 45.2178C15.2621 44.7866 15.1513 44.3352 15.016 43.8725C14.5298 41.7201 14.2773 39.507 14.2773 37.2762C14.2773 30.1811 16.7839 23.3379 21.3354 18.0073C21.3987 17.9331 21.453 17.8542 21.4981 17.7721C21.5019 17.7709 21.5056 17.7702 21.5094 17.7689C23.2223 17.2166 27.4181 15.522 29.3814 11.7283C31.339 7.94476 30.3459 3.4728 29.8281 1.72548C29.686 1.24619 29.3488 0.836468 28.9026 0.601224C28.4596 0.367474 27.9352 0.320657 27.4635 0.472395C25.7506 1.02473 21.5549 2.71908 19.5916 6.51304C17.7013 10.1662 18.5621 14.4605 19.0897 16.3249C17.5679 18.1277 16.2575 20.0848 15.1744 22.1579C15.0195 21.022 14.7056 19.865 14.1539 18.761C13.484 17.4199 11.3421 14.1058 5.9368 12.3013C5.46116 12.1423 4.92942 12.1841 4.47752 12.4157C4.02148 12.649 3.67351 13.0605 3.52277 13.5445C2.94819 15.3851 1.82791 20.0994 3.83288 24.1124C4.50276 25.4533 6.64469 28.7673 12.0503 30.572C12.0872 30.5843 12.1244 30.5943 12.1617 30.6042C11.7093 32.7827 11.4754 35.0176 11.4754 37.2761C11.4754 37.5271 11.4789 37.7781 11.4847 38.0286C10.1768 36.9105 7.08679 34.9135 1.83754 35.0745C1.33667 35.09 0.852073 35.3131 0.507756 35.6865C0.160784 36.0632 -0.0234938 36.5697 0.00240468 37.0759C0.0996898 39.0015 0.678918 43.8124 3.94727 46.8846C5.00114 47.8747 7.97364 50.1134 13.2946 50.1134C13.4903 50.1134 13.6896 50.1104 13.8914 50.1043C13.9575 50.1023 14.0236 50.096 14.0888 50.0868C14.7793 51.7105 15.6002 53.2768 16.5467 54.7666C14.8701 54.4992 11.1592 54.3981 6.73799 57.3334C6.32046 57.6105 6.02612 58.0554 5.93032 58.5543C5.83387 59.0572 5.94427 59.5847 6.2333 60.0019C7.33116 61.5871 10.3598 65.3699 14.756 66.2571C15.2033 66.3474 15.8775 66.4424 16.7336 66.4424C18.6919 66.4422 21.6004 65.9443 24.9036 63.7511C24.9436 63.7245 24.9814 63.695 25.0193 63.6656C28.3273 66.0021 32.0605 67.6871 36.0024 68.5796C36.1067 68.6032 36.2106 68.6143 36.313 68.6143C36.953 68.6143 37.5311 68.1729 37.6783 67.5225C37.8497 66.7677 37.3762 66.0175 36.6215 65.8465ZM22.0803 7.80099C23.2962 5.45104 25.853 4.10747 27.3877 3.48226C27.7514 5.12947 28.119 8.0701 26.8926 10.4403C25.6767 12.7903 23.1199 14.1338 21.5853 14.759C21.2215 13.1118 20.854 10.1714 22.0803 7.80099ZM12.0419 27.5788C10.425 26.913 7.62916 25.4415 6.33955 22.8601C5.03683 20.2527 5.52276 17.03 5.94543 15.2948C7.56209 15.9605 10.358 17.4319 11.6476 20.0134V20.0136C12.95 22.6207 12.464 25.8439 12.0419 27.5788ZM5.86641 44.8426C3.74257 42.8462 3.08415 39.6546 2.88045 37.88C4.62793 37.9458 7.75998 38.3598 9.86257 40.3359C11.1429 41.539 11.8881 43.1754 12.3249 44.6754C12.4102 45.0426 12.5029 45.408 12.6007 45.7719C12.7205 46.3402 12.7986 46.8623 12.8485 47.2984C11.101 47.2327 7.96883 46.8185 5.86641 44.8426ZM15.3112 63.5104C12.4544 62.9338 10.2122 60.5682 9.10355 59.1681C10.6231 58.3028 13.5026 57.003 16.3312 57.5743C17.9203 57.895 19.3185 58.7698 20.4381 59.7235C20.9001 60.2048 21.3761 60.6705 21.8657 61.1199C22.1212 61.4043 22.3479 61.6752 22.5392 61.9164C21.0197 62.7819 18.1408 64.0809 15.3112 63.5104Z"
                            fill="currentColor"
                          />
                          <path
                            d="M84.4921 35.6866C84.1477 35.3132 83.6633 35.0904 83.1629 35.075C77.9142 34.9141 74.8233 36.9115 73.5154 38.0294C73.5213 37.7787 73.5247 37.5279 73.5247 37.2765C73.5247 35.0179 73.2907 32.7832 72.8384 30.6047C72.8758 30.5947 72.913 30.585 72.9497 30.5725C78.3558 28.7676 80.4976 25.4537 81.1674 24.1128C83.1717 20.1006 82.052 15.3861 81.4774 13.5448C81.3263 13.0605 80.9778 12.6491 80.5225 12.4162C80.0707 12.1851 79.5392 12.1433 79.0637 12.3018C73.6582 14.1062 71.5161 17.4202 70.8461 18.7615C70.2944 19.8655 69.9803 21.0224 69.8256 22.1582C68.7427 20.0853 67.4323 18.128 65.9106 16.3252C66.4384 14.461 67.2992 10.1667 65.4087 6.51335C63.4454 2.71923 59.2497 1.02487 57.5369 0.472704C57.0656 0.320468 56.5408 0.36745 56.0974 0.601532C55.6513 0.836943 55.3142 1.247 55.1725 1.72579C54.6546 3.47294 53.6615 7.94473 55.6191 11.7284C57.5824 15.5224 61.7781 17.2165 63.4909 17.769C63.4946 17.7702 63.4984 17.7709 63.5022 17.7722C63.5474 17.8544 63.6016 17.9334 63.6649 18.0076C68.2164 23.3382 70.7231 30.1814 70.7231 37.2765C70.7231 39.5075 70.4707 41.7209 69.9843 43.8735C69.849 44.3357 69.7384 44.7866 69.6486 45.2172C68.5982 49.0359 66.7983 52.6262 64.3361 55.7298C63.8095 56.3936 63.2553 57.0312 62.6766 57.6422C62.0814 58.1542 61.5555 58.6818 61.103 59.1823C57.488 62.4611 53.0964 64.7787 48.379 65.8468C47.6243 66.0178 47.1512 66.7681 47.322 67.5228C47.4692 68.1732 48.047 68.6146 48.6873 68.6146C48.7899 68.6146 48.8937 68.6032 48.9979 68.58C52.9398 67.6873 56.673 66.0022 59.981 63.6659C60.0185 63.6954 60.0562 63.7247 60.0962 63.7512C63.4006 65.9451 66.3082 66.4428 68.2665 66.4428C69.1222 66.4428 69.7969 66.3477 70.2438 66.2576C74.641 65.3702 77.669 61.5875 78.7668 60.0024C79.0559 59.5852 79.1663 59.0578 79.0698 58.5548C78.974 58.0559 78.6797 57.611 78.2627 57.3344C73.8415 54.3989 70.13 54.5 68.4536 54.7675C69.4001 53.2776 70.221 51.7109 70.9115 50.0875C70.9769 50.0966 71.0426 50.1027 71.1089 50.1049C71.3113 50.111 71.51 50.114 71.7057 50.114C77.0265 50.114 79.9997 47.8753 81.053 46.8852C84.3217 43.8131 84.901 39.0023 84.9982 37.0763C85.0235 36.5695 84.8392 36.0628 84.4921 35.6866ZM63.4149 14.7593C61.8801 14.1343 59.3234 12.7907 58.1077 10.4408C56.8813 8.07074 57.2486 5.13027 57.6126 3.48273C59.1475 4.10778 61.7039 5.45135 62.9198 7.8013C64.146 10.1713 63.779 13.1118 63.4149 14.7593ZM68.6689 57.5748C71.4975 57.0042 74.3771 58.3031 75.8968 59.1685C74.7886 60.5687 72.5462 62.9341 69.6889 63.5108C66.8615 64.0809 63.9808 62.7825 62.4613 61.9171C62.652 61.676 62.8787 61.4054 63.1338 61.1212C63.6241 60.671 64.1007 60.2045 64.5635 59.7225C65.6827 58.7693 67.0803 57.8954 68.6689 57.5748ZM73.3527 20.0139C74.6425 17.4324 77.4382 15.961 79.055 15.2952C79.4772 17.0306 79.9632 20.2535 78.6609 22.8606C77.3713 25.4416 74.5756 26.9132 72.9586 27.5792C72.5359 25.8444 72.05 22.6215 73.3527 20.0139ZM79.1337 44.843C77.0312 46.8193 73.8991 47.2332 72.1516 47.2989C72.2018 46.8626 72.2798 46.3403 72.3998 45.7716C72.4973 45.4087 72.5897 45.0439 72.6751 44.6774C73.1117 43.1772 73.8573 41.54 75.1381 40.3365C77.2407 38.3603 80.3726 37.9464 82.1202 37.8807C81.9162 39.6547 81.2577 42.8467 79.1337 44.843Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Lead UI Designer
                      </h1>
                      <p className="text-[#8E8E8E] mt-1 leading-[30px]">
                        Quomodosoft
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2015</span>
                      </div>
                      <div className="text-caribbean-green py-[38px]">
                        <svg
                          width="85"
                          height="69"
                          viewBox="0 0 85 69"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.1978 53.5023L53.9949 46.4903C53.8642 45.7275 53.1399 45.215 52.3772 45.3463C51.6144 45.4771 51.1022 46.2014 51.2332 46.9641L51.956 51.1781L43.1516 46.5494C42.7432 46.3349 42.2557 46.3349 41.8477 46.5494L33.0434 51.1782L34.7248 41.3742C34.8028 40.9196 34.6521 40.456 34.322 40.1341L27.1991 33.1909L37.0425 31.7606C37.8085 31.6493 38.3389 30.9384 38.2277 30.1725C38.1165 29.4065 37.4031 28.876 36.6398 28.9874L23.9869 30.8261C23.4591 30.9026 23.0205 31.2723 22.8557 31.7795C22.691 32.2867 22.8284 32.8436 23.2101 33.2158L31.8384 41.6264L29.8017 53.5025C29.7116 54.0279 29.9276 54.5593 30.3591 54.8728C30.7904 55.186 31.3623 55.2275 31.8344 54.9795L42.4996 49.3723L53.165 54.9795C53.3703 55.0871 53.5941 55.1402 53.8169 55.1402C54.1076 55.1402 54.3966 55.0499 54.6405 54.8724C55.072 54.559 55.2881 54.0277 55.1978 53.5023Z"
                            fill="currentColor"
                          />
                          <path
                            d="M62.1432 31.7792C61.9785 31.272 61.5399 30.9023 61.0119 30.8258L49.0879 29.0931L43.7553 18.2879C43.5192 17.8096 43.0321 17.5068 42.4987 17.5068C41.9653 17.5068 41.4784 17.8096 41.2421 18.2879L38.0722 24.7108C37.7306 25.4044 38.0154 26.2446 38.7092 26.5869C39.4035 26.9299 40.2434 26.6445 40.5857 25.9506L42.499 22.0736L46.9011 30.9934C47.1053 31.4068 47.4996 31.6937 47.956 31.7599L57.7995 33.1903L50.6765 40.1334C50.1223 40.6735 50.1112 41.5607 50.6511 42.1147C50.9258 42.3964 51.2899 42.5378 51.6546 42.5378C52.0071 42.5378 52.36 42.4055 52.6325 42.1401L61.7884 33.2154C62.1706 32.8432 62.3079 32.2865 62.1432 31.7792Z"
                            fill="currentColor"
                          />
                          <path
                            d="M36.6215 65.8465C31.9036 64.7784 27.5117 62.4603 23.8962 59.181C23.444 58.6811 22.9189 58.1542 22.3245 57.643C21.7456 57.0316 21.191 56.3936 20.6642 55.7295C18.2024 52.626 16.4024 49.036 15.352 45.2178C15.2621 44.7866 15.1513 44.3352 15.016 43.8725C14.5298 41.7201 14.2773 39.507 14.2773 37.2762C14.2773 30.1811 16.7839 23.3379 21.3354 18.0073C21.3987 17.9331 21.453 17.8542 21.4981 17.7721C21.5019 17.7709 21.5056 17.7702 21.5094 17.7689C23.2223 17.2166 27.4181 15.522 29.3814 11.7283C31.339 7.94476 30.3459 3.4728 29.8281 1.72548C29.686 1.24619 29.3488 0.836468 28.9026 0.601224C28.4596 0.367474 27.9352 0.320657 27.4635 0.472395C25.7506 1.02473 21.5549 2.71908 19.5916 6.51304C17.7013 10.1662 18.5621 14.4605 19.0897 16.3249C17.5679 18.1277 16.2575 20.0848 15.1744 22.1579C15.0195 21.022 14.7056 19.865 14.1539 18.761C13.484 17.4199 11.3421 14.1058 5.9368 12.3013C5.46116 12.1423 4.92942 12.1841 4.47752 12.4157C4.02148 12.649 3.67351 13.0605 3.52277 13.5445C2.94819 15.3851 1.82791 20.0994 3.83288 24.1124C4.50276 25.4533 6.64469 28.7673 12.0503 30.572C12.0872 30.5843 12.1244 30.5943 12.1617 30.6042C11.7093 32.7827 11.4754 35.0176 11.4754 37.2761C11.4754 37.5271 11.4789 37.7781 11.4847 38.0286C10.1768 36.9105 7.08679 34.9135 1.83754 35.0745C1.33667 35.09 0.852073 35.3131 0.507756 35.6865C0.160784 36.0632 -0.0234938 36.5697 0.00240468 37.0759C0.0996898 39.0015 0.678918 43.8124 3.94727 46.8846C5.00114 47.8747 7.97364 50.1134 13.2946 50.1134C13.4903 50.1134 13.6896 50.1104 13.8914 50.1043C13.9575 50.1023 14.0236 50.096 14.0888 50.0868C14.7793 51.7105 15.6002 53.2768 16.5467 54.7666C14.8701 54.4992 11.1592 54.3981 6.73799 57.3334C6.32046 57.6105 6.02612 58.0554 5.93032 58.5543C5.83387 59.0572 5.94427 59.5847 6.2333 60.0019C7.33116 61.5871 10.3598 65.3699 14.756 66.2571C15.2033 66.3474 15.8775 66.4424 16.7336 66.4424C18.6919 66.4422 21.6004 65.9443 24.9036 63.7511C24.9436 63.7245 24.9814 63.695 25.0193 63.6656C28.3273 66.0021 32.0605 67.6871 36.0024 68.5796C36.1067 68.6032 36.2106 68.6143 36.313 68.6143C36.953 68.6143 37.5311 68.1729 37.6783 67.5225C37.8497 66.7677 37.3762 66.0175 36.6215 65.8465ZM22.0803 7.80099C23.2962 5.45104 25.853 4.10747 27.3877 3.48226C27.7514 5.12947 28.119 8.0701 26.8926 10.4403C25.6767 12.7903 23.1199 14.1338 21.5853 14.759C21.2215 13.1118 20.854 10.1714 22.0803 7.80099ZM12.0419 27.5788C10.425 26.913 7.62916 25.4415 6.33955 22.8601C5.03683 20.2527 5.52276 17.03 5.94543 15.2948C7.56209 15.9605 10.358 17.4319 11.6476 20.0134V20.0136C12.95 22.6207 12.464 25.8439 12.0419 27.5788ZM5.86641 44.8426C3.74257 42.8462 3.08415 39.6546 2.88045 37.88C4.62793 37.9458 7.75998 38.3598 9.86257 40.3359C11.1429 41.539 11.8881 43.1754 12.3249 44.6754C12.4102 45.0426 12.5029 45.408 12.6007 45.7719C12.7205 46.3402 12.7986 46.8623 12.8485 47.2984C11.101 47.2327 7.96883 46.8185 5.86641 44.8426ZM15.3112 63.5104C12.4544 62.9338 10.2122 60.5682 9.10355 59.1681C10.6231 58.3028 13.5026 57.003 16.3312 57.5743C17.9203 57.895 19.3185 58.7698 20.4381 59.7235C20.9001 60.2048 21.3761 60.6705 21.8657 61.1199C22.1212 61.4043 22.3479 61.6752 22.5392 61.9164C21.0197 62.7819 18.1408 64.0809 15.3112 63.5104Z"
                            fill="currentColor"
                          />
                          <path
                            d="M84.4921 35.6866C84.1477 35.3132 83.6633 35.0904 83.1629 35.075C77.9142 34.9141 74.8233 36.9115 73.5154 38.0294C73.5213 37.7787 73.5247 37.5279 73.5247 37.2765C73.5247 35.0179 73.2907 32.7832 72.8384 30.6047C72.8758 30.5947 72.913 30.585 72.9497 30.5725C78.3558 28.7676 80.4976 25.4537 81.1674 24.1128C83.1717 20.1006 82.052 15.3861 81.4774 13.5448C81.3263 13.0605 80.9778 12.6491 80.5225 12.4162C80.0707 12.1851 79.5392 12.1433 79.0637 12.3018C73.6582 14.1062 71.5161 17.4202 70.8461 18.7615C70.2944 19.8655 69.9803 21.0224 69.8256 22.1582C68.7427 20.0853 67.4323 18.128 65.9106 16.3252C66.4384 14.461 67.2992 10.1667 65.4087 6.51335C63.4454 2.71923 59.2497 1.02487 57.5369 0.472704C57.0656 0.320468 56.5408 0.36745 56.0974 0.601532C55.6513 0.836943 55.3142 1.247 55.1725 1.72579C54.6546 3.47294 53.6615 7.94473 55.6191 11.7284C57.5824 15.5224 61.7781 17.2165 63.4909 17.769C63.4946 17.7702 63.4984 17.7709 63.5022 17.7722C63.5474 17.8544 63.6016 17.9334 63.6649 18.0076C68.2164 23.3382 70.7231 30.1814 70.7231 37.2765C70.7231 39.5075 70.4707 41.7209 69.9843 43.8735C69.849 44.3357 69.7384 44.7866 69.6486 45.2172C68.5982 49.0359 66.7983 52.6262 64.3361 55.7298C63.8095 56.3936 63.2553 57.0312 62.6766 57.6422C62.0814 58.1542 61.5555 58.6818 61.103 59.1823C57.488 62.4611 53.0964 64.7787 48.379 65.8468C47.6243 66.0178 47.1512 66.7681 47.322 67.5228C47.4692 68.1732 48.047 68.6146 48.6873 68.6146C48.7899 68.6146 48.8937 68.6032 48.9979 68.58C52.9398 67.6873 56.673 66.0022 59.981 63.6659C60.0185 63.6954 60.0562 63.7247 60.0962 63.7512C63.4006 65.9451 66.3082 66.4428 68.2665 66.4428C69.1222 66.4428 69.7969 66.3477 70.2438 66.2576C74.641 65.3702 77.669 61.5875 78.7668 60.0024C79.0559 59.5852 79.1663 59.0578 79.0698 58.5548C78.974 58.0559 78.6797 57.611 78.2627 57.3344C73.8415 54.3989 70.13 54.5 68.4536 54.7675C69.4001 53.2776 70.221 51.7109 70.9115 50.0875C70.9769 50.0966 71.0426 50.1027 71.1089 50.1049C71.3113 50.111 71.51 50.114 71.7057 50.114C77.0265 50.114 79.9997 47.8753 81.053 46.8852C84.3217 43.8131 84.901 39.0023 84.9982 37.0763C85.0235 36.5695 84.8392 36.0628 84.4921 35.6866ZM63.4149 14.7593C61.8801 14.1343 59.3234 12.7907 58.1077 10.4408C56.8813 8.07074 57.2486 5.13027 57.6126 3.48273C59.1475 4.10778 61.7039 5.45135 62.9198 7.8013C64.146 10.1713 63.779 13.1118 63.4149 14.7593ZM68.6689 57.5748C71.4975 57.0042 74.3771 58.3031 75.8968 59.1685C74.7886 60.5687 72.5462 62.9341 69.6889 63.5108C66.8615 64.0809 63.9808 62.7825 62.4613 61.9171C62.652 61.676 62.8787 61.4054 63.1338 61.1212C63.6241 60.671 64.1007 60.2045 64.5635 59.7225C65.6827 58.7693 67.0803 57.8954 68.6689 57.5748ZM73.3527 20.0139C74.6425 17.4324 77.4382 15.961 79.055 15.2952C79.4772 17.0306 79.9632 20.2535 78.6609 22.8606C77.3713 25.4416 74.5756 26.9132 72.9586 27.5792C72.5359 25.8444 72.05 22.6215 73.3527 20.0139ZM79.1337 44.843C77.0312 46.8193 73.8991 47.2332 72.1516 47.2989C72.2018 46.8626 72.2798 46.3403 72.3998 45.7716C72.4973 45.4087 72.5897 45.0439 72.6751 44.6774C73.1117 43.1772 73.8573 41.54 75.1381 40.3365C77.2407 38.3603 80.3726 37.9464 82.1202 37.8807C81.9162 39.6547 81.2577 42.8467 79.1337 44.843Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Junior Team Leader
                      </h1>
                      <p className="text-[#8E8E8E] mt-1 leading-[30px]">
                        Quomodosoft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 h-fit">
            <img
              src="/assets/images/home-ten/h10-about-img.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1780px] w-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 mx-auto gap-[30px] mt-10 lg:mt-0">
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-1.png"
            alt=""
            className="object-cover max-w-full"
          />
          <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1>
        </div>
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-2.png"
            alt=""
            className="object-cover max-w-full"
          />
          <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1>
        </div>
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-3.png"
            alt=""
            className="object-cover max-w-full"
          />
          <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1>
        </div>
      </div>
    </section>
  );
}
