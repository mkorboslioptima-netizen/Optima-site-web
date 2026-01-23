import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const logoData = [
  {
    logoUrl: "/assets/images/home-two/customer/logo1.svg",
    href: "/",
  },
  {
    logoUrl: "/assets/images/home-two/customer/logo2.svg",
    href: "/",
  },
  {
    logoUrl: "/assets/images/home-two/customer/logo3.svg",
    href: "/",
  },
  {
    logoUrl: "/assets/images/home-two/customer/logo4.svg",
    href: "/",
  },
  {
    logoUrl: "/assets/images/home-two/customer/logo5.svg",
    href: "/",
  },
  {
    logoUrl: "/assets/images/home-two/customer/logo6.svg",
    href: "/",
  },
];

export default function LogoSliderTwo() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 2.5,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: {
      nextEl: ".h2-case-study-next",
      prevEl: ".h2-case-study-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section className="max-w-full overflow-hidden">
      <div className="flex items-center w-screen mx-auto theme-container">
        <div className="flex gap-5 lg:gap-[154px] w-full flex-col lg:flex-row">
          <p className="w-full max-w-[176px] text-base font-semibold text-main-black">
            We’ve more then 200+ global clients
          </p>

          {/* <!-- Slider main container --> */}
          <div className="w-full flex-1 -mr-[300px] max-w-full overflow-hidden">
            <Swiper {...swiperOptions}>
              {logoData.map((item, i) => (
                <SwiperSlide key={i + 1}>
                  <div className="swiper-slide">
                    <img src={item.logoUrl} alt="logo" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
