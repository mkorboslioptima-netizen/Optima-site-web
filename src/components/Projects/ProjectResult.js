import React from "react";
import ProjectFaq from "./ProjectFaq";

export default function ProjectResult() {
  return (
    <section className="mb-16 md:mb-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-6 md:grid-cols-12 gap-[30px]">
        <div className="w-full col-span-6">
          <img
            src="/assets/images/project-result.webp"
            alt=""
            className="w-full rounded-xl"
          />
          <h1 className="col-span-6 mt-10 font-semibold tracking-tight text-34">
            Project Results
          </h1>
          <p className="mt-4 mb-5 text-paragraph">
            This comprehensive monitoring and logging system contribute to both
            the security efficiency of remote support operations, enabling rapid
            identification resolution of while maintaining transparent of
            support activities.
          </p>
          <ul className="">
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z"
                  fill="#794AFF"
                />
              </svg>
              Global Data Analysis
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z"
                  fill="#794AFF"
                />
              </svg>
              Immediate settlement
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z"
                  fill="#794AFF"
                />
              </svg>
              Guaranteed by the services
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z"
                  fill="#794AFF"
                />
              </svg>
              Infrastructure solutions
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z"
                  fill="#794AFF"
                />
              </svg>
              Global Data Analysis
            </li>
          </ul>
        </div>
        <ProjectFaq />
      </div>
    </section>
  );
}
