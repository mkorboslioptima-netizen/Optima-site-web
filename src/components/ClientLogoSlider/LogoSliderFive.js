import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LogoSliderFive() {
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
    <section className="bg-[#007aff]/10 pb-[130px]">
      <div className="max-w-[1616px] mx-auto">
        <div className="w-full pt-10 xl:pt-[123px]">
          <h1 className="w-full font-medium text-center text-paragraph">
            We’ve more then 200+ global clients
          </h1>
          <div className="overflow-hidden h7-partner_slider mt-11">
            <Swiper {...swiperOptions}>
              {/* <!-- Slides --> */}
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/spotify.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/dropbox.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/hootsuite.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/indeed.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/linkedIn.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/mailchimp.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/metacritic.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/indeed.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/linkedIn.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="/assets/images/home-eight/mailchimp.svg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
