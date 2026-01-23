import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LogoSliderThree() {
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
    },
  };
  return (
    <section className="pb-16 md:pb-[130px]">
      <div className="w-full mx-auto border theme-container border-buisness-dark-black/5 rounded-2xl">
        <div className="w-full py-10 md:py-[70px]">
          <h1 className="w-full font-medium text-center text-paragraph">
            We’ve more then 200+ global clients
          </h1>
          <div className="overflow-hidden  h5-client_slider mt-11">
            <Swiper {...swiperOptions}>
              {/* <!-- Slides --> */}
              <SwiperSlide>
                <div>
                  <img src="./assets/images/home-five/clinets/1.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/images/home-five/clinets/2.svg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img src="./assets/images/home-five/clinets/3.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./assets/images/home-five/clinets/4.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./assets/images/home-five/clinets/5.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./assets/images/home-five/clinets/1.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./assets/images/home-five/clinets/2.svg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
