import React from "react";

export default function BlogCommentForm() {
  return (
    <div className="border border-purple/10 bg-main-gray rounded-[10px] p-4 md:p-[50px]">
      <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6">
        Leave a Reply
      </h1>
      <p className="text-paragraph mb-[30px]">
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="" className="grid grid-cols-6 md:grid-cols-12 gap-[30px]">
        <input
          type="text"
          placeholder="Full Name"
          className="col-span-6 px-5 rounded-md h-14 outline-purple focus:outline-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="col-span-6 px-5 rounded-md h-14 outline-purple focus:outline-1"
        />
        <textarea
          name=""
          placeholder="Comments"
          className="col-span-6 md:col-span-12 px-5 outline-purple focus:outline-1 h-[100px] rounded-md"
        ></textarea>
        <div className="flex items-center col-span-6 gap-4 md:col-span-12">
          <input
            className="w-5 border accent-current acc text-purple border-purple outline-purple aspect-square"
            type="radio"
            name=""
            id="comments"
          />
          <label htmlFor="comments" className="text-gray-69">
            Save the information's in this browser for next time use
          </label>
        </div>

        <div className="col-span-6 md:col-span-12">
          <button className="home-two-btn-bg py-3 group bg-[#4A7DFF] border-[#4A7DFF] inline-flex">
            <span className="text-base text-white group-hover:text-[#4A7DFF] transition-all duration-300 font-inter relative z-10">
              Send Comments
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
                className="group-hover:stroke-[#4A7DFF] transition-all duration-300"
                d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
