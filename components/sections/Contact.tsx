"use client";
import { useState } from 'react';
import { Send } from 'lucide-react';

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkevebn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("ok");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-black">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-black">
            Contacto
          </h2>
          <p className="text-lg text-gray-800 font-medium">
            ¿Tienes un proyecto en mente? Hablemos
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="group">
            <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-bold tracking-widest text-black uppercase transition-all duration-200"
            >
              NOMBRE
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-4 border-2 border-black bg-white text-black font-medium placeholder-gray-400 transition-all duration-200 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px]"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-bold tracking-widest text-black uppercase transition-all duration-200"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-4 border-2 border-black bg-white text-black font-medium placeholder-gray-400 transition-all duration-200 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px]"
              placeholder="tu@email.com"
            />
          </div>

          {/* Descripción */}
          <div className="group">
            <label 
              htmlFor="message" 
              className="block mb-2 text-sm font-bold tracking-widest text-black uppercase transition-all duration-200"
            >
              DESCRIPCIÓN
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-4 border-2 border-black bg-white text-black font-medium placeholder-gray-400 resize-none transition-all duration-200 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px]"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-5 bg-black text-white font-bold uppercase tracking-widest border-2 border-black transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {status === "sending" ? (
              'ENVIANDO...'
            ) : (
              <>
                <Send size={20} />
                <span>ENVIAR MENSAJE</span>
              </>
            )}
          </button>

          {/* Messages */}
          {status === "ok" && (
            <div className="mt-4 p-4 bg-[#4af626] text-black font-black uppercase tracking-widest border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              ¡Mensaje enviado con éxito!
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 bg-[#ff5f56] text-white font-black uppercase tracking-widest border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Ups, algo salió mal. Intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
