import React from "react";
import { Link } from "react-router-dom";

export default function CorporateFooter() {
  return (
    <footer className="pt-20 bg-buisness-light-black text-white">
      <div className="flex flex-wrap justify-between gap-5 mx-auto mb-20 theme-container">
        <div className="w-fit max-w-[300px]">
          <img src="/assets/images/logo_optima (1).png" alt="logo" />
          <p className="max-w-[300px] text-white/70 my-6">OPTIMA — Solutions RH et Sécurité pour entreprises modernes.</p>
        </div>
        <div className="w-fit max-w-[300px]">
          <h3 className="font-semibold text-white text-18">Adresse</h3>
          <p className="mt-3.5 text-white/70">6, Rue Echih – 2éme étage – App B2.1 - 2080 Ariana</p>
          <h3 className="mt-6 font-semibold text-white text-18">Contact</h3>
          <p className="mt-3.5 text-white/70">info@optima.tn<br/>+216 71 000 000</p>
        </div>
        <div className="w-fit max-w-[300px]">
          <h3 className="font-semibold text-white text-18">Newsletter</h3>
          <p className="text-white/70 pt-3.5">Abonnez-vous pour recevoir des mises à jour.</p>
          <div className="mt-4 flex gap-2">
            <input type="email" placeholder="Email Address" className="bg-transparent border border-white/10 py-2.5 px-4 rounded-md focus:outline-none text-white" />
            <button className="py-2.5 px-4 bg-buisness-red rounded-md font-semibold">S'inscrire</button>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[65px] bg-buisness-dark-black">
        <div className="h-full mx-auto theme-container flex items-center justify-between">
          <span className="text-white/50">2026 © tout droit réservé <b className="text-white">Optima</b></span>
          <ul className="flex items-center space-x-3">
            <li className="font-medium text-white/70">Privacy Policy</li>
            <li className="font-medium text-white/70">|</li>
            <li className="font-medium text-white/70">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
