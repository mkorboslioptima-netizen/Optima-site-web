import React from "react";
import { Link } from "react-router-dom";

export default function HeroTwo() {
  return (
    <section
      id="banner-two"
      className="relative w-full py-3 overflow-hidden bg-gray-seo pt-28"
    >
      {/* <!-- content start --> */}
      <div className="w-full max-w-[1506px] relative theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 z-10">
        <img
          src="/assets/images/home-two/hero-dot-bg.svg"
          alt="img"
          className="absolute top-[75px] -left-[145px] moving-h2-hero-main-img"
        />
        <div className="col-span-5 my-auto">
          <h1
            className="pr-2 text-4xl font-semibold tracking-tight text-black md:text-65"
            data-depth="-0.28"
          >
            <span style={{ color: '#007a55' }}>Sage</span> 100c <br className="hidden md:block" />
            Comptabilité
          </h1>
          <p className="mt-5 font-medium text-black text-18 font-inter md:mt-5">
            Pilotez efficacement la comptabilité de votre PME avec Sage 100 Comptabilité, déployé et intégré par OPTIMA.
          </p>
          <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
            <Link to="/pricing">
             
               <img
                  src="/assets/images/home-five/hero/Sagepartner.svg"
                  alt="Gestion des temps"
                  className="w-36 h-auto"         
                />
                
             
            </Link>
            
          </div>
          
        </div>
        {/* <!-- circle animations elements  --> */}

        <img
          src="/assets/images/home-five/hero/comptabilité.png"
          alt="img"
          className="relative bottom-0 right-0 self-end col-span-7 2xl:-right-52 moving-h2-hero-main-img"
        />
      </div>
      <div className="rotating_circle z-0 absolute flex justify-center items-center -bottom-4 xl:-bottom-[150px] right-0 xl:-right-20 h-0 w-full xl:w-[880px] 2xl:max-w-[1250px]">
        <img
          src="/assets/images/home-two/round-shape-1.svg"
          alt=""
          className="w-full"
        />
        <img
          src="/assets/images/home-two/round-shape-2.svg"
          alt=""
          className="absolute w-10/12"
        />
        <img
          src="/assets/images/home-two/round-shape-3.svg"
          alt=""
          className="absolute w-8/12"
        />
        <img
          src="/assets/images/home-two/round-shape-4.svg"
          alt=""
          className="absolute w-6/12"
        />
      </div>
      {/* <!-- content end  --> */}
    </section>
  );
}
