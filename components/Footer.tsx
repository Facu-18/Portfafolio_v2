import { Github, Linkedin, Youtube } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/Facu-18", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/facundo-moriconi-0668822a0/", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@facuuu7070", label: "YouTube" },
];

const nav = [
  ["Inicio", "#home"],
  ["Experiencia", "#experience"],
  ["AI & Automations", "#ai-automations"],
  ["Proyectos", "#projects"],
  ["Educación", "#education"],
  ["Contacto", "#contact"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold text-lg">
            Moriconi<span className="text-blue-500">.</span>
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Full Stack Developer especializado en Node.js, Next.js y automatizaciones con IA.
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-blue-600 hover:border-white/20 hover:bg-slate-800/50 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Navegación</p>
          <div className="flex flex-col gap-2">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contacto</p>
          <div className="flex flex-col gap-2 text-slate-400 text-sm">
            <span>📍 Córdoba, Argentina</span>
            <span>💼 Disponible Freelance</span>
          </div>
          <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-emerald-500/8 border border-emerald-500/15 rounded-full text-emerald-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para trabajar
          </span>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-400 text-xs">© {year} Moriconi Facundo. Todos los derechos reservados.</p>
          <p className="text-slate-400 text-xs">
            Construido con <span className="text-blue-500">Next.js</span> & Pasión ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
