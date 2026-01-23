import React, { useState } from "react";
import { Link } from "react-router-dom";
const faqs = [
  {
    question: "How Does Online Learning Work?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's",
  },
  {
    question: "Why is digital marketing important?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's",
  },
  {
    question: "What are the key components of digital marketing?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's",
  },
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "However, link building isn't merely about quantity; quality and relevance are paramount. High-quality links from reputable websites carry more weight in search engine algorithms, contributing significantly to a website's",
  },
  // Add more FAQ items here if needed
];

export default function FaqFour() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };

  return (
    <section id="faq" className="py-[70px] sm:py-[130px] bg-white max-w-full">
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            FAQs
          </h1>
          <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
            Frequently Asked Questions & Answer
          </h2>
          <p className="text-paragraph mt-[30px] max-w-[424px] mb-[18px]">
            IT businesses help organizations develop and implement robust
            business continuity plans disaster
          </p>
          <Link to="/contact">
            <div className="home-two-btn-bg py-3.5 group bg-it-black border-it-black w-fit mt-2.5">
              <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-black font-inter">
                Learn More
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
                  className="transition-all duration-300 group-hover:stroke-it-black"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="col-span-6 mt-5 md:mt-0">
          <div data-aos="fade-up" className="flex flex-col gap-2.5 w-full">
            {/* <!-- faq single start  --> */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`py-5 px-2 md:px-[30px] w-full rounded-[10px] h7-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-it-blue/15 ${
                  activeFAQ === index ? "active-h7-faq bg-it-blue/10" : ""
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
                      stroke="#5F57FF"
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
          </div>
        </div>
      </div>
    </section>
  );
}
