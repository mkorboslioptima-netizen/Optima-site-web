import React from "react";

export default function TestimonialsEtemptation() {
  const testimonials = [
    {
      name: "Marie Dupont",
      title: "Directrice RH",
      company: "TechCorp France",
      content: "eTemptation a transformé notre gestion des congés. Nous avons gagné 20 heures par semaine et les erreurs ont diminué de 95%. Excellent investissement !",
      rating: 5
    },
    {
      name: "Jean-Pierre Martin",
      title: "Responsable Paie & RH",
      company: "Distribution Plus",
      content: "L'implémentation a été en douceur et l'équipe support vraiment à l'écoute. Aujourd'hui, nos collaborateurs apprécient l'autonomie que leur permet la plateforme.",
      rating: 5
    },
    {
      name: "Sophie Leclerc",
      title: "DRH Group",
      company: "Groupe Multiservices",
      content: "La conformité légale automatique nous a sauvé plusieurs fois. Pas de risques, une tranquillité d'esprit garantie avec les mises à jour régulières.",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Ils Font Confiance à eTemptation
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur gestion des absences et des congés
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-buisness-red/40 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-paragraph italic leading-relaxed mb-6 min-h-24">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-300 pt-6">
                <p className="font-bold text-main-black">
                  {testimonial.name}
                </p>
                <p className="text-sm text-buisness-red font-semibold">
                  {testimonial.title}
                </p>
                <p className="text-sm text-paragraph">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Highlight */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-8 bg-gradient-to-r from-buisness-red/5 to-transparent rounded-xl">
          <div>
            <p className="text-3xl font-bold text-buisness-red">4.9/5</p>
            <p className="text-sm text-paragraph mt-2">Note Moyenne</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-buisness-red">500+</p>
            <p className="text-sm text-paragraph mt-2">Entreprises</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-buisness-red">98%</p>
            <p className="text-sm text-paragraph mt-2">Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-buisness-red">20h</p>
            <p className="text-sm text-paragraph mt-2">Gain/Mois (moyen)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
