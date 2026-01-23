"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialTwo() {
  const vSliderOption = {
    modules: [Autoplay],
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    speed: 5000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  };
  const vSliderOptionTwo = {
    modules: [Autoplay],
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    speed: 5000,
    autoplay: {
      delay: -10,
      reverseDirection: true,
      disableOnInteraction: false,
    },
  };
  const sliderOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".h2-testimonial-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".h2-testimonials-next",
      prevEl: ".h2-testimonials-prev",
    },
  };

  return (
    <section className="w-full py-16 md:py-32" id="testimonials">
      <div className="flex flex-col items-center w-full mx-auto theme-container">
        <div className="px-5 py-1.5 md:py-3 md:px-7 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
          <h1 className="text-base font-medium leading-5 tracking-tight text-purple">
            Out Testimonials
          </h1>
        </div>
        <h1 className="max-w-[813px] font-semibold text-24 sm:text-48 tracking-tight text-app-dark text-center mt-2.5 md:mt-[18px]">
          Customer Say About Our Services
        </h1>
        <div className="grid grid-cols-4 xl:grid-cols-8 gap-[90px] mt-0 md:mt-[70px] md:px-28">
          <div className="col-span-2 hidden xl:grid grid-cols-2 gap-2.5">
            {/* <!-- first slider start --> */}
            <div className="relative col-span-1 my-auto">
              <div className="overlay-vSlider"></div>
              <Swiper
                {...vSliderOption}
                className=" max-h-[312px] overflow-hidden"
              >
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r1.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r2.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r4.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <!-- first slider end  --> */}
            {/* <!-- second slider start --> */}
            <div className="relative hidden col-span-1 md:block">
              <div className="overlay-vSlider"></div>
              <Swiper
                {...vSliderOptionTwo}
                className=" max-h-[472px] overflow-hidden"
              >
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r1.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r2.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r3.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r4.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <!-- second slider end  --> */}
          </div>
          <div className="col-span-4 mt-10">
            <Swiper {...sliderOptions} className="h2-testimonial-slider">
              <SwiperSlide>
                <div className="col-span-1 p-5 md:p-[54px] rounded-3xl flex flex-col items-center relative overflow-hidden group border border-white/5 bg-blue-seo">
                  {/* <!-- animation circle  --> */}
                  <div className="absolute z-0 flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                    <div className="animated_circle_sm bg-white/10"></div>
                    <div className="animated_circle_sm2 bg-white/10"></div>
                    <div className="animated_circle_sm3 bg-white/10"></div>
                    <div className="animated_circle_sm4 bg-white/10"></div>
                  </div>
                  <div className="relative z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_21874)">
                        <path
                          d="M55.9702 11.9941C53.2589 8.94831 49.9682 7.4039 46.1898 7.4039C42.7939 7.4039 39.9151 8.61316 37.6326 10.9979C35.3647 13.3675 34.2147 16.3106 34.2147 19.7458C34.2147 22.9922 35.3763 25.8849 37.6672 28.344C39.688 30.5134 42.2336 31.8933 45.2472 32.4556C44.7202 36.4512 41.1881 40.0677 34.7278 43.2188L33.5645 43.7864L38.3341 52.5919L39.4108 52.0461C53.0727 45.121 59.9997 35.3341 59.9997 22.9571C59.9997 18.6871 58.6441 14.9987 55.9702 11.9941ZM39.3601 49.2765L36.9704 44.8653C44.1567 41.0998 47.7976 36.5732 47.7976 31.3977V30.2896L46.6966 30.1649C43.7312 29.8292 41.3715 28.6805 39.4828 26.6528C37.6077 24.6398 36.6961 22.3807 36.6961 19.7458C36.6961 16.9324 37.5889 14.6323 39.4252 12.7134C41.2467 10.8102 43.4595 9.88499 46.1899 9.88499C49.2725 9.88499 51.8654 11.1145 54.1167 13.6437C56.4058 16.2157 57.5186 19.2621 57.5186 22.957C57.5186 28.6297 55.9213 33.751 52.7711 38.1787C49.7653 42.4033 45.257 46.1331 39.3601 49.2765Z"
                          fill="white"
                        />
                        <path
                          d="M22.3404 11.9886C19.599 8.94656 16.2947 7.40402 12.519 7.40402C9.11988 7.40402 6.25406 8.61551 4.0016 11.0047C1.76848 13.3733 0.636094 16.3143 0.636094 19.746C0.636094 22.9922 1.79766 25.885 4.08832 28.3441C6.10488 30.5088 8.61996 31.8874 11.5775 32.4524C11.0569 36.4509 7.55414 40.0692 1.14562 43.221L0 43.7842L4.65094 52.596L5.73832 52.0473C19.4621 45.1226 26.4207 35.3352 26.4207 22.9572C26.4206 18.6838 25.0477 14.9934 22.3404 11.9886ZM5.70223 49.2724L3.3777 44.8681C10.5118 41.1011 14.1267 36.5734 14.1267 31.3977V30.292L13.0282 30.1652C10.1236 29.8301 7.79297 28.6812 5.90367 26.6528C4.02855 24.64 3.11719 22.3807 3.11719 19.746C3.11719 16.9289 3.99703 14.6263 5.80676 12.7069C7.5968 10.8082 9.79254 9.88512 12.519 9.88512C15.6047 9.88512 18.2146 11.1164 20.497 13.6495C22.8135 16.2202 23.9395 19.2648 23.9395 22.9572C23.9395 28.6289 22.3352 33.7495 19.1708 38.1768C16.152 42.4002 11.6243 46.1293 5.70223 49.2724Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_21874">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h1 className="w-full mt-4 font-semibold text-center text-white text-18 md:text-20">
                      This ever-evolving digital understand the significance
                      staying ahead Through blog invite explore the dynamic
                      world with us decoding algorithms
                    </h1>
                    <div className="flex items-center gap-5 mx-auto mt-5 md:mt-10 w-fit">
                      <div className="overflow-hidden rounded-full w-14 h-14">
                        <img
                          src="./assets/images/home-two/testimonial/sm1.webp"
                          alt=""
                          className="object-cover w-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-white text-18">
                          Matthew C. Lansberry
                        </h1>
                        <p className="text-sm font-medium leading-7 text-white">
                          CEO & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-span-1 p-5 md:p-[54px] rounded-3xl flex flex-col items-center relative overflow-hidden group border border-white/5 bg-blue-seo">
                  {/* <!-- animation circle  --> */}
                  <div className="absolute z-0 flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                    <div className="animated_circle_sm bg-white/10"></div>
                    <div className="animated_circle_sm2 bg-white/10"></div>
                    <div className="animated_circle_sm3 bg-white/10"></div>
                    <div className="animated_circle_sm4 bg-white/10"></div>
                  </div>
                  <div className="relative z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_21874)">
                        <path
                          d="M55.9702 11.9941C53.2589 8.94831 49.9682 7.4039 46.1898 7.4039C42.7939 7.4039 39.9151 8.61316 37.6326 10.9979C35.3647 13.3675 34.2147 16.3106 34.2147 19.7458C34.2147 22.9922 35.3763 25.8849 37.6672 28.344C39.688 30.5134 42.2336 31.8933 45.2472 32.4556C44.7202 36.4512 41.1881 40.0677 34.7278 43.2188L33.5645 43.7864L38.3341 52.5919L39.4108 52.0461C53.0727 45.121 59.9997 35.3341 59.9997 22.9571C59.9997 18.6871 58.6441 14.9987 55.9702 11.9941ZM39.3601 49.2765L36.9704 44.8653C44.1567 41.0998 47.7976 36.5732 47.7976 31.3977V30.2896L46.6966 30.1649C43.7312 29.8292 41.3715 28.6805 39.4828 26.6528C37.6077 24.6398 36.6961 22.3807 36.6961 19.7458C36.6961 16.9324 37.5889 14.6323 39.4252 12.7134C41.2467 10.8102 43.4595 9.88499 46.1899 9.88499C49.2725 9.88499 51.8654 11.1145 54.1167 13.6437C56.4058 16.2157 57.5186 19.2621 57.5186 22.957C57.5186 28.6297 55.9213 33.751 52.7711 38.1787C49.7653 42.4033 45.257 46.1331 39.3601 49.2765Z"
                          fill="white"
                        />
                        <path
                          d="M22.3404 11.9886C19.599 8.94656 16.2947 7.40402 12.519 7.40402C9.11988 7.40402 6.25406 8.61551 4.0016 11.0047C1.76848 13.3733 0.636094 16.3143 0.636094 19.746C0.636094 22.9922 1.79766 25.885 4.08832 28.3441C6.10488 30.5088 8.61996 31.8874 11.5775 32.4524C11.0569 36.4509 7.55414 40.0692 1.14562 43.221L0 43.7842L4.65094 52.596L5.73832 52.0473C19.4621 45.1226 26.4207 35.3352 26.4207 22.9572C26.4206 18.6838 25.0477 14.9934 22.3404 11.9886ZM5.70223 49.2724L3.3777 44.8681C10.5118 41.1011 14.1267 36.5734 14.1267 31.3977V30.292L13.0282 30.1652C10.1236 29.8301 7.79297 28.6812 5.90367 26.6528C4.02855 24.64 3.11719 22.3807 3.11719 19.746C3.11719 16.9289 3.99703 14.6263 5.80676 12.7069C7.5968 10.8082 9.79254 9.88512 12.519 9.88512C15.6047 9.88512 18.2146 11.1164 20.497 13.6495C22.8135 16.2202 23.9395 19.2648 23.9395 22.9572C23.9395 28.6289 22.3352 33.7495 19.1708 38.1768C16.152 42.4002 11.6243 46.1293 5.70223 49.2724Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_21874">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h1 className="w-full mt-4 font-semibold text-center text-white text-18 md:text-20">
                      This ever-evolving digital understand the significance
                      staying ahead Through blog invite explore the dynamic
                      world with us decoding algorithms
                    </h1>
                    <div className="flex items-center gap-5 mx-auto mt-5 md:mt-10 w-fit">
                      <div className="overflow-hidden rounded-full w-14 h-14">
                        <img
                          src="./assets/images/home-two/testimonial/sm1.webp"
                          alt=""
                          className="object-cover w-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-white text-18">
                          Matthew C. Lansberry
                        </h1>
                        <p className="text-sm font-medium leading-7 text-white">
                          CEO & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-span-1 p-5 md:p-[54px] rounded-3xl flex flex-col items-center relative overflow-hidden group border border-white/5 bg-blue-seo">
                  {/* <!-- animation circle  --> */}
                  <div className="absolute z-0 flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                    <div className="animated_circle_sm bg-white/10"></div>
                    <div className="animated_circle_sm2 bg-white/10"></div>
                    <div className="animated_circle_sm3 bg-white/10"></div>
                    <div className="animated_circle_sm4 bg-white/10"></div>
                  </div>
                  <div className="relative z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_21874)">
                        <path
                          d="M55.9702 11.9941C53.2589 8.94831 49.9682 7.4039 46.1898 7.4039C42.7939 7.4039 39.9151 8.61316 37.6326 10.9979C35.3647 13.3675 34.2147 16.3106 34.2147 19.7458C34.2147 22.9922 35.3763 25.8849 37.6672 28.344C39.688 30.5134 42.2336 31.8933 45.2472 32.4556C44.7202 36.4512 41.1881 40.0677 34.7278 43.2188L33.5645 43.7864L38.3341 52.5919L39.4108 52.0461C53.0727 45.121 59.9997 35.3341 59.9997 22.9571C59.9997 18.6871 58.6441 14.9987 55.9702 11.9941ZM39.3601 49.2765L36.9704 44.8653C44.1567 41.0998 47.7976 36.5732 47.7976 31.3977V30.2896L46.6966 30.1649C43.7312 29.8292 41.3715 28.6805 39.4828 26.6528C37.6077 24.6398 36.6961 22.3807 36.6961 19.7458C36.6961 16.9324 37.5889 14.6323 39.4252 12.7134C41.2467 10.8102 43.4595 9.88499 46.1899 9.88499C49.2725 9.88499 51.8654 11.1145 54.1167 13.6437C56.4058 16.2157 57.5186 19.2621 57.5186 22.957C57.5186 28.6297 55.9213 33.751 52.7711 38.1787C49.7653 42.4033 45.257 46.1331 39.3601 49.2765Z"
                          fill="white"
                        />
                        <path
                          d="M22.3404 11.9886C19.599 8.94656 16.2947 7.40402 12.519 7.40402C9.11988 7.40402 6.25406 8.61551 4.0016 11.0047C1.76848 13.3733 0.636094 16.3143 0.636094 19.746C0.636094 22.9922 1.79766 25.885 4.08832 28.3441C6.10488 30.5088 8.61996 31.8874 11.5775 32.4524C11.0569 36.4509 7.55414 40.0692 1.14562 43.221L0 43.7842L4.65094 52.596L5.73832 52.0473C19.4621 45.1226 26.4207 35.3352 26.4207 22.9572C26.4206 18.6838 25.0477 14.9934 22.3404 11.9886ZM5.70223 49.2724L3.3777 44.8681C10.5118 41.1011 14.1267 36.5734 14.1267 31.3977V30.292L13.0282 30.1652C10.1236 29.8301 7.79297 28.6812 5.90367 26.6528C4.02855 24.64 3.11719 22.3807 3.11719 19.746C3.11719 16.9289 3.99703 14.6263 5.80676 12.7069C7.5968 10.8082 9.79254 9.88512 12.519 9.88512C15.6047 9.88512 18.2146 11.1164 20.497 13.6495C22.8135 16.2202 23.9395 19.2648 23.9395 22.9572C23.9395 28.6289 22.3352 33.7495 19.1708 38.1768C16.152 42.4002 11.6243 46.1293 5.70223 49.2724Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_21874">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h1 className="w-full mt-4 font-semibold text-center text-white text-18 md:text-20">
                      This ever-evolving digital understand the significance
                      staying ahead Through blog invite explore the dynamic
                      world with us decoding algorithms
                    </h1>
                    <div className="flex items-center gap-5 mx-auto mt-5 md:mt-10 w-fit">
                      <div className="overflow-hidden rounded-full w-14 h-14">
                        <img
                          src="./assets/images/home-two/testimonial/sm1.webp"
                          alt=""
                          className="object-cover w-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-white text-18">
                          Matthew C. Lansberry
                        </h1>
                        <p className="text-sm font-medium leading-7 text-white">
                          CEO & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-span-1 p-5 md:p-[54px] rounded-3xl flex flex-col items-center relative overflow-hidden group border border-white/5 bg-blue-seo">
                  {/* <!-- animation circle  --> */}
                  <div className="absolute z-0 flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                    <div className="animated_circle_sm bg-white/10"></div>
                    <div className="animated_circle_sm2 bg-white/10"></div>
                    <div className="animated_circle_sm3 bg-white/10"></div>
                    <div className="animated_circle_sm4 bg-white/10"></div>
                  </div>
                  <div className="relative z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_21874)">
                        <path
                          d="M55.9702 11.9941C53.2589 8.94831 49.9682 7.4039 46.1898 7.4039C42.7939 7.4039 39.9151 8.61316 37.6326 10.9979C35.3647 13.3675 34.2147 16.3106 34.2147 19.7458C34.2147 22.9922 35.3763 25.8849 37.6672 28.344C39.688 30.5134 42.2336 31.8933 45.2472 32.4556C44.7202 36.4512 41.1881 40.0677 34.7278 43.2188L33.5645 43.7864L38.3341 52.5919L39.4108 52.0461C53.0727 45.121 59.9997 35.3341 59.9997 22.9571C59.9997 18.6871 58.6441 14.9987 55.9702 11.9941ZM39.3601 49.2765L36.9704 44.8653C44.1567 41.0998 47.7976 36.5732 47.7976 31.3977V30.2896L46.6966 30.1649C43.7312 29.8292 41.3715 28.6805 39.4828 26.6528C37.6077 24.6398 36.6961 22.3807 36.6961 19.7458C36.6961 16.9324 37.5889 14.6323 39.4252 12.7134C41.2467 10.8102 43.4595 9.88499 46.1899 9.88499C49.2725 9.88499 51.8654 11.1145 54.1167 13.6437C56.4058 16.2157 57.5186 19.2621 57.5186 22.957C57.5186 28.6297 55.9213 33.751 52.7711 38.1787C49.7653 42.4033 45.257 46.1331 39.3601 49.2765Z"
                          fill="white"
                        />
                        <path
                          d="M22.3404 11.9886C19.599 8.94656 16.2947 7.40402 12.519 7.40402C9.11988 7.40402 6.25406 8.61551 4.0016 11.0047C1.76848 13.3733 0.636094 16.3143 0.636094 19.746C0.636094 22.9922 1.79766 25.885 4.08832 28.3441C6.10488 30.5088 8.61996 31.8874 11.5775 32.4524C11.0569 36.4509 7.55414 40.0692 1.14562 43.221L0 43.7842L4.65094 52.596L5.73832 52.0473C19.4621 45.1226 26.4207 35.3352 26.4207 22.9572C26.4206 18.6838 25.0477 14.9934 22.3404 11.9886ZM5.70223 49.2724L3.3777 44.8681C10.5118 41.1011 14.1267 36.5734 14.1267 31.3977V30.292L13.0282 30.1652C10.1236 29.8301 7.79297 28.6812 5.90367 26.6528C4.02855 24.64 3.11719 22.3807 3.11719 19.746C3.11719 16.9289 3.99703 14.6263 5.80676 12.7069C7.5968 10.8082 9.79254 9.88512 12.519 9.88512C15.6047 9.88512 18.2146 11.1164 20.497 13.6495C22.8135 16.2202 23.9395 19.2648 23.9395 22.9572C23.9395 28.6289 22.3352 33.7495 19.1708 38.1768C16.152 42.4002 11.6243 46.1293 5.70223 49.2724Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_21874">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h1 className="w-full mt-4 font-semibold text-center text-white text-18 md:text-20">
                      This ever-evolving digital understand the significance
                      staying ahead Through blog invite explore the dynamic
                      world with us decoding algorithms
                    </h1>
                    <div className="flex items-center gap-5 mx-auto mt-5 md:mt-10 w-fit">
                      <div className="overflow-hidden rounded-full w-14 h-14">
                        <img
                          src="./assets/images/home-two/testimonial/sm1.webp"
                          alt=""
                          className="object-cover w-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-white text-18">
                          Matthew C. Lansberry
                        </h1>
                        <p className="text-sm font-medium leading-7 text-white">
                          CEO & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="relative w-fit mx-auto pt-10 md:pt-[70px] flex items-center">
              <div className="absolute flex justify-between w-full">
                <button className="h2-testimonials-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black-seo overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="rotate-180 h2-testimonials-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black-seo overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-10 h2-testimonial-pagination"></div>
            </div>
          </div>
          <div className="col-span-2 grid-cols-2 gap-2.5 hidden xl:grid">
            {/* <!-- second slider start --> */}
            <div className="relative col-span-1">
              <div className="overlay-vSlider"></div>
              <Swiper
                {...vSliderOptionTwo}
                className="max-h-[472px] overflow-hidden"
              >
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r6.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r7.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r8.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r9.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <!-- second slider end  --> */}
            {/* <!-- first slider start --> */}
            <div className="relative col-span-1 my-auto">
              <div className="overlay-vSlider"></div>
              <Swiper
                {...vSliderOption}
                className="max-h-[312px] overflow-hidden"
              >
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r6.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r7.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r8.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src="./assets/images/home-two/testimonial/r9.webp"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <!-- first slider end  --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
