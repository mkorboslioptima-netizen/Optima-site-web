import React from "react";

export default function AboutInfoOptima() {
  return (
    <section className="about-info py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <h3>Nos Services</h3>
            <ul>
              <li>Progiciels de gestion (ERP, GRH, Finance, comptable, CRM)</li>
              <li>Développement de solutions sur mesure</li>
              <li>Formation du personnel</li>
              <li>Audit des systèmes existants</li>
              <li>Conseil en système d'information</li>
              <li>Support immédiat</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Nos Atouts</h3>
            <ul>
              <li>Veille technologique permanente</li>
              <li>Plus de 13 ans d'expérience</li>
              <li>Rapidité des livraisons</li>
              <li>Premium Support</li>
            </ul>
            <div className="mt-3">
              <h4>Partenaires principaux</h4>
              <p>SAGE — Leader mondial des solutions de gestion</p>
              <p>HOROQUARTZ — N°1 mondial des solutions de gestion des temps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
