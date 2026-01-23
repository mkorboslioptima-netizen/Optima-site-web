import React from "react";
import { Link } from "react-router-dom";

export default function HeroSix() {
  return (
    <section
      id="banner"
      className="w-full bg-green-dark pt-[120px] sm:pt-[196px] pb-[120px] relative overflow-hidden"
    >
      {/* <!-- content start --> */}
      <div className="relative z-10 grid w-full grid-cols-6 mx-auto theme-container xl:grid-cols-12">
        <div className="absolute -top-[45px] -left-[145px] moving-h2-hero-main-img w-[293px] aspect-square rounded-full low_white_gradient"></div>
        <div className="col-span-6 my-auto">
          <h1
            className="pr-2 text-4xl font-semibold tracking-tight text-white md:text-65"
            data-depth="-0.28"
          >
            Digital Education to Empowering Minds in Virtual Classroom
          </h1>
          <p className="mt-5 font-medium text-white text-18 font-inter md:mt-5">
            E-learning, also known as electronic learning, revolutionizes
            education by leveraging digital technologies to deliver
            instructional
          </p>
          <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
            <Link to="/course-details">
              <div className="text-white transition-all duration-300 home-two-btn-white before:bg-orange after:bg-orange border-orange hover:border-white group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
                  Explore Courses
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-white stroke-white"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/blogs">
              <div className="transition-all duration-500 home-two-btn-white-rev group before:bg-orange after:bg-orange hover:border-orange">
                <span className="text-base group-hover:text-white text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                  Learn More
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-white stroke-white"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px] mt-3 md:mt-6">
            <div className="py-1.5 flex gap-2.5 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 11.9998V15.9998C18 17.6566 16.6569 18.9998 15 18.9998H9C7.34315 18.9998 6 17.6566 6 15.9998V11.9998M11.1056 5.44699L2 9.99977L11.1056 14.5526C11.6686 14.8341 12.3314 14.8341 12.8944 14.5526L22 9.99977L12.8944 5.44699C12.3314 5.16546 11.6686 5.16546 11.1056 5.44699Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 10V16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-white">Over 15+ million students</p>
            </div>
            <div className="py-1.5 flex gap-2.5 items-center">
              <button className="relative flex items-center justify-center">
                <img
                  src="/assets/images/home-six/videoplay_outer.svg"
                  alt=""
                  className="continuous_rotating"
                />
                <img
                  src="/assets/images/home-six/videoplay_inner.svg"
                  alt=""
                  className="absolute"
                />
              </button>
              <p className="text-white">More than 38,000 courses</p>
            </div>
          </div>
        </div>
        {/* <!-- right element --> */}
        <div className="col-span-6 md:pl-[110px]">
          <div className="relative flex items-end justify-end w-full">
            <div className="absolute top-2.5 left-24 z-0">
              <div className="absolute top-8 left-6">
                <h1 className="font-semibold text-white text-24 sm:text-48">
                  98<span className="text-22">%</span>
                </h1>
                <p className="text-18 font-medium text-white font-inter max-w-[100px]">
                  Student Are happy
                </p>
              </div>

              <img
                src="/assets/images/home-six/square.svg"
                alt=""
                className=""
              />
            </div>
            <div
              data-depth="0.50"
              className="absolute left-0 z-20 layer top-1/3"
            >
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="w-[296px] h-fit flex justify-between p-[7px] pl-5 bg-white rounded-full items-center"
              >
                <span className="text-sm font-medium font-inter text-main-black text-nowrap">
                  Trusted Clients
                </span>
                <img src="/assets/images/home-one-about-group.webp" alt="" />
              </div>
            </div>
            <div
              data-depth="0.50"
              className="absolute z-20 layer sm:left-3/4 top-3/4"
            >
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="w-fit gap-2.5 h-fit flex justify-between p-2.5 pl-5 bg-white rounded-full items-center"
              >
                <span className="text-sm font-medium font-inter text-main-black text-nowrap">
                  25k+ reviews
                </span>
                <div className="flex gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62297 0.889988C6.18625 -0.296661 7.81375 -0.296664 8.37703 0.889986L9.35052 2.94082C9.5742 3.41204 10.0066 3.73866 10.5067 3.81422L12.6835 4.14309C13.9431 4.33337 14.446 5.94268 13.5346 6.86636L11.9594 8.46271C11.5975 8.82951 11.4324 9.35797 11.5178 9.87589L11.8896 12.13C12.1048 13.4342 10.7881 14.4288 9.66157 13.8131L7.71458 12.7488C7.26722 12.5043 6.73278 12.5043 6.28542 12.7488L4.33843 13.8131C3.21187 14.4288 1.8952 13.4342 2.11035 12.13L2.48219 9.8759C2.56763 9.35798 2.40248 8.82951 2.04056 8.46271L0.465413 6.86636C-0.445994 5.94268 0.0569298 4.33337 1.31646 4.14309L3.49326 3.81422C3.99342 3.73866 4.4258 3.41204 4.64948 2.94082L5.62297 0.889988Z"
                      fill="#FF9A1B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62297 0.889988C6.18625 -0.296661 7.81375 -0.296664 8.37703 0.889986L9.35052 2.94082C9.5742 3.41204 10.0066 3.73866 10.5067 3.81422L12.6835 4.14309C13.9431 4.33337 14.446 5.94268 13.5346 6.86636L11.9594 8.46271C11.5975 8.82951 11.4324 9.35797 11.5178 9.87589L11.8896 12.13C12.1048 13.4342 10.7881 14.4288 9.66157 13.8131L7.71458 12.7488C7.26722 12.5043 6.73278 12.5043 6.28542 12.7488L4.33843 13.8131C3.21187 14.4288 1.8952 13.4342 2.11035 12.13L2.48219 9.8759C2.56763 9.35798 2.40248 8.82951 2.04056 8.46271L0.465413 6.86636C-0.445994 5.94268 0.0569298 4.33337 1.31646 4.14309L3.49326 3.81422C3.99342 3.73866 4.4258 3.41204 4.64948 2.94082L5.62297 0.889988Z"
                      fill="#FF9A1B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62297 0.889988C6.18625 -0.296661 7.81375 -0.296664 8.37703 0.889986L9.35052 2.94082C9.5742 3.41204 10.0066 3.73866 10.5067 3.81422L12.6835 4.14309C13.9431 4.33337 14.446 5.94268 13.5346 6.86636L11.9594 8.46271C11.5975 8.82951 11.4324 9.35797 11.5178 9.87589L11.8896 12.13C12.1048 13.4342 10.7881 14.4288 9.66157 13.8131L7.71458 12.7488C7.26722 12.5043 6.73278 12.5043 6.28542 12.7488L4.33843 13.8131C3.21187 14.4288 1.8952 13.4342 2.11035 12.13L2.48219 9.8759C2.56763 9.35798 2.40248 8.82951 2.04056 8.46271L0.465413 6.86636C-0.445994 5.94268 0.0569298 4.33337 1.31646 4.14309L3.49326 3.81422C3.99342 3.73866 4.4258 3.41204 4.64948 2.94082L5.62297 0.889988Z"
                      fill="#FF9A1B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62297 0.889988C6.18625 -0.296661 7.81375 -0.296664 8.37703 0.889986L9.35052 2.94082C9.5742 3.41204 10.0066 3.73866 10.5067 3.81422L12.6835 4.14309C13.9431 4.33337 14.446 5.94268 13.5346 6.86636L11.9594 8.46271C11.5975 8.82951 11.4324 9.35797 11.5178 9.87589L11.8896 12.13C12.1048 13.4342 10.7881 14.4288 9.66157 13.8131L7.71458 12.7488C7.26722 12.5043 6.73278 12.5043 6.28542 12.7488L4.33843 13.8131C3.21187 14.4288 1.8952 13.4342 2.11035 12.13L2.48219 9.8759C2.56763 9.35798 2.40248 8.82951 2.04056 8.46271L0.465413 6.86636C-0.445994 5.94268 0.0569298 4.33337 1.31646 4.14309L3.49326 3.81422C3.99342 3.73866 4.4258 3.41204 4.64948 2.94082L5.62297 0.889988Z"
                      fill="#FF9A1B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62297 0.889988C6.18625 -0.296661 7.81375 -0.296664 8.37703 0.889986L9.35052 2.94082C9.5742 3.41204 10.0066 3.73866 10.5067 3.81422L12.6835 4.14309C13.9431 4.33337 14.446 5.94268 13.5346 6.86636L11.9594 8.46271C11.5975 8.82951 11.4324 9.35797 11.5178 9.87589L11.8896 12.13C12.1048 13.4342 10.7881 14.4288 9.66157 13.8131L7.71458 12.7488C7.26722 12.5043 6.73278 12.5043 6.28542 12.7488L4.33843 13.8131C3.21187 14.4288 1.8952 13.4342 2.11035 12.13L2.48219 9.8759C2.56763 9.35798 2.40248 8.82951 2.04056 8.46271L0.465413 6.86636C-0.445994 5.94268 0.0569298 4.33337 1.31646 4.14309L3.49326 3.81422C3.99342 3.73866 4.4258 3.41204 4.64948 2.94082L5.62297 0.889988Z"
                      fill="#FF9A1B"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                aria-label="play-video"
                className="absolute z-10 flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
              >
                <span className="relative flex items-center justify-center bg-white rounded-full size-10">
                  <span>
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#29AB06"
                      />
                    </svg>
                  </span>
                  <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                  <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                  <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                </span>
              </button>
              <img
                src="/assets/images/home-six/img-2.png"
                alt=""
                className="relative z-0"
              />
            </div>

            <img
              src="/assets/images/home-six/hero_main.png"
              alt=""
              className="py-[50px] relative z-10"
            />
            <img
              src="/assets/images/home-six/circle.png"
              alt=""
              className="absolute top-0 z-0 -right-1/4"
            />
          </div>
        </div>
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
