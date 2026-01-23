import React from "react";
import { Link } from "react-router-dom";

export default function DownloadCta() {
  return (
    <section id="ourApp" className="pb-[70px] md:pb-[130px]">
      <div className="max-w-[1860px] w-full mx-auto relative overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="/assets/images/home-nine/cta-bg.svg"
          alt=""
          className="absolute z-0 hidden cta_bg_anim sm:block"
        />
        <div className="w-full mx-auto theme-container">
          <div className="py-[70px] md:py-[130px] relative z-10 grid grid-cols-6 lg:grid-cols-12">
            <div className="col-span-6 lg:my-auto">
              <h1 className="py-0.5 px-5 bg-white/10 border-white/20 border rounded-[30px] font-medium text-white w-fit">
                Download Apps
              </h1>
              <h2
                className="text-24 sm:text-48 tracking-tight font-semibold text-white pr-2 mt-5 max-w-[548px] relative z-10"
                data-depth="-0.28"
              >
                Ready to download our Quland finance apps to get started
              </h2>
              <p className="text-white mt-5 md:mt-5 max-w-[580px] relative z-10">
                Welcome Lumina Learning Institute, where education meets
                innovation dedicated to providing high-quality learning
                experiences
              </p>
              <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
                <Link to="/pricing">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white hover:text-white text-main-black">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                      Google Play
                    </span>
                    <svg
                      className="relative z-10 transition-all duration-300"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.24464 0.191916C1.77515 -0.0675737 1.22393 -0.061574 0.757446 0.195665L6.22472 5.23921L8.0614 3.40253L2.24464 0.191916Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.209991 0.712158C0.0764969 0.930399 0 1.18014 0 1.44488V10.554C0 10.8105 0.0697471 11.055 0.195742 11.2687L5.69377 5.7707L0.209991 0.712158Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.4939 4.74698L8.74198 3.78027L6.77332 5.74819L9.18597 7.97335L10.4947 7.25113C10.9656 6.99014 11.2476 6.52216 11.2476 5.99868C11.2469 5.4752 10.9656 5.00722 10.4939 4.74698Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.24703 6.27856L0.734009 11.7916C0.973249 11.9281 1.23574 12.0001 1.49973 12.0001C1.75472 12.0001 2.01121 11.9356 2.24595 11.8058L8.49844 8.35523L6.24703 6.27856Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
                <Link to="/pricing">
                  <div className="text-white home-two-btn-white group before:bg-purple after:bg-purple border-purple hover:border-white hover:text-white">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                      App Store
                    </span>
                    <svg
                      className="relative z-10 transition-all duration-300"
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.44852 -0.000244141C7.47644 -0.000244141 7.50437 -0.000244141 7.53388 -0.000244141C7.60238 0.846021 7.27937 1.47835 6.8868 1.93626C6.50161 2.39101 5.97414 2.83206 5.12102 2.76514C5.06411 1.93099 5.38765 1.34556 5.7797 0.888703C6.14329 0.462936 6.80987 0.0840662 7.44852 -0.000244141Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.0312 8.80844C10.0312 8.81687 10.0312 8.82424 10.0312 8.83215C9.79145 9.55827 9.44947 10.1806 9.03213 10.7581C8.65116 11.2824 8.18429 11.988 7.35067 11.988C6.63034 11.988 6.15188 11.5248 5.41364 11.5122C4.63271 11.4995 4.20326 11.8995 3.48925 12.0001C3.40758 12.0001 3.3259 12.0001 3.24581 12.0001C2.7215 11.9242 2.29837 11.509 1.99011 11.1349C1.08114 10.0294 0.378728 8.60135 0.248047 6.77392C0.248047 6.59476 0.248047 6.41613 0.248047 6.23697C0.303376 4.92911 0.938865 3.86574 1.78355 3.35039C2.22934 3.07638 2.84217 2.84295 3.52456 2.94728C3.81701 2.9926 4.11579 3.09272 4.37767 3.19178C4.62586 3.28716 4.93623 3.45631 5.23026 3.44735C5.42945 3.44155 5.62758 3.33775 5.82834 3.2645C6.4164 3.05215 6.99288 2.8087 7.75272 2.92305C8.66591 3.0611 9.31405 3.46685 9.71452 4.09285C8.94203 4.58449 8.3313 5.32536 8.43564 6.59055C8.52838 7.7398 9.19654 8.41218 10.0312 8.80844Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="h-full col-span-6">
              <img
                src="/assets/images/home-nine/cta-img.png"
                alt=""
                className="relative lg:absolute -bottom-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
