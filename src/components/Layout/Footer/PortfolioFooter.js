import React from "react";

export default function PortfolioFooter() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="mx-auto border-t theme-container border-white/10">
        <div className="flex flex-wrap gap-5 justify-between mb-20 mt-[80px]">
          <div className="w-fit max-w-[300px]">
            <div className="max-w-[223px]">
              <h1 className="font-semibold text-18 text-dark-silver">
                Address
              </h1>
              <div className="flex gap-2 items-center relative group font-medium text-white hover:text-caribbean-green hover:underline transition-all duration-300 mt-3.5">
                <span className="transition-all duration-300">
                  55 Street, 2nd block, 3rd Floor Melbourne, Australia
                </span>
              </div>
            </div>
          </div>
          <div className="w-fit max-w-[300px]">
            <div className="max-w-[223px]">
              <h1 className="font-semibold text-18 text-dark-silver">
                Contact
              </h1>
              <div className="flex gap-2 items-center relative group font-medium text-white hover:text-caribbean-green hover:underline transition-all duration-300 mt-3.5">
                <span className="transition-all duration-300">
                  infoquland@gmail.com <br />
                  +880 456 852 99
                </span>
              </div>
            </div>
          </div>
          <div className="w-fit max-w-[300px]">
            <h1 className="font-semibold text-18 text-dark-silver">
              Newsletter
            </h1>
            <div className="flex border-b border-white/10">
              <input
                type="email"
                placeholder="Email Address"
                id="eFive"
                className="border border-transparent py-1 px-0 rounded-[28px] bg-transparent focus:outline-none w-full mt-5 text-paragraph"
              />
              <button className="p-0 m-0 border-none outline-none h-fit pt-9">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1716 6.82806L10.1716 1.17121M10.1716 1.17121L4.51472 1.17121M10.1716 1.17121L1.68629 9.65649"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-fit max-w-[300px]">
            <h1 className="mb-5 font-semibold text-18 text-dark-silver">
              Follow Me
            </h1>
            <div className="flex gap-[15px]">
              <a
                href="#"
                aria-label="facebook"
                target="blank"
                className="w-[40px] text-paragraph hover:text-main-black h-[40px] rounded-full flex justify-center items-center border border-dark-silver overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
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
                      d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857
                        3.55556
                        5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111
                        4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#"
                aria-label="twitter"
                target="blank"
                className="w-[40px] h-[40px] text-dark-silver hover:text-main-black rounded-full flex justify-center items-center border border-dark-silver overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7642 0C10.5722 0 8.7953 1.86585 8.7953 4.1675C8.7953 4.5153 8.83587 4.85315 8.91232 5.17611C6.80469 5.17611 3.63013 4.74999 0.978868 2.09376C0.626315 1.74054 -0.0237835 1.9767 0.000670803 2.47516C0.393588 10.484 3.82353 12.8202 5.58986 12.9656C4.44926 14.0921 2.79242 14.9813 1.1252 15.3804C0.685191 15.4857 0.576494 15.9674 1.00675 16.1073C2.19973 16.4953 3.90729 16.6448 4.82642 16.67C11.3286 16.67 16.6134 11.1972 16.731 4.3991C17.5847 3.84394 18.1315 2.63855 18.4388 1.78464C18.5136 1.57667 18.1728 1.33436 17.9687 1.41931C17.331 1.68479 16.5214 1.74773 15.8318 1.52302C15.1039 0.593104 14 0 12.7642 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#"
                target="blank"
                aria-label="instagram"
                className="w-[40px] h-[40px] text-paragraph hover:text-main-black rounded-full flex justify-center items-center border border-dark-silver overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#"
                aria-label="dribble"
                target="blank"
                className="w-[40px] h-[40px] text-paragraph hover:text-main-black rounded-full flex justify-center items-center border border-dark-silver overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0787061 9.30823C0.479084 12.1658 2.35861 14.5492 4.91845 15.6594C5.03048 13.3562 5.50604 11.1434 6.2916 9.07041C5.45422 8.9105 4.5871 8.82648 3.69861 8.82648C2.44115 8.82648 1.22661 8.99477 0.0787061 9.30823ZM6.12757 16.0739C6.77863 16.2411 7.46109 16.33 8.1643 16.33C10.5078 16.33 12.6208 15.3427 14.1098 13.7613C12.4845 11.6965 10.1761 10.1288 7.49338 9.35723C6.67698 11.4629 6.2012 13.7215 6.12757 16.0739ZM14.8969 12.7858C15.8005 11.4718 16.3293 9.88016 16.3293 8.165C16.3293 8.02119 16.3256 7.87824 16.3182 7.73626C15.4488 7.89372 14.5515 7.97608 13.6344 7.97608C11.8389 7.97608 10.12 7.66043 8.53731 7.0839C8.33792 7.4571 8.14977 7.83648 7.97327 8.22164C10.7455 9.0492 13.1519 10.6609 14.8969 12.7858ZM16.1634 6.51947C15.7389 4.44499 14.5277 2.65708 12.8551 1.48108C11.4192 2.82433 10.1729 4.34473 9.15604 6.00404C10.5505 6.48713 12.0589 6.75133 13.6344 6.75133C14.5004 6.75133 15.346 6.67152 16.1634 6.51947ZM11.7599 0.832253C10.675 0.299297 9.4546 0 8.1643 0C6.27362 0 4.53304 0.642623 3.14905 1.72136C4.39853 3.34118 6.06515 4.66232 8.00312 5.54348C9.03743 3.81982 10.3032 2.23688 11.7599 0.832253ZM2.23946 2.54684C0.87291 3.98751 0.0262453 5.92618 -6.43421e-05 8.06238C1.1797 7.76185 2.41982 7.60173 3.69861 7.60173C4.7518 7.60173 5.77866 7.71034 6.76712 7.91649C6.96395 7.47512 7.17512 7.04087 7.40007 6.61427C5.35434 5.66603 3.58482 4.26501 2.23946 2.54684Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[65px] border-t border-blue-sass/10">
        <div className="relative h-full mx-auto theme-container">
          <div className="flex justify-center w-full">
            <img
              src="/assets/images/home-ten/copy-right-bg.png "
              alt=""
              className="absolute bottom-0 lighting-hue"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between w-full h-full">
            <span className="text-dark-silver max-w-80">
              2024 © All rights reserved by
              <b className="text-main-black">Quland</b>
            </span>
            <div className="relative flex justify-center w-full sm:w-fit">
              <a
                href="#"
                aria-label="go top"
                className="w-[40px] h-[40px] rounded-full border-[3px] flex justify-center items-center absolute -top-[75px] sm:-top-[55px]"
              >
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.9999" cy="19.9995" r="20" fill="#794AFF" />
                    <path
                      d="M15.9999 18.3328L20.3332 13.9995M20.3332 13.9995L24.6665 18.3328M20.3332 13.9995V26.9995"
                      stroke="white"
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
