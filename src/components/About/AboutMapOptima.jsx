import React from "react";
import { Link } from "react-router-dom";

const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Adresse",
    value: "6, Rue Echih - 2eme etage - App B2.1\n2080 Ariana, Tunisie",
  },
  {
    icon: "📞",
    label: "Telephone",
    value: "+216 71 715 397",
  },
  {
    icon: "🌐",
    label: "Site web",
    value: "www.optima.tn",
  },
  {
    icon: "🕒",
    label: "Horaires",
    value: "Lun - Ven : 08h00 - 17h30",
  },
];

export default function AboutMapOptima() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full mx-auto theme-container">

        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-2 bg-buisness-red/10 text-buisness-red font-semibold rounded-full text-sm inline-block mb-6">
            Ou nous trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-main-black mb-6">
            Notre Siege - Ariana, Tunisie
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Venez nous rencontrer ou contactez-nous pour discuter de vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          <div
            className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm"
            data-aos="fade-right"
          >
            <div>
              <h3 className="font-bold text-2xl text-main-black mb-8">
                Coordonnees
              </h3>
              <div className="flex flex-col gap-6">
                {CONTACT_DETAILS.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-buisness-red/10 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-buisness-red uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p
                        className="text-paragraph text-sm"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-buisness-red text-white font-semibold rounded-lg hover:bg-buisness-red transition-all duration-300 w-full">
                <span>Nous ecrire</span>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            style={{ minHeight: "420px" }}
            data-aos="fade-left"
          >
            <iframe
              title="Localisation OPTIMA Ariana Tunisie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3!2d10.1635!3d36.8640!2m3!1f45!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb9b3b3b3b3b%3A0x0!2s6+Rue+Echih%2C+Ariana+2080%2C+Tunisie!5e1!3m2!1sfr!2stn!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}