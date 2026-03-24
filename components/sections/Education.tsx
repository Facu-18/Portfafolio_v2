"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="section-label">Académico</p>
          <h2 className="section-title">Formación Académica</h2>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-2xl">
          {/* Terciario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass rounded-2xl p-6 flex items-center gap-5"
          >
            <a
              href="https://www.institutotecnicocordoba.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 bg-slate-950/40 rounded-2xl flex items-center justify-center p-2 shadow-md">
                <Image
                  src="/itsc.svg"
                  alt="Instituto Técnico Superior Córdoba"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </a>
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-white font-bold text-lg leading-tight">
                Tecnicatura en Desarrollo de Software
              </h3>
              <p className="text-slate-400 text-sm">Instituto Técnico Superior Córdoba</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge badge-blue text-xs">Cursando</span>
                <a
                  href="https://www.institutotecnicocordoba.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-700 hover:text-blue-300 text-xs font-medium transition-colors"
                >
                  Sitio web <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bachiller */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="glass rounded-2xl p-6 flex items-center gap-5"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                Bachiller en Ciencias Sociales y Humanísticas
              </h3>
              <p className="text-slate-400 text-sm mt-1">Educación Secundaria · Egresado 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
