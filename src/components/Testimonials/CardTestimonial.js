import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CardTestimonial() {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
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
    <section id="testimonials">
      <div className="max-w-[1860px] w-full h-fit mx-auto relative overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="/assets/images/home-nine/testimonials-bg.svg"
          alt=""
          className="absolute z-0 hidden cta_bg_anim sm:block"
        />
        <div className="py-[70px] md:py-[130px]">
          <div className="relative z-10 w-full mx-auto theme-container">
            <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit mx-auto">
              Out Testimonials
            </h1>
            <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-white text-center mx-auto mt-5">
              Customer Say About Our Services
            </h2>
            <div className="w-full">
              <div className="pb-[50px] h5-story-slider h7-testimonial-slider pt-14">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="flex flex-col items-center relative pt-[52px] pb-10 px-11 bg-white rounded-2xl">
                      <div className="w-[240px] aspect-square rounded-full card-shape-bg absolute"></div>
                      <svg
                        className="relative -top-3"
                        width="60"
                        height="46"
                        viewBox="0 0 60 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                          fill="#5F57FF"
                        />
                        <path
                          d="M22.3404 4.98842C19.599 1.94635 16.2947 0.403809 12.519 0.403809C9.11988 0.403809 6.25406 1.61529 4.0016 4.00451C1.76848 6.37311 0.636094 9.31405 0.636094 12.7458C0.636094 15.992 1.79766 18.8848 4.08832 21.3439C6.10488 23.5086 8.61996 24.8872 11.5775 25.4522C11.0569 29.4507 7.55414 33.069 1.14562 36.2208L0 36.784L4.65094 45.5958L5.73832 45.0471C19.4621 38.1224 26.4207 28.335 26.4207 15.9569C26.4206 11.6836 25.0477 7.99323 22.3404 4.98842ZM5.70223 42.2722L3.3777 37.8678C10.5118 34.1009 14.1267 29.5732 14.1267 24.3975V23.2918L13.0282 23.165C10.1236 22.8299 7.79297 21.681 5.90367 19.6526C4.02855 17.6398 3.11719 15.3805 3.11719 12.7458C3.11719 9.92869 3.99703 7.62608 5.80676 5.70666C7.5968 3.80799 9.79254 2.8849 12.519 2.8849C15.6047 2.8849 18.2146 4.11619 20.497 6.64932C22.8135 9.21994 23.9395 12.2646 23.9395 15.9569C23.9395 21.6287 22.3352 26.7493 19.1708 31.1766C16.152 35.4 11.6243 39.1291 5.70223 42.2722Z"
                          fill="#5F57FF"
                        />
                      </svg>
                      <h1 className="mt-5 mb-8 font-medium text-center text-18 text-main-black">
                        This ever-evolvin digital understand the significance
                        staying ahea Through blog invite explore the dynamic
                        world with us decoding algorithms
                      </h1>
                      <img
                        src="/assets/images/home-seven/client-1.png"
                        alt=""
                        className="mx-auto"
                      />
                      <h1 className="mt-3 font-semibold text-center text-18 text-main-black">
                        Nathaniel S. Mitchell
                      </h1>
                      <p className="text-sm font-medium text-center text-paragraph">
                        CEO & Founder
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center relative pt-[52px] pb-10 px-11 bg-white rounded-2xl">
                      <div className="w-[240px] aspect-square rounded-full card-shape-bg absolute"></div>
                      <svg
                        className="relative -top-3"
                        width="60"
                        height="46"
                        viewBox="0 0 60 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                          fill="#5F57FF"
                        />
                        <path
                          d="M22.3404 4.98842C19.599 1.94635 16.2947 0.403809 12.519 0.403809C9.11988 0.403809 6.25406 1.61529 4.0016 4.00451C1.76848 6.37311 0.636094 9.31405 0.636094 12.7458C0.636094 15.992 1.79766 18.8848 4.08832 21.3439C6.10488 23.5086 8.61996 24.8872 11.5775 25.4522C11.0569 29.4507 7.55414 33.069 1.14562 36.2208L0 36.784L4.65094 45.5958L5.73832 45.0471C19.4621 38.1224 26.4207 28.335 26.4207 15.9569C26.4206 11.6836 25.0477 7.99323 22.3404 4.98842ZM5.70223 42.2722L3.3777 37.8678C10.5118 34.1009 14.1267 29.5732 14.1267 24.3975V23.2918L13.0282 23.165C10.1236 22.8299 7.79297 21.681 5.90367 19.6526C4.02855 17.6398 3.11719 15.3805 3.11719 12.7458C3.11719 9.92869 3.99703 7.62608 5.80676 5.70666C7.5968 3.80799 9.79254 2.8849 12.519 2.8849C15.6047 2.8849 18.2146 4.11619 20.497 6.64932C22.8135 9.21994 23.9395 12.2646 23.9395 15.9569C23.9395 21.6287 22.3352 26.7493 19.1708 31.1766C16.152 35.4 11.6243 39.1291 5.70223 42.2722Z"
                          fill="#5F57FF"
                        />
                      </svg>
                      <h1 className="mt-5 mb-8 font-medium text-center text-18 text-main-black">
                        This ever-evolvin digital understand the significance
                        staying ahea Through blog invite explore the dynamic
                        world with us decoding algorithms
                      </h1>
                      <img
                        src="/assets/images/home-seven/client-2.png"
                        alt=""
                        className="mx-auto"
                      />
                      <h1 className="mt-3 font-semibold text-center text-18 text-main-black">
                        Richard M. Galbraith
                      </h1>
                      <p className="text-sm font-medium text-center text-paragraph">
                        Graphic designer
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center relative pt-[52px] pb-10 px-11 bg-white rounded-2xl">
                      <div className="w-[240px] aspect-square rounded-full card-shape-bg absolute"></div>
                      <svg
                        className="relative -top-3"
                        width="60"
                        height="46"
                        viewBox="0 0 60 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                          fill="#5F57FF"
                        />
                        <path
                          d="M22.3404 4.98842C19.599 1.94635 16.2947 0.403809 12.519 0.403809C9.11988 0.403809 6.25406 1.61529 4.0016 4.00451C1.76848 6.37311 0.636094 9.31405 0.636094 12.7458C0.636094 15.992 1.79766 18.8848 4.08832 21.3439C6.10488 23.5086 8.61996 24.8872 11.5775 25.4522C11.0569 29.4507 7.55414 33.069 1.14562 36.2208L0 36.784L4.65094 45.5958L5.73832 45.0471C19.4621 38.1224 26.4207 28.335 26.4207 15.9569C26.4206 11.6836 25.0477 7.99323 22.3404 4.98842ZM5.70223 42.2722L3.3777 37.8678C10.5118 34.1009 14.1267 29.5732 14.1267 24.3975V23.2918L13.0282 23.165C10.1236 22.8299 7.79297 21.681 5.90367 19.6526C4.02855 17.6398 3.11719 15.3805 3.11719 12.7458C3.11719 9.92869 3.99703 7.62608 5.80676 5.70666C7.5968 3.80799 9.79254 2.8849 12.519 2.8849C15.6047 2.8849 18.2146 4.11619 20.497 6.64932C22.8135 9.21994 23.9395 12.2646 23.9395 15.9569C23.9395 21.6287 22.3352 26.7493 19.1708 31.1766C16.152 35.4 11.6243 39.1291 5.70223 42.2722Z"
                          fill="#5F57FF"
                        />
                      </svg>
                      <h1 className="mt-5 mb-8 font-medium text-center text-18 text-main-black">
                        This ever-evolvin digital understand the significance
                        staying ahea Through blog invite explore the dynamic
                        world with us decoding algorithms
                      </h1>
                      <img
                        src="/assets/images/home-seven/client-3.png"
                        alt=""
                        className="mx-auto"
                      />
                      <h1 className="mt-3 font-semibold text-center text-18 text-main-black">
                        Frederick S. Harris
                      </h1>
                      <p className="text-sm font-medium text-center text-paragraph">
                        Web developer
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col items-center relative pt-[52px] pb-10 px-11 bg-white rounded-2xl">
                      <div className="w-[240px] aspect-square rounded-full card-shape-bg absolute"></div>
                      <svg
                        className="relative -top-3"
                        width="60"
                        height="46"
                        viewBox="0 0 60 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.9702 4.99404C53.2589 1.94822 49.9682 0.403809 46.1898 0.403809C42.7939 0.403809 39.9151 1.61307 37.6326 3.99783C35.3647 6.36736 34.2147 9.31052 34.2147 12.7458C34.2147 15.9921 35.3763 18.8849 37.6672 21.3439C39.688 23.5133 42.2336 24.8932 45.2472 25.4556C44.7202 29.4511 41.1881 33.0676 34.7278 36.2188L33.5645 36.7863L38.3341 45.5918L39.4108 45.046C53.0727 38.1209 59.9997 28.334 59.9997 15.957C59.9997 11.687 58.6441 7.99861 55.9702 4.99404ZM39.3601 42.2764L36.9704 37.8652C44.1567 34.0997 47.7976 29.5731 47.7976 24.3976V23.2895L46.6966 23.1648C43.7312 22.8292 41.3715 21.6804 39.4828 19.6527C37.6077 17.6397 36.6961 15.3806 36.6961 12.7458C36.6961 9.93232 37.5889 7.63217 39.4252 5.71334C41.2467 3.8101 43.4595 2.8849 46.1899 2.8849C49.2725 2.8849 51.8654 4.11443 54.1167 6.64357C56.4058 9.2156 57.5186 12.262 57.5186 15.9569C57.5186 21.6296 55.9213 26.7509 52.7711 31.1786C49.7653 35.4033 45.257 39.133 39.3601 42.2764Z"
                          fill="#5F57FF"
                        />
                        <path
                          d="M22.3404 4.98842C19.599 1.94635 16.2947 0.403809 12.519 0.403809C9.11988 0.403809 6.25406 1.61529 4.0016 4.00451C1.76848 6.37311 0.636094 9.31405 0.636094 12.7458C0.636094 15.992 1.79766 18.8848 4.08832 21.3439C6.10488 23.5086 8.61996 24.8872 11.5775 25.4522C11.0569 29.4507 7.55414 33.069 1.14562 36.2208L0 36.784L4.65094 45.5958L5.73832 45.0471C19.4621 38.1224 26.4207 28.335 26.4207 15.9569C26.4206 11.6836 25.0477 7.99323 22.3404 4.98842ZM5.70223 42.2722L3.3777 37.8678C10.5118 34.1009 14.1267 29.5732 14.1267 24.3975V23.2918L13.0282 23.165C10.1236 22.8299 7.79297 21.681 5.90367 19.6526C4.02855 17.6398 3.11719 15.3805 3.11719 12.7458C3.11719 9.92869 3.99703 7.62608 5.80676 5.70666C7.5968 3.80799 9.79254 2.8849 12.519 2.8849C15.6047 2.8849 18.2146 4.11619 20.497 6.64932C22.8135 9.21994 23.9395 12.2646 23.9395 15.9569C23.9395 21.6287 22.3352 26.7493 19.1708 31.1766C16.152 35.4 11.6243 39.1291 5.70223 42.2722Z"
                          fill="#5F57FF"
                        />
                      </svg>
                      <h1 className="mt-5 mb-8 font-medium text-center text-18 text-main-black">
                        This ever-evolvin digital understand the significance
                        staying ahea Through blog invite explore the dynamic
                        world with us decoding algorithms
                      </h1>
                      <img
                        src="/assets/images/home-seven/client-2.png"
                        alt=""
                        className="mx-auto"
                      />
                      <h1 className="mt-3 font-semibold text-center text-18 text-main-black">
                        Richard M. Galbraith
                      </h1>
                      <p className="text-sm font-medium text-center text-paragraph">
                        Graphic designer
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="relative flex items-center mx-auto w-fit">
              <div className="absolute flex justify-between w-full">
                <button className="group h5-story-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-app-main before:bg-app-main relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-white group-hover:stroke-main-black"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="group rotate-180 h5-story-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-app-main before:bg-app-main relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-white group-hover:stroke-main-black"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-10 h5-story-pagination h9-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
