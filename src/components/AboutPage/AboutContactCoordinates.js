import React from "react";

export default function AboutContactCoordinates() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg" data-aos="fade-up">
            <h5 className="font-semibold text-gray-900">Adresse</h5>
            <p className="mt-2 text-gray-700">12 Rue de l'Entreprise, 75000 Paris, France</p>
          </div>
          <div className="p-6 border rounded-lg" data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-semibold text-gray-900">Téléphone</h5>
            <p className="mt-2 text-gray-700">+33 1 23 45 67 89</p>
            <h5 className="mt-4 font-semibold text-gray-900">Email</h5>
            <p className="mt-2 text-gray-700">contact@optima.example</p>
          </div>
          <div className="p-6 border rounded-lg" data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-semibold text-gray-900">Site web</h5>
            <p className="mt-2 text-gray-700">www.optima.example</p>
          </div>
        </div>
      </div>
    </section>
  );
}
