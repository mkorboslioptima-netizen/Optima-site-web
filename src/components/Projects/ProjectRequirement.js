import React from "react";

export default function ProjectRequirement() {
  return (
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 md:grid-cols-12 pb-2.5">
          <h1 className="col-span-6 font-semibold tracking-tight text-24 sm:text-34">
            Requirements <span className="sm:hidden"> & Solution </span>
          </h1>
          <h2 className="hidden col-span-6 font-semibold tracking-tight text-24 sm:text-34 sm:block">
            Our solution
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-5 py-10 border-b sm:grid-cols-12 border-purple/10 sm:gap-0">
          <div className="flex items-center col-span-6 gap-4 h-fit">
            <span className="flex items-center justify-center w-6 rounded-full aspect-square bg-purple">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48828 4.99609L1.49609 9.04297C1.35938 9.17969 1.14062 9.17969 1.03125 9.04297L0.484375 8.49609C0.347656 8.35938 0.347656 8.16797 0.484375 8.03125L3.71094 4.75L0.484375 1.49609C0.347656 1.35938 0.347656 1.14062 0.484375 1.03125L1.03125 0.484375C1.14062 0.347656 1.35938 0.347656 1.49609 0.484375L5.48828 4.53125C5.625 4.66797 5.625 4.85938 5.48828 4.99609Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="font-semibold text-18 text-main-black font-inter">
              Secure Connectivity
            </span>
          </div>
          <p className="col-span-6 text-paragraph">
            Remote support necessitates a secure and stable connection between
            the support provider and the user's system. Utilizing encrypted
            communication channels, such as Virtual Private Networks (VPNs) or
            secure remote desktop solutions
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5 py-10 border-b sm:grid-cols-12 border-purple/10 sm:gap-0">
          <div className="flex items-center col-span-6 gap-4 h-fit">
            <span className="flex items-center justify-center w-6 rounded-full aspect-square bg-purple">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48828 4.99609L1.49609 9.04297C1.35938 9.17969 1.14062 9.17969 1.03125 9.04297L0.484375 8.49609C0.347656 8.35938 0.347656 8.16797 0.484375 8.03125L3.71094 4.75L0.484375 1.49609C0.347656 1.35938 0.347656 1.14062 0.484375 1.03125L1.03125 0.484375C1.14062 0.347656 1.35938 0.347656 1.49609 0.484375L5.48828 4.53125C5.625 4.66797 5.625 4.85938 5.48828 4.99609Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="font-semibold text-18 text-main-black font-inter">
              User Authentication and Authorization
            </span>
          </div>
          <p className="col-span-6 text-paragraph">
            To maintain the integrity of remote support sessions, robust user
            authentication and authorization protocols are crucial. Implementing
            multi-factor authentication (MFA) adds an extra layer of security,
            requiring users to verify their identity
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5 py-10 border-b sm:grid-cols-12 border-purple/10 sm:gap-0">
          <div className="flex items-center col-span-6 gap-4 h-fit">
            <span className="flex items-center justify-center w-6 rounded-full aspect-square bg-purple">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48828 4.99609L1.49609 9.04297C1.35938 9.17969 1.14062 9.17969 1.03125 9.04297L0.484375 8.49609C0.347656 8.35938 0.347656 8.16797 0.484375 8.03125L3.71094 4.75L0.484375 1.49609C0.347656 1.35938 0.347656 1.14062 0.484375 1.03125L1.03125 0.484375C1.14062 0.347656 1.35938 0.347656 1.49609 0.484375L5.48828 4.53125C5.625 4.66797 5.625 4.85938 5.48828 4.99609Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="font-semibold text-18 text-main-black font-inter">
              Comprehensive Monitoring and Logging
            </span>
          </div>
          <p className="col-span-6 text-paragraph">
            Effective remote support requires real-time monitoring of the
            supported systems, network performance session activities etailed
            logging of support sessions helps in tracking changes,
            troubleshooting issues, and ensuring accountability.
          </p>
        </div>
      </div>
    </section>
  );
}
