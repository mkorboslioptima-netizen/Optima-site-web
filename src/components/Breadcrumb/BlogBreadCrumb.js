import React from "react";
import WinGridBg from "../Hero/WinGridBg";

export default function BlogBreadCrumb() {
  return (
    <section id="h1-breadcrumb">
      <div className="relative w-full pb-16 overflow-hidden h1-breadcrumb h-fit bg-main-gray md:pb-24">
        <WinGridBg />
        <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none">
          <div className="flex justify-center">
            <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" />
          </div>
        </div>
        <div className="relative z-20 mx-auto theme-container h-fit w-fit">
          <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
            <h1 className="text-main-black text-34 font-semibold w-full text-center max-w-[624px]">
              People The Office Analyzing Checking Finance Graphs
            </h1>
            <div className="flex flex-col sm:flex-row mt-5 gap-2 md:gap-[30px] w-full justify-center items-center">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/images/blogs/author-1.webp"
                  alt=""
                  className="w-[30px] aspect-square rounded-full object-cover"
                />
                <p className="text-paragraph">Leroy H. Levin</p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                <p className="text-paragraph">January 15, 2023</p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-[5px] aspect-square rounded-full bg-purple/20"></div>
                <p className="text-paragraph">Comments (5)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
