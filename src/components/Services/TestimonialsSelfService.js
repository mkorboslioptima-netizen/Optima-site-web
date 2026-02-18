import React from "react";

export default function TestimonialsSelfService() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice RH - Tech Solutions",
      company: "Tech Solutions France",
      image: "👩‍💼",
      quote: "Self Service a transformé notre département RH. Nos collaborateurs sont beaucoup plus autonomes et nous avons gagné 40% de productivité."
    },
    {
      name: "Philippe Mercier",
      role: "Manager - Secteur Industriel",
      company: "IndustrieXL",
      image: "👨‍💼",
      quote: "L'interface est tellement intuitive que même les moins tech-savvy adorent l'utiliser. Les demandes de congés se font en 30 secondes!"
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Paie & RH",
      company: "Groupe Retail Europe",
      image: "👩‍💼",
      quote: "L'intégration avec notre système de paie a été sans couture. Le support a été excellent à chaque étape du projet."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full mx-auto theme-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Découvrez comment Self Service a amélioré l'expérience RH dans différentes organisations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-paragraph mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-300 pt-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-main-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-paragraph">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
