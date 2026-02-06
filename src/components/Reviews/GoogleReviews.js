import React, { useState } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Ahmed Ben Salah",
    role: "Directeur Financier",
    company: "Groupe Mehdi",
    rating: 5,
    text: "Optima a parfaitement intégré Sage 100 Comptabilité dans notre structure. L'équipe est réactive et professionnelle. Un vrai gain de productivité pour notre service financier.",
    date: "Il y a 2 semaines",
    avatar: "AB",
  },
  {
    name: "Sonia Trabelsi",
    role: "DRH",
    company: "TunisPharma",
    rating: 5,
    text: "La mise en place de Sage Paie & RH avec Optima s'est déroulée sans accroc. Le support après-vente est excellent et les formations très complètes.",
    date: "Il y a 1 mois",
    avatar: "ST",
  },
  {
    name: "Karim Mejri",
    role: "Gérant",
    company: "KM Distribution",
    rating: 5,
    text: "Grâce à Sage 100 Gestion Commerciale, nous avons optimisé toute notre chaîne logistique. Optima nous a accompagnés du début à la fin avec beaucoup de rigueur.",
    date: "Il y a 2 mois",
    avatar: "KM",
  },
  {
    name: "Nadia Gharbi",
    role: "Responsable Planification",
    company: "SudTextile",
    rating: 4,
    text: "L'intégration Horoquartz a transformé notre Gestion des temps. L'équipe Optima a su adapter la solution à nos contraintes de production.",
    date: "Il y a 3 mois",
    avatar: "NG",
  },
  {
    name: "Mohamed Khaldi",
    role: "DAF",
    company: "AlphaServices",
    rating: 5,
    text: "Partenaire de confiance depuis 3 ans. Optima maîtrise parfaitement l'écosystème Sage et nous offre un accompagnement sur mesure.",
    date: "Il y a 4 mois",
    avatar: "MK",
  },
  {
    name: "Leila Bouzid",
    role: "Directrice Générale",
    company: "BouzidConsult",
    rating: 5,
    text: "Nous avons fait appel à Optima pour la formation de nos équipes sur Sage 100. Les formateurs sont compétents et pédagogues. Je recommande vivement.",
    date: "Il y a 5 mois",
    avatar: "LB",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= count ? "#FBBC04" : "#E0E0E0"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [visibleCount, setVisibleCount] = useState(3);
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  const visible = REVIEWS.slice(0, visibleCount);

  return (
    <section className="py-16 md:py-[130px] bg-gray-50">
      <div className="theme-container w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleLogo />
            <span className="text-sm font-medium text-gray-500">Avis Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-main-black mb-4">
            Ce que nos clients disent
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-bold text-main-black">{avgRating}</span>
            <div>
              <Stars count={Math.round(avgRating)} />
              <p className="text-xs text-gray-400 mt-1">
                Basé sur {REVIEWS.length} avis
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {visible.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#007a55] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-main-black">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Rating & Date */}
              <div className="flex items-center gap-2 mb-3">
                <Stars count={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>

              {/* Text */}
              <p className="text-sm text-paragraph leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {visibleCount < REVIEWS.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(REVIEWS.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-[#007a55] border-2 border-[#007a55]/20 hover:bg-[#007a55]/5 transition-colors"
            >
              Voir tous les avis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
