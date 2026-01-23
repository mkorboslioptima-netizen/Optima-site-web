"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LogoSliderFour() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section className="bg-it-black">
      <div className="max-w-[1616px] mx-auto">
        <div className="w-full pt-10 xl:pt-[123px]">
          <h1 className="w-full font-medium text-center text-white">
            We’ve more then 200+ global clients
          </h1>
          <div className="overflow-hidden h7-partner_slider mt-11">
            <Swiper {...swiperOptions}>
              {/* <!-- Slides --> */}
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/spotify.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/dropbox.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/hootsuite.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/indeed.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/linkedIn.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/mailchimp.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/metacritic.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/indeed.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/linkedIn.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/home-three/partner/mailchimp.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
