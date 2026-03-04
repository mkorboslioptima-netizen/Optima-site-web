import React, { useState, useEffect } from "react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(handle);
  }, [end, duration]);
  return <span>{count}</span>;
}

export default function AboutStatsDynamic() {
  const stats = [
    { label: "Années d'expérience", value: 15 },
    { label: "Clients satisfaits", value: 300 },
    { label: "Projets réalisés", value: 1200 },
    { label: "Solutions déployées", value: 500 }
  ];

  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="theme-container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow-inner"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl font-bold mb-2">
                <Counter end={stat.value} />
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
