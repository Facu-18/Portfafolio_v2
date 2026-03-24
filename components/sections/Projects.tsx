"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CashTrackr",
    description: "API de gestión de presupuestos y gastos. Backend en Node.js y frontend en Next.js con autenticación JWT.",
    image: "/cashtrackr-preview.jpeg",
    tech: ["Node.js", "TypeScript", "Sequelize", "PostgreSQL", "Next.js"],
    links: [{ label: "Repositorio", href: "https://github.com/Facu-18/cashtrackr", icon: "github" }],
    featured: true,
  },
  {
    title: "VetCare",
    description: "Sistema de gestión de turnos para veterinaria. Backend con TypeORM y frontend en Next.js.",
    image: "/vetcare-preview.jpeg",
    tech: ["Node.js", "TypeScript", "TypeORM", "PostgreSQL", "Next.js", "TailwindCSS"],
    links: [{ label: "Demo", href: "https://www.youtube.com/watch?v=cHFuNBZ4ifM", icon: "external" }],
  },
  {
    title: "PosNest",
    description: "Punto de venta con NestJS, PostgreSQL y subida de archivos con Cloudinary.",
    image: "/posnest-preview.jpeg",
    tech: ["Node.js", "NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Next.js"],
    links: [{ label: "Repositorio", href: "https://github.com/Facu-18/posnest", icon: "github" }],
  },
  {
    title: "DevTree",
    description: "Copia de LinkTree con backend en MongoDB y frontend en Vite + React.",
    image: "/devtree-preview.jpeg",
    tech: ["Node.js", "TypeScript", "MongoDB", "Vite", "React"],
    links: [
      { label: "Repositorio", href: "https://github.com/Facu-18/devtree", icon: "github" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=wyjckLzpskU", icon: "external" },
    ],
    featured: true,
  },
];

const allTechs = [...new Set(projects.flatMap((p) => p.tech))];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const shown =
    filter === "all" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-bold text-sm tracking-widest uppercase mb-2 text-gray-500">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Soluciones escalables, APIs eficientes y frontends modernos.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["all", ...allTechs].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 text-sm font-bold border-2 border-black transition-all duration-200 uppercase tracking-wide ${
                filter === t
                  ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
              }`}
            >
              {t === "all" ? "Todos" : t}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative bg-white border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100 border-b-2 border-black shrink-0">
                  {p.featured && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white font-bold text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] tracking-widest uppercase">
                      Destacado
                    </span>
                  )}
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl mb-3 text-black font-black uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    {p.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-bold bg-black text-white border-2 border-black transition-all duration-200 hover:bg-white hover:text-black uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-2 border-black transition-all duration-200 uppercase ${
                          l.icon === "github"
                            ? "bg-white text-black hover:bg-black hover:text-white"
                            : "bg-black text-white hover:bg-white hover:text-black"
                        }`}
                        aria-label={`${l.label} de ${p.title}`}
                      >
                        {l.icon === "github" ? <Github size={18} /> : <ExternalLink size={18} />}
                        <span>{l.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Ver más 버튼 */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Facu-18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-lg border-4 border-black transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 uppercase tracking-widest"
          >
            <Github size={24} />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
