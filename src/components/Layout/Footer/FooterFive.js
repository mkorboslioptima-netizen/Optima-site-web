import React from "react";
import { Link } from "react-router-dom";

export default function FooterFive() {
  return (
    <footer className="pt-20 bg-buisness-light-black">
      <div className="flex flex-wrap justify-between gap-5 mx-auto mb-20 theme-container">
        <div className="w-fit max-w-[300px]">
          <img src="/assets/images/logo-01-20 blanc.svg" alt="logo" className="-ml-12" />
          <p className="max-w-[300px] text-white my-6">
Optima, intégrateur tunisien en gestion d’entreprise : commerce, comptabilité, paie et RH.            
            </p>

          <div className="flex gap-[15px]">
            <a
              href="https://www.facebook.com/optima.tn"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-buisness-red before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/optima-tn"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-buisness-red before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="white"/>
                  <circle cx="4" cy="4" r="2" fill="white"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="w-fit max-w-[300px]">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-white text-18">Nos services</h1>
              <ul className="mt-3.5">
                {[
                  { label: "Outsourcing de la paie", to: "/outsourcing" },
                  { label: "Gestion des temps", to: "/gestion-des-temps" },
                  { label: "Gestion d'entreprise", to: "/gestion-entreprise" },
                  { label: "Contrôle d'accès", to: "/controle-acces" },
                  { label: "Mentions légales", to: "/mentions-legales" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to}>
                      <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                        <svg className="absolute transition-all duration-300 -left-2 group-hover:left-0" width="6" height="12" viewBox="0 0 6 12" fill="none">
                          <path d="M1 1L5 6L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="transition-all duration-300 group-hover:translate-x-4">{label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-fit max-w-[300px]">
          <div className="max-w-[223px]">
            <h1 className="font-semibold text-white text-18">Adresse</h1>
            <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
              <span className="transition-all duration-300">
                6, Rue Echih – 2éme étage – App B2.1 -  2080 Ariana
              </span>
            </div>
            <h1 className="mt-6 font-semibold text-white text-18">Contact</h1>
            <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
              <span className="transition-all duration-300">
                info@optima.tn <br />
                +216 71 000 000
              </span>
            </div>
          </div>
        </div>
        <div className="w-fit max-w-[300px]">
          <div className="flex items-center gap-4 mt-2.5">
            <img
              src="/assets/images/iso27001black.png"
              alt="ISO 27001 Certified"
              className="h-16 w-auto object-contain"
            />
            <img
              src="/assets/images/SagepartnerB.svg"
              alt="Sage Partner"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[65px] bg-buisness-dark-black">
        <div className="h-full mx-auto theme-container">
          <div className="flex flex-wrap items-center justify-between w-full h-full">
            <span className="text-white/50 max-w-80">
              2026 &copy; tout droit réservé{" "}
              <b className="text-white"> Optima</b>
            </span>
            <div className="relative flex justify-center w-full sm:w-fit">
              <a
                href="#"
                aria-label="go top"
                className="w-[45px] h-[45px] rounded-full border-[3px] border-buisness-light-black flex justify-center items-center bg-white absolute -top-[75px] sm:-top-[55px]"
              >
                <span>
                  <svg
                    width="13"
                    height="18"
                    viewBox="0 0 13 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.33333L6.33333 1M6.33333 1L11.6667 6.33333M6.33333 1V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <ul className="flex items-center space-x-3 max-w-80 md:space-x-6">
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-medium text-paragraph">|</li>
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
