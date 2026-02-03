import React, { useEffect, useRef } from "react";

export default function CourseDetailsInfo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;

          if (entry.isIntersecting && !isPlayingRef.current) {
            // La vidéo est visible, on démarre la lecture
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  isPlayingRef.current = true;
                })
                .catch(() => {
                  // Ignorer l'erreur si play() est interrompu
                });
            }
          } else if (!entry.isIntersecting && isPlayingRef.current) {
            // La vidéo n'est plus visible, on met en pause
            video.pause();
            isPlayingRef.current = false;
          }
        });
      },
      {
        threshold: 0.5, // Démarre quand 50% de la vidéo est visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="py-16 md:pb-0 md:pt-[130px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px] course-description">
          {/* <!-- Course  --> */}
          <div className="col-span-8">
            <div className="w-full">
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
                Complete Website Responsive Design from Figma to Webflow to
                Website Design
              </h1>
              <p className="text-paragraph mt-[22px] mb-[25px]">
                3 in 1 Course: Learn to design websites with Figma, build with
                Webflow, and make a living freelancing.
              </p>
              <h1 className="mt-10 font-semibold text-24 text-main-black">
                Description
              </h1>
              <p className="mt-4 text-paragraph">
                It gives you a huge self-satisfaction when you look at your work
                and say, "I made this!". I love that feeling after I'm done
                working on something. When I lean back in my chair, look at the
                final result with a smile, and have this little "spark joy"
                moment. It's especially satisfying when I know I just made $5,000.
                <br />
                <br />
                For example, this is Design course but I don't teach you
                Photoshop. Because Photoshop is needlessly complicated for Web
                Design. But people still teach it to web designers. I don't. I
                teach Figma – a simple tool that is taking over the design world.
                You will be designing a complete website within a week while
                others are still learning how to create basic layouts in
                Photoshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo - pleine largeur */}
      <div ref={containerRef} className="w-full h-[400px] my-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          controls
        >
          <source src="/videos/GTA.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>

      <section className="pb-16 md:pb-[130px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px] course-description">
          <div className="col-span-8">
            <div className="w-full">
              <h1 className="font-semibold text-24 text-main-black">
                What you will learn in this course
              </h1>
              <ul>
                <li>
                  Get an understanding of how to create GUIs in the Jupyter
                  Notebook system!
                </li>
                <li>
                  Get an understanding of how to create GUIs in the Jupyter
                  Notebook system!
                </li>
                <li>
                  Get an understanding of how to create GUIs in the Jupyter
                  Notebook system!
                </li>
                <li>
                  Get an understanding of how to create GUIs in the Jupyter
                  Notebook system!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
