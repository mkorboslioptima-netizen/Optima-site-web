import React from 'react'

export default function FeatureTwo() {
  return (
    <section id="features">
      <div className="feature-section-wrapper w-full py-16 md:py-[130px] mt-8 md:mt-[130px] relative overflow-x-hidden">
        <div className="mx-auto theme-container">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-[140px] items-center">
            <div className="w-full">
              <div className="mb-5 section-title-top-tag-two">
                <span>Our Cool Features</span>
              </div>
              <div className="mb-[50px]">
                <h2 className="font-semibold text-white text-24 sm:text-48">
                  Faster, Smarter, Start <br />
                  to use in few seconds
                </h2>
              </div>
              <div className="w-full">
                <div data-aos="fade-up" className="feature-item-h-4">
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                      <img
                        src="/assets/images/home-four/feature-ico-1.webp"
                        alt=""
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Unified Design Language
                      </h3>
                      <p className="text-white opacity-50">
                        Unified Design Language (UDL) is the cornerstone of
                        harmonious and intuitive design philosophy
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="feature-item-h-4"
                >
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                      <img
                        src="/assets/images/home-four/feature-ico-2.webp"
                        alt=""
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Effortless Collaboration
                      </h3>
                      <p className="text-white opacity-50">
                        Unified Design Language (UDL) is the cornerstone of
                        harmonious and intuitive design philosophy
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="feature-item-h-4"
                >
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                      <img
                        src="/assets/images/home-four/feature-ico-3.webp"
                        alt=""
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Customizable Workflows
                      </h3>
                      <p className="text-white opacity-50">
                        Unified Design Language (UDL) is the cornerstone of
                        harmonious and intuitive design philosophy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="w-full">
              <div className="px-5 py-4 md:px-[74px] md:py-[67px] rounded-[20px] border border-[#231b2f] bg-[#0C022C]">
                <img
                  src="/assets/images/home-four/features-thumb.webp"
                  alt=""
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 shape-1 left-40 top-96">
          <img src="/assets/images/home-four/shape-1.webp" alt="" />
        </div>
        <div className="absolute z-10 shape-2 right-96 top-96">
          <img src="/assets/images/home-four/shape-2.webp" alt="" />
        </div>
        <div className="shape-3 absolute left-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-3.webp" alt="" />
        </div>
        <div className="shape-4 absolute right-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-4.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
