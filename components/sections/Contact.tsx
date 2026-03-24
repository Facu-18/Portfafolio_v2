"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Linkedin, Mail, MapPin, Send } from "lucide-react";

type Status = "idle" | "sending" | "ok" | "error";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  },
});

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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="orb w-[420px] h-[420px] bg-blue-100 -bottom-36 -right-36" style={{ opacity: 0.11 }} />

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label">Contacto</p>
          <h2 className="section-title mb-3">Conversemos sobre tu próximo proyecto</h2>
          <p className="section-subtitle mx-auto">
            Si necesitás una web profesional, una API robusta o automatizar procesos, contame tu
            idea y te respondo con una propuesta clara.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <motion.aside
            variants={fadeUp(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass rounded-3xl p-6 md:p-7 flex flex-col gap-4"
          >
            <h3 className="text-white text-xl font-bold">Canales de contacto</h3>

            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50/80 p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Formulario directo</p>
                  <p className="text-slate-400 text-xs mt-1">Ideal para contar alcance y tiempos.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50/80 p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Linkedin size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-xs font-medium mt-1 inline-block"
                  >
                    Ver perfil profesional
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50/80 p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MapPin size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Ubicación</p>
                  <p className="text-slate-400 text-xs mt-1">Córdoba, Argentina (remoto y freelance)</p>
                </div>
              </div>
            </div>

            <div className="mt-auto rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-2">
                <Clock3 size={15} className="text-emerald-700" />
                <p className="text-emerald-700 text-sm font-semibold">Tiempo de respuesta</p>
              </div>
              <p className="text-emerald-800/90 text-xs mt-1.5">
                Suelo responder en menos de 24 horas con próximos pasos concretos.
              </p>
            </div>
          </motion.aside>

          <motion.div
            variants={fadeUp(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass rounded-3xl p-6 md:p-7"
          >
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <FieldLabel htmlFor="name" label="Nombre completo" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel htmlFor="email" label="Email" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectType"
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccioná una opción
                    </option>
                    <option value="web">Desarrollo web</option>
                    <option value="backend">API / Backend</option>
                    <option value="automation">Automatización con IA</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="budget"
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                  >
                    Presupuesto estimado (opcional)
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="Ej: USD 800 - 1500"
                    className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Contame qué necesitás, plazos y contexto del proyecto."
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors resize-y min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-blue w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={15} />
                {status === "sending" ? "Enviando mensaje..." : "Enviar mensaje"}
              </button>

              {status === "ok" && (
                <p className="text-emerald-700 text-sm text-center font-medium">
                  Mensaje enviado correctamente. Te respondo pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center font-medium">
                  Hubo un error al enviar. Probá nuevamente en unos minutos.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({ htmlFor, label }: { htmlFor: string; label: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
    >
      {label}
    </label>
  );
}
