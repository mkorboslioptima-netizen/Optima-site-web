import React from "react";

export default function CardCoreFeatures() {
  return (
    <section className="py-[130px]" id="process">
      <div className="w-full mx-auto theme-container">
        <h1 className="px-5 bg-purple/10 border border-purple/20 text-main-black font-medium rounded-[30px] w-fit mx-auto">
          Core Features
        </h1>
        <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[42px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          Experience the power of automation and watch your revenue rise
        </h2>
        <div className="grid grid-cols-3 gap-2 pt-16 md:grid-cols-6 gap-y-10">
          <div className="relative col-span-3 flex justify-center items-end xl:px-[62px]">
            <img
              src="/assets/images/home-nine/features-bg.svg"
              alt=""
              className="absolute z-0 cta_bg_anim"
            />
            <img
              src="/assets/images/home-nine/features-img-3.png"
              alt=""
              className="relative z-10 moving-h2-hero-main-img"
            />
          </div>
          <div className="col-span-3 xl:px-11">
            <div className="max-w-[550px]">
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex gap-2.5 text-main-black border border-purple/10 rounded-[20px] py-[30px] px-[50px] hover:bg-app-gray transition-colors duration-300">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      Manage your spending and save
                    </h1>
                    <p className="mt-2 text-paragraph">
                      Track expenses in real-time compare them budgeted amounts
                      businesses drive innovation
                    </p>
                  </div>
                </li>
                <li className="flex gap-2.5 text-main-black border border-purple/10 rounded-[20px] py-[30px] px-[50px] hover:bg-app-gray transition-colors duration-300 mt-4">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      Review transactions
                    </h1>
                    <p className="mt-2 text-paragraph">
                      Offer access to customer support through chat, email phone
                      for assistance with account-related questions or issues
                    </p>
                  </div>
                </li>
                <li className="flex gap-2.5 text-main-black border border-purple/10 rounded-[20px] py-[30px] px-[50px] hover:bg-app-gray transition-colors duration-300 mt-4">
                  <div className="flex-1">
                    <h1 className="font-semibold text-18 text-main-black">
                      Get portfolio insights
                    </h1>
                    <p className="mt-2 text-paragraph">
                      Implement robust security measures, such as encryption,
                      multi-factor authentication, and biometric
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
