import React from "react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section
      id="services"
      className="py-[70px] sm:py-[130px] w-full bg-orange/5"
    >
      <div className="w-full mx-auto theme-container">
        <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto">
          Why Choose Us
        </h1>
        <h2 className="max-w-[674px] font-semibold text-24 sm:text-48 text-main-black text-center mx-auto mt-5">
          Unlock Your Potential Discover Why Our Courses Stand Out
        </h2>
        {/* <!-- content  --> */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-[30px] my-[70px]">
          {/* <!-- single card start  --> */}
          <div className="group col-span-3 p-10 rounded-[20px] bg-transparent group border border-orange/20 hover:bg-transparent transition-colors duration-300 card-group h6_card_hover">
            <div className="rounded-full overflow-hidden relative w-[70px] aspect-square flex justify-center items-center bg-orange/10 transition-colors duration-300 group-hover:bg-white">
              <svg
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4993 23.3317C21.0212 23.6082 20.8579 24.22 21.1344 24.698C21.4109 25.1761 22.0227 25.3395 22.5007 25.0629L21.4993 23.3317ZM3.49927 25.0629C3.97733 25.3395 4.58906 25.1761 4.8656 24.698C5.14215 24.22 4.97879 23.6082 4.50072 23.3317L3.49927 25.0629ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8V6ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6V8ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14V12ZM13 14C13.5523 14 14 13.5523 14 13C14 12.4477 13.5523 12 13 12V14ZM10.25 25.75V24.75H8.25V25.75H10.25ZM9.25 31H8.25C8.25 31.3318 8.4146 31.642 8.68937 31.8281C8.96414 32.0141 9.3133 32.0517 9.62139 31.9285L9.25 31ZM13 29.5L13.3714 28.5715C13.133 28.4762 12.867 28.4762 12.6286 28.5715L13 29.5ZM16.75 31L16.3786 31.9285C16.6867 32.0517 17.0359 32.0141 17.3106 31.8281C17.5854 31.642 17.75 31.3318 17.75 31H16.75ZM17.75 25.75V24.75H15.75V25.75H17.75ZM24 7V19H26V7H24ZM2 19V7H0V19H2ZM7 2H19V0H7V2ZM2 7C2 4.23858 4.23858 2 7 2V0C3.13401 0 0 3.13401 0 7H2ZM26 7C26 3.13401 22.866 0 19 0V2C21.7614 2 24 4.23858 24 7H26ZM24 19C24 20.8494 22.9964 22.4657 21.4993 23.3317L22.5007 25.0629C24.5904 23.8541 26 21.5922 26 19H24ZM0 19C0 21.5922 1.40958 23.8541 3.49927 25.0629L4.50072 23.3317C3.00361 22.4657 2 20.8494 2 19H0ZM16.5 22C16.5 23.933 14.933 25.5 13 25.5V27.5C16.0376 27.5 18.5 25.0376 18.5 22H16.5ZM13 25.5C11.067 25.5 9.5 23.933 9.5 22H7.5C7.5 25.0376 9.96243 27.5 13 27.5V25.5ZM9.5 22C9.5 20.067 11.067 18.5 13 18.5V16.5C9.96243 16.5 7.5 18.9624 7.5 22H9.5ZM13 18.5C14.933 18.5 16.5 20.067 16.5 22H18.5C18.5 18.9624 16.0376 16.5 13 16.5V18.5ZM7 8H19V6H7V8ZM7 14H13V12H7V14ZM8.25 25.75V31H10.25V25.75H8.25ZM9.62139 31.9285L13.3714 30.4285L12.6286 28.5715L8.87861 30.0715L9.62139 31.9285ZM12.6286 30.4285L16.3786 31.9285L17.1214 30.0715L13.3714 28.5715L12.6286 30.4285ZM17.75 31V25.75H15.75V31H17.75Z"
                  fill="#F2844D"
                />
              </svg>
            </div>

            <h3 className="pt-1 pb-2 mt-6 font-semibold text-black case_card_title text-20">
              <Link
                href="/project-details"
                className="transition-colors duration-300 font-inter group-hover:text-white"
              >
                Learn New Skills
              </Link>
            </h3>
            <p className="duration-300 text-paragraph group-hover:text-white">
              Modern business agencies to customized solutions tailored specific
              needs
            </p>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="group col-span-3 p-10 rounded-[20px] bg-transparent group border border-orange/20 hover:bg-transparent transition-colors duration-300 card-group h6_card_hover">
            <div className="rounded-full overflow-hidden relative w-[70px] aspect-square flex justify-center items-center bg-orange/10 transition-colors duration-300 group-hover:bg-white">
              <svg
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 5.5V13.75"
                  stroke="#F2844D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 8.5V7.5H18V8.5H20ZM8 8.5V7.5H6V8.5H8ZM13 1L13.3511 0.0636708C13.1247 -0.0212237 12.8753 -0.0212237 12.6489 0.0636708L13 1ZM1 5.5L0.648877 4.56367C0.258573 4.71003 0 5.08316 0 5.5C0 5.91684 0.258573 6.28997 0.648877 6.43633L1 5.5ZM13 10L12.6489 10.9363C12.8753 11.0212 13.1247 11.0212 13.3511 10.9363L13 10ZM25 5.5L25.3511 6.43633C25.7414 6.28997 26 5.91684 26 5.5C26 5.08316 25.7414 4.71003 25.3511 4.56367L25 5.5ZM14.0665 23.5088L13.3555 22.8056L14.0665 23.5088ZM16.4493 21.0994L17.1604 21.8025L16.4493 21.0994ZM17.857 20.7162L18.1391 19.7568L17.857 20.7162ZM9.55067 21.0994L10.2617 20.3962L9.55067 21.0994ZM11.9335 23.5088L12.6445 22.8056L11.9335 23.5088ZM8.14299 20.7162L7.86087 19.7568L8.14299 20.7162ZM24 31C24 31.5523 24.4477 32 25 32C25.5523 32 26 31.5523 26 31H24ZM0 31C0 31.5523 0.447715 32 1 32C1.55228 32 2 31.5523 2 31H0ZM18 8.5V11.5H20V8.5H18ZM8 11.5V8.5H6V11.5H8ZM13 16.5C10.2386 16.5 8 14.2614 8 11.5H6C6 15.366 9.13401 18.5 13 18.5V16.5ZM18 11.5C18 14.2614 15.7614 16.5 13 16.5V18.5C16.866 18.5 20 15.366 20 11.5H18ZM12.6489 0.0636708L0.648877 4.56367L1.35112 6.43633L13.3511 1.93633L12.6489 0.0636708ZM13.3511 10.9363L25.3511 6.43633L24.6489 4.56367L12.6489 9.06367L13.3511 10.9363ZM12.6489 1.93633L24.6489 6.43633L25.3511 4.56367L13.3511 0.0636708L12.6489 1.93633ZM13.3511 9.06367L1.35112 4.56367L0.648877 6.43633L12.6489 10.9363L13.3511 9.06367ZM14.7776 24.212L17.1604 21.8025L15.7383 20.3962L13.3555 22.8056L14.7776 24.212ZM17.5749 21.6756C21.6063 22.8611 24 25.4075 24 28H26C26 24.0912 22.5231 21.046 18.1391 19.7568L17.5749 21.6756ZM8.83964 21.8025L11.2224 24.212L12.6445 22.8056L10.2617 20.3962L8.83964 21.8025ZM2 28C2 25.4075 4.39366 22.8611 8.42512 21.6756L7.86087 19.7568C3.47693 21.046 0 24.0912 0 28H2ZM24 28V31H26V28H24ZM0 28V31H2V28H0ZM10.2617 20.3962C9.6562 19.7839 8.74422 19.4971 7.86087 19.7568L8.42512 21.6756C8.5462 21.64 8.70895 21.6704 8.83964 21.8025L10.2617 20.3962ZM17.1604 21.8025C17.2911 21.6704 17.4538 21.64 17.5749 21.6756L18.1391 19.7568C17.2558 19.4971 16.3438 19.7839 15.7383 20.3962L17.1604 21.8025ZM13.3555 22.8056C13.1598 23.0035 12.8402 23.0035 12.6445 22.8056L11.2224 24.212C12.2009 25.2014 13.7991 25.2014 14.7776 24.212L13.3555 22.8056Z"
                  fill="#F2844D"
                />
              </svg>
            </div>

            <h3 className="pt-1 pb-2 mt-6 font-semibold text-black case_card_title text-20">
              <Link
                href="/project-details"
                className="transition-colors duration-300 font-inter group-hover:text-white"
              >
                Expert Instructors
              </Link>
            </h3>
            <p className="duration-300 text-paragraph group-hover:text-white">
              Modern business agencies to customized solutions tailored specific
              needs
            </p>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="group col-span-3 p-10 rounded-[20px] bg-transparent group border border-orange/20 hover:bg-transparent transition-colors duration-300 card-group h6_card_hover">
            <div className="rounded-full overflow-hidden relative w-[70px] aspect-square flex justify-center items-center bg-orange/10 transition-colors duration-300 group-hover:bg-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14.5H28M4 14.5C2.34315 14.5 1 13.1569 1 11.5V10C1 8.34315 2.34315 7 4 7H28C29.6569 7 31 8.34315 31 10V11.5C31 13.1569 29.6569 14.5 28 14.5M4 14.5L4 28C4 29.6569 5.34315 31 7 31H25C26.6569 31 28 29.6569 28 28V14.5M16 7H22C23.6569 7 25 5.65685 25 4C25 2.34315 23.6569 1 22 1C18.6863 1 16 3.68629 16 7ZM16 7H10C8.34315 7 7 5.65685 7 4C7 2.34315 8.34315 1 10 1C13.3137 1 16 3.68629 16 7ZM16 7V31"
                  stroke="#F2844D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="pt-1 pb-2 mt-6 font-semibold text-black case_card_title text-20">
              <Link
                href="/project-details"
                className="transition-colors duration-300 font-inter group-hover:text-white"
              >
                Career Opportunities
              </Link>
            </h3>
            <p className="duration-300 text-paragraph group-hover:text-white">
              Modern business agencies to customized solutions tailored specific
              needs
            </p>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="group col-span-3 p-10 rounded-[20px] bg-transparent group border border-orange/20 hover:bg-transparent transition-colors duration-300 card-group h6_card_hover">
            <div className="rounded-full overflow-hidden relative w-[70px] aspect-square flex justify-center items-center bg-orange/10 transition-colors duration-300 group-hover:bg-white">
              <svg
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13.5623V30.1862M10 6.30269C10.8825 5.79218 11.9071 5.5 13 5.5C14.0929 5.5 15.1175 5.79218 16 6.30269M7 2.88203C8.70075 1.69572 10.7691 1 13 1C15.2309 1 17.2992 1.69572 19 2.88203M3.39319 10.0132C6.05525 10.3056 9.63176 11.0924 12.1802 12.8285C12.67 13.1622 13.33 13.1622 13.8198 12.8285C16.3682 11.0924 19.9448 10.3056 22.6068 10.0132C23.9243 9.86841 25 10.938 25 12.2577V25.3999C25 26.7196 23.9243 27.7896 22.6068 27.9344C19.9448 28.2268 16.3682 29.0136 13.8198 30.7497C13.33 31.0834 12.67 31.0834 12.1802 30.7497C9.63176 29.0136 6.05525 28.2268 3.39319 27.9344C2.07571 27.7896 1 26.7196 1 25.3999V12.2577C1 10.938 2.07571 9.86841 3.39319 10.0132Z"
                  stroke="#F2844D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="pt-1 pb-2 mt-6 font-semibold text-black case_card_title text-20">
              <Link
                href="/project-details"
                className="transition-colors duration-300 font-inter group-hover:text-white"
              >
                Lifetime Access
              </Link>
            </h3>
            <p className="duration-300 text-paragraph group-hover:text-white">
              Modern business agencies to customized solutions tailored specific
              needs
            </p>
          </div>
          {/* <!-- single card end  --> */}
        </div>
      </div>
    </section>
  );
}
