import React from "react";

export default function WorkProcessTwo() {
  return (
    <section id="workingProcess" className="bg-white">
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 gap-[30px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            Working Process
          </h1>
          <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-main-black mt-5">
            Four working processes commonly employed by IT businesses
          </h2>
          <div className="w-fit relative mt-[88px]">
            <img
              src="/assets//images/home-seven/process-1.png"
              alt=""
              className=""
            />
            <button className="w-[50px] sm:w-[100px] aspect-square rounded-[10px] flex justify-center items-center absolute -bottom-[25px] sm:-bottom-[50px] right-0 bg-it-blue">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0613 15.1781L5.47652 23.5123C3.03627 24.9067 0 23.1447 0 20.3342V3.66584C0 0.855278 3.03627 -0.906735 5.47652 0.487697L20.0613 8.82185C22.5204 10.2271 22.5204 13.7729 20.0613 15.1781Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-[30px]">
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-seven/process-2.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">01</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                  Assessment & Planning
                </h1>
                <p className="text-paragraph">
                  Evaluate IT systems, infrastructure, processes, and
                  capabilities to identify strengths, weakness, inefficiencies,
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-seven/process-3.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">02</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                  Design and Architecture
                </h1>
                <p className="text-paragraph">
                  Define the desired future state of IT systems, infrastructure,
                  an operations aligned with business objectives
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-seven/process-4.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">03</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                  Implementation & Execution
                </h1>
                <p className="text-paragraph">
                  Adopt agile methodologies iterative and incremental delive
                  transformation initiatives, allowing for flexibility
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-seven/process-5.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">04</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                  Monitoring & Optimization
                </h1>
                <p className="text-paragraph">
                  Define key performance indicators a metrics to track the
                  progress a impact of IT transformation initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
