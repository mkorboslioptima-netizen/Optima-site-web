import React from "react";
import { Link } from "react-router-dom";

export default function AboutPageBreadcrumb() {
  return (
    <div className="py-6">
      <div className="theme-container mx-auto">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:underline">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">À propos</span>
        </nav>
      </div>
    </div>
  );
}
