import React from "react";

export default function CorporatePageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-red-700">OPTIMA</a>
          <nav className="space-x-6 hidden md:flex">
            <a href="/" className="text-gray-700 hover:text-red-700">Accueil</a>
            <a href="/a-propos" className="text-gray-700 hover:text-red-700">À propos</a>
            <a href="/contact" className="text-gray-700 hover:text-red-700">Contact</a>
          </nav>
          <button className="md:hidden text-red-700">Menu</button>
        </div>
      </header>

      <main className="flex-1 bg-white">{children}</main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
          <div>
            <div className="text-xl font-bold">OPTIMA</div>
            <div className="text-sm text-gray-300 mt-2">Solutions RH et Sécurité</div>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            © {new Date().getFullYear()} OPTIMA. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
