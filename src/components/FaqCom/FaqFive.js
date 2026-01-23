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

export default function FaqFive() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };

  return (
    <section
      id="faq"
      className="relative h8-faq bg-white pb-5 md:pb-20 pt-[70px] md:pt-[130px]"
    >
      <div className="w-full pb-16 md:pb-[30px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center px-4 overflow-hidden md:px-0 rounded-3xl">
            <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
              <h1 className="py-0.5 px-5 bg-blue-sass/10 border-blue-sass/20 border rounded-[30px] font-medium text-blue-sass">
                FAQs
              </h1>
              <h2 className="mt-5 font-semibold text-24 sm:text-48 text-main-black">
                Asked Questions & Answer
              </h2>
              <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                {/* <!-- faq single start  --> */}
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`py-5 px-2 md:px-9 w-full rounded-[10px] h8-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-blue-sass/10  ${
                      activeFAQ === index ? "bg-blue-sass/5" : ""
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
                          stroke="#007AFF"
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
    </section>
  );
}
