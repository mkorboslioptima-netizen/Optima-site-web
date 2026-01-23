"use client";
import React, { useState } from "react";
const faqs = [
  {
    question: "What factors determine the pricing of SEO services?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What factors determine the pricing of SEO services?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What factors determine the pricing of SEO services?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  {
    question: "What factors determine the pricing of SEO services?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's overall SEO performance.",
  },
  // Add more FAQ items here if needed
];

export default function ProjectFaq() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <div className="w-full col-span-6">
      <img
        src="./assets/images/project-result2.webp"
        alt=""
        className="w-full rounded-xl"
      />
      <h1 className="col-span-6 mt-10 font-semibold tracking-tight text-24 sm:text-34">
        Preparation For IT Service
      </h1>
      <div className="flex flex-col gap-2.5 w-full mt-8">
        {/* <!-- faq single start  --> */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`py-5 cursor-pointer px-2 md:px-9 w-full ${
              activeFAQ === index ? "bg-purple/5" : ""
            } rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-purple/10`}
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
  );
}
