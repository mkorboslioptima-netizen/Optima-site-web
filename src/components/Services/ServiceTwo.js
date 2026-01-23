import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ServiceTwo() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".h2-case-study-next",
      prevEl: ".h2-case-study-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section
      id="services"
      className="w-full py-16 md:py-[130px] -top-2/4 bg-black-seo relative overflow-hidden"
    >
      <div>
        <img
          src="./assets/images/home-two/shape-1.svg"
          alt="bg-shape"
          className="absolute bottom-20 moving-anim tran"
        />
      </div>
      {/* <!-- animated circle bg  --> */}
      <div className="absolute z-0 flex items-center justify-center w-2 h-2 -top-1 -left-1">
        <div className="animated_circle bg-white/5"></div>
        <div className="animated_circle2 bg-white/5"></div>
        <div className="animated_circle3 bg-white/5"></div>
        <div className="animated_circle4 bg-white/5"></div>
      </div>
      {/* <!-- animated circle bg  --> */}

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full gap-5">
          <p className="px-5 py-1 text-white rounded-[30px] bg-blue-seo font-medium">
            Explore Services
          </p>
          <h1 className="text-white text-24 md:text-48 font-semibold max-w-[684px] w-full text-center">
            Advanced SEO services to help your business grow
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-7 md:mt-[70px]">
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-white/10"></div>
              <div className="animated_circle_sm2 bg-white/10"></div>
              <div className="animated_circle_sm3 bg-white/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.292 41.6126L54.5766 46.8972C56.6972 49.0177 56.6972 52.4558 54.5766 54.5763C52.4561 56.6969 49.018 56.6969 46.8975 54.5763L41.6128 49.2918M1.16699 24.5417C1.16699 11.6321 11.6323 1.16675 24.542 1.16675C37.4516 1.16675 47.917 11.6321 47.917 24.5417C47.917 37.4514 37.4516 47.9167 24.542 47.9167C11.6323 47.9167 1.16699 37.4514 1.16699 24.5417Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold text-white text-22">
                Keyword Research
              </h1>
              <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                They identify relevant keywords and phrases that potential
                customers use search for products, services, or information
                related to their' businesses.
              </p>
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
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="100"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-white/10"></div>
              <div className="animated_circle_sm2 bg-white/10"></div>
              <div className="animated_circle_sm3 bg-white/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.25 15.25H42.75M15.25 29H29M40 42.75L48.25 56.5M18 42.75L9.75 56.5M29 42.75V51M48.25 1.5L9.75 1.5C5.19365 1.5 1.5 5.19365 1.5 9.75L1.5 34.5C1.5 39.0563 5.19365 42.75 9.75 42.75L48.25 42.75C52.8063 42.75 56.5 39.0563 56.5 34.5L56.5 9.75C56.5 5.19366 52.8064 1.5 48.25 1.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold text-white text-22">
                Website Optimization
              </h1>
              <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                This involves optimizing various elements to website itself,
                such as meta tags, headers, content, an internal linking
                structure to make them more search
              </p>
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
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="200"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-white/10"></div>
              <div className="animated_circle_sm2 bg-white/10"></div>
              <div className="animated_circle_sm3 bg-white/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.833 51.0001V41.8334H50.9997"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.16602 14.3331L14.3327 14.3331L14.3327 5.16644"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.958 21.2081L21.208 34.9582"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23.5 14.3333L33.0074 4.82589C35.3505 2.48275 39.1495 2.48275 41.4926 4.82589L51.3407 14.674C53.6839 17.0171 53.6839 20.8161 51.3407 23.1593L41.8333 32.6667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M32.6661 41.8332L23.1587 51.3406C20.8155 53.6838 17.0165 53.6838 14.6734 51.3406L4.82528 41.4925C2.48213 39.1494 2.48213 35.3504 4.82528 33.0072L14.3327 23.4998"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="font-semibold text-white text-22">
                Link Building
              </h1>
              <p className="mt-4 transition-all duration-300 group-hover:text-white text-white/50">
                They identify relevant keywords and phrases that potential
                customers use search for products, services, or information
                related to their' businesses.
              </p>
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
          {/* <!-- single card end --> */}
          {/* <!-- single card start --> */}
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-delay="300"
            className="col-span-1 p-5 md:p-[50px] rounded-3xl flex flex-col md:flex-row gap-[50px] relative overflow-hidden group border border-white/5 transition-all duration-300 before:inline-block before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[1000px] before:-right-[1000px] before:transition-all before:duration-1000 hover:before:-bottom-[300px] hover:before:-right-[100px]"
          >
            {/* <!-- animation circle  --> */}
            <div className="absolute z-0 items-center justify-center hidden w-2 h-2 -bottom-1 -right-1 group-hover:flex">
              <div className="animated_circle_sm bg-white/10"></div>
              <div className="animated_circle_sm2 bg-white/10"></div>
              <div className="animated_circle_sm3 bg-white/10"></div>
              <div className="animated_circle_sm4 bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58301 14.3333V2.58325C1.58301 2.03097 2.03072 1.58325 2.58301 1.58325H14.333C14.8853 1.58325 15.333 2.03097 15.333 2.58325V14.3333C15.333 14.8855 14.8853 15.3333 14.333 15.3333H2.58301C2.03072 15.3333 1.58301 14.8855 1.58301 14.3333Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.833 14.3333V2.58325C42.833 2.03097 43.2807 1.58325 43.833 1.58325H55.583C56.1353 1.58325 56.583 2.03097 56.583 2.58325V14.3333C56.583 14.8855 56.1353 15.3333 55.583 15.3333H43.833C43.2807 15.3333 42.833 14.8855 42.833 14.3333Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.833 55.5833V43.8333C42.833 43.281 43.2807 42.8333 43.833 42.8333H55.583C56.1353 42.8333 56.583 43.281 56.583 43.8333V55.5833C56.583 56.1355 56.1353 56.5833 55.583 56.5833H43.833C43.2807 56.5833 42.833 56.1355 42.833 55.5833Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.58301 55.5833V43.8333C1.58301 43.281 2.03072 42.8333 2.58301 42.8333H14.333C14.8853 42.8333 15.333 43.281 15.333 43.8333V55.5833C15.333 56.1355 14.8853 56.5833 14.333 56.5833H2.58301C2.03072 56.5833 1.58301 56.1355 1.58301 55.5833Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.583 31.8335H34.583"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20.833 37.3333L29.083 18.0833L37.333 37.3333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.333 8.45837H42.833M49.708 15.3334V42.8334M42.833 49.7084H15.333M8.45801 42.8334V15.3334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="mt-4 transition-all duration-300 delay-300 group-hover:text-white text-white/50">
                Content Marketing
              </h1>
              <p className="mt-4 text-white">
                Content marketing strategic approach that focuses on creating a
                distributing valuable, relevant, consistent content to attract
                and engage a target audience.
              </p>
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
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- case study start  --> */}
        <div className="pt-16 md:pt-[130px]" id="caseStudies">
          <p className="px-5 py-1 text-white rounded-[30px] bg-blue-seo font-medium w-fit">
            Case Studies
          </p>
          <div className="flex flex-col items-end justify-between w-full mt-5 sm:flex-row">
            <h1 className="max-w-[660px] text-24 sm:text-48 text-white font-semibold">
              Not Convinced? Take a look at some of our case studies
            </h1>
            <div className="flex gap-2.5">
              <button className="h2-case-study-next w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="h2-case-study-prev rotate-180 w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-blue-seo before:bg-blue-seo relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            {...swiperOptions}
            className="mt-10 overflow-hidden swiper case_study_slider md:mt-16"
          >
            <SwiperSlide>
              {" "}
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    SEO Optimization
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    Keywords Research
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve keywords research users
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/2.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    Content Marketing
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    SEO Optimization
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    Keywords Research
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve keywords research users
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/2.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-blue-seo before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-blue-seo group-hover:text-white">
                    Content Marketing
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <Link to="/service-details">
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-paragraph leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#5D51F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <!-- case study end  --> */}
      </div>
    </section>
  );
}
