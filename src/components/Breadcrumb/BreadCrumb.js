import { Link } from "react-router-dom";
import React from "react";
import WinGridBg from "../Hero/WinGridBg";

export default function BreadCrumb({ pageTitle, to, currentPage }) {
  return (
    <section
      id="h1-breadcrumb"
      className="relative pt-[80px]" // hauteur du header
    >
      <div className="relative w-full overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">

        {/* Background */}
        <WinGridBg />

        {/* Content */}
        <div className="relative z-10 mx-auto theme-container w-full">
          <div className="flex flex-col items-center justify-center py-16">

            {/* Icon */}
            <div className="mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-center font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl">
              {pageTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-center text-gray-600 text-lg max-w-2xl">
              Solution complète de gestion de paie pour optimiser vos processus RH et garantir la conformité totale
            </p>

            {/* Breadcrumb */}
            {to && currentPage && (
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                <Link to={to} className="hover:text-emerald-600">
                  Accueil
                </Link>
                <span>›</span>
                <span className="text-emerald-600 font-medium">
                  {currentPage}
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
