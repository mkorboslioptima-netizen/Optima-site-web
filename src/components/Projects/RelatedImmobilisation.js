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
                Gestion des actifs
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                 Actifs maîtrisés
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
                Gestion des amortissements
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                 Amortissements automatisés
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
                Analyse financière
              </p>
              <p className="mt-2 font-semibold text-22 text-main-black font-inter">
                Valeur & rentabilité des actifs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
