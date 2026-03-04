import React from "react";

export default function AboutFAQOptima() {
  return (
    <section className="about-faq py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>FAQ</h2>
            <p>Questions fréquentes concernant OPTIMA</p>
          </div>
          <div className="col-md-6">
            <h5>Quels sont vos principaux services ?</h5>
            <p>ERP, GRH, Finance, développement sur-mesure, formation, audit et support.</p>
          </div>
          <div className="col-md-6">
            <h5>Depuis quand existe OPTIMA ?</h5>
            <p>OPTIMA a été fondée en 2006 et compte aujourd'hui près de 20 années d'expérience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
