import { useRef, useEffect } from "react";

const logos = [
  "./assets/images/home-five/clinets/Fourseason.svg",
  "./assets/images/home-five/clinets/Valeo.png",
  "./assets/images/home-five/clinets/Carrefour.png",
  "./assets/images/home-five/clinets/Autoliv.svg",
  "./assets/images/home-five/clinets/Lloyd.png",
  "./assets/images/home-five/clinets/Hutchinson.jpg",
  "./assets/images/home-five/clinets/Cotherm.jpg",
  "./assets/images/home-five/clinets/sanofi.jpg",
  "./assets/images/home-five/clinets/Longchamp.png",
  "./assets/images/home-five/clinets/Bkfood.svg",
];

const SPEED = 0.6; // px par frame

export default function LogoSliderThree() {
  const trackRef = useRef(null);
  const stateRef = useRef({ x: 0, dragging: false, startX: 0, startTrackX: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      const s = stateRef.current;
      if (!s.dragging) {
        s.x -= SPEED;
        // reset pour boucle seamless
        const halfWidth = el.scrollWidth / 2;
        if (Math.abs(s.x) >= halfWidth) s.x = 0;
      }
      el.style.transform = `translateX(${s.x}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = (e) => {
    const s = stateRef.current;
    s.dragging = true;
    s.startX = e.clientX;
    s.startTrackX = s.x;
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    s.x = s.startTrackX + (e.clientX - s.startX);
  };

  const onMouseUp = () => {
    stateRef.current.dragging = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="pb-16 md:pb-[130px]">
      <div className="w-full mx-auto border theme-container border-buisness-dark-black/5 rounded-2xl">
        <div className="w-full py-10 md:py-[70px]">
          <h1 className="w-full font-medium text-center text-paragraph">
            Ils nous font confiance
          </h1>

          <div
            className="mt-11 overflow-hidden relative select-none"
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* fondu sur les bords */}
            <div
              className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, white, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, white, transparent)" }}
            />

            <div
              ref={trackRef}
              className="flex"
              style={{ width: "max-content", cursor: "grab", willChange: "transform" }}
              onMouseDown={onMouseDown}
            >
              {[...logos, ...logos].map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-14 mx-8"
                  style={{ minWidth: "110px" }}
                >
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="max-h-full w-auto max-w-[110px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
