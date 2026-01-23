import React from "react";

export default function ContactMap() {
  return (
    <section className="overflow-hidden mt-10 md:mt-[130px] w-full">
      <div className="max-w-[1780px] relative w-full h-[240px] sm:h-[450px] md:h-[540px] lg:h-[700px] xl:h-[700px] mx-auto xl:rounded-lg overflow-hidden bg-red-300">
        <iframe
          className="map-iframe"
          width="1780"
          height="850"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/d/embed?mid=1hPZlx7IzAPJ3ss2IAz8v2xVInwgYJ6Y&ehbc=2E312F"
        ></iframe>
      </div>
    </section>
  );
}
