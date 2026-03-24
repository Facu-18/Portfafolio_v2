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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white border-b-4 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex h-[80px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <button
          onClick={() => go("#home")}
          className="text-black font-black text-2xl tracking-tighter transition-transform hover:-translate-y-1 border-b-[4px] border-black pb-0.5 cursor-pointer flex items-baseline"
        >
          Moriconi Facundo<span className="text-black"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-[15px] font-bold text-gray-600 hover:text-black transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/Facu-18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-black border-2 border-black bg-white hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
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
            className="lg:hidden bg-white border-b-4 border-black overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left px-4 py-3 text-lg font-black uppercase tracking-tight text-white bg-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  {l.label}
                </button>
              ))}
              <div className="flex items-center gap-4 mt-2 px-4">
                <a
                  href="https://github.com/Facu-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 flex justify-center border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 flex justify-center border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
