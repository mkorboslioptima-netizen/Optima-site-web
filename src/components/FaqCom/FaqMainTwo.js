import React, { useState } from "react";
const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "Why is digital marketing important?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What are the key components of digital marketing?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What is Pay-Per-Click Advertising (PPC)?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What is Social Media Marketing (SMM)?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  // Add more FAQ items here if needed
];

export default function FaqMainTwo() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <section className="relative mt-16 md:mt-[108px] mb-16 md:mb-[130px]">
      <div className="relative z-10 w-full">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl">
            <div className="grid grid-cols-6 xl:grid-cols-11 w-full relative z-10 gap-y-5 xl:gap-[118px]">
              <div className="col-span-6 xl:col-span-5 sm:pr-5 xl:hidden">
                <h1 className="text-24 sm:text-48 font-semibold text-main-black mt-5 max-w-[720px] mb-14 mx-auto xl:mx-0 text-center xl:text-left">
                  Feel free to customize these questions and answers to better
                </h1>
                <div className="relative w-full">
                  <img
                    className="w-full rounded-xl"
                    src="/assets/images/faq-2.webp"
                    alt=""
                  />
                  <button
                    type="button"
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
                  </button>
                </div>
              </div>
              <div className="col-span-6 pt-6">
                <div className="flex flex-col gap-2.5 w-full">
                  {/* <!-- faq single start  --> */}
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`py-5 cursor-pointer px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-purple/10 ${
                        activeFAQ === index ? "bg-purple/5" : ""
                      }`}
                      name="faq-1"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex items-center justify-between w-full pointer-events-none h-fit">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          {faq.question}
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {activeFAQ === index && (
                        <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                  {/* <!-- faq single end  --> */}
                </div>
              </div>
              <div className="hidden col-span-6 xl:col-span-5 sm:pr-5 xl:block">
                <h1 className="text-24 sm:text-48 font-semibold text-main-black mt-5 max-w-[720px] mb-14 mx-auto xl:mx-0 text-center xl:text-left">
                  Feel free to customize these questions and answers to better
                </h1>
                <div className="max-w-[520px] relative">
                  <img
                    className="w-full rounded-xl"
                    src="./assets/images/faq-2.webp"
                    alt=""
                  />
                  <button
                    aria-label="play-btn"
                    className="video-play-btn w-10 px-2 sm:w-16 md:w-[100px] aspect-square rounded-lg bg-it-blue top-2 right-2 sm:-top-5 sm:-right-5 absolute flex justify-center items-center"
                  >
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0613 15.1781L5.47652 23.5123C3.03627 24.9067 0 23.1447 0 20.3342V3.66584C0 0.855278 3.03627 -0.906735 5.47652 0.487697L20.0613 8.82185C22.5204 10.2271 22.5204 13.7729 20.0613 15.1781Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
