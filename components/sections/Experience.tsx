"use client";
import React from "react";
import Image from "next/image";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logoUrl: string;
  achievements: string[];
  linkUrl: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "ITPS ONE · Consultoría IT",
    position: "Software Developer",
    period: "Actual",
    description: "Estoy trabajando en un proyecto de seguridad vial para Buenos Aires desarrollando un backoffice con Next.js 16, aplicando Atomic Design y arquitectura fullstack, incluyendo frontend y APIs dentro de la misma aplicación.",
    logoUrl: "/itps_one.svg",
    achievements: [
      "Nextjs 16",
      "Atomic Design",
      "Backend & Frontend",
      "Arquitectura escalable",
    ],
    linkUrl: "https://www.itps.one",
  },
  {
    id: 2,
    company: "XerionTech",
    position: "Frontend & Backend Dev",
    period: "2025 - Actual",
    description: "Estoy trabajando en una startup de desarrollo de software a medida donde construyo soluciones fullstack para clientes, creando sistemas web, landing pages y herramientas B2B con Next.js, Node.js y bases de datos.",
    logoUrl: "/xeriontech.svg",
    achievements: [
      "Liderazgo en creación de proyectos (DSBarber, Chatbots, etc.)",
      "Desarrollo fullstack usando Next.js, Node.js y PostreSQL/MongoDB",
      "Gestión de relaciones B2B y requerimientos UI/UX",
      "Arquitectura escalable"
    ],
    linkUrl: "https://xerion-tech.vercel.app/",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay } },
});

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection} style={{ padding: "80px 20px" }}>
      <div className={styles.experienceContainer}>
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Carrera</span>
          <h2 className={styles.experienceTitle}>Trayectoria & Impacto</h2>
        </motion.div>

        <div className={styles.experienceTimeline}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeUp(0.1 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={styles.experienceCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.logoContainer}>
                  <Image
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    width={80}
                    height={80}
                    className={styles.companyLogo}
                  />
                </div>

                <div className={styles.headerInfo}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <p className={styles.position}>{exp.position}</p>
                  <p className={styles.period}>{exp.period}</p>
                </div>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>Puntos destacados:</h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={styles.achievementItem}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <a
                    href={exp.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: "8px 24px", fontSize: "0.9rem" }}
                  >
                    <ExternalLink size={16} /> Ver más
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
