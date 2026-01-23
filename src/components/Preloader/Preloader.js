"use client";
import React, { useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  useEffect(() => {
    if (loaded) {
      const removePreloader = setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
          preloader.remove();
        }
      }, 1000);

      return () => clearTimeout(removePreloader);
    }
  }, [loaded]);
  return (
    <div id="preloader">
      <div id="container-preloader" className={`container-preloader`}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span preloader-text="Q" className="characters">
              Q
            </span>
            <span preloader-text="U" className="characters">
              U
            </span>
            <span preloader-text="L" className="characters">
              L
            </span>
            <span preloader-text="A" className="characters">
              A
            </span>
            <span preloader-text="N" className="characters">
              N
            </span>
            <span preloader-text="D" className="characters">
              D
            </span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
}
