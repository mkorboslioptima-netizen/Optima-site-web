import React from "react";

const team = [
  { name: "Amine Ben Ali", role: "CEO & Fondateur", img: "/assets/images/team/ame.jpg" },
  { name: "Salma Trabelsi", role: "Directrice Technique", img: "/assets/images/team/salma.jpg" },
  { name: "Khaled Mansour", role: "Responsable Support", img: "/assets/images/team/khaled.jpg" }
];

export default function AboutTeamPreview() {
  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="theme-container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
