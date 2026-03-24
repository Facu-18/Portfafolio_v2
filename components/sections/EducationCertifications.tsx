"use client";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Education {
  id: number;
  institution: string;
  degree: string;
  status: string;
  link?: string;
  icon?: string;
  year?: string;
}

interface Certification {
  id: number;
  title: string;
  org: string;
  year: string;
  desc: string;
  link: string;
  logo: string;
}

const education: Education[] = [
  {
    id: 1,
    institution: "Instituto Técnico Superior Córdoba",
    degree: "Tecnicatura en Desarrollo de Software",
    status: "Cursando",
    link: "https://www.institutotecnicocordoba.com/",
    icon: "/itsc.svg",
  },
  {
    id: 2,
    institution: "Educación Secundaria",
    degree: "Bachiller en Ciencias Sociales y Humanísticas",
    status: "Egresado 2024",
    year: "2024",
  },
];

const certifications: Certification[] = [
  {
    id: 1,
    title: "Fundamentos de Inteligencia Artificial",
    org: "Google",
    logo: "/google.png",
    year: "2024",
    desc: "Habilidades prácticas para aplicar IA generativa: prompts efectivos, identificación de sesgos, enfoque ético y uso de asistentes de texto e imagen.",
    link: "https://drive.google.com/file/d/1ys7eRD8TkFzGQ6zBEXPXBLeFIXasnhCx/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Full Stack Node.js · React · TS · NestJS · Next.js",
    org: "Udemy",
    logo: "/udemy.png",
    year: "2024",
    desc: "Desarrollo full stack con Node.js, TypeScript, NestJS y React/Next.js. APIs REST escalables, arquitectura modular, DI y patrones de diseño.",
    link: "https://drive.google.com/file/d/1XcQHeebWBx0_ZSE6nsN7D0Lc3SHh2fyD/view?usp=sharing",
  },
  {
    id: 3,
    title: "Node.js — Bootcamp MVC & REST APIs",
    org: "Udemy",
    logo: "/udemy.png",
    year: "2023",
    desc: "Backend con Node.js, Express y MongoDB. Arquitectura REST, MVC, middlewares, JWT, validación y manejo de errores.",
    link: "https://drive.google.com/file/d/1P95H2fRjGtn9rfygTDl2wVDKnMX2MpfL/view?usp=drive_link",
  },
];

export default function EducationCertifications() {
  return (
    <div id="education-certifications" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Educación Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-black text-white p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <GraduationCap size={40} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Educación
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.article 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={edu.id} 
                className="border-2 border-black p-6 sm:p-8 bg-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] flex flex-col md:flex-row md:items-center gap-6"
              >
                {edu.icon ? (
                  <div className="w-20 h-20 shrink-0 bg-gray-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-3">
                    <Image
                      src={edu.icon}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 shrink-0 bg-[#ffbd2e] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-4xl">
                    🎓
                  </div>
                )}
                
                <div className="flex-1 border-l-4 border-black pl-4 sm:pl-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black uppercase text-black">
                      {edu.degree}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-bold uppercase border-2 border-black tracking-widest ${
                      edu.status === 'Cursando' 
                        ? 'bg-black text-white' 
                        : 'bg-[#4af626] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-700 font-bold mb-4">
                    {edu.institution}
                  </p>

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-bold uppercase text-sm border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      Sitio web <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Certificaciones Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-black text-white p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award size={40} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Certificaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={cert.id} 
                className="border-2 border-black bg-white overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 bg-gray-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-2">
                    <Image src={cert.logo} alt={cert.org} width={40} height={40} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-black leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 font-bold tracking-wide">{cert.org}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 font-medium mb-8 flex-1 leading-relaxed">
                  {cert.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-black">
                  <span className="text-sm font-black text-white bg-black px-4 py-2 uppercase tracking-wide border-2 border-black">
                    {cert.year}
                  </span>
                  <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold border-2 border-black hover:bg-black hover:text-white transition-colors uppercase text-sm"
                  >
                    Ver detalle <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
