import React from "react";
import WinGridDark from "./WinGridDark";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function HeroTen() {
  return (
    <section
      id="banner"
      className="relative flex justify-center w-full py-3 pt-24 overflow-hidden bg-main-black"
    >
      <WinGridDark />
      <div className="w-full max-w-[1386px] mx-auto relative z-10 pointer-events-none">
        <h1 className="text-34 md:text-48 tracking xl:text-[249px] font-bold text-white tracking-tight xl:leading-[249px] w-full text-center pointer-events-none">
          Norman <br /> C. Robinson
        </h1>
        <div className="w-full flex flex-col lg:flex-wrap lg:flex-row gap-4 justify-between relative mt-[70px]">
          <div className="relative z-10 overflow-hidden h-fit rounded-xl">
            <img
              src="/assets/images/home-ten/counter-bg.png"
              alt=""
              className="absolute top-0 h-full"
            />
            <div className="px-[60px] bg-main-black">
              <div className="border-b border-white/10 py-[30px]">
                <h1 className="font-semibold text-white text-48">
                  <CountUp start={0} end={200} />+
                </h1>

                <p className="text-paragraph pt-0.5">Clients Satisfaits</p>
              </div>
              <div className="border-b border-white/10 py-[30px]">
                <h1 className="font-semibold text-white text-48">
                  <CountUp start={0} end={99} /> %
                </h1>

                <p className="text-paragraph pt-0.5">Clients Satisfactions</p>
              </div>
              <div className="py-[30px]">
                <h1 className="font-semibold text-white text-48">
                  <CountUp start={0} end={13} /> +
                </h1>

                <p className="text-paragraph pt-0.5">Years of Experience</p>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/home-ten/hero_img.png"
            alt=""
            className="relative z-10 h-auto max-w-full pointer-events-none"
          />
          <img
            src="/assets/images/home-ten/hero_shadow.svg"
            alt=""
            className="absolute bottom-0 z-0 lighting-hue"
          />
          <div className="relative z-10 flex flex-col justify-center">
            <div className="relative flex items-center justify-center w-fit">
              <img
                src="/assets/images/home-ten/circle-text.png"
                alt=""
                className="rotating_text"
              />
              <svg
                className="absolute"
                width="43"
                height="44"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5456 6.30021C20.6213 6.11444 20.7502 5.95553 20.9159 5.84369C21.0816 5.73184 21.2767 5.67212 21.4762 5.67212C21.6758 5.67212 21.8708 5.73184 22.0365 5.84369C22.2023 5.95553 22.3312 6.11444 22.4069 6.30021L26.2099 15.5031C26.2811 15.6753 26.3982 15.8244 26.5481 15.934C26.6981 16.0436 26.8753 16.1094 27.06 16.1243L36.9355 16.9201C37.8286 16.9921 38.1901 18.1139 37.51 18.6991L29.9862 25.1849C29.8456 25.3058 29.7408 25.4634 29.6834 25.6403C29.6259 25.8172 29.618 26.0066 29.6604 26.1878L31.9602 35.884C32.0064 36.0785 31.9943 36.2825 31.9254 36.4701C31.8565 36.6577 31.7338 36.8205 31.573 36.9381C31.4121 37.0556 31.2202 37.1225 31.0216 37.1304C30.8229 37.1383 30.6264 37.0868 30.4569 36.9824L22.0006 31.7876C21.8426 31.6908 21.6612 31.6395 21.4762 31.6395C21.2912 31.6395 21.1098 31.6908 20.9518 31.7876L12.4956 36.9842C12.326 37.0886 12.1295 37.1401 11.9309 37.1322C11.7322 37.1243 11.5404 37.0574 11.3795 36.9399C11.2186 36.8223 11.096 36.6595 11.0271 36.4719C10.9582 36.2843 10.946 36.0803 10.9923 35.8858L13.292 26.1878C13.3347 26.0066 13.3268 25.8172 13.2694 25.6402C13.2119 25.4633 13.107 25.3057 12.9663 25.1849L5.44246 18.6991C5.29179 18.5688 5.1828 18.3965 5.12917 18.204C5.07555 18.0115 5.07971 17.8073 5.14111 17.6172C5.20251 17.4271 5.31841 17.2595 5.47425 17.1354C5.63009 17.0114 5.81891 16.9365 6.01695 16.9201L15.8924 16.1243C16.0772 16.1094 16.2543 16.0436 16.4043 15.934C16.5543 15.8244 16.6713 15.6753 16.7425 15.5031L20.5456 6.30021Z"
                  fill="#00DF8E"
                />
              </svg>
            </div>
            <p className="max-w-[261px] mt-8 text-white mb-12">
              Welcome Lumina Learning Institute where education meets
              innovation. Our institute is dedicated providing high-quality
              online learning
            </p>
            <Link to="/services" className="pointer-events-auto">
              <div className="home-two-btn-bg group bg-caribbean-green border-caribbean-green hover:border-white py-[15px] w-fit">
                <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
                  Contact Me
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
                    className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <h1 className="mt-10 mb-3.5 text-white text-sm font-medium">
              5m+ Global Clients
            </h1>
            <img
              src="/assets/images/home-ten/hero_client.png"
              alt=""
              className="w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
