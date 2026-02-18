import React from "react";
import ProjectFaq from "./ProjectFaq";

export default function ProjectBI() {
  return (
    <section className="mb-16 md:mb-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-6 md:grid-cols-12 gap-[30px]">
        <div className="w-full col-span-6">
          <h1 className="col-span-6 mt-10 font-semibold tracking-tight text-34 mb-12">Pourquoi choisir Sage BI ?</h1>
          <p className="mt-4 mb-5 text-paragraph">Sage BI transforme vos données en informations stratégiques : dashboards temps‑réel, analyses ad‑hoc et reporting consolidé pour toutes vos équipes.</p>
          <ul className="">
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-8">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z" fill="#007a55"/></svg>
              Dashboards interactifs et KPIs temps‑réel
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-8">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z" fill="#007a55"/></svg>
              Consolidation et qualité des données multi‑sources
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-8">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z" fill="#007a55"/></svg>
              Self‑service analytics pour les équipes métier
            </li>
            <li className="flex gap-[15px] items-center text-18 font-medium text-main-black mb-8">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08203 13.7188L1.24609 7.88281C0.894531 7.53125 0.894531 6.93359 1.24609 6.58203L2.51172 5.31641C2.86328 4.96484 3.42578 4.96484 3.77734 5.31641L7.75 9.25391L16.1875 0.816406C16.5391 0.464844 17.1016 0.464844 17.4531 0.816406L18.7188 2.08203C19.0703 2.43359 19.0703 3.03125 18.7188 3.38281L8.38281 13.7188C8.03125 14.0703 7.43359 14.0703 7.08203 13.7188Z" fill="#007a55"/></svg>
              Alerting & tableaux automatisés pour gagner en réactivité
            </li>
          </ul>
        </div>
        <ProjectFaq />
      </div>
    </section>
  );
}
