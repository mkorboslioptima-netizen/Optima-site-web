import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceSlider() {
  const swiperOptions = {
    modules: [Pagination, Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".h10-service-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".h10-service-next",
      prevEl: ".h10-service-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section id="features" className="pt-[70px] md:pt-[116px]">
      <div className="mx-auto theme-container">
        <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit mx-auto">
          Core Features
        </h1>
        <h2 className="sm:text-48 text-24 font-semibold text-white mb-[42px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          The Best Creative Service
        </h2>
        <div className="w-full">
          <div className="pb-[50px] h10-service-slider pt-8 md:pt-14 overflow-hidden">
            <Swiper {...swiperOptions}>
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_460_34699)">
                          <path
                            d="M44.6089 32.7411L39.9964 30.4348L37.0608 22.7989C37.0263 22.7086 36.9735 22.6264 36.9057 22.5575C36.838 22.4885 36.7567 22.4343 36.6671 22.3981L18.4526 15.1172C18.3253 15.0665 18.1859 15.0542 18.0516 15.0817C17.9173 15.1091 17.7939 15.1753 17.6968 15.2719L15.2675 17.7012C15.1721 17.7985 15.107 17.9214 15.0802 18.055C15.0533 18.1885 15.0659 18.327 15.1163 18.4536L22.3971 36.668C22.4333 36.7577 22.4875 36.8389 22.5565 36.9067C22.6255 36.9744 22.7076 37.0272 22.7979 37.0618L30.4339 39.9973L32.7401 44.6098C32.7887 44.7115 32.861 44.8001 32.9509 44.868C33.0409 44.9359 33.1458 44.9812 33.2569 45.0001C33.2943 45.0035 33.332 45.0035 33.3694 45.0001C33.5556 44.9993 33.7339 44.9247 33.8651 44.7926L44.7917 33.8661C44.8721 33.7885 44.9329 33.6928 44.9689 33.5871C45.005 33.4813 45.0153 33.3684 44.9991 33.2579C44.9802 33.1468 44.9349 33.0418 44.867 32.9519C44.7991 32.8619 44.7106 32.7896 44.6089 32.7411ZM16.5893 18.3622L16.9796 17.9755L26.0464 27.0422C25.4488 27.889 25.1908 28.9291 25.3232 29.9569C25.4556 30.9847 25.9689 31.9254 26.7615 32.593C27.5542 33.2606 28.5685 33.6065 29.6038 33.5622C30.6392 33.518 31.6203 33.0868 32.3531 32.354C33.0859 31.6213 33.517 30.6402 33.5613 29.6048C33.6055 28.5694 33.2597 27.5551 32.5921 26.7625C31.9245 25.9699 30.9837 25.4566 29.9559 25.3241C28.9281 25.1917 27.888 25.4498 27.0413 26.0473L17.9745 16.9805L18.3612 16.5903L35.8585 23.5899L38.6182 30.7688L30.7678 38.6192L23.5889 35.8594L16.5893 18.3622ZM29.4249 26.6942C30.0568 26.6951 30.6689 26.9151 31.1568 27.3167C31.6447 27.7183 31.9783 28.2767 32.1007 28.8966C32.2231 29.5166 32.1268 30.1598 31.8282 30.7167C31.5296 31.2736 31.0471 31.7098 30.463 31.9509C29.8788 32.192 29.2292 32.2231 28.6247 32.0389C28.0202 31.8547 27.4982 31.4667 27.1478 30.9408C26.7973 30.415 26.64 29.7839 26.7026 29.1551C26.7653 28.5263 27.044 27.9386 27.4913 27.4922C28.0046 26.9805 28.7001 26.6935 29.4249 26.6942ZM33.5628 43.1087L31.805 39.593L39.585 31.8129L43.1007 33.5708L33.5628 43.1087Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.4479 37.6169C13.3134 37.4898 13.1354 37.419 12.9504 37.419C12.7654 37.419 12.5874 37.4898 12.453 37.6169L11.56 38.5098C9.17705 35.2756 7.86245 31.3786 7.79943 27.3618C7.73641 23.345 8.92811 19.4086 11.2084 16.1012C11.8916 16.4772 12.6783 16.6216 13.4504 16.5128C14.2226 16.4041 14.9387 16.048 15.4915 15.498C16.0443 14.948 16.4039 14.2337 16.5166 13.4621C16.6292 12.6904 16.4887 11.9031 16.1163 11.218C19.4236 8.9377 23.36 7.746 27.3768 7.80902C31.3936 7.87204 35.2906 9.18664 38.5248 11.5696L37.6178 12.452C37.4871 12.5838 37.4138 12.762 37.4139 12.9477C37.4134 13.0403 37.4311 13.132 37.4661 13.2177C37.5011 13.3033 37.5526 13.3812 37.6178 13.4469L40.7186 16.5231C40.8503 16.6541 41.0285 16.7276 41.2143 16.7276C41.4001 16.7276 41.5783 16.6541 41.71 16.5231L44.7932 13.4399C44.8586 13.3746 44.9104 13.2971 44.9458 13.2117C44.9812 13.1263 44.9994 13.0349 44.9994 12.9425C44.9994 12.85 44.9812 12.7586 44.9458 12.6732C44.9104 12.5878 44.8586 12.5103 44.7932 12.445L41.71 9.36179C41.5783 9.23083 41.4001 9.15732 41.2143 9.15732C41.0285 9.15732 40.8503 9.23083 40.7186 9.36179L39.5268 10.5466C36.5895 8.33627 33.1169 6.9476 29.4654 6.52314C25.814 6.09869 22.1154 6.65375 18.7495 8.13132L22.803 4.08835C23.2626 4.30796 23.7851 4.35768 24.2779 4.22866C24.7707 4.09966 25.2018 3.80026 25.4949 3.38361C25.7879 2.96695 25.9239 2.45996 25.8787 1.95259C25.8335 1.44521 25.61 0.970252 25.2479 0.611967C24.8858 0.253682 24.4085 0.0352343 23.9007 -0.00462093C23.3929 -0.0444761 22.8874 0.0968374 22.4738 0.39425C22.0603 0.691662 21.7655 1.12595 21.6416 1.62006C21.5178 2.11417 21.5731 2.63616 21.7975 3.09343L14.9561 9.94538C14.2615 9.47942 13.4266 9.2691 12.5941 9.35033C11.7616 9.43156 10.9832 9.79931 10.3917 10.3908C9.80027 10.9822 9.43252 11.7607 9.35128 12.5932C9.27005 13.4256 9.48038 14.2605 9.94634 14.9551L3.09439 21.7966C2.63532 21.5729 2.11183 21.5192 1.61691 21.645C1.122 21.7708 0.687723 22.0681 0.391257 22.4838C0.0947911 22.8996 -0.0446659 23.4071 -0.0023324 23.916C0.040001 24.4249 0.261383 24.9023 0.622475 25.2634C0.983567 25.6245 1.46098 25.8459 1.96988 25.8882C2.47879 25.9305 2.98622 25.7911 3.40201 25.4946C3.8178 25.1981 4.11502 24.7639 4.24086 24.2689C4.3667 23.774 4.313 23.2505 4.08931 22.7915L8.14282 18.7485C6.66377 22.1136 6.10696 25.8116 6.52956 29.463C6.95216 33.1144 8.33894 36.5876 10.5475 39.5258L9.35923 40.7176C9.22827 40.8494 9.15476 41.0276 9.15476 41.2133C9.15476 41.3991 9.22827 41.5773 9.35923 41.709L12.4424 44.7923C12.5737 44.9243 12.752 44.9989 12.9381 44.9997C13.0309 44.9997 13.1228 44.9815 13.2085 44.9459C13.2942 44.9103 13.3719 44.8581 13.4374 44.7923L16.5241 41.709C16.655 41.5773 16.7285 41.3991 16.7285 41.2133C16.7285 41.0276 16.655 40.8494 16.5241 40.7176L13.4479 37.6169ZM41.2213 10.8454L43.3096 12.9337L41.2213 15.0219L39.133 12.9337L41.2213 10.8454ZM23.2038 1.62741C23.3082 1.52208 23.4417 1.45016 23.5871 1.42077C23.7325 1.39138 23.8834 1.40585 24.0206 1.46235C24.1577 1.51885 24.2751 1.61482 24.3576 1.7381C24.4402 1.86137 24.4842 2.00639 24.4842 2.15476C24.4842 2.30312 24.4402 2.44814 24.3576 2.57142C24.2751 2.69469 24.1577 2.79067 24.0206 2.84717C23.8834 2.90366 23.7325 2.91814 23.5871 2.88875C23.4417 2.85936 23.3082 2.78744 23.2038 2.6821C23.1344 2.61288 23.0795 2.53068 23.0419 2.44019C23.0044 2.3497 22.9851 2.25271 22.9851 2.15476C22.9851 2.0568 23.0044 1.95981 23.0419 1.86932C23.0795 1.77884 23.1344 1.69663 23.2038 1.62741ZM11.3913 11.3903C11.5954 11.1852 11.8381 11.0224 12.1054 10.9113C12.3727 10.8002 12.6592 10.743 12.9487 10.743C13.2381 10.743 13.5247 10.8002 13.792 10.9113C14.0592 11.0224 14.3019 11.1852 14.5061 11.3903C14.8147 11.6984 15.025 12.0912 15.1104 12.5189C15.1957 12.9466 15.1523 13.39 14.9855 13.793C14.8188 14.1959 14.5363 14.5404 14.1737 14.7828C13.8111 15.0252 13.3848 15.1545 12.9487 15.1545C12.5126 15.1545 12.0862 15.0252 11.7237 14.7828C11.3611 14.5404 11.0786 14.1959 10.9118 13.793C10.7451 13.39 10.7017 12.9466 10.787 12.5189C10.8723 12.0912 11.0826 11.6984 11.3913 11.3903ZM2.68657 24.2575C2.54303 24.3772 2.3599 24.4389 2.17318 24.4305C1.98646 24.422 1.80965 24.3441 1.67748 24.2119C1.54532 24.0797 1.46735 23.9029 1.45892 23.7162C1.45048 23.5295 1.51218 23.3463 1.63189 23.2028C1.77258 23.0645 1.96196 22.987 2.15923 22.987C2.3565 22.987 2.54588 23.0645 2.68657 23.2028C2.75588 23.272 2.81086 23.3542 2.84838 23.4447C2.88589 23.5352 2.9052 23.6322 2.9052 23.7301C2.9052 23.8281 2.88589 23.9251 2.84838 24.0156C2.81086 24.1061 2.75588 24.1883 2.68657 24.2575ZM12.9487 43.2876L10.8604 41.1993L12.9487 39.111L15.037 41.1993L12.9487 43.2876Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_460_34699">
                            <rect width="45" height="45" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Product Design
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_460_34707)">
                          <path
                            d="M34.4143 44.1211H10.587C9.12475 44.1211 7.93945 42.9358 7.93945 41.4737V22.0588C7.93945 20.5967 9.12475 19.4114 10.587 19.4114H34.4143C35.8765 19.4114 37.0618 20.5967 37.0618 22.0588V41.4737C37.0618 42.9358 35.8765 44.1211 34.4143 44.1211Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="11.4689"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <circle
                            cx="14.998"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <circle
                            cx="18.5293"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <path
                            d="M7.93945 26.4712H37.0618"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.93881 26.2277H7.0563C3.64465 26.2277 0.878906 23.1319 0.878906 19.3151C0.878906 15.8779 3.12047 13.0274 6.05558 12.4934C6.62133 8.8135 9.78231 5.99827 13.5965 5.99827C15.7436 5.99827 17.6833 6.89142 19.0706 8.3272C20.277 4.02943 24.2015 0.878906 28.8592 0.878906C34.4782 0.878906 39.0335 5.46258 39.0335 11.115C39.0335 11.5835 38.999 12.0415 38.9391 12.4916C41.877 13.0256 44.1211 15.876 44.1211 19.3151C44.1211 23.1319 41.3554 26.2277 37.9437 26.2277H37.0612"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.205 30.8838L12.3513 35.2963L17.205 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.7949 30.8838L32.6486 35.2963L27.7949 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.2644 30.8838L20.7344 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_460_34707">
                            <rect width="45" height="45" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Web Development
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.0126 14.3109C24.6363 7.87249 18.7912 4.45051 15.7302 6.54721C15.3932 6.78458 15.1003 7.07913 14.8648 7.41754C14.8648 7.44227 7.77856 21.7829 7.77856 21.7829L3.82252 24.4631C3.21521 24.8754 2.69508 25.4033 2.29183 26.0166C1.88858 26.6299 1.61012 27.3167 1.47235 28.0377C1.33458 28.7586 1.34021 29.4997 1.48892 30.2185C1.63762 30.9373 1.92648 31.6197 2.339 32.2269L2.51703 32.489C3.35087 33.7036 4.62996 34.5406 6.07687 34.8183C7.52378 35.096 9.02185 34.7921 10.2461 33.9725L16.6005 43.3335C17.5352 44.4857 19.3302 45.6329 21.5456 44.2829C21.9381 44.0284 22.2729 43.6945 22.5284 43.3027C22.7839 42.9109 22.9545 42.47 23.0291 42.0082C23.1186 41.5489 23.1162 41.0764 23.022 40.6181C22.9278 40.1597 22.7436 39.7246 22.4802 39.3379L16.8824 31.0796C16.8824 31.0796 30.1154 30.0263 30.1648 30.0066C30.578 29.9201 30.9697 29.752 31.317 29.512C32.8896 28.4439 33.4533 26.2038 32.9093 23.2022C32.4198 20.4379 31.0302 17.3077 29.0126 14.3109ZM3.95604 31.5148L3.77802 31.2527C3.4934 30.8337 3.29421 30.3627 3.19186 29.8666C3.08951 29.3705 3.08601 28.8591 3.18154 28.3616C3.27708 27.8642 3.46979 27.3905 3.74864 26.9676C4.02748 26.5447 4.38699 26.181 4.80659 25.8972L8.22362 23.573L12.7335 30.2142L9.31648 32.5384C8.89737 32.8234 8.4262 33.023 7.92992 33.1258C7.43363 33.2286 6.92195 33.2326 6.42412 33.1375C5.92629 33.0424 5.45208 32.8502 5.02859 32.5718C4.60511 32.2933 4.24064 31.9342 3.95604 31.5148ZM21.056 40.312C21.3263 40.7142 21.426 41.2071 21.3333 41.6827C21.2406 42.1583 20.9631 42.5777 20.5615 42.8489C20.1586 43.1194 19.6649 43.2192 19.1885 43.1266C18.7121 43.0339 18.2919 42.7562 18.0198 42.3544L11.6852 33.023L14.2319 31.2923L14.9044 31.2379L21.056 40.312ZM14.3703 29.5417L9.45494 22.3022L14.1429 12.7434C14.5978 15.4285 15.928 18.6181 18.0544 21.7483C20.1808 24.8785 22.6533 27.2917 24.9775 28.706L14.3703 29.5417ZM28.9582 28.3895C26.5945 28.2362 22.7472 25.5708 19.4885 20.7692C16.2297 15.9675 15.1714 11.423 15.8983 9.16315C16.0296 8.73895 16.2916 8.36709 16.6468 8.10067C17.002 7.83424 17.4324 7.68688 17.8764 7.67963C20.2203 7.67963 24.211 10.3598 27.5637 15.3C29.4527 18.0791 30.8275 20.9868 31.2033 23.5285C31.9401 28.3895 28.9582 28.3895 28.9582 28.3895Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22.8309 14.4938C22.2252 14.3748 21.6018 14.3778 20.9973 14.5026C20.3927 14.6275 19.8191 14.8716 19.31 15.2207C19.2162 15.2856 19.1361 15.3684 19.0742 15.4643C19.0124 15.5602 18.97 15.6674 18.9496 15.7796C18.9292 15.8919 18.931 16.0071 18.9551 16.1187C18.9792 16.2302 19.025 16.3359 19.09 16.4298C19.1549 16.5236 19.2377 16.6037 19.3336 16.6656C19.4295 16.7274 19.5367 16.7698 19.6489 16.7902C19.7612 16.8106 19.8764 16.8087 19.9879 16.7847C20.0995 16.7606 20.2052 16.7147 20.299 16.6498C20.6215 16.431 20.9838 16.2778 21.3655 16.199C21.7471 16.1202 22.1405 16.1173 22.5232 16.1905C22.906 16.2638 23.2705 16.4117 23.5961 16.6258C23.9217 16.84 24.2019 17.1161 24.4207 17.4385C24.6396 17.761 24.7928 18.1233 24.8716 18.505C24.9504 18.8866 24.9532 19.28 24.88 19.6627C24.8068 20.0455 24.6589 20.41 24.4447 20.7356C24.2306 21.0612 23.9544 21.3414 23.632 21.5602C23.48 21.6652 23.3655 21.8161 23.3054 21.9908C23.2453 22.1655 23.2427 22.3549 23.298 22.5312C23.3533 22.7075 23.4635 22.8615 23.6126 22.9706C23.7617 23.0798 23.9418 23.1383 24.1265 23.1377C24.3028 23.141 24.4757 23.0892 24.621 22.9894C25.3902 22.4683 25.9874 21.7307 26.337 20.87C26.6866 20.0093 26.7728 19.0642 26.5848 18.1544C26.3968 17.2446 25.943 16.4111 25.2809 15.7594C24.6188 15.1078 23.7782 14.6673 22.8655 14.4938H22.8309Z"
                          fill="currentColor"
                        />
                        <path
                          d="M30.0808 8.29284H30.1649C30.3789 8.29275 30.5853 8.21334 30.7442 8.06995C30.9032 7.92656 31.0033 7.72937 31.0253 7.51646L31.6929 1.02855C31.7081 0.913827 31.7001 0.797221 31.6694 0.685633C31.6388 0.574045 31.586 0.469741 31.5144 0.378892C31.4427 0.288042 31.3535 0.212494 31.2521 0.156715C31.1507 0.100937 31.0391 0.0660623 30.924 0.0541542C30.8089 0.0422462 30.6926 0.053547 30.5819 0.0873878C30.4713 0.121229 30.3685 0.176922 30.2797 0.251173C30.191 0.325424 30.118 0.416725 30.0652 0.519673C30.0123 0.62262 29.9806 0.735124 29.972 0.850528L29.3094 7.34339C29.2859 7.57157 29.3539 7.79975 29.4986 7.97779C29.6432 8.15582 29.8526 8.26914 30.0808 8.29284Z"
                          fill="currentColor"
                        />
                        <path
                          d="M41.2665 6.95757C41.1395 6.76604 40.9418 6.63254 40.7167 6.58622C40.4915 6.5399 40.2572 6.58451 40.0649 6.71032L34.0369 10.6664C33.8803 10.7697 33.7616 10.9211 33.6986 11.0978C33.6356 11.2745 33.6317 11.4668 33.6875 11.6459C33.7433 11.825 33.8557 11.9811 34.0079 12.0907C34.1601 12.2004 34.3438 12.2576 34.5314 12.2537C34.7063 12.2578 34.8785 12.2095 35.0259 12.1153L41.0539 8.15922C41.2409 8.02765 41.3682 7.82741 41.4081 7.60226C41.4479 7.3771 41.397 7.14533 41.2665 6.95757Z"
                          fill="currentColor"
                        />
                        <path
                          d="M43.1102 17.5203L36.0981 16.2593C35.8719 16.2186 35.6388 16.2695 35.45 16.4007C35.2613 16.5319 35.1325 16.7328 35.0918 16.959C35.0511 17.1852 35.102 17.4184 35.2332 17.6071C35.3645 17.7958 35.5653 17.9247 35.7915 17.9653L42.7987 19.2263H42.952C43.1725 19.2328 43.3871 19.1548 43.552 19.0082C43.7169 18.8617 43.8196 18.6578 43.8392 18.4381C43.8588 18.2184 43.7937 17.9995 43.6573 17.8261C43.5209 17.6528 43.3234 17.5381 43.1053 17.5054L43.1102 17.5203Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Digital Marketing
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="42"
                        height="46"
                        viewBox="0 0 42 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.901 43.4574C23.8872 43.4574 24.6867 42.6579 24.6867 41.6717C24.6867 40.6855 23.8872 39.886 22.901 39.886C21.9147 39.886 21.1152 40.6855 21.1152 41.6717C21.1152 42.6579 21.9147 43.4574 22.901 43.4574Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.757 11.3143C16.3487 11.3143 16.8284 10.8346 16.8284 10.2428C16.8284 9.65108 16.3487 9.17139 15.757 9.17139C15.1652 9.17139 14.6855 9.65108 14.6855 10.2428C14.6855 10.8346 15.1652 11.3143 15.757 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.6144 11.3143C19.2061 11.3143 19.6858 10.8346 19.6858 10.2428C19.6858 9.65108 19.2061 9.17139 18.6144 9.17139C18.0227 9.17139 17.543 9.65108 17.543 10.2428C17.543 10.8346 18.0227 11.3143 18.6144 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M21.4738 11.3143C22.0655 11.3143 22.5452 10.8346 22.5452 10.2428C22.5452 9.65108 22.0655 9.17139 21.4738 9.17139C20.882 9.17139 20.4023 9.65108 20.4023 10.2428C20.4023 10.8346 20.882 11.3143 21.4738 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.68569 26.3145H5.39996C5.00549 26.3145 4.68567 26.6339 4.68567 27.0287C4.68567 27.4236 5.00549 27.743 5.39996 27.743H9.68569C10.0802 27.743 10.4 27.4236 10.4 27.0287C10.4 26.6339 10.0802 26.3145 9.68569 26.3145Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.9724 26.3145H11.8295C11.4351 26.3145 11.1152 26.6339 11.1152 27.0287C11.1152 27.4236 11.4351 27.743 11.8295 27.743H13.9724C14.3669 27.743 14.6867 27.4236 14.6867 27.0287C14.6867 26.6339 14.3669 26.3145 13.9724 26.3145Z"
                          fill="currentColor"
                        />
                        <path
                          d="M41.1139 7.0287C41.1139 3.48368 38.2303 0.600098 34.6853 0.600098C31.6319 0.600098 29.0742 2.74153 28.4222 5.60012H14.0584C12.4348 5.60012 11.1138 6.92119 11.1138 8.54513V17.0287H3.39015C2.52872 17.0287 1.828 17.7291 1.828 18.5905V29.0384C1.828 29.8999 2.52872 30.6002 3.39015 30.6002H22.4092C23.2706 30.6002 23.9709 29.8999 23.9709 29.0384V18.5905C23.9709 17.7291 23.2706 17.0287 22.4092 17.0287H12.5423V8.54513C12.5423 7.7087 13.2225 7.0287 14.0584 7.0287H28.2567C28.2567 10.3319 30.7613 13.0585 33.971 13.4151V37.7388H12.5423V32.787C12.5423 32.3922 12.2225 32.0727 11.828 32.0727C11.4336 32.0727 11.1138 32.3922 11.1138 32.787V38.4531V42.6551C11.1138 44.279 12.4348 45.6001 14.0584 45.6001H32.4546C34.0785 45.6001 35.3996 44.279 35.3996 42.6551V38.4531V13.4151C38.6092 13.0585 41.1139 10.3319 41.1139 7.0287ZM3.25658 22.0288H22.5424V23.4573H3.25658V22.0288ZM22.4092 29.1716H3.39015C3.31658 29.1716 3.25658 29.1116 3.25658 29.0384V24.8859H22.5424V29.0384C22.5424 29.1116 22.4824 29.1716 22.4092 29.1716ZM22.5424 18.5905V20.6002H3.25658V18.5905C3.25658 18.5173 3.31658 18.4573 3.39015 18.4573H22.4092C22.4824 18.4573 22.5424 18.5173 22.5424 18.5905ZM33.971 42.6553C33.971 43.4917 33.2908 44.1717 32.4546 44.1717H14.0584C13.2223 44.1717 12.5423 43.4915 12.5423 42.6553V39.1676H33.971V42.6553ZM34.6853 12.0287C31.9285 12.0287 29.6853 9.78549 29.6853 7.0287C29.6853 4.2719 31.9285 2.02867 34.6853 2.02867C37.4421 2.02867 39.6853 4.2719 39.6853 7.0287C39.6853 9.78549 37.4421 12.0287 34.6853 12.0287Z"
                          fill="currentColor"
                        />
                        <path
                          d="M36.2357 4.48974L33.862 8.05065L33.0493 7.23797C32.7704 6.95904 32.3182 6.95904 32.0393 7.23797C31.7603 7.5169 31.7603 7.96904 32.0393 8.24797L33.4679 9.67655C33.6025 9.81137 33.7845 9.88601 33.9729 9.88601C33.9959 9.88601 34.0196 9.88459 34.0434 9.88244C34.2561 9.86155 34.4487 9.74566 34.5673 9.5678L37.4245 5.28207C37.6436 4.95349 37.5548 4.51064 37.2264 4.29153C36.8963 4.0726 36.4541 4.16117 36.2357 4.48974Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.25726 10.6001C8.65172 10.6001 8.97155 10.2807 8.97155 9.88583V6.31439C8.97155 5.91956 8.65172 5.6001 8.25726 5.6001C7.86279 5.6001 7.54297 5.91956 7.54297 6.31439V9.88583C7.54297 10.2807 7.86279 10.6001 8.25726 10.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.40041 13.4572C5.40041 13.0624 5.08059 12.7429 4.68612 12.7429H1.11468C0.720213 12.7429 0.400391 13.0624 0.400391 13.4572C0.400391 13.852 0.720213 14.1715 1.11468 14.1715H4.68612C5.08059 14.1715 5.40041 13.852 5.40041 13.4572Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.94167 11.0508C5.08114 11.1903 5.264 11.2601 5.44668 11.2601C5.62936 11.2601 5.81221 11.1903 5.95168 11.0508C6.23061 10.7719 6.23061 10.3197 5.95168 10.0408L3.41256 7.50168C3.13363 7.22275 2.68149 7.22275 2.40256 7.50168C2.12363 7.78061 2.12363 8.23275 2.40256 8.51168L4.94167 11.0508Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Mobile App Design
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_460_34699)">
                          <path
                            d="M44.6089 32.7411L39.9964 30.4348L37.0608 22.7989C37.0263 22.7086 36.9735 22.6264 36.9057 22.5575C36.838 22.4885 36.7567 22.4343 36.6671 22.3981L18.4526 15.1172C18.3253 15.0665 18.1859 15.0542 18.0516 15.0817C17.9173 15.1091 17.7939 15.1753 17.6968 15.2719L15.2675 17.7012C15.1721 17.7985 15.107 17.9214 15.0802 18.055C15.0533 18.1885 15.0659 18.327 15.1163 18.4536L22.3971 36.668C22.4333 36.7577 22.4875 36.8389 22.5565 36.9067C22.6255 36.9744 22.7076 37.0272 22.7979 37.0618L30.4339 39.9973L32.7401 44.6098C32.7887 44.7115 32.861 44.8001 32.9509 44.868C33.0409 44.9359 33.1458 44.9812 33.2569 45.0001C33.2943 45.0035 33.332 45.0035 33.3694 45.0001C33.5556 44.9993 33.7339 44.9247 33.8651 44.7926L44.7917 33.8661C44.8721 33.7885 44.9329 33.6928 44.9689 33.5871C45.005 33.4813 45.0153 33.3684 44.9991 33.2579C44.9802 33.1468 44.9349 33.0418 44.867 32.9519C44.7991 32.8619 44.7106 32.7896 44.6089 32.7411ZM16.5893 18.3622L16.9796 17.9755L26.0464 27.0422C25.4488 27.889 25.1908 28.9291 25.3232 29.9569C25.4556 30.9847 25.9689 31.9254 26.7615 32.593C27.5542 33.2606 28.5685 33.6065 29.6038 33.5622C30.6392 33.518 31.6203 33.0868 32.3531 32.354C33.0859 31.6213 33.517 30.6402 33.5613 29.6048C33.6055 28.5694 33.2597 27.5551 32.5921 26.7625C31.9245 25.9699 30.9837 25.4566 29.9559 25.3241C28.9281 25.1917 27.888 25.4498 27.0413 26.0473L17.9745 16.9805L18.3612 16.5903L35.8585 23.5899L38.6182 30.7688L30.7678 38.6192L23.5889 35.8594L16.5893 18.3622ZM29.4249 26.6942C30.0568 26.6951 30.6689 26.9151 31.1568 27.3167C31.6447 27.7183 31.9783 28.2767 32.1007 28.8966C32.2231 29.5166 32.1268 30.1598 31.8282 30.7167C31.5296 31.2736 31.0471 31.7098 30.463 31.9509C29.8788 32.192 29.2292 32.2231 28.6247 32.0389C28.0202 31.8547 27.4982 31.4667 27.1478 30.9408C26.7973 30.415 26.64 29.7839 26.7026 29.1551C26.7653 28.5263 27.044 27.9386 27.4913 27.4922C28.0046 26.9805 28.7001 26.6935 29.4249 26.6942ZM33.5628 43.1087L31.805 39.593L39.585 31.8129L43.1007 33.5708L33.5628 43.1087Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.4479 37.6169C13.3134 37.4898 13.1354 37.419 12.9504 37.419C12.7654 37.419 12.5874 37.4898 12.453 37.6169L11.56 38.5098C9.17705 35.2756 7.86245 31.3786 7.79943 27.3618C7.73641 23.345 8.92811 19.4086 11.2084 16.1012C11.8916 16.4772 12.6783 16.6216 13.4504 16.5128C14.2226 16.4041 14.9387 16.048 15.4915 15.498C16.0443 14.948 16.4039 14.2337 16.5166 13.4621C16.6292 12.6904 16.4887 11.9031 16.1163 11.218C19.4236 8.9377 23.36 7.746 27.3768 7.80902C31.3936 7.87204 35.2906 9.18664 38.5248 11.5696L37.6178 12.452C37.4871 12.5838 37.4138 12.762 37.4139 12.9477C37.4134 13.0403 37.4311 13.132 37.4661 13.2177C37.5011 13.3033 37.5526 13.3812 37.6178 13.4469L40.7186 16.5231C40.8503 16.6541 41.0285 16.7276 41.2143 16.7276C41.4001 16.7276 41.5783 16.6541 41.71 16.5231L44.7932 13.4399C44.8586 13.3746 44.9104 13.2971 44.9458 13.2117C44.9812 13.1263 44.9994 13.0349 44.9994 12.9425C44.9994 12.85 44.9812 12.7586 44.9458 12.6732C44.9104 12.5878 44.8586 12.5103 44.7932 12.445L41.71 9.36179C41.5783 9.23083 41.4001 9.15732 41.2143 9.15732C41.0285 9.15732 40.8503 9.23083 40.7186 9.36179L39.5268 10.5466C36.5895 8.33627 33.1169 6.9476 29.4654 6.52314C25.814 6.09869 22.1154 6.65375 18.7495 8.13132L22.803 4.08835C23.2626 4.30796 23.7851 4.35768 24.2779 4.22866C24.7707 4.09966 25.2018 3.80026 25.4949 3.38361C25.7879 2.96695 25.9239 2.45996 25.8787 1.95259C25.8335 1.44521 25.61 0.970252 25.2479 0.611967C24.8858 0.253682 24.4085 0.0352343 23.9007 -0.00462093C23.3929 -0.0444761 22.8874 0.0968374 22.4738 0.39425C22.0603 0.691662 21.7655 1.12595 21.6416 1.62006C21.5178 2.11417 21.5731 2.63616 21.7975 3.09343L14.9561 9.94538C14.2615 9.47942 13.4266 9.2691 12.5941 9.35033C11.7616 9.43156 10.9832 9.79931 10.3917 10.3908C9.80027 10.9822 9.43252 11.7607 9.35128 12.5932C9.27005 13.4256 9.48038 14.2605 9.94634 14.9551L3.09439 21.7966C2.63532 21.5729 2.11183 21.5192 1.61691 21.645C1.122 21.7708 0.687723 22.0681 0.391257 22.4838C0.0947911 22.8996 -0.0446659 23.4071 -0.0023324 23.916C0.040001 24.4249 0.261383 24.9023 0.622475 25.2634C0.983567 25.6245 1.46098 25.8459 1.96988 25.8882C2.47879 25.9305 2.98622 25.7911 3.40201 25.4946C3.8178 25.1981 4.11502 24.7639 4.24086 24.2689C4.3667 23.774 4.313 23.2505 4.08931 22.7915L8.14282 18.7485C6.66377 22.1136 6.10696 25.8116 6.52956 29.463C6.95216 33.1144 8.33894 36.5876 10.5475 39.5258L9.35923 40.7176C9.22827 40.8494 9.15476 41.0276 9.15476 41.2133C9.15476 41.3991 9.22827 41.5773 9.35923 41.709L12.4424 44.7923C12.5737 44.9243 12.752 44.9989 12.9381 44.9997C13.0309 44.9997 13.1228 44.9815 13.2085 44.9459C13.2942 44.9103 13.3719 44.8581 13.4374 44.7923L16.5241 41.709C16.655 41.5773 16.7285 41.3991 16.7285 41.2133C16.7285 41.0276 16.655 40.8494 16.5241 40.7176L13.4479 37.6169ZM41.2213 10.8454L43.3096 12.9337L41.2213 15.0219L39.133 12.9337L41.2213 10.8454ZM23.2038 1.62741C23.3082 1.52208 23.4417 1.45016 23.5871 1.42077C23.7325 1.39138 23.8834 1.40585 24.0206 1.46235C24.1577 1.51885 24.2751 1.61482 24.3576 1.7381C24.4402 1.86137 24.4842 2.00639 24.4842 2.15476C24.4842 2.30312 24.4402 2.44814 24.3576 2.57142C24.2751 2.69469 24.1577 2.79067 24.0206 2.84717C23.8834 2.90366 23.7325 2.91814 23.5871 2.88875C23.4417 2.85936 23.3082 2.78744 23.2038 2.6821C23.1344 2.61288 23.0795 2.53068 23.0419 2.44019C23.0044 2.3497 22.9851 2.25271 22.9851 2.15476C22.9851 2.0568 23.0044 1.95981 23.0419 1.86932C23.0795 1.77884 23.1344 1.69663 23.2038 1.62741ZM11.3913 11.3903C11.5954 11.1852 11.8381 11.0224 12.1054 10.9113C12.3727 10.8002 12.6592 10.743 12.9487 10.743C13.2381 10.743 13.5247 10.8002 13.792 10.9113C14.0592 11.0224 14.3019 11.1852 14.5061 11.3903C14.8147 11.6984 15.025 12.0912 15.1104 12.5189C15.1957 12.9466 15.1523 13.39 14.9855 13.793C14.8188 14.1959 14.5363 14.5404 14.1737 14.7828C13.8111 15.0252 13.3848 15.1545 12.9487 15.1545C12.5126 15.1545 12.0862 15.0252 11.7237 14.7828C11.3611 14.5404 11.0786 14.1959 10.9118 13.793C10.7451 13.39 10.7017 12.9466 10.787 12.5189C10.8723 12.0912 11.0826 11.6984 11.3913 11.3903ZM2.68657 24.2575C2.54303 24.3772 2.3599 24.4389 2.17318 24.4305C1.98646 24.422 1.80965 24.3441 1.67748 24.2119C1.54532 24.0797 1.46735 23.9029 1.45892 23.7162C1.45048 23.5295 1.51218 23.3463 1.63189 23.2028C1.77258 23.0645 1.96196 22.987 2.15923 22.987C2.3565 22.987 2.54588 23.0645 2.68657 23.2028C2.75588 23.272 2.81086 23.3542 2.84838 23.4447C2.88589 23.5352 2.9052 23.6322 2.9052 23.7301C2.9052 23.8281 2.88589 23.9251 2.84838 24.0156C2.81086 24.1061 2.75588 24.1883 2.68657 24.2575ZM12.9487 43.2876L10.8604 41.1993L12.9487 39.111L15.037 41.1993L12.9487 43.2876Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_460_34699">
                            <rect width="45" height="45" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Product Design
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_460_34707)">
                          <path
                            d="M34.4143 44.1211H10.587C9.12475 44.1211 7.93945 42.9358 7.93945 41.4737V22.0588C7.93945 20.5967 9.12475 19.4114 10.587 19.4114H34.4143C35.8765 19.4114 37.0618 20.5967 37.0618 22.0588V41.4737C37.0618 42.9358 35.8765 44.1211 34.4143 44.1211Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="11.4689"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <circle
                            cx="14.998"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <circle
                            cx="18.5293"
                            cy="22.9414"
                            r="0.878906"
                            fill="currentColor"
                          />
                          <path
                            d="M7.93945 26.4712H37.0618"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.93881 26.2277H7.0563C3.64465 26.2277 0.878906 23.1319 0.878906 19.3151C0.878906 15.8779 3.12047 13.0274 6.05558 12.4934C6.62133 8.8135 9.78231 5.99827 13.5965 5.99827C15.7436 5.99827 17.6833 6.89142 19.0706 8.3272C20.277 4.02943 24.2015 0.878906 28.8592 0.878906C34.4782 0.878906 39.0335 5.46258 39.0335 11.115C39.0335 11.5835 38.999 12.0415 38.9391 12.4916C41.877 13.0256 44.1211 15.876 44.1211 19.3151C44.1211 23.1319 41.3554 26.2277 37.9437 26.2277H37.0612"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.205 30.8838L12.3513 35.2963L17.205 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.7949 30.8838L32.6486 35.2963L27.7949 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.2644 30.8838L20.7344 39.7087"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_460_34707">
                            <rect width="45" height="45" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Web Development
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.0126 14.3109C24.6363 7.87249 18.7912 4.45051 15.7302 6.54721C15.3932 6.78458 15.1003 7.07913 14.8648 7.41754C14.8648 7.44227 7.77856 21.7829 7.77856 21.7829L3.82252 24.4631C3.21521 24.8754 2.69508 25.4033 2.29183 26.0166C1.88858 26.6299 1.61012 27.3167 1.47235 28.0377C1.33458 28.7586 1.34021 29.4997 1.48892 30.2185C1.63762 30.9373 1.92648 31.6197 2.339 32.2269L2.51703 32.489C3.35087 33.7036 4.62996 34.5406 6.07687 34.8183C7.52378 35.096 9.02185 34.7921 10.2461 33.9725L16.6005 43.3335C17.5352 44.4857 19.3302 45.6329 21.5456 44.2829C21.9381 44.0284 22.2729 43.6945 22.5284 43.3027C22.7839 42.9109 22.9545 42.47 23.0291 42.0082C23.1186 41.5489 23.1162 41.0764 23.022 40.6181C22.9278 40.1597 22.7436 39.7246 22.4802 39.3379L16.8824 31.0796C16.8824 31.0796 30.1154 30.0263 30.1648 30.0066C30.578 29.9201 30.9697 29.752 31.317 29.512C32.8896 28.4439 33.4533 26.2038 32.9093 23.2022C32.4198 20.4379 31.0302 17.3077 29.0126 14.3109ZM3.95604 31.5148L3.77802 31.2527C3.4934 30.8337 3.29421 30.3627 3.19186 29.8666C3.08951 29.3705 3.08601 28.8591 3.18154 28.3616C3.27708 27.8642 3.46979 27.3905 3.74864 26.9676C4.02748 26.5447 4.38699 26.181 4.80659 25.8972L8.22362 23.573L12.7335 30.2142L9.31648 32.5384C8.89737 32.8234 8.4262 33.023 7.92992 33.1258C7.43363 33.2286 6.92195 33.2326 6.42412 33.1375C5.92629 33.0424 5.45208 32.8502 5.02859 32.5718C4.60511 32.2933 4.24064 31.9342 3.95604 31.5148ZM21.056 40.312C21.3263 40.7142 21.426 41.2071 21.3333 41.6827C21.2406 42.1583 20.9631 42.5777 20.5615 42.8489C20.1586 43.1194 19.6649 43.2192 19.1885 43.1266C18.7121 43.0339 18.2919 42.7562 18.0198 42.3544L11.6852 33.023L14.2319 31.2923L14.9044 31.2379L21.056 40.312ZM14.3703 29.5417L9.45494 22.3022L14.1429 12.7434C14.5978 15.4285 15.928 18.6181 18.0544 21.7483C20.1808 24.8785 22.6533 27.2917 24.9775 28.706L14.3703 29.5417ZM28.9582 28.3895C26.5945 28.2362 22.7472 25.5708 19.4885 20.7692C16.2297 15.9675 15.1714 11.423 15.8983 9.16315C16.0296 8.73895 16.2916 8.36709 16.6468 8.10067C17.002 7.83424 17.4324 7.68688 17.8764 7.67963C20.2203 7.67963 24.211 10.3598 27.5637 15.3C29.4527 18.0791 30.8275 20.9868 31.2033 23.5285C31.9401 28.3895 28.9582 28.3895 28.9582 28.3895Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22.8309 14.4938C22.2252 14.3748 21.6018 14.3778 20.9973 14.5026C20.3927 14.6275 19.8191 14.8716 19.31 15.2207C19.2162 15.2856 19.1361 15.3684 19.0742 15.4643C19.0124 15.5602 18.97 15.6674 18.9496 15.7796C18.9292 15.8919 18.931 16.0071 18.9551 16.1187C18.9792 16.2302 19.025 16.3359 19.09 16.4298C19.1549 16.5236 19.2377 16.6037 19.3336 16.6656C19.4295 16.7274 19.5367 16.7698 19.6489 16.7902C19.7612 16.8106 19.8764 16.8087 19.9879 16.7847C20.0995 16.7606 20.2052 16.7147 20.299 16.6498C20.6215 16.431 20.9838 16.2778 21.3655 16.199C21.7471 16.1202 22.1405 16.1173 22.5232 16.1905C22.906 16.2638 23.2705 16.4117 23.5961 16.6258C23.9217 16.84 24.2019 17.1161 24.4207 17.4385C24.6396 17.761 24.7928 18.1233 24.8716 18.505C24.9504 18.8866 24.9532 19.28 24.88 19.6627C24.8068 20.0455 24.6589 20.41 24.4447 20.7356C24.2306 21.0612 23.9544 21.3414 23.632 21.5602C23.48 21.6652 23.3655 21.8161 23.3054 21.9908C23.2453 22.1655 23.2427 22.3549 23.298 22.5312C23.3533 22.7075 23.4635 22.8615 23.6126 22.9706C23.7617 23.0798 23.9418 23.1383 24.1265 23.1377C24.3028 23.141 24.4757 23.0892 24.621 22.9894C25.3902 22.4683 25.9874 21.7307 26.337 20.87C26.6866 20.0093 26.7728 19.0642 26.5848 18.1544C26.3968 17.2446 25.943 16.4111 25.2809 15.7594C24.6188 15.1078 23.7782 14.6673 22.8655 14.4938H22.8309Z"
                          fill="currentColor"
                        />
                        <path
                          d="M30.0808 8.29284H30.1649C30.3789 8.29275 30.5853 8.21334 30.7442 8.06995C30.9032 7.92656 31.0033 7.72937 31.0253 7.51646L31.6929 1.02855C31.7081 0.913827 31.7001 0.797221 31.6694 0.685633C31.6388 0.574045 31.586 0.469741 31.5144 0.378892C31.4427 0.288042 31.3535 0.212494 31.2521 0.156715C31.1507 0.100937 31.0391 0.0660623 30.924 0.0541542C30.8089 0.0422462 30.6926 0.053547 30.5819 0.0873878C30.4713 0.121229 30.3685 0.176922 30.2797 0.251173C30.191 0.325424 30.118 0.416725 30.0652 0.519673C30.0123 0.62262 29.9806 0.735124 29.972 0.850528L29.3094 7.34339C29.2859 7.57157 29.3539 7.79975 29.4986 7.97779C29.6432 8.15582 29.8526 8.26914 30.0808 8.29284Z"
                          fill="currentColor"
                        />
                        <path
                          d="M41.2665 6.95757C41.1395 6.76604 40.9418 6.63254 40.7167 6.58622C40.4915 6.5399 40.2572 6.58451 40.0649 6.71032L34.0369 10.6664C33.8803 10.7697 33.7616 10.9211 33.6986 11.0978C33.6356 11.2745 33.6317 11.4668 33.6875 11.6459C33.7433 11.825 33.8557 11.9811 34.0079 12.0907C34.1601 12.2004 34.3438 12.2576 34.5314 12.2537C34.7063 12.2578 34.8785 12.2095 35.0259 12.1153L41.0539 8.15922C41.2409 8.02765 41.3682 7.82741 41.4081 7.60226C41.4479 7.3771 41.397 7.14533 41.2665 6.95757Z"
                          fill="currentColor"
                        />
                        <path
                          d="M43.1102 17.5203L36.0981 16.2593C35.8719 16.2186 35.6388 16.2695 35.45 16.4007C35.2613 16.5319 35.1325 16.7328 35.0918 16.959C35.0511 17.1852 35.102 17.4184 35.2332 17.6071C35.3645 17.7958 35.5653 17.9247 35.7915 17.9653L42.7987 19.2263H42.952C43.1725 19.2328 43.3871 19.1548 43.552 19.0082C43.7169 18.8617 43.8196 18.6578 43.8392 18.4381C43.8588 18.2184 43.7937 17.9995 43.6573 17.8261C43.5209 17.6528 43.3234 17.5381 43.1053 17.5054L43.1102 17.5203Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Digital Marketing
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
              <SwiperSlide>
                <div className="h10-service-card border border-white/10 rounded-[10px] relative group common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-caribbean-green before:absolute before:bottom-0 before:right-0 before:shadow-cari-green before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-caribbean-green after:absolute after:top-0 after:left-0 after:shadow-cari-green after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear aos-init aos-animate">
                  <div className="p-10 bg-[#1D1D1D] rounded-[10px] relative z-10 m-[1px]">
                    <span className="text-white transition-all duration-300 group-hover:text-caribbean-green">
                      <svg
                        width="42"
                        height="46"
                        viewBox="0 0 42 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.901 43.4574C23.8872 43.4574 24.6867 42.6579 24.6867 41.6717C24.6867 40.6855 23.8872 39.886 22.901 39.886C21.9147 39.886 21.1152 40.6855 21.1152 41.6717C21.1152 42.6579 21.9147 43.4574 22.901 43.4574Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.757 11.3143C16.3487 11.3143 16.8284 10.8346 16.8284 10.2428C16.8284 9.65108 16.3487 9.17139 15.757 9.17139C15.1652 9.17139 14.6855 9.65108 14.6855 10.2428C14.6855 10.8346 15.1652 11.3143 15.757 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.6144 11.3143C19.2061 11.3143 19.6858 10.8346 19.6858 10.2428C19.6858 9.65108 19.2061 9.17139 18.6144 9.17139C18.0227 9.17139 17.543 9.65108 17.543 10.2428C17.543 10.8346 18.0227 11.3143 18.6144 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M21.4738 11.3143C22.0655 11.3143 22.5452 10.8346 22.5452 10.2428C22.5452 9.65108 22.0655 9.17139 21.4738 9.17139C20.882 9.17139 20.4023 9.65108 20.4023 10.2428C20.4023 10.8346 20.882 11.3143 21.4738 11.3143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.68569 26.3145H5.39996C5.00549 26.3145 4.68567 26.6339 4.68567 27.0287C4.68567 27.4236 5.00549 27.743 5.39996 27.743H9.68569C10.0802 27.743 10.4 27.4236 10.4 27.0287C10.4 26.6339 10.0802 26.3145 9.68569 26.3145Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.9724 26.3145H11.8295C11.4351 26.3145 11.1152 26.6339 11.1152 27.0287C11.1152 27.4236 11.4351 27.743 11.8295 27.743H13.9724C14.3669 27.743 14.6867 27.4236 14.6867 27.0287C14.6867 26.6339 14.3669 26.3145 13.9724 26.3145Z"
                          fill="currentColor"
                        />
                        <path
                          d="M41.1139 7.0287C41.1139 3.48368 38.2303 0.600098 34.6853 0.600098C31.6319 0.600098 29.0742 2.74153 28.4222 5.60012H14.0584C12.4348 5.60012 11.1138 6.92119 11.1138 8.54513V17.0287H3.39015C2.52872 17.0287 1.828 17.7291 1.828 18.5905V29.0384C1.828 29.8999 2.52872 30.6002 3.39015 30.6002H22.4092C23.2706 30.6002 23.9709 29.8999 23.9709 29.0384V18.5905C23.9709 17.7291 23.2706 17.0287 22.4092 17.0287H12.5423V8.54513C12.5423 7.7087 13.2225 7.0287 14.0584 7.0287H28.2567C28.2567 10.3319 30.7613 13.0585 33.971 13.4151V37.7388H12.5423V32.787C12.5423 32.3922 12.2225 32.0727 11.828 32.0727C11.4336 32.0727 11.1138 32.3922 11.1138 32.787V38.4531V42.6551C11.1138 44.279 12.4348 45.6001 14.0584 45.6001H32.4546C34.0785 45.6001 35.3996 44.279 35.3996 42.6551V38.4531V13.4151C38.6092 13.0585 41.1139 10.3319 41.1139 7.0287ZM3.25658 22.0288H22.5424V23.4573H3.25658V22.0288ZM22.4092 29.1716H3.39015C3.31658 29.1716 3.25658 29.1116 3.25658 29.0384V24.8859H22.5424V29.0384C22.5424 29.1116 22.4824 29.1716 22.4092 29.1716ZM22.5424 18.5905V20.6002H3.25658V18.5905C3.25658 18.5173 3.31658 18.4573 3.39015 18.4573H22.4092C22.4824 18.4573 22.5424 18.5173 22.5424 18.5905ZM33.971 42.6553C33.971 43.4917 33.2908 44.1717 32.4546 44.1717H14.0584C13.2223 44.1717 12.5423 43.4915 12.5423 42.6553V39.1676H33.971V42.6553ZM34.6853 12.0287C31.9285 12.0287 29.6853 9.78549 29.6853 7.0287C29.6853 4.2719 31.9285 2.02867 34.6853 2.02867C37.4421 2.02867 39.6853 4.2719 39.6853 7.0287C39.6853 9.78549 37.4421 12.0287 34.6853 12.0287Z"
                          fill="currentColor"
                        />
                        <path
                          d="M36.2357 4.48974L33.862 8.05065L33.0493 7.23797C32.7704 6.95904 32.3182 6.95904 32.0393 7.23797C31.7603 7.5169 31.7603 7.96904 32.0393 8.24797L33.4679 9.67655C33.6025 9.81137 33.7845 9.88601 33.9729 9.88601C33.9959 9.88601 34.0196 9.88459 34.0434 9.88244C34.2561 9.86155 34.4487 9.74566 34.5673 9.5678L37.4245 5.28207C37.6436 4.95349 37.5548 4.51064 37.2264 4.29153C36.8963 4.0726 36.4541 4.16117 36.2357 4.48974Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.25726 10.6001C8.65172 10.6001 8.97155 10.2807 8.97155 9.88583V6.31439C8.97155 5.91956 8.65172 5.6001 8.25726 5.6001C7.86279 5.6001 7.54297 5.91956 7.54297 6.31439V9.88583C7.54297 10.2807 7.86279 10.6001 8.25726 10.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.40041 13.4572C5.40041 13.0624 5.08059 12.7429 4.68612 12.7429H1.11468C0.720213 12.7429 0.400391 13.0624 0.400391 13.4572C0.400391 13.852 0.720213 14.1715 1.11468 14.1715H4.68612C5.08059 14.1715 5.40041 13.852 5.40041 13.4572Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.94167 11.0508C5.08114 11.1903 5.264 11.2601 5.44668 11.2601C5.62936 11.2601 5.81221 11.1903 5.95168 11.0508C6.23061 10.7719 6.23061 10.3197 5.95168 10.0408L3.41256 7.50168C3.13363 7.22275 2.68149 7.22275 2.40256 7.50168C2.12363 7.78061 2.12363 8.23275 2.40256 8.51168L4.94167 11.0508Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h1 className="pt-10 font-semibold text-white text-20">
                      Mobile App Design
                    </h1>
                    <p className="text-dark-silver text-base leading-7 pt-[13px] pb-1">
                      Modern business agencies to customized solutions they
                      tailored specific needs
                    </p>
                    <Link to="/service-details">
                      <div className="flex items-center gap-2 mt-5 text-paragraph group-hover:text-caribbean-green group">
                        <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-caribbean-green before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
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
                            stroke="currentColor"
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
        <div className="relative flex items-center pt-4 mx-auto w-fit">
          <div className="absolute flex justify-between w-full">
            <button className="group h10-service-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-caribbean-green before:bg-caribbean-green relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-caribbean-green group-hover:stroke-main-black"
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="group rotate-180 h10-service-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-caribbean-green before:bg-caribbean-green relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
              <svg
                className="relative z-10 pointer-events-none"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-caribbean-green group-hover:stroke-main-black"
                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="px-10 h10-service-pagination"></div>
        </div>
      </div>
    </section>
  );
}
