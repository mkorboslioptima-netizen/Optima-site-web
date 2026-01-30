"use client";

import React, { useEffect, useRef } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default function ProjectOverview() {
  const videoRef = useRef(null);

  // GLightbox
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".video-play-btn",
      autoplayVideos: true,
      touchNavigation: true,
    });

    return () => lightbox.destroy();
  }, []);

  // Preview on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full pt-16 md:pt-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid items-center grid-cols-6 md:grid-cols-12">

          {/* TEXT */}
          <div className="col-span-6">
            <h1 className="text-24 sm:text-34 leading-[55px] tracking-tight font-semibold text-main-black">
              Une solution unique pour piloter toute votre activité
            </h1>

            <p className="max-w-[533px] text-18 sm:text-24 leading-[40px] text-paragraph mt-2.5 md:mt-3.5">
              Sage 100 Gestion Commerciale facilite la gestion quotidienne de votre entreprise.
              Du devis à la facturation, en passant par l'approvisionnement et les stocks,
              vous gagnez en efficacité et en traçabilité.
            </p>
          </div>

          {/* VIDEO PREVIEW */}
          <div className="relative flex items-center justify-center col-span-6 mt-5 md:mt-0">

            {/* Video preview (autoplay on scroll) */}
            <video
              ref={videoRef}
              src="/videos/Sage.mp4"
              muted
              playsInline
              preload="metadata"
              className="w-full rounded-xl"
            />

            {/* Play button → Lightbox */}
            <a
              href="/videos/Sage.mp4"
              data-type="video"
              data-source="local"
              className="absolute flex items-center justify-center video-play-btn"
            >
             
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
