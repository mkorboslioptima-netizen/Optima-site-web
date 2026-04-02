import React from "react";
import OutsourcingSidebar from "./OutsourcingSidebar";

export default function ServiceDetailsInfoOutsourcing() {
  const blocks = [
    {
      number: "1",
      text: "Calcul & édition des bulletins : salaires, heures supplémentaires, primes, congés. Bulletins conformes et horodatés chaque mois dans un processus certifié ISO 9001.",
    },
    {
      number: "2",
      text: "Déclarations sociales & fiscales : CNSS, RAS, déclaration employeur annuelle. Veille réglementaire et intégration des mises à jour légales.",
    },
    {
      number: "3",
      text: "Sécurité & confidentialité : environnement ISO 27001, accès contrôlés, traçabilité complète et conventions de confidentialité pour chaque client.",
    },
  ];

  return (
    <section className="pt-16 md:pt-[130px]"> 
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">

          <div data-aos="fade-up" className="col-span-8">
            <div className="flex justify-center mb-8">
              <img src="/assets/images/service/Optima-Logo.png" alt="Optima" className="h-20 md:h-24 object-contain" />
            </div>

            <p className="text-paragraph mt-[30px] mb-10 max-w-[786px]">
              OPTIMA prend en charge l'intégralité de votre cycle de paie dans le strict
              respect du Code du Travail tunisien, des obligations CNSS et des déclarations
              fiscales (RAS, IRPP). Certifiés <strong className="text-[#111] font-semibold">ISO 9001</strong> &amp; <strong className="text-[#111] font-semibold">ISO 27001</strong>, nous offrons une garantie formelle sur la qualité et la sécurité de vos données.
            </p>
          </div>

          <div className="-mt-[130px] col-span-8 lg:col-span-4">
            <OutsourcingSidebar />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[80px] pt-[80px] border-t border-gray-200">
          {blocks.map((block, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-buisness-red/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-buisness-red font-bold">{block.number}</span>
                </div>
                <p className="text-paragraph">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
