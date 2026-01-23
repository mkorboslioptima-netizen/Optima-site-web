import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";

export default function TestimonialFour() {
  const swiperOptionOne = {
    modules: [Autoplay],
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  };
  const swiperOptionTwo = {
    modules: [Autoplay],
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    speed: 8000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,

    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  };
  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden pb-16 md:pb-[130px] h4-testimonial-bg"
    >
      <div className="flex w-full justify-center items-center flex-col mb-[60px]">
        <h1 className="py-0.5 px-5 bg-white/5 border-white/10 border rounded-[30px] font-medium text-white">
          Our Testimonials
        </h1>

        <h2 className="flex px-5 mt-5 font-semibold text-white text-24 sm:px-0 sm:text-48">
          <p className="w-40 text-end">
            <CountUp start={0} end={1200} /> +
          </p>
          Customer Say Our Services
        </h2>
      </div>
      {/* <!-- first slider start  --> */}
      <Swiper
        {...swiperOptionOne}
        className="h4-testimonials_first_slider mb-[30px]"
      >
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/1.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Matthew C. Lan,
                </span>
                <span className="text-sm font-normal text-white/50">
                  CEO & Founder
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/2.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Nathan S. Tucker,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Designer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/3.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  David J. Barber,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Businessman
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/4.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Rogelio J. Treiber,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Manager
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/5.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Chi B. Wooden,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Enigneer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/6.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Stuart G. Garcia,
                </span>
                <span className="text-sm font-normal text-white/50">
                  graphics designer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/7.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Michael S. Draper,
                </span>
                <span className="text-sm font-normal text-white/50">
                  CEO & Founder
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/8.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  James D. Graham,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Developer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <!-- first slider end  --> */}
      {/* <!-- second slider start  --> */}
      <Swiper {...swiperOptionTwo} className="h4-testimonials_second_slider">
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/1.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Matthew C. Lan,
                </span>
                <span className="text-sm font-normal text-white/50">
                  CEO & Founder
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/2.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Nathan S. Tucker,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Designer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/3.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  David J. Barber,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Businessman
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/4.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Rogelio J. Treiber,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Manager
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/5.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Chi B. Wooden,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Enigneer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/6.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Stuart G. Garcia,
                </span>
                <span className="text-sm font-normal text-white/50">
                  graphics designer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/7.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  Michael S. Draper,
                </span>
                <span className="text-sm font-normal text-white/50">
                  CEO & Founder
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-10 transition-all duration-300 border py-9 bg-white/5 rounded-xl border-white/10 h4_testimonials_slide">
            <div className="flex items-center gap-5">
              <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
                <img
                  src="./assets/images/home-four/testimonial/8.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <p>
                <span className="font-semibold text-white text-18 font-inter">
                  James D. Graham,
                </span>
                <span className="text-sm font-normal text-white/50">
                  Developer
                </span>
              </p>
            </div>
            <p className="pt-6 text-white/50">
              Working with “Quland” was game-changer obrand their innovative
              approach attentions to detail helped us revamp marketing
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <!-- first slider end  --> */}
    </section>
  );
}
