"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TECHS = [
  { name: "Node.js", image: "/nodejs.png", area: "Backend" },
  { name: "TypeScript", image: "/typescript.png", area: "Backend" },
  { name: "JavaScript", image: "/javascript.png", area: "Backend" },
  { name: "NestJS", image: "/nest.png", area: "Backend" },
  { name: "React", image: "/react.png", area: "Frontend" },
  { name: "Next.js", image: "/nextjs.png", area: "Frontend" },
  { name: "TailwindCSS", image: "/tailwindcss.png", area: "Frontend" },
  { name: "Vite", image: "/vite.svg", area: "Frontend" },
  { name: "PostgreSQL", image: "/postgresql.png", area: "DB" },
  { name: "MongoDB", image: "/mongodb.png", area: "DB" },
  { name: "Docker", image: "/docker.png", area: "Infra" },
  { name: "Cloudinary", image: "/cloudinary.png", area: "Infra" },
  { name: "n8n", image: "/n8n.jpeg", area: "Automation" },
];

const areaColors: Record<string, string> = {
  Backend:    "bg-blue-500/10 border-blue-500/20 text-blue-600",
  Frontend:   "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  DB:         "bg-violet-500/10 border-violet-500/20 text-violet-300",
  Infra:      "bg-amber-500/10 border-amber-500/20 text-amber-300",
  Automation: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
};

const LOOP = [...TECHS, ...TECHS];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!ref.current) return;
    const card = ref.current.firstElementChild as HTMLElement;
    const gap = 16;
    const w = (card?.offsetWidth ?? 140) + gap;
    const atEnd = ref.current.scrollLeft + ref.current.clientWidth >= ref.current.scrollWidth - w;
    if (dir > 0 && atEnd) {
      ref.current.scrollTo({ left: 0, behavior: "instant" });
    } else {
      ref.current.scrollBy({ left: dir * w, behavior: "smooth" });
    }
  };

  return (
    <section id="tech" className="section">
      {/* Subtle section tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="section-label">Stack</p>
          <h2 className="section-title mb-3">Tecnologías</h2>
          <p className="section-subtitle mx-auto">
            Mi stack para APIs, frontends modernos, infra reproducible y{" "}
            <span className="text-blue-700 font-semibold">automatizaciones</span> reales.
          </p>
        </motion.div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll(-1)}
            className="shrink-0 w-9 h-9 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-600 hover:bg-blue-600/80 hover:border-blue-500 transition-all flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={ref}
            className="flex gap-4 overflow-x-hidden py-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {LOOP.map((t, i) => (
              <article
                key={i}
                className="glass shrink-0 w-32 flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default hover:-translate-y-1.5 hover:border-blue-500/30 transition-all duration-300"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="w-12 h-12 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-white font-bold text-xs text-center leading-tight">{t.name}</h3>
                <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${areaColors[t.area]}`}>
                  {t.area}
                </span>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="shrink-0 w-9 h-9 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-600 hover:bg-blue-600/80 hover:border-blue-500 transition-all flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
