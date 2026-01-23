import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TopCategoriesSlider() {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
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
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="py-[70px] sm:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto">
          Top Categories
        </h1>
        <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
          E-Learning Exploration Navigating Diverse Learning Domains
        </h2>
        {/* <!-- content  --> */}
        <div className="">
          <div className="w-full">
            <div className=" h6-catagory-slider pt-14">
              <Swiper {...swiperOptions}>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="23"
                        height="32"
                        viewBox="0 0 23 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 13C13.1569 13 14.5 14.3431 14.5 16C14.5 17.6569 13.1569 19 11.5 19C9.84315 19 8.5 17.6569 8.5 16C8.5 14.3431 9.84315 13 11.5 13ZM11.5 13V1M4 25H19C20.6569 25 22 26.3431 22 28C22 29.6569 20.6569 31 19 31H4C2.34315 31 1 29.6569 1 28C1 26.3431 2.34315 25 4 25ZM3.98796 25H19.012L21.5831 17.0077C22.3284 15.1256 22.0644 13.0283 20.8714 11.3548L12.9278 1.71095C12.2521 0.763018 10.7479 0.763018 10.0722 1.71095L2.12857 11.3548C0.935612 13.0283 0.671581 15.1256 1.41692 17.0077L3.98796 25Z"
                          stroke="#F2844D"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Web Design and Development
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        23+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="35"
                        height="32"
                        viewBox="0 0 35 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7762 21.3479L23.248 27.3612C23.9178 28.5213 23.5203 30.0048 22.3602 30.6746C21.2 31.3444 19.7165 30.9469 19.0467 29.7868L14.7558 22.3547M28.3373 3.40156L28.9292 1.19261M31.5714 9.00326L33.7804 9.59515M9.97351 23.3402L27.1447 19.4084C29.2657 18.9227 30.3116 16.5232 29.2237 14.6387L22.2831 2.61732C21.1951 0.732903 18.5941 0.43892 17.113 2.03296L5.12232 14.9377L9.97351 23.3402ZM5.52663 15.6379L9.56929 22.64C10.2391 23.8001 9.84161 25.2836 8.68146 25.9534C7.52132 26.6232 6.03785 26.2257 5.36804 25.0656L1.32537 18.0635C0.655563 16.9033 1.05306 15.4198 2.2132 14.75C3.37335 14.0802 4.85682 14.4777 5.52663 15.6379Z"
                          stroke="#F2844D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Digital Marketing and SEO
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        20+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 18H0V20H1V18ZM31 20H32V18H31V20ZM11.5 30C10.9477 30 10.5 30.4477 10.5 31C10.5 31.5523 10.9477 32 11.5 32V30ZM20.5 32C21.0523 32 21.5 31.5523 21.5 31C21.5 30.4477 21.0523 30 20.5 30V32ZM17 25C17 24.4477 16.5523 24 16 24C15.4477 24 15 24.4477 15 25H17ZM5.5 2H26.5V0H5.5V2ZM30 5.5V20.5H32V5.5H30ZM26.5 24H5.5V26H26.5V24ZM2 20.5V5.5H0V20.5H2ZM5.5 24C3.567 24 2 22.433 2 20.5H0C0 23.5376 2.46243 26 5.5 26V24ZM30 20.5C30 22.433 28.433 24 26.5 24V26C29.5376 26 32 23.5376 32 20.5H30ZM26.5 2C28.433 2 30 3.567 30 5.5H32C32 2.46243 29.5376 0 26.5 0V2ZM5.5 0C2.46243 0 0 2.46243 0 5.5H2C2 3.567 3.567 2 5.5 2V0ZM1 20H31V18H1V20ZM11.5 32H16V30H11.5V32ZM16 32H20.5V30H16V32ZM17 31V25H15V31H17Z"
                          fill="#F2844D"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Computer Science Engineer
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        23+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 5.5V4.75C12.5858 4.75 12.25 5.08579 12.25 5.5H13ZM19.75 13C19.75 13.4142 20.0858 13.75 20.5 13.75C20.9142 13.75 21.25 13.4142 21.25 13H19.75ZM7 1.75H19V0.25H7V1.75ZM24.25 7V19H25.75V7H24.25ZM19 24.25H7V25.75H19V24.25ZM1.75 19V7H0.25V19H1.75ZM7 24.25C4.10051 24.25 1.75 21.8995 1.75 19H0.25C0.25 22.7279 3.27208 25.75 7 25.75V24.25ZM24.25 19C24.25 21.8995 21.8995 24.25 19 24.25V25.75C22.7279 25.75 25.75 22.7279 25.75 19H24.25ZM19 1.75C21.8995 1.75 24.25 4.10051 24.25 7H25.75C25.75 3.27208 22.7279 0.25 19 0.25V1.75ZM7 0.25C3.27208 0.25 0.25 3.27208 0.25 7H1.75C1.75 4.10051 4.10051 1.75 7 1.75V0.25ZM30.25 13V25H31.75V13H30.25ZM25 30.25H13V31.75H25V30.25ZM13 30.25C10.1005 30.25 7.75 27.8995 7.75 25H6.25C6.25 28.7279 9.27208 31.75 13 31.75V30.25ZM30.25 25C30.25 27.8995 27.8995 30.25 25 30.25V31.75C28.7279 31.75 31.75 28.7279 31.75 25H30.25ZM25 7.75C27.8995 7.75 30.25 10.1005 30.25 13H31.75C31.75 9.27208 28.7279 6.25 25 6.25V7.75ZM13 6.25C16.7279 6.25 19.75 9.27208 19.75 13H21.25C21.25 8.44365 17.5563 4.75 13 4.75V6.25ZM12.25 16.75C12.25 18.4069 10.9069 19.75 9.25 19.75V21.25C11.7353 21.25 13.75 19.2353 13.75 16.75H12.25ZM9.25 19.75C7.59315 19.75 6.25 18.4069 6.25 16.75H4.75C4.75 19.2353 6.76472 21.25 9.25 21.25V19.75ZM6.25 16.75C6.25 15.0931 7.59315 13.75 9.25 13.75V12.25C6.76472 12.25 4.75 14.2647 4.75 16.75H6.25ZM9.25 13.75C10.9069 13.75 12.25 15.0931 12.25 16.75H13.75C13.75 14.2647 11.7353 12.25 9.25 12.25V13.75ZM12.25 5.5V16.75H13.75V5.5H12.25Z"
                          fill="#F2844D"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Video Editing and Photography
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        38+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 7V5.5C10 3.01472 12.0147 1 14.5 1H17.5C19.9853 1 22 3.01472 22 5.5V7M1 13.5212C1 13.5212 5.67706 16.6367 12.9665 17.3663M31 13.5212C31 13.5212 26.3229 16.6367 19.0335 17.3663M7 31H25C28.3137 31 31 28.3137 31 25V13C31 9.68629 28.3137 7 25 7H7C3.68629 7 1 9.68629 1 13V25C1 28.3137 3.68629 31 7 31Z"
                          stroke="#F2844D"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19 16.24V17.74C19 17.755 19 17.755 19 17.77C19 19.405 18.985 20.74 16 20.74C13.03 20.74 13 19.42 13 17.785V16.24C13 14.74 13 14.74 14.5 14.74H17.5C19 14.74 19 14.74 19 16.24Z"
                          stroke="#F2844D"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Tech Business management
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        40+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-[10px] border border-orange/20 bg-orange/10 py-[30px] px-10 w-full group hover:border-orange hover:bg-orange transition-all duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center mx-auto">
                      <svg
                        width="23"
                        height="32"
                        viewBox="0 0 23 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 13C13.1569 13 14.5 14.3431 14.5 16C14.5 17.6569 13.1569 19 11.5 19C9.84315 19 8.5 17.6569 8.5 16C8.5 14.3431 9.84315 13 11.5 13ZM11.5 13V1M4 25H19C20.6569 25 22 26.3431 22 28C22 29.6569 20.6569 31 19 31H4C2.34315 31 1 29.6569 1 28C1 26.3431 2.34315 25 4 25ZM3.98796 25H19.012L21.5831 17.0077C22.3284 15.1256 22.0644 13.0283 20.8714 11.3548L12.9278 1.71095C12.2521 0.763018 10.7479 0.763018 10.0722 1.71095L2.12857 11.3548C0.935612 13.0283 0.671581 15.1256 1.41692 17.0077L3.98796 25Z"
                          stroke="#F2844D"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h1 className="mt-6 mb-6 font-semibold text-center transition-all duration-300 text-18 text-main-black group-hover:text-white">
                      Web Design and Development
                    </h1>
                    <a href="" className="">
                      <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto group-hover:text-white group-hover:border-white transition-all duration-300">
                        23+ Courses
                      </h1>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="relative w-fit mx-auto flex items-center mt-[50px]">
            <div className="absolute flex justify-between w-full">
              <button className="group h5-story-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-orange/10 border-orange/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-orange before:bg-orange relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-orange group-hover:stroke-white"
                    d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="group rotate-180 h5-story-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-orange/10 border-orange/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-orange before:bg-orange relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-orange group-hover:stroke-white"
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
      </div>
    </section>
  );
}
