import React from "react";

export default function AboutMapSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-lg overflow-hidden border-2 border-red-600" data-aos="fade-up">
          <div className="w-full h-0" style={{ paddingBottom: '45%' }}>
            <iframe
              title="OPTIMA location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzI5LjgiTiAywrAxNicxMC4xIlc!5e0!3m2!1sfr!2sfr!4v1610000000000"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
