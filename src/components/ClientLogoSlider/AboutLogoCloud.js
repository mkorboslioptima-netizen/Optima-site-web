import React from "react";

export default function AboutLogoCloud() {
  return (
    <section id="home-one-client">
      <div className="mx-auto theme-container">
        <div className="py-[70px] px-4 bg-main-gray border border-purple/10 rounded-[15px]">
          <p className="text-base text-paragraph font-medium mb-[50px] text-center">
            We’ve more then 200+ global clients
          </p>
          <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-[50px] items-center">
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-2.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-3.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-4.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-5.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-6.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-7.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-4.webp" alt="" />
              </a>
            </div>
            <div className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner">
                <img src="/assets/images/home-one-client-6.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
