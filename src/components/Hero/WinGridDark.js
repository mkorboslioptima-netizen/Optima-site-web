"use client";
import React, { useEffect, useRef } from "react";

const WinGridDark = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (grid) {
      for (let i = 0; i < 1000; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("win-btn-sm");
        newElement.id = i;
        grid.appendChild(newElement);
      }

      const offset = 49;
      const angles = []; // in deg
      for (let i = 0; i <= 360; i += 45) {
        angles.push((i * Math.PI) / 180);
      }
      let nearBy = [];

      const clearNearBy = () => {
        nearBy
          .splice(0, nearBy.length)
          .forEach((e) => (e.style.borderImage = null));
      };

      const buttons = grid.querySelectorAll(".win-btn-sm");

      buttons.forEach((b) => {
        b.onmouseleave = (e) => {
          e.target.style.borderImage = null;
          e.target.border = "1px solid transparent";
        };

        b.onmouseenter = clearNearBy;

        b.addEventListener("mousemove", (e) => {
          const rect = e.target.getBoundingClientRect();
          const x = e.clientX - rect.left; // x position within the element
          const y = e.clientY - rect.top; // y position within the element
        });
      });

      grid.addEventListener("mousemove", (e) => {
        const x = e.x; // x position within the element
        const y = e.y; // y position within the element

        clearNearBy();
        nearBy = angles.reduce((acc, rad) => {
          const cx = Math.floor(x + Math.cos(rad) * offset);
          const cy = Math.floor(y + Math.sin(rad) * offset);
          const element = document.elementFromPoint(cx, cy);

          if (
            element !== null &&
            element.className === "win-btn-sm" &&
            acc.findIndex((ae) => ae.id === element.id) < 0
          ) {
            const brect = element.getBoundingClientRect();
            const bx = x - brect.left; // x position within the element
            const by = y - brect.top; // y position within the element
            if (!element.style.borderImage)
              element.style.borderImage = `radial-gradient(${offset * 1.5}px ${
                offset * 1.5
              }px at ${bx}px ${by}px ,#00DF8E 0%,rgba(0, 223, 142, 0) 100%,transparent ) 9 / 1px / 0px stretch`;
            return [...acc, element];
          }
          return acc;
        }, []);
      });

      grid.onmouseleave = clearNearBy;
    }
  }, []);

  return (
    <div
      id="win-grid-dark"
      ref={gridRef}
      className="absolute top-0 left-0 w-full h-full win-grid-dark"
    ></div>
  );
};

export default WinGridDark;
