import React from "react";

export default function RelatedServices() {
  return (
    <section className="bg-white w-full pb-14 pt-16 md:pt-[100px] md:pb-[120px]">
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[661px] w-full flex flex-col items-center mx-auto">
          <h2 className="pt-5 font-semibold text-center text-black text-24 sm:text-48">
            Related Services
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white border cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow border-purple/10 hover:border-white"
          >
            <svg
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

            <h1 className="mt-6 mb-2 font-semibold text-main-black text-22">
              Modern Website Design
            </h1>
            <p className="text-paragraph">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white border cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow border-purple/10 hover:border-white"
          >
            <svg
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
            <h1 className="mt-6 mb-2 font-semibold text-main-black text-22">
              Design and branding
            </h1>
            <p className="text-paragraph">
              This involves optimizing elements as website such meta headers
              content internal
            </p>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-4 px-5 pt-5 pb-4 transition-all duration-300 bg-white border cursor-pointer md:px-10 md:pt-10 md:pb-8 rounded-3xl h3_service_card_shadow border-purple/10 hover:border-white"
          >
            <svg
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

            <h1 className="mt-6 mb-2 font-semibold text-main-black text-22">
              Search Engine Optimization
            </h1>
            <p className="text-paragraph">
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
