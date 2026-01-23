"use client";
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

export default function FaqMainOne() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <section className="relative mt-16 md:mt-[130px]">
      <div className="relative z-10 w-full">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-6 xl:grid-cols-11 w-full relative z-10 gap-y-5 xl:gap-[118px]">
              <div className="col-span-6 xl:col-span-5 sm:pr-5">
                <h1 className="py-0.5 px-5 bg-purple/5 border-purple/10 border rounded-[30px] font-medium text-purple w-fit mx-auto xl:mx-0">
                  FAQs
                </h1>
                <h2 className="text-24 sm:text-48 font-semibold text-main-black mt-5 max-w-[720px] mb-14 mx-auto xl:mx-0 text-center xl:text-left">
                  Have Any Questions On Mind? Questions & Answer here
                </h2>
                <div className="relative w-full">
                  <img
                    className="w-full rounded-xl"
                    src="/assets/images/faq-1.webp"
                    alt=""
                  />
                  <div className="w-10 px-2 sm:w-16 md:w-[100px] aspect-square rounded-lg bg-it-blue top-2 right-2 sm:-top-5 sm:-right-5 absolute flex justify-center items-center">
                    <svg
                      width="64"
                      height="45"
                      viewBox="0 0 64 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5136 0H48.4158L27.9021 30.4053H0L20.5136 0Z"
                        fill="white"
                      />
                      <path
                        d="M21.7364 33.2233L13.791 45H43.0167L63.5303 14.5947H41.96L29.3917 33.2233H21.7364Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div
                  data-aos="fade-up"
                  className="flex flex-col gap-2.5 w-full"
                >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
