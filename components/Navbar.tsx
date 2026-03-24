"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Experiencia", href: "#experience" },
  { label: "Automatizaciones", href: "#ai-automations" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/40/90 backdrop-blur-2xl border-b border-slate-800 shadow-xl shadow-slate-200/50"
          : ""
      }`}
    >
      <div className="container flex h-[60px] items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => go("#home")}
          className="text-white font-bold text-xl tracking-tight transition-colors hover:text-blue-600"
        >
          Moriconi<span className="text-blue-600">.</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-blue-600 rounded-xl hover:bg-slate-800/50 transition-all"
            >
              {l.label}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-200 mx-1" />
          <a
            href="https://github.com/Facu-18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 ml-1 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-800/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-blue-400 rounded-lg hover:bg-slate-800/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-blue-600"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 bg-slate-950/40/90 backdrop-blur-2xl"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-800/50 rounded-xl transition-all"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
