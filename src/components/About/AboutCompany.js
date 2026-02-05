import React from "react";

export default function AboutCompany() {
  return (
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0 h-fit">
          <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
            <div className="">
              <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
                <h1 className="text-base font-medium leading-5 tracking-tight text-purple">
                  Notre Expertise Paie

                </h1>
              </div>
              <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
                Gestion de Paie Externalisée, Conformité Garantie, Tranquillité d'Esprit
              </h1>  
              <p className="mt-5 md:mt-10 text-paragraph">
                Spécialisés dans l'externalisation de la paie, nous offrons un service complet et sécurisé pour gérer l'ensemble de vos obligations sociales et fiscales avec précision et confidentialité.
              </p>
              <hr className="mt-10 border-purple/10" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-[50px] gap-8 md:gap-[70px]">
                <div data-aos="fade-left" className="grid-cols-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                      fill="#5D51F2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="mt-4 font-semibold text-18 text-main-black">
                    Équipe d'Experts Certifiés
                  </h1>
                  <p className="mt-3 text-paragraph">
                    Spécialistes en législation sociale et fiscale tunisienne, avec formation continue garantie pour rester à jour sur toutes les évolutions réglementaires.
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="grid-cols-1"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                      fill="#5D51F2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="mt-4 font-semibold text-18 text-main-black">
                    Support Personnalisé
                  </h1>
                  <p className="mt-3 text-paragraph">
                    Accompagnement dédié avec un interlocuteur unique pour toutes vos questions et un suivi rigoureux de vos dossiers paie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-end col-span-6 sm:flex-row">
            <div className="flex items-center p-[7px] pl-5 bg-white rounded-[30px] sm:absolute left-10 top-[70px] z-10 shadow-style-one">
              <span className="text-sm font-semibold text-black font-inter">
                Trusted Clients
              </span>
              <div className="relative flex cursor-pointer">
                <img
                  src="/assets/images/about/client1.webp"
                  alt=""
                  className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-4 hover:z-10"
                />
                <img
                  src="/assets/images/about/client2.webp"
                  alt=""
                  className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-3 hover:z-10"
                />
                <img
                  src="/assets/images/about/client3.webp"
                  alt=""
                  className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-2 hover:z-10"
                />
                <img
                  src="/assets/images/about/client4.webp"
                  alt=""
                  className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-1 hover:z-10"
                />
                <img
                  src="/assets/images/about/client5.webp"
                  alt=""
                  className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 hover:z-10"
                />
              </div>
            </div>
            <div>
              <img
                src="/assets/images/about/gestiondutemps.png"
                alt="img"
                className=""
              />
            </div>

            <div className="bg-purple p-[30px] rounded-2xl sm:absolute z-20 bottom-8 w-[295px] left-8 mt-5 sm:mt-0 max-w-full">
              <img
                src="/assets/images/home-five/hero/about-card-shape.webp"
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
                <span className="text-sm leading-8 text-white">We have</span>
              </div>
              <h1
                className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]"
                data-scroll-qs="scroll"
                data-count-qs="25"
                data-type-qs="+ Years of Experience"
                data-speed-qs="1000"
              >
                99% Taux de Conformité
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
