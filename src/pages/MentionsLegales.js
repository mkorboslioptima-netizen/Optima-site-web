import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import SEO from "../components/SEO";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-main-black mb-3 border-l-4 border-buisness-red pl-4">
        {title}
      </h2>
      <div className="text-paragraph leading-relaxed space-y-2 pl-4">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <InnerPageLayout>
      <SEO
        title="Mentions Légales"
        description="Mentions légales du site Optima, intégrateur Sage 100 en Tunisie. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation."
        path="/mentions-legales"
      />
      <BreadCrumb
        pageTitle="Mentions Légales"
        currentPage="Mentions Légales"
        href="/mentions-legales"
      />

      <section className="py-16 bg-white">
        <div className="theme-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-main-black mb-10">Mentions Légales</h1>

          <Section title="1. Éditeur du site">
            <p><strong>Raison sociale :</strong> OPTIMA</p>
            <p><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</p>
            <p><strong>Siège social :</strong> Tunisie</p>
            <p><strong>Email :</strong> support@optima.tn</p>
            <p><strong>Site web :</strong> www.optima.tn</p>
          </Section>

          <Section title="2. Activité">
            <p>
              Optima est un intégrateur certifié des solutions <strong>Sage 100</strong> et{" "}
              <strong>Horoquartz</strong> en Tunisie. La société propose des prestations
              d'intégration ERP, de gestion des temps et activités, d'outsourcing de la paie,
              ainsi que des solutions biométriques IDEMIA de contrôle d'accès.
            </p>
          </Section>

          <Section title="3. Directeur de la publication">
            <p>Le directeur de la publication est le représentant légal de la société OPTIMA.</p>
          </Section>

          <Section title="4. Hébergement">
            <p>
              Le présent site est hébergé par un prestataire tiers. Pour toute question relative
              à l'hébergement, veuillez nous contacter à l'adresse support@optima.tn.
            </p>
          </Section>

          <Section title="5. Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes) est
              la propriété exclusive d'OPTIMA ou de ses partenaires, et est protégé par les lois
              tunisiennes et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation partielle ou
              totale, par quelque procédé que ce soit, sans autorisation préalable et écrite
              d'OPTIMA est strictement interdite.
            </p>
          </Section>

          <Section title="6. Limitation de responsabilité">
            <p>
              OPTIMA s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur ce site. Cependant, la société ne peut garantir l'exactitude,
              la complétude ou l'actualité des informations. En conséquence, l'utilisateur
              reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </Section>

          <Section title="7. Liens hypertextes">
            <p>
              Le site www.optima.tn peut contenir des liens vers des sites tiers. OPTIMA
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant
              à leur contenu ou leurs pratiques.
            </p>
          </Section>

          <Section title="8. Droit applicable">
            <p>
              Les présentes mentions légales sont régies par le droit tunisien. En cas de
              litige, les tribunaux tunisiens seront seuls compétents.
            </p>
          </Section>

          <p className="text-sm text-gray-400 mt-10 border-t pt-6">
            Dernière mise à jour : Mars 2026
          </p>
        </div>
      </section>
    </InnerPageLayout>
  );
}
