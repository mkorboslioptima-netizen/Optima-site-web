import React from "react";

import CountUp from "react-countup";

export default function FunFactCounter() {
  return (
    <section className="pt-7 sm:pt-[50px]">
      <div className="w-full mx-auto theme-container">
        <div
          data-aos="fade-up"
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-[30px] h3-about-card relative overflow-hidden w-full pt-10 md:pt-20"
        >
          {/* <!-- card start  --> */}

          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-blue-sass/5 border-blue-sass/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0">
              <img src="/assets/images/home-eight/dot-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={200} />
                +
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Clients Satisfaits
              </p>
            </div>
          </div>

          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}

          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-blue-sass/5 border-blue-sass/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0">
              <img src="/assets/images/home-eight/dot-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={10} /> +
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Taux de Satisfaction
              </p>
            </div>
          </div>

          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}

          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-blue-sass/5 border-blue-sass/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0">
              <img src="/assets/images/home-eight/dot-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={28} /> K+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Satisfied Customers
              </p>
            </div>
          </div>

          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}

          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-blue-sass/5 border-blue-sass/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0">
              <img src="/assets/images/home-eight/dot-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={50} />+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Expert Team Members
              </p>
            </div>
          </div>

          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
