import React from "react";

const PARTNERS_DATA = [
  {
    id: 1,
    name: "SAGE",
    role: "Partenaire ERP & Gestion",
    description: "Leader mondial des solutions ERP, GRH, Finance, comptable et CRM. Partenariat depuis la création d'OPTIMA.",
    website: "www.sagetunisie.tn",
    color: "#00DC82",
    logo: "/assets/images/partners/sage.png"
  },
  {
    id: 2,
    name: "HOROQUARTZ",
    role: "Partenaire Gestion des Temps",
    description: "N°1 mondial des solutions de gestion des temps et de contrôle d'accès. Intégré depuis 2010.",
    website: "www.horoquartz.tn",
    color: "#FF6B35",
    logo: "/assets/images/partners/horoquartz.png"
  }
];

export default function AboutPartnersOptima() {
  return (
    <section className="about-partners py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Nos Partenaires</h2>
            <p>Partenaires stratégiques d'OPTIMA</p>
          </div>

          {PARTNERS_DATA.map((p) => (
            <div key={p.id} className="col-md-6 mb-4">
              <div className="partner-card d-flex align-items-start gap-3 p-3 border rounded h-100">
                <div style={{width:100}}>
                  <img src={p.logo} alt={p.name} style={{width:'100%'}} />
                </div>
                <div>
                  <h5 style={{color:p.color}}>{p.name}</h5>
                  <small className="text-muted">{p.role}</small>
                  <p className="mt-2 mb-0">{p.description}</p>
                  <a href={`https://${p.website}`} className="d-block mt-2">{p.website}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
