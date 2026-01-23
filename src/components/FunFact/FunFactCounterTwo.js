import React from "react";
import CountUp from "react-countup";

export default function FunFactCounterTwo() {
  return (
    <section className="w-full pb-16 md:pb-[130px]">
      <div className="mx-auto theme-container">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-[30px] h3-about-card relative overflow-hidden w-full">
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group"
          >
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
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
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group"
          >
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={10} />+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Taux de Satisfaction
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group"
          >
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1
                className="text-48 text-main-black font-semibold pb-[18px]"
                data-scroll-qs="scroll"
                data-count-qs="28"
                data-type-qs="K+"
                data-speed-qs="1000"
              >
                15+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Années d'Expérience
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group"
          >
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1
                className="text-48 text-main-black font-semibold pb-[18px]"
                data-scroll-qs="scroll"
                data-count-qs="50"
                data-type-qs="+"
                data-speed-qs="200"
              >
                50+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Expert Team Member
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
