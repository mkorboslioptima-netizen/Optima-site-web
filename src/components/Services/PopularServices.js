import React from "react";
import { Link } from "react-router-dom";

export default function PopularServices() {
  return (
    <section
      id="services"
      className="bg-white w-full pb-14 md:pb-[120px] overflow-x-hidden"
    >
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[661px] w-full flex flex-col items-center mx-auto">
          <h1 className="border text-purple border-purple/10 py-0.5 px-5 rounded-[30px] w-fit bg-main-gray">
            Popular Services
          </h1>
          <h2 className="pt-5 font-semibold text-center text-black text-24 sm:text-48">
            High Impact Creative Services to grow your business
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}

          <div
            data-aos="fade-left"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="42"
              height="38"
              viewBox="0 0 42 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9158 1H30.4879C31.6857 1 32.8264 1.5187 33.6222 2.42527L39.3852 8.99044C40.7226 10.514 40.8022 12.785 39.5748 14.4008L24.0462 34.8426C22.3675 37.0524 19.077 37.0525 17.3983 34.8426L1.86966 14.4008C0.642249 12.785 0.721837 10.514 2.05927 8.99044L7.82228 2.42527C8.61809 1.5187 9.75875 1 10.9566 1H16.9946M24.9158 1L29.1094 11.6162M24.9158 1H16.9946M29.1094 11.6162H39.5933M29.1094 11.6162L20.7222 36.0334L12.3351 11.6162M29.1094 11.6162H12.3351M16.9946 1L12.3351 11.6162M1.85114 11.6162H12.3351"
                stroke="#794AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link
              href="/service-details"
              className="pt-6 mb-2 font-semibold text-main-black text-22"
            >
              Modern Website Design
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="35"
              height="38"
              viewBox="0 0 35 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.1834 29.4215L18.544 35.9279C17.6194 36.3388 16.564 36.3388 15.6394 35.9279L1 29.4215M33.1834 20.4816L18.544 26.988C17.6194 27.399 16.564 27.399 15.6394 26.988L1 20.4816M2.41045 11.353L15.4925 17.8941C16.4992 18.3974 17.6842 18.3974 18.6909 17.8941L31.773 11.353C33.0908 10.6941 33.0908 8.81354 31.773 8.15463L18.6909 1.61361C17.6842 1.11024 16.4992 1.11024 15.4925 1.61361L2.41045 8.15463C1.09263 8.81354 1.09263 10.6941 2.41045 11.353Z"
                stroke="#794AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link
              href="/service-details"
              className="mt-6 mb-2 font-semibold text-main-black text-22"
            >
              Design and branding
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="46"
              height="37"
              viewBox="0 0 46 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.75 36L41.4687 32.7187M11.9375 22.875H1M11.9375 11.9375H1M29.4375 1H1M44.75 22.875C44.75 30.1237 38.8737 36 31.625 36C24.3763 36 18.5 30.1237 18.5 22.875C18.5 15.6263 24.3763 9.75 31.625 9.75C38.8737 9.75 44.75 15.6263 44.75 22.875Z"
                stroke="#794AFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <Link
              href="/service-details"
              className="mt-6 mb-2 font-semibold text-main-black text-22"
            >
              Search Engine Optimization
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6163 15.2245C25.3197 12.0148 22.1743 9.75 18.5 9.75C13.6675 9.75 9.75 13.6675 9.75 18.5C9.75 22.1743 12.0148 25.3197 15.2245 26.6163M18.3522 35.9994C8.75528 35.92 1 28.1157 1 18.5C1 8.83502 8.83502 1 18.5 1C28.1157 1 35.92 8.75528 35.9994 18.3522M18.6003 20.9912L23.1724 34.7075C23.7468 36.4308 26.1843 36.4308 26.7588 34.7075L28.4471 29.6426C28.6352 29.0781 29.0781 28.6352 29.6426 28.4471L34.7075 26.7588C36.4308 26.1843 36.4308 23.7468 34.7075 23.1724L20.9912 18.6003C19.5135 18.1077 18.1077 19.5135 18.6003 20.9912Z"
                stroke="#794AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link
              href="/service-details"
              className="mt-6 mb-2 font-semibold text-main-black text-22"
            >
              Digital Marketing Solutions
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 9.75H27.25M9.75 18.5H18.5M25.5 27.25L30.75 36M11.5 27.25L6.25 36M18.5 27.25V32.5M30.75 1L6.25 1C3.35051 1 1 3.3505 1 6.25L1 22C1 24.8995 3.3505 27.25 6.25 27.25L30.75 27.25C33.6495 27.25 36 24.8995 36 22L36 6.25C36 3.35051 33.6495 1 30.75 1Z"
                stroke="#794AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link
              href="/service-details"
              className="mt-6 mb-2 font-semibold text-main-black text-22"
            >
              CISO
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow"
          >
            <svg
              className="mb-6"
              width="27"
              height="37"
              viewBox="0 0 27 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.25 15C15.183 15 16.75 16.567 16.75 18.5C16.75 20.433 15.183 22 13.25 22C11.317 22 9.75 20.433 9.75 18.5C9.75 16.567 11.317 15 13.25 15ZM13.25 15V1M4.5 29H22C23.933 29 25.5 30.567 25.5 32.5C25.5 34.433 23.933 36 22 36H4.5C2.567 36 1 34.433 1 32.5C1 30.567 2.567 29 4.5 29ZM4.48595 29H22.014L25.0136 19.6757C25.8832 17.4799 25.5751 15.033 24.1833 13.0806L14.9158 1.82944C14.1274 0.723521 12.3726 0.723521 11.5842 1.82944L2.31667 13.0806C0.924881 15.033 0.616844 17.4799 1.48641 19.6757L4.48595 29Z"
                stroke="#794AFF"
                strokeWidth="2"
              />
            </svg>

            <Link
              href="/service-details"
              className="mt-6 mb-2 font-semibold text-main-black text-22"
            >
              Graphic & motion design
            </Link>
            <p className="text-paragraph mt-1.5">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
