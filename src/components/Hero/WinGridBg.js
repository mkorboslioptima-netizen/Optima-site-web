"use client";
import React, { useEffect, useRef } from "react";

const WinGridBg = () => {
  const gridRef = useRef(null);
  const nearByRef = useRef([]);
  const anglesRef = useRef([]);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Créer la grille une seule fois
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 1000; i++) {
      const newElement = document.createElement("div");
      newElement.classList.add("win-btn");
      newElement.id = i;
      fragment.appendChild(newElement);
    }
    grid.appendChild(fragment);

    // Précalculer les angles une seule fois
    if (anglesRef.current.length === 0) {
      for (let i = 0; i <= 360; i += 45) {
        anglesRef.current.push((i * Math.PI) / 180);
      }
    }

    const offset = 49;
    const buttons = grid.querySelectorAll(".win-btn");

    const clearNearBy = () => {
      nearByRef.current.forEach((e) => {
        if (e && e.style) {
          e.style.borderImage = null;
        }
      });
      nearByRef.current = [];
    };

    // Utiliser la délégation d'événements au lieu d'attacher aux boutons individuels
    const handleButtonMouseLeave = (e) => {
      if (e.target.classList.contains("win-btn")) {
        e.target.style.borderImage = null;
        e.target.style.border = "1px solid transparent";
      }
    };

    const handleButtonMouseEnter = (e) => {
      if (e.target.classList.contains("win-btn")) {
        clearNearBy();
      }
    };

    const handleButtonMouseMove = (e) => {
      if (e.target.classList.contains("win-btn")) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px, rgba(121, 74, 255, 0.7), rgba(121, 74, 255, 0.4), rgba(121, 74, 255, 0), #eaebf0, transparent) 9 / 2px / 0px stretch`;
      }
    };

    // Throttle avec requestAnimationFrame
    const handleMouseMove = (e) => {
      if (rafIdRef.current) {
        return;
      }

      rafIdRef.current = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        clearNearBy();

        const seenIds = new Set();

        anglesRef.current.forEach((rad) => {
          const cx = Math.floor(x + Math.cos(rad) * offset);
          const cy = Math.floor(y + Math.sin(rad) * offset);
          const element = document.elementFromPoint(cx, cy);

          if (
            element &&
            element.classList.contains("win-btn") &&
            !seenIds.has(element.id)
          ) {
            seenIds.add(element.id);
            const brect = element.getBoundingClientRect();
            const bx = x - brect.left;
            const by = y - brect.top;

            if (!element.style.borderImage) {
              element.style.borderImage = `radial-gradient(${offset * 2}px ${
                offset * 2
              }px at ${bx}px ${by}px, rgba(255, 74, 74, 0.7), rgba(255, 0, 0, 0.1), transparent) 9 / 1px / 0px stretch`;
            }
            nearByRef.current.push(element);
          }
        });

        rafIdRef.current = null;
      });
    };

    const handleMouseLeave = () => {
      clearNearBy();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };

    // Délégation d'événements
    grid.addEventListener("mouseleave", handleButtonMouseLeave, true);
    grid.addEventListener("mouseenter", handleButtonMouseEnter, true);
    grid.addEventListener("mousemove", handleButtonMouseMove, true);
    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid.removeEventListener("mouseleave", handleButtonMouseLeave, true);
      grid.removeEventListener("mouseenter", handleButtonMouseEnter, true);
      grid.removeEventListener("mousemove", handleButtonMouseMove, true);
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      clearNearBy();
    };
  }, []); // Dépendances vides !

  return (
    <div
      className="absolute top-0 left-0 z-0 w-full h-full win-grid win-grid-bg"
      id="win-grid"
      ref={gridRef}
    ></div>
  );
};

export default WinGridBg;