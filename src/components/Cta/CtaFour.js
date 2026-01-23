import React from "react";

export default function CtaFour() {
  return (
    <div
      id="video-player"
      className="video-play-btn fixed top-0 left-0 w-screen h-screen bg-black/70 z-[51] hidden justify-center items-center player-open-anim transition-all duration-300 overflow-hidden origin-top-left"
    >
      <button className="absolute transition-all duration-300 text-24 text-white/90 hover:text-white/100 right-10 top-10">
        X
      </button>
      <iframe
        className="absolute"
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/ZUXNCY2R5Wo?si=E8zWRcLieSpVH2z4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
