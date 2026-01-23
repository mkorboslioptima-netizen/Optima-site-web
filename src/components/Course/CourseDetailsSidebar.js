import React from "react";
import { Link } from "react-router-dom";

export default function CourseDetailsSidebar() {
  return (
    <div className="col-span-8 lg:col-span-4">
      <div className="relative bg-main-gray border border-purple/10 rounded-[15px] p-10">
        <p className="font-semibold text-24 text-main-black">
          <span className="font-inter"> $14.00 </span>
          <del className="text-base font-normal text-paragraph">$26.00</del>
        </p>
        <div className="mb-10 mt-7">
          <div className="flex items-center justify-between w-full h-fit">
            <div className="flex items-center gap-2 h-fit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12 6.75V12H17.25"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-main-black">Course Duration</p>
            </div>
            <p className="text-sm text-paragraph">6 Month</p>
          </div>
          <div className="flex items-center justify-between w-full mt-4 h-fit">
            <div className="flex items-center gap-2 h-fit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20V10"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 20V4"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 20V16"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm text-main-black">Course Level</p>
            </div>
            <p className="text-sm text-paragraph">Intermediate</p>
          </div>
          <div className="flex items-center justify-between w-full mt-4 h-fit">
            <div className="flex items-center gap-2 h-fit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M14.5703 5.43173C15.2408 5.24281 15.9441 5.19978 16.6326 5.30552C17.3212 5.41126 17.9791 5.66333 18.562 6.04475C19.1449 6.42616 19.6393 6.92807 20.012 7.51666C20.3846 8.10525 20.6268 8.76685 20.7221 9.45692C20.8175 10.147 20.764 10.8495 20.565 11.5171C20.366 12.1847 20.0263 12.8019 19.5687 13.3272C19.1111 13.8524 18.5463 14.2735 17.9123 14.5621C17.2782 14.8507 16.5897 15.0001 15.8931 15.0001"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 18.5059C2.26138 17.4229 3.27215 16.539 4.44698 15.9288C5.62182 15.3186 6.92623 15.0001 8.25008 15C9.57393 14.9999 10.8784 15.3184 12.0532 15.9285C13.2281 16.5386 14.239 17.4225 15.0004 18.5054"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm text-main-black">Students Enrolled</p>
            </div>
            <p className="text-sm text-paragraph">69,419,618</p>
          </div>
          <div className="flex items-center justify-between w-full mt-4 h-fit">
            <div className="flex items-center gap-2 h-fit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 10.5H16.5"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 13.5H16.5"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 3.75V20.25"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm text-main-black">Language</p>
            </div>
            <p className="text-sm text-paragraph">Mandarin</p>
          </div>
          <div className="flex items-center justify-between w-full mt-4 h-fit">
            <div className="flex items-center gap-2 h-fit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.0005H15"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 15.0005H15"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.25 3.75049H18.75C18.9489 3.75049 19.1397 3.82951 19.2803 3.97016C19.421 4.11081 19.5 4.30158 19.5 4.50049V18.7505C19.5 19.3472 19.2629 19.9195 18.841 20.3415C18.419 20.7634 17.8467 21.0005 17.25 21.0005H6.75C6.15326 21.0005 5.58097 20.7634 5.15901 20.3415C4.73705 19.9195 4.5 19.3472 4.5 18.7505V4.50049C4.5 4.30158 4.57902 4.11081 4.71967 3.97016C4.86032 3.82951 5.05109 3.75049 5.25 3.75049Z"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 2.25049V5.25049"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2.25049V5.25049"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 2.25049V5.25049"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm text-main-black">Subtitle Language</p>
            </div>
            <p className="text-sm text-paragraph">English</p>
          </div>
        </div>

        <Link to="/blog">
          <div className="py-3 home-two-btn-bg group bg-blue-seo border-blue-seo">
            <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
              Add to Cart
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
                className="transition-all duration-300 group-hover:stroke-blue-seo"
                d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </Link>
        <p className="mt-5 text-sm text-main-black leading-[30px]">
          <span className="text-black"> Note:</span>
          <span className="text-paragraph">
            all course have 30-days money-back guarantee
          </span>
        </p>
        <h1 className="mb-5 font-semibold text-18 text-main-black mt-7">
          Share this course:
        </h1>
        <div className="flex gap-[15px]">
          <a
            href="#"
            aria-label="facebook"
            target="blank"
            className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 bg-white text-paragraph hover:text-white"
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
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="#"
            aria-label="twitter"
            target="blank"
            className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 bg-white text-paragraph hover:text-white"
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
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="#"
            target="blank"
            aria-label="instagram"
            className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 bg-white text-paragraph hover:text-white"
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
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="#"
            aria-label="dribble"
            target="blank"
            className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 bg-white text-paragraph hover:text-white"
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
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
