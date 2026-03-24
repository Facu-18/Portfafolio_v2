"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoFeature() {
  return (
    <section id="ai-automations" className="section">
      {/* Background accent */}
      <div className="orb w-[500px] h-[500px] bg-blue-700 top-0 right-0" style={{ opacity: 0.07 }} />

      <div className="container relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="badge badge-blue mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Workflow Expert
          </span>
          <h2 className="section-title mb-3">Automatizaciones con n8n</h2>
          <p className="section-subtitle mx-auto">
            Diseño flujos de trabajo inteligentes que conectan herramientas y optimizan procesos
            de negocio de forma autónoma.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden glass">
              <video
                className="w-full aspect-video object-cover"
                autoPlay muted loop playsInline preload="auto"
                poster="/n8n.jpeg"
              >
                <source src="/videon8n.mp4" type="video/mp4" />
              </video>
              {/* Overlay badge */}
              <div className="absolute top-3 left-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur text-white text-xs font-bold rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Demo en Real-Time
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-bold text-2xl mb-3">Dominio de la Herramienta</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Este video es un fragmento de mi curso donde explico cómo levantar flujos{" "}
                <span className="text-blue-300 font-medium">Open Source</span>. Desde la instalación
                local hasta la integración con Google Cloud y APIs externas.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                ["Webhooks & Triggers", "Captura de datos en tiempo real."],
                ["Cloud Integration", "Conexión con Google Sheets, Gmail y más."],
                ["AI Nodes", "Implementación de IA dentro de los workflows."],
              ].map(([bold, text]) => (
                <li key={bold} className="flex items-start gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-400 text-sm">
                    <strong className="text-slate-200 font-semibold">{bold}: </strong>{text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=yE4D51gSsxQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-blue"
              >
                <Play size={14} /> Ver Video Completo
              </a>
              <span className="text-slate-400 text-xs font-medium">Video por Facundo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
