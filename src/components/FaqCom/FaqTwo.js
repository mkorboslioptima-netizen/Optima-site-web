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

export default function FaqTwo() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };
  return (
    <section id="faq" className="relative w-full">
      {/* <!-- bg circle  --> */}
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -left-[204px] -top-[150px]"></div>

      <div className="w-full pb-16 md:pb-[130px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center py-10 overflow-hidden md:py-20 sm:border rounded-3xl border-white/10 sm:bg-white/5">
            <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
              <h1 className="py-0.5 px-5 bg-white/5 border-white/10 border rounded-[30px] font-medium text-white">
                FAQs
              </h1>
              <h2 className="mt-5 font-semibold text-white text-24 sm:text-48">
                Asked Questions & Answer
              </h2>
              <div className="flex flex-col gap-2.5 w-full mt-10 sm:px-4">
                {/* <!-- faq single start  --> */}
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="py-2.5 cursor-pointer md:py-5 px-2 md:px-9 w-full bg-white/5 border border-white/10 rounded-[10px] h4-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit single_faq_bg"
                    name="faq-1"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between w-full pointer-events-none">
                      <h1 className="font-semibold text-white sm:text-18">
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
                          stroke="#FFFF"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {activeFAQ === index && (
                      <p className="mt-3.5 text-white pointer-events-none">
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
      <div className="absolute z-10 shape-1 left-40 top-96">
        <img src="./assets/images/home-four/shape-1.webp" alt="" />
      </div>
      <div className="absolute z-10 shape-2 right-96 top-96">
        <img src="./assets/images/home-four/shape-2.webp" alt="" />
      </div>
      <div className="shape-3 absolute left-96 top-[550px] z-10">
        <img src="./assets/images/home-four/shape-3.webp" alt="" />
      </div>
      <div className="shape-4 absolute right-96 top-[550px] z-10">
        <img src="./assets/images/home-four/shape-4.webp" alt="" />
      </div>
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -right-[204px] bottom-0"></div>
    </section>
  );
}
