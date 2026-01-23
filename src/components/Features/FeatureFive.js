import React from "react";

export default function FeatureFive() {
  return (
    <section className="py-[70px] md:py-[130px]">
      <div className="mx-auto theme-container">
        <h1 className="px-5 bg-blue-sass/10 border border-blue-sass/20 text-blue-sass font-medium rounded-[30px] w-fit mx-auto">
          Core Features
        </h1>
        <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[32px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          Create your first funnel in One minutes Headache-free
        </h2>
        <div className="grid w-full max-w-[1070px] mx-auto grid-cols-6 lg:grid-cols-10">
          <div className="col-span-6 lg:col-span-4 lg:pr-[72px] flex flex-col justify-center gap-4">
            <div className="bg-blue-sass/5 py-[13px] px-8 border-l-[3px] border-blue-sass h-[50px] hover:h-[125px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                First Editing
              </h1>
              <p className="text-paragraph mt-0.5 line-clamp-2">
                Our cutting-edge solution is designed to revolutionize to see
                business.
              </p>
            </div>
            <div className="bg-blue-sass/5 py-[13px] px-8 border-l-[3px] border-blue-sass h-[50px] hover:h-[125px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Proven templates
              </h1>
              <p className="text-paragraph mt-0.5 line-clamp-2">
                Our cutting-edge solution is designed to revolutionize to see
                business.
              </p>
            </div>
            <div className="bg-blue-sass/5 py-[13px] px-8 border-l-[3px] border-blue-sass h-[50px] hover:h-[125px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Unique design
              </h1>
              <p className="text-paragraph mt-0.5 line-clamp-2">
                Our cutting-edge solution is designed to revolutionize to see
                business.
              </p>
            </div>
            <div className="bg-blue-sass/5 py-[13px] px-8 border-l-[3px] border-blue-sass h-[50px] hover:h-[125px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Personalized approach
              </h1>
              <p className="text-paragraph mt-0.5 line-clamp-2">
                Our cutting-edge solution is designed to revolutionize to see
                business.
              </p>
            </div>
          </div>
          <div className="col-span-6 mt-5 lg:mt-0">
            <img
              src="/assets/images/home-eight/fratures_img.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
