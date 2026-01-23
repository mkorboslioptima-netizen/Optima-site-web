import React from "react";

export default function RelatedProject() {
  return (
    <section className="">
      <div className="w-full mx-auto theme-container">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-purple/10 pt-10 md:pt-20 pb-16 md:pb-[130px] gap-5">
          <div className="flex items-center gap-[50px]">
            <img
              src="/assets/images/tech-1.webp"
              alt=""
              className="w-[110px] aspect-square rounded-lg object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-paragraph">
                Tech Solutions
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                Digital Marketing Solutions
              </p>
            </div>
          </div>
          <svg
            className="hidden sm:block"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5ZM0 12.5C0 11.1193 1.11929 10 2.5 10C3.88071 10 5 11.1193 5 12.5C5 13.8807 3.88071 15 2.5 15C1.11929 15 0 13.8807 0 12.5ZM2.5 20C1.11929 20 0 21.1193 0 22.5C0 23.8807 1.11929 25 2.5 25C3.88071 25 5 23.8807 5 22.5C5 21.1193 3.88071 20 2.5 20ZM10 2.5C10 1.11929 11.1193 0 12.5 0C13.8807 0 15 1.11929 15 2.5C15 3.88071 13.8807 5 12.5 5C11.1193 5 10 3.88071 10 2.5ZM12.5 10C11.1193 10 10 11.1193 10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.1193 13.8807 10 12.5 10ZM10 22.5C10 21.1193 11.1193 20 12.5 20C13.8807 20 15 21.1193 15 22.5C15 23.8807 13.8807 25 12.5 25C11.1193 25 10 23.8807 10 22.5ZM22.5 0C21.1193 0 20 1.11929 20 2.5C20 3.88071 21.1193 5 22.5 5C23.8807 5 25 3.88071 25 2.5C25 1.11929 23.8807 0 22.5 0ZM20 12.5C20 11.1193 21.1193 10 22.5 10C23.8807 10 25 11.1193 25 12.5C25 13.8807 23.8807 15 22.5 15C21.1193 15 20 13.8807 20 12.5ZM22.5 20C21.1193 20 20 21.1193 20 22.5C20 23.8807 21.1193 25 22.5 25C23.8807 25 25 23.8807 25 22.5C25 21.1193 23.8807 20 22.5 20Z"
              fill="#794AFF"
            />
          </svg>
          <div className="flex items-center gap-[50px]">
            <img
              src="/assets/images/tech-2.webp"
              alt=""
              className="w-[110px] aspect-square rounded-lg object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-paragraph">
                Cyber Security
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                Remote support provider
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
