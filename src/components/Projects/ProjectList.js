import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList() {
  return (
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="flex flex-col items-center">
          <div className="py-0.5 px-5 bg-purple/5 border-purple/10 border rounded-[30px] font-medium text-purple mb-5">
            <span>Our Cases Story</span>
          </div>
          <div className="mb-[60px]">
            <h2 className="text-main-black font-semibold text-24 sm:text-48 text-center max-w-[819px]">
              Our Journey to Success Navigating Challenges, Achieving
              Milestones, and Building a Legacy
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px]">
          <div data-aos="fade-left" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/1.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Lessons Learned from an IT Transformation Journey
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="100" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/2.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Cybersecurity Case Study Proactive Risk Management
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="200" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/3.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Leveraging Data Analytics for Business Growth
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="300" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/4.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Lessons Learned from an IT Transformation Journey
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="400" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/5.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Lessons Learned from an IT Transformation Journey
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="500" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/6.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Leveraging Data Analytics for Business Growth
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="600" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/7.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Lessons Learned from an IT Transformation Journey
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="700" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/8.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Lessons Learned from an IT Transformation Journey
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
          <div data-aos="fade-left" data-aos-delay="800" className="col-span-4">
            <div className="pb-[92px] pr-[30px] w-full bg-white relative">
              <img
                src="/assets/images/projects/9.webp"
                alt=""
                className="w-full max-w-[380px]"
              />
              <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                <img
                  src="/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  February 25, 2024
                </h1>
                <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  Leveraging Data Analytics for Business Growth
                </h2>
                <Link to="/project-details">
                  <div className="flex items-center gap-2 mt-4 group">
                    <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                      Read More
                    </span>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                        stroke="#ffff"
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
        </div>
        <div className="w-full flex justify-center mt-[55px]">
          <Link to="/project-details">
            <div className="inline-flex py-3 bg-transparent home-two-btn-bg group border-purple/10 before:bg-purple after:bg-purple">
              <span className="relative z-10 text-base font-semibold transition-all duration-300 delay-150 text-main-black group-hover:text-white font-inter">
                View More Projects
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
                  className="transition-all duration-300 delay-150 group-hover:stroke-white stroke-main-black"
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
    </section>
  );
}
