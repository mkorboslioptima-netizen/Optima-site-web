import React, { useState } from "react";

const initial = { name: "", company: "", email: "", phone: "", message: "" };

export default function AboutQuoteForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Le nom est requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Veuillez décrire votre demande";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    // Simulate send
    console.log('Devis request', form);
    setSuccess(true);
    setForm(initial);
    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow" data-aos="fade-up">
          <h3 className="text-xl font-bold text-gray-900">Demander un devis</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input name="name" value={form.name} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none ${errors.name ? 'border-red-600' : 'border-gray-300'} focus:ring-2 focus:ring-red-200`} />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Société</label>
                <input name="company" value={form.company} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:ring-2 focus:ring-red-200`} />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none ${errors.message ? 'border-red-600' : 'border-gray-300'} focus:ring-2 focus:ring-red-200`} />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-red-700 text-white px-5 py-2 rounded hover:bg-red-800 transition">Demander un devis</button>
              {success && <span className="text-green-600">Votre demande a été envoyée.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
