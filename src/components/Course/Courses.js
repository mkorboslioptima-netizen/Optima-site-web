import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-[70px] sm:py-[130px] w-full bg-orange/10"
    >
      <div className="w-full mx-auto theme-container">
        <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto">
          Popular Courses
        </h1>
        <h2 className="max-w-[623px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
          Browse our Courses that are just right for you
        </h2>
        {/* <!-- content  --> */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] my-[70px]">
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-1.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                Digital marketing course gives you modern skills
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-2.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                Programming language helps to solve problems logically
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-3.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                Professional Basic to advance web design course
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-4.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                Complete A to Z photography and video editing courses
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-5.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                How to improve your tech business and build modern IT agency
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
            <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
              <img
                src="/assets/images/home-six/course-6.png"
                alt=""
                className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
              />
              <a
                href="#"
                className="font-semibold text-white px-2.5 rounded-[30px] bg-orange text-[13px] tracking-tight leading-[22px] absolute bottom-2.5 right-2.5 z-20"
              >
                Beginner
              </a>
            </div>
            <div className="flex gap-1.5 items-center px-5 mt-5">
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
              <h1 className="font-medium text-main-black">(20)</h1>
            </div>
            <h3 className="pt-1 pb-5 mx-5 font-semibold text-black border-b case_card_title text-20 border-green-dark/10">
              <Link href="/project-details" className="font-inter">
                How to maintain and Enjoy your Health medical life
              </Link>
            </h3>
            <div className="flex items-center justify-between mx-5 mt-6 mb-3">
              <p className="text-paragraph">
                Price
                <span className="font-semibold font-inter text-20 text-main-black">
                  $28
                </span>
              </p>
              <Link href="/course-details">
                <div className="flex items-center gap-2 group">
                  <p className="group/btn mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-orange before:font-medium before:text-orange before:leading-5 before:font-inter before:border-b before:content-['Course_Details'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                    Course Details
                  </p>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 delay-300 stroke-paragraph group-hover/btn:stroke-orange"
                      d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- single card end  --> */}
        </div>
        <Link href="/blogs">
          <div className="mx-auto transition-all duration-500 home-two-btn-white-rev group border-orange before:bg-orange after:bg-orange hover:border-orange w-fit">
            <span className="text-base group-hover:text-white text-main-black transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
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
                className="transition-all duration-300 group-hover:stroke-white stroke-main-black"
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
    </section>
  );
}
