import { Link } from "react-router-dom";
import React from "react";

export default function LatestBlogOne() {
  return (
    <section id="blogs">
      <div className="blogs-section-wrapper w-full xl:pt-[130px] xl:pb-[100px] py-[60px] overflow-hidden">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <span className="mb-5 section-title-top-tag">News & Blog</span>
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[60px] text-center">
                Read and explore Our latest news
              </h2>
            </div>
          </div>
          <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div data-aos="fade-left" className="item group">
              <div
                style={{ background: "url(/assets/images/blogs-1.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    <span className="font-semibold text-purple">Marketing</span>
                    <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link href="/blog-details">
                <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="item group"
            >
              <div
                style={{ background: "url(/assets/images/blogs-2.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    <span className="font-semibold text-purple">Research</span>
                    <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link href="/blog-details">
                <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="item group last:hidden xl:last:block"
            >
              <div
                style={{ background: "url(/assets/images/blogs-3.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    <span className="font-semibold text-purple">SEO</span>
                    <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link href="/blog-details">
                <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
