"use client";
import { motion } from "framer-motion";
import { Bot, ExternalLink } from "lucide-react";

const chips = ["n8n", "OpenAI / ChatGPT", "LM Studio", "Ollama", "Google Calendar", "Webhooks", "Whappi"];

export default function ChatbotN8n() {
  return (
    <section id="chatbot-n8n" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="section-label">AI Project</p>
              <h2 className="section-title mb-2">Chatbot con IA — n8n</h2>
              <p className="text-slate-400 text-sm">
                Automatización conversacional para barberías: turnos, consultas y seguimiento.
              </p>
            </div>

            <div className="glass rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Bot size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Asistente de reservas — n8n + IA</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Chatbot automatizado con{" "}
                <span className="text-blue-300 font-semibold">n8n</span> que guía al cliente:{" "}
                <strong className="text-slate-200">servicio → barbero → fecha/hora → confirmación</strong>.
                Integra notificaciones automáticas y registra datos para seguimiento.
              </p>

              <ul className="flex flex-col gap-2">
                {[
                  "Respuestas consistentes a FAQs (precios, horarios, ubicación).",
                  "Automatiza confirmación y envío de mensajes.",
                  "Registra datos del cliente para seguimiento.",
                  "Escalamiento a humano cuando es necesario (handoff).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {chips.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7401214598915211264/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-fit text-sm"
              >
                <ExternalLink size={14} /> Ver post en LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center items-center lg:items-start lg:pt-16"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)",
                  transform: "scale(1.6)",
                }}
              />
              {/* Phone */}
              <div
                className="relative shadow-2xl shadow-blue-900/50"
                style={{
                  width: 200,
                  height: 400,
                  background: "#080808",
                  borderRadius: "2.5rem",
                  border: "3px solid rgba(255,255,255,0.1)",
                  overflow: "hidden",
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-slate-950/40/10 rounded-full z-10" />
                <video
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline preload="metadata"
                >
                  <source src="/chatbot-n8n.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
