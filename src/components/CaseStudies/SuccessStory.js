import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SuccessStory() {
  const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".h5-story-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".h5-story-next",
      prevEl: ".h5-story-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section className="py-16 md:py-[130px]">
      {/* <!-- title  --> */}
      <div className="flex flex-col items-center mx-auto theme-container">
        <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium">
          Our Success Story
        </h1>
        <h2 className="text-24 sm:text-48 font-semibold text-main-black pt-5 max-w-[844px] text-center">
          Our Journey to Success Navigating Challenges, Achieving Milestones,
          and Building a Legacy
        </h2>
        <div className="w-full">
          <div className="pt-14">
            <Swiper {...swiperOptions} className="h5-story-slider ">
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/1.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      01
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Best Consulting Services Provider Agency
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/2.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      02
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Professional and Expert Team Member
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/3.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      03
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Recruitment & HR Services management.
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/1.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      01
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Best Consulting Services Provider Agency
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/2.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      02
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Professional and Expert Team Member
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
              <SwiperSlide className="pr-3 ">
                <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                  <img
                    src="/assets/images/home-five/story/3.webp"
                    alt=""
                    className="w-full max-w-[380px]"
                  />
                  <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden h5-story_slider_active_card">
                    <img
                      src="/assets/images/home-five/hero/about-card-shape.webp"
                      alt=""
                      className="absolute right-2 top-bottom-moving"
                    />
                    <h1 className="flex items-center justify-center w-10 h-10 text-base font-semibold tracking-tight border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white text-main-black">
                      03
                    </h1>
                    <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                      Recruitment & HR Services management.
                    </h2>
                    <Link to="/service-details">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="relative flex items-center mx-auto w-fit">
          <div className="absolute flex justify-between w-full">
            <button className="group h5-story-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-dark-black/10 border-buisness-dark-black/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-dark-black before:bg-buisness-dark-black relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-buisness-dark-black group-hover:stroke-white"
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="group rotate-180 h5-story-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-dark-black/10 border-buisness-dark-black/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-dark-black before:bg-buisness-dark-black relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-buisness-dark-black group-hover:stroke-white"
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="px-10 h5-story-pagination"></div>
        </div>
      </div>
    </section>
  );
}
