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

export default function PolitiqueConfidentialite() {
  return (
    <InnerPageLayout>
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité d'Optima. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles."
        path="/politique-confidentialite"
      />
      <BreadCrumb
        pageTitle="Politique de Confidentialité"
        currentPage="Politique de Confidentialité"
        href="/politique-confidentialite"
      />

      <section className="py-16 bg-white">
        <div className="theme-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-main-black mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-paragraph mb-10">
            Chez Optima, nous nous engageons à protéger la vie privée de nos utilisateurs et
            clients. La présente politique décrit comment nous collectons, utilisons et protégeons
            vos données personnelles.
          </p>

          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est la
              société <strong>OPTIMA</strong>, joignable à l'adresse support@optima.tn.
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
              <li>Nom et secteur d'activité de l'entreprise</li>
              <li>Effectif de l'entreprise</li>
              <li>Messages envoyés via le formulaire de contact ou de devis</li>
            </ul>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données sont collectées pour :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Répondre à vos demandes de devis et d'information</li>
              <li>Vous recontacter dans le cadre de votre projet</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
            </ul>
          </Section>

          <Section title="4. Base légale">
            <p>
              Le traitement de vos données est fondé sur votre consentement explicite lors de
              la soumission d'un formulaire, et sur l'intérêt légitime d'OPTIMA à vous fournir
              une réponse adaptée à votre demande.
            </p>
          </Section>

          <Section title="5. Conservation des données">
            <p>
              Vos données personnelles sont conservées pour une durée maximale de{" "}
              <strong>3 ans</strong> à compter de votre dernier contact avec Optima, sauf
              obligation légale contraire.
            </p>
          </Section>

          <Section title="6. Partage des données">
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées
              uniquement avec nos équipes internes dans le cadre du traitement de votre demande.
            </p>
          </Section>

          <Section title="7. Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
              Les communications entre votre navigateur et notre serveur sont chiffrées (HTTPS).
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Notre site utilise des cookies fonctionnels et analytiques. Vous pouvez gérer
              vos préférences via le bandeau de consentement affiché lors de votre première
              visite. Le refus des cookies n'affecte pas le fonctionnement essentiel du site.
            </p>
          </Section>

          <Section title="9. Vos droits">
            <p>Conformément à la législation applicable, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a
                href="mailto:support@optima.tn"
                className="text-buisness-red hover:underline font-medium"
              >
                support@optima.tn
              </a>
            </p>
          </Section>

          <Section title="10. Modifications">
            <p>
              Optima se réserve le droit de modifier la présente politique à tout moment.
              Toute modification sera publiée sur cette page avec une date de mise à jour.
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
