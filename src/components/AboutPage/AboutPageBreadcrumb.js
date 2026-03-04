import React from "react";

export default function AboutPageBreadcrumb() {
  return (
    <div className="bg-gray-50 py-4 border-b">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-600" aria-label="breadcrumb">
          <ol className="flex gap-2 items-center">
            <li><a href="/" className="hover:text-red-700">Accueil</a></li>
            <li className="text-gray-400">/</li>
            <li className="font-semibold text-gray-800">À propos</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
