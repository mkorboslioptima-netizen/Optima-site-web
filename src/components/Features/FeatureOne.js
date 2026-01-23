import React from "react";
import { Link } from "react-router-dom";

export default function FeatureOne() {
  return (
    <section id="features" className="w-full py-16 md:py-32">
      <div className="flex flex-col items-center w-full mx-auto theme-container">
        <div className="py-3 px-7 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
          <h1 className="text-base font-medium leading-5 tracking-tight text-purple">
            The tools you really need
          </h1>
        </div>
        <h1 className="max-w-[813px] font-semibold text-4xl sm:text-48 tracking-tight text-app-dark text-center mt-[18px]">
          We Support Early Stage Startups and Leading Tech Giants.
        </h1>
        <div className="grid gird-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-[30px] mt-8 md:mt-[70px]">
          {/* <!-- single card start  --> */}
          <div data-aos="fade-up" className="col-span-4">
            <div className="p-5 md:p-12 relative overflow-hidden rounded-[20px] border-[1.2px] border-purple/10 h2_features_card_bg cursor-pointer group hover:border-purple transition-all duration-300">
              <img
                src="/assets/images/home-two/feature_card_bg.svg"
                alt=""
                className="absolute bottom-0 right-0 z-0"
              />
              <div className="relative z-10">
                <Link
                  href="/service-details"
                  className="relative overflow-hidden font-semibold border-b border-transparent w-fit text-24 text-app-dark before:block before:w-full before:border-b before:border-app-dark before:absolute before:scale-x-0 group-hover:before:scale-x-100 before:transition-all before:duration-300 before:origin-left before:bottom-0"
                >
                  Online Support
                </Link>
                <p className="mt-4 text-paragraph">
                  Defined by digital dynamism, our digital marketing agency as a
                  beacon
                </p>
                <img
                  src="/assets/images/home-two/features/1.svg"
                  alt="img"
                  className="mt-10 max-w-[310px] w-full object-cover max-h-[300px] overflow-hidden rounded-lg group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div data-aos="fade-up" data-aos-delay="100" className="col-span-4">
            <div className="p-5 md:p-12 relative overflow-hidden rounded-[20px] border-[1.2px] border-purple/10 h2_features_card_bg cursor-pointer group hover:border-purple transition-all duration-300">
              <img
                src="/assets/images/home-two/feature_card_bg.svg"
                alt=""
                className="absolute bottom-0 right-0 z-0"
              />
              <div className="relative z-10">
                <Link
                  href="/service-details"
                  className="relative overflow-hidden font-semibold border-b border-transparent w-fit text-24 text-app-dark before:block before:w-full before:border-b before:border-app-dark before:absolute before:scale-x-0 group-hover:before:scale-x-100 before:transition-all before:duration-300 before:origin-left before:bottom-0"
                >
                  Market Analysis
                </Link>
                <p className="mt-4 text-paragraph">
                  Defined by digital dynamism, our digital marketing agency as a
                  beacon
                </p>
                <img
                  src="/assets/images/home-two/features/2.svg"
                  alt="img"
                  className="mt-10 max-w-[310px] w-full object-cover max-h-[300px] overflow-hidden rounded-lg group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div data-aos="fade-up" data-aos-delay="200" className="col-span-4">
            <div className="p-5 md:p-12 relative overflow-hidden rounded-[20px] border-[1.2px] border-purple/10 h2_features_card_bg cursor-pointer group hover:border-purple transition-all duration-300">
              <img
                src="/assets/images/home-two/feature_card_bg.svg"
                alt=""
                className="absolute bottom-0 right-0 z-0"
              />
              <div className="relative z-10">
                <Link
                  href="/service-details"
                  className="relative overflow-hidden font-semibold border-b border-transparent w-fit text-24 text-app-dark before:block before:w-full before:border-b before:border-app-dark before:absolute before:scale-x-0 group-hover:before:scale-x-100 before:transition-all before:duration-300 before:origin-left before:bottom-0"
                >
                  Annual Reports
                </Link>
                <p className="mt-4 text-paragraph">
                  Defined by digital dynamism, our digital marketing agency as a
                  beacon
                </p>
                <img
                  src="/assets/images/home-two/features/3.svg"
                  alt="img"
                  className="mt-10 max-w-[310px] w-full object-cover max-h-[300px] overflow-hidden rounded-lg group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* <!-- single card end  --> */}
        </div>
      </div>
    </section>
  );
}
