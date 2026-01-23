import React from "react";

export default function BlogComment() {
  return (
    <div className="mt-[60px]">
      <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-10">
        Comments 02
      </h1>
      {/* <!-- comment  --> */}
      <div className="flex flex-col md:flex-row gap-10 md:mr-6 mb-[53px]">
        <img src="./assets/images/blogs/comment-1.webp" alt="" className="" />
        <div className="flex-1">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <h1 className="flex-1 font-semibold text-18 text-main-black">
              Michael S. Manning
            </h1>
            <p className="font-medium text-paragraph">Decmber 15, 2024</p>
          </div>
          <p className="text-paragraph mb-1.5">
            Our team is comprised of seasoned professionals, each bringing a
            wealth of experience expertise to the table with years of dedicated
            service in their respective
          </p>
          <a href="#">
            <div className="flex items-center gap-2 group">
              <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Reply'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Reply
              </p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 delay-300 group-hover:stroke-purple group-hover:delay-0"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- Reply --> */}
      <div className="flex flex-col md:flex-row gap-10 md:ml-28 mb-[53px]">
        <img src="./assets/images/blogs/comment-2.webp" alt="" className="" />
        <div className="flex-1">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <h1 className="flex-1 font-semibold text-18 text-main-black">
              Benjamin C. Janelle
            </h1>
            <p className="font-medium text-paragraph">Decmber 15, 2024</p>
          </div>
          <p className="text-paragraph mb-1.5">
            Our team is comprised seasonedy professionals bringing of experience
            and they expertise to the table with of dedicated service respective
          </p>
          <a href="#">
            <div className="flex items-center gap-2 group">
              <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Reply'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Reply
              </p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 delay-300 group-hover:stroke-purple group-hover:delay-0"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="#6D6D6D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
