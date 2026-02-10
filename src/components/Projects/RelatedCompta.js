import React from "react";

export default function RelatedProject() {
  return (
    <section className="">
      <div className="w-full mx-auto theme-container">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-purple/10 pt-10 md:pt-20 pb-16 md:pb-[130px] gap-5">
          <div className="flex items-center gap-[50px]">
            <img
              src="/assets/images/en-stock.png"
              alt=""
              className="w-[110px] aspect-square rounded-lg object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-paragraph">
                Négoce et Distribution
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                 Stock optimisé
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <img
              src="/assets/images/en-stock.png"
              alt=""
              className="w-[110px] aspect-square rounded-lg object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-paragraph">
                performance commerciale
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                 Suivi des ventes
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-[50px]">
            <img
              src="/assets/images/a.png"
              alt=""
              className="w-[110px] aspect-square rounded-lg object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-paragraph">
                Services
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                Facturation & Rentabilité
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
