import React from "react";

export default function HeroAboutOptima() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="mb-3">OPTIMA — Conseil & Solutions de Gestion</h1>
            <p className="lead">
              Fondée en 2006, OPTIMA accompagne les organisations en Tunisie
              avec des solutions ERP, GRH, Finance et des développements sur
              mesure. Partenaire SAGE et HOROQUARTZ, nous offrons conseil,
              formation et support premium.
            </p>
            <ul className="list-unstyled mt-4">
              <li><strong>Adresse:</strong> 6, Rue Echih – 2ème étage – App B2.1 - 2080 Ariana, Tunisie</li>
              <li><strong>Téléphone:</strong> +216 71 715 397</li>
              <li><strong>Site:</strong> www.optima.tn</li>
            </ul>
          </div>
          <div className="col-lg-5 text-center">
            <div className="hero-image" style={{borderRadius:12,overflow:'hidden'}}>
              <img src="/assets/images/optima-office.jpg" alt="Optima Office" style={{width:'100%'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
