import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbAboutOptima() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-seo pt-28 pb-10">

      {/* Canvas particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Cercles décoratifs */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, rgba(220, 38, 38, 1), transparent)" }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, rgba(220, 38, 38, 1), transparent)" }}
      />

      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Gauche — Breadcrumb nav + Titre */}
          <div className="flex flex-col justify-center py-10 pl-4 lg:pl-0">

            {/* Fil d'ariane */}
            <div className="flex items-center gap-2 mb-6">
              <Link
                to="/"
                className="text-sm text-paragraph hover:text-buisness-red transition-colors duration-200"
              >
                Accueil
              </Link>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path
                  d="M1 9L4.29289 5.70711C4.68342 5.31658 4.68342 4.68342 4.29289 4.29289L1 1"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm text-buisness-red font-semibold">
                A propos
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-buisness-red/10 border border-buisness-red/20 rounded-full w-fit mb-5">
              <div className="w-2 h-2 rounded-full bg-buisness-red animate-pulse" />
              <span className="text-xs font-semibold text-buisness-red uppercase tracking-widest">
                Depuis 2006
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-[42px] md:text-[58px] font-bold text-main-black leading-tight tracking-tight">
              A propos
              <span className="block text-buisness-red">d&#39;OPTIMA</span>
            </h1>

            <p className="mt-4 text-paragraph text-lg max-w-[440px]">
              Conseil informatique et solutions de gestion en Tunisie.
              Partenaire SAGE et HOROQUARTZ depuis plus de 19 ans.
            </p>

            {/* Ligne rouge animée */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-16 h-1 rounded-full bg-buisness-red" />
              <div className="w-6 h-1 rounded-full bg-buisness-red/40" />
              <div className="w-3 h-1 rounded-full bg-buisness-red/20" />
            </div>
          </div>

          {/* Droite — Carte stats flottante */}
          <div className="flex justify-center items-center py-10">
            <div className="relative w-full max-w-sm">

              {/* Carte principale */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-buisness-red animate-pulse" />
                  <span className="text-sm font-semibold text-paragraph uppercase tracking-widest">
                    OPTIMA en chiffres
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "2006", label: "Annee de creation" },
                    { val: "20+", label: "Ans d'experience" },
                    { val: "2", label: "Partenaires mondiaux" },
                    { val: "100+", label: "Projets realises" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl p-4 text-center hover:bg-buisness-red/5 transition-colors duration-300"
                    >
                      <p className="text-2xl font-bold text-buisness-red">{stat.val}</p>
                      <p className="text-xs text-paragraph mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Ligne partenaires */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-paragraph">Partenaires officiels</span>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                      SAGE
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-full border border-orange-200">
                      HOROQUARTZ
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-buisness-red text-white px-4 py-2 rounded-xl shadow-lg">
                <p className="text-xs font-semibold">Ariana, Tunisie</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}