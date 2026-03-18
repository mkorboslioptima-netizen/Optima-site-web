import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/home-five/hero/g.jpg';
export default function AboutFour() {
  return (
    <section id="about">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-10">
          <div className="col-span-6">
            <div className="max-w-[476px]">
              <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium">
                Qui sommes-nous
              </h1>
              <h2 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                20 Ans d'Excellence en Gestion d'Entreprise
              </h2>
              <p className="pt-5 text-paragraph sm:pt-10">
                Partenaire SAGE et HOROQUARTZ depuis 2006. Nous sommes le choix de référence des entreprises tunisiennes pour leurs solutions ERP, GRH et finance.
              </p>
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                 Partenaire officiel SAGE et HOROQUARTZ depuis 18 ans
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                 Centaines de projets réussis : PME, grandes entreprises, secteur public
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black">
                  Solutions 360° : ERP, Paie, GRH, formation et support
                </li>
              </ul>
              <Link to="/services">
                <div className="home-two-btn-bg group bg-buisness-dark-black border-buisness-dark-black py-[15px] w-fit">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-buisness-dark-black font-inter">
                    Nos solutions
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
                      className="transition-all duration-300 group-hover:stroke-buisness-dark-black stroke-white"
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
          </div>
          <div className="relative col-span-6 flex flex-col justify-center items-center">
            <svg
              className="absolute z-0 max-w-full -top-16 hidden sm:block"
              width="465"
              height="465"
              viewBox="0 0 465 465"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="232.5"
                cy="232.5"
                r="231.9"
                stroke="#161519"
                strokeOpacity="0.07"
                strokeWidth="1.2"
              />
            </svg>
            <img
              data-aos="fade-left"
              src={Logo}
              alt=""
              className="relative z-10 w-full max-w-[450px] h-[350px] sm:h-[420px] object-cover rounded-2xl"
            />

            <div className="bg-buisness-red p-[30px] rounded-2xl absolute z-20 bottom-4 sm:bottom-8 w-[250px] sm:w-[295px]">
              <img
                src="./assets/images/home-five/hero/about-card-shape.webp"
                alt=""
                className="absolute right-2 top-bottom-moving"
              />
              <div className="flex items-center gap-2.5">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-8 text-white">Notre expertise</span>
              </div>

              <h1 className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]">
                <CountUp start={0} end={98} /> % Taux de Satisfaction
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
