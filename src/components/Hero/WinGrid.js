"use client";
import React, { useEffect, useRef } from "react";

const WinGrid = () => {
  const gridRef = useRef(null);
  const nearByRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create grid ONCE
    for (let i = 0; i < 1000; i++) {
      const el = document.createElement("div");
      el.className = "win-btn";
      el.dataset.id = i;
      grid.appendChild(el);
    }

    const offset = 50;
    const angles = [];
    for (let i = 0; i < 360; i += 45) {
      angles.push((i * Math.PI) / 180);
    }

    const clearNearBy = () => {
      nearByRef.current.forEach(el => {
        el.style.borderImage = null;
      });
      nearByRef.current = [];
    };

    const handleMouseMove = (e) => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;

        const x = e.clientX;
        const y = e.clientY;

        clearNearBy();

        angles.forEach(rad => {
          const cx = x + Math.cos(rad) * offset;
          const cy = y + Math.sin(rad) * offset;
          const el = document.elementFromPoint(cx, cy);

          if (el?.classList.contains("win-btn")) {
            const rect = el.getBoundingClientRect();
            const bx = x - rect.left;
            const by = y - rect.top;

            el.style.borderImage = `
              radial-gradient(
                80px 80px at ${bx}px ${by}px,
                rgba(255,74,74,.6),
                transparent
              ) 1 / 1px / 0 stretch
            `;

            nearByRef.current.push(el);
          }
        });
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", clearNearBy);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", clearNearBy);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 win-grid"
    />
  );
};

export default WinGrid;
