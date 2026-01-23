"use client";
import React, { useEffect } from "react";
import GLightbox from "glightbox";

export default function ProjectOverview() {
  useEffect(() => {
    let lightbox = GLightbox({
      // Optional GLightbox configuration options
      selector: ".video-play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="w-full pt-16 md:pt-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid items-center grid-cols-6 md:grid-cols-12">
          <div className="col-span-6">
            <h1 className="text-24 sm:text-34 leading-[55px] tracking-tight font-semibold text-main-black">
              Overview
            </h1>
            <p className="max-w-[533px] text-18 sm:text-24 leading-[40px] text-paragraph mt-2.5 md:mt-3.5">
              In the ever-evolving landscape of technology, businesses require
              robust and reliable solutions to manage their IT infrastructure
              seamlessly. Our IT Managed Solutions offer a comprehensive
              approach, combining and technology
            </p>
            <div className="flex items-center gap-5 mt-3.5 md:mt-8 w-fit">
              <div className="overflow-hidden rounded-full w-14 h-14">
                <img
                  src="./assets/images/cta-p-2.webp"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <div>
                <h1 className="font-semibold text-main-black text-18">
                  Patrica W. Sanders
                </h1>
                <p className="text-sm font-medium leading-7 text-paragraph">
                  Senior Manager
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-6 mt-5 md:mt-0">
            <img
              src="./assets/images/project-detail-video.webp"
              alt=""
              className="w-full"
            />
            <a
              href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
              aria-label="play-video"
              className="absolute flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
            >
              <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                <span>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                      fill="#794AFF"
                    />
                  </svg>
                </span>
                <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
