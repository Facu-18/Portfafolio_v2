"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Fundamentos de Inteligencia Artificial",
    org: "Google",
    logo: "/google.png",
    year: "2024",
    desc: "Habilidades prácticas para aplicar IA generativa: prompts efectivos, identificación de sesgos, enfoque ético y uso de asistentes de texto e imagen.",
    link: "https://drive.google.com/file/d/1ys7eRD8TkFzGQ6zBEXPXBLeFIXasnhCx/view?usp=drive_link",
  },
  {
    title: "Full Stack Node.js · React · TS · NestJS · Next.js",
    org: "Udemy",
    logo: "/udemy.png",
    year: "2024",
    desc: "Desarrollo full stack con Node.js, TypeScript, NestJS y React/Next.js. APIs REST escalables, arquitectura modular, DI y patrones de diseño.",
    link: "https://drive.google.com/file/d/1XcQHeebWBx0_ZSE6nsN7D0Lc3SHh2fyD/view?usp=sharing",
  },
  {
    title: "Node.js — Bootcamp MVC & REST APIs",
    org: "Udemy",
    logo: "/udemy.png",
    year: "2023",
    desc: "Backend con Node.js, Express y MongoDB. Arquitectura REST, MVC, middlewares, JWT, validación y manejo de errores.",
    link: "https://drive.google.com/file/d/1P95H2fRjGtn9rfygTDl2wVDKnMX2MpfL/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="section-label">Formación</p>
          <h2 className="section-title mb-3">Certificaciones</h2>
          <p className="section-subtitle mx-auto">
            Formación demostrable en{" "}
            <span className="text-blue-700 font-semibold">IA</span>,{" "}
            <span className="text-blue-700 font-semibold">Backend</span> y{" "}
            <span className="text-blue-700 font-semibold">Full Stack</span>.
            Títulos orientados a producción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="glass rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
            >
              {/* Left accent bar */}
              <span
                className="absolute left-0 inset-y-0 w-[3px] rounded-l-2xl"
                style={{ background: "linear-gradient(180deg,#3b82f6,#06b6d4)" }}
              />

              {/* Header */}
              <div className="flex items-start gap-3 pl-2">
                <div className="w-11 h-11 shrink-0 bg-slate-950/40 rounded-xl flex items-center justify-center p-1.5 shadow">
                  <Image src={c.logo} alt={c.org} width={30} height={30} className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-[0.92rem] leading-snug">{c.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-blue-700 text-xs font-bold">{c.org}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400 text-xs font-medium">{c.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed pl-2 flex-1">{c.desc}</p>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-blue text-xs w-fit pl-2"
              >
                <ExternalLink size={12} /> Ver certificado
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
