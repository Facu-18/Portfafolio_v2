"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import styles from "./PhoneDuo.module.css";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  videoSrc?: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "DS Barber",
    description: "Sistema de reservas y administración para barberías con panel operativo, turnos online y flujos automatizados.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    videoSrc: "/video-barberia.mp4",
    demoLink: "https://ds-barber.vercel.app",
    githubLink: "#",
  },
  {
    id: "project-2",
    title: "Chatbot con n8n",
    description: "Asistente conversacional conectado a workflows de n8n para clasificar consultas y responder en tiempo real.",
    tech: ["n8n", "OpenAI", "Webhooks"],
    videoSrc: "/chatbot-n8n.mp4",
    demoLink: "https://www.linkedin.com/posts/facundo-moriconi-0668822a0_automatizaciaejn-n8n-openai-activity-7401214598915211264-zg7V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi-dc4BIFCZAq7WNj8zIhGPbRns_Vm6gi8",
    githubLink: "#",
  },
];

interface PhoneProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (state: boolean) => void;
}

function Phone3D({ project, index, isHovered, onHover }: PhoneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHover(false);
  };

  const isLeft = index === 0;
  const baseRotateZ = isLeft ? -8 : 8;
  const baseRotateY = isLeft ? 12 : -12;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -200 : 200, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, type: "spring", stiffness: 80, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={handleMouseLeave}
      className={`${styles.phoneWrapper} ${isLeft ? styles.left : styles.right}`}
    >
      <motion.div
        animate={{
          rotateZ: isHovered ? baseRotateZ * 0.3 : baseRotateZ,
          scale: isHovered ? 1.08 : 1,
          z: isHovered ? 100 : 0,
        }}
        style={{
          rotateX,
          rotateY: useTransform(rotateY, (value) => value + baseRotateY),
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={styles.phone3dContainer}
      >
        <div className={styles.iphoneContainer}>
          {/* Back of Phone */}
          <div className={styles.phoneBack}>
            <div className={styles.phoneBackGlass}>
              {/* Camera Module */}
              <div className={styles.cameraModule}>
                <div className={`${styles.cameraLens} ${styles.cameraLens1}`}>
                  <div className={styles.cameraLensInner} />
                  <div className={styles.cameraLensCore} />
                </div>
                <div className={`${styles.cameraLens} ${styles.cameraLens2}`}>
                  <div className={styles.cameraLensInner} />
                  <div className={styles.cameraLensCore} />
                </div>
                <div className={`${styles.cameraLens} ${styles.cameraLens3}`}>
                  <div className={styles.cameraLensInner} />
                  <div className={styles.cameraLensCore} />
                </div>
                <div className={styles.cameraFlash} />
              </div>

              {/* Apple Logo */}
              <div className={styles.appleLogo}>
                <svg viewBox="0 0 24 30" fill="currentColor" style={{ width: "100%", height: "100%" }}>
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Side Edges */}
          <div className={`${styles.phoneEdge} ${styles.phoneEdgeLeft}`}>
            <div className={styles.edgeSurfaceLeft} />
          </div>
          <div className={`${styles.phoneEdge} ${styles.phoneEdgeRight}`}>
            <div className={styles.edgeSurfaceRight} />
          </div>
          <div className={`${styles.phoneEdge} ${styles.phoneEdgeTop}`}>
            <div className={styles.edgeSurfaceTop} />
          </div>
          <div className={`${styles.phoneEdge} ${styles.phoneEdgeBottom}`}>
            <div className={styles.edgeSurfaceBottom} />
          </div>

          {/* Phone Body */}
          <div className={styles.phoneBody}>
            <div className={styles.phoneFrameOuter}>
              <div className={styles.phoneFrameInner}>
                <div className={styles.phoneScreenContainer}>
                  {/* Dynamic Island */}
                  <div className={styles.dynamicIsland} />

                  {/* Screen */}
                  <div className={styles.phoneScreen}>
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        className={styles.videoContent}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <div className={styles.placeholderContent}>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={styles.placeholderPattern}
                          style={{
                            background: "radial-gradient(circle at 50% 50%, rgba(200, 200, 200, 0.4) 0%, transparent 70%)",
                          }}
                        />

                        <div className={styles.placeholderInner}>
                          <Smartphone className={styles.placeholderIcon} />
                          <p className={styles.placeholderTitle}>Video Preview</p>
                          <p className={styles.placeholderSubtitle}>Agrega tu video aquí</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Screen Glare */}
                  <div className={styles.screenGlare} />
                </div>
              </div>
            </div>

            {/* Physical Buttons */}
            <div className={styles.sideButton} />
            <div className={styles.volumeButton1} />
            <div className={styles.volumeButton2} />
          </div>

          {/* Shadows */}
          <div className={styles.floatingShadow} />
          <div className={styles.surfaceReflection} />
        </div>
      </motion.div>

      {/* Project Info */}
      <div className={styles.projectInfo}>
        <div className={styles.projectCard}>
          <div className={styles.cardGlow} />
          <div className={styles.cardContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.techStack}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.actionButtons}>
              {project.demoLink && project.demoLink !== "#" && (
                <a href={project.demoLink} className={`${styles.btn} ${styles.btnPrimary}`}>
                  <ExternalLink className={styles.btnIcon} />
                  Demo
                </a>
              )}
              {project.githubLink && project.githubLink !== "#" && (
                <a href={project.githubLink} className={`${styles.btn} ${styles.btnSecondary}`}>
                  <Github className={styles.btnIcon} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhoneDuo() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div id="ai-automations" className={styles.mobileProjectsContainer}>
      {/* Background */}
      <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundGradient} />
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.contentContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            Mis soluciones,<br />en tu pantalla
          </h1>
          <p className={styles.mainDescription}>
            Desde apps de gestión para barberías hasta flujos de automatización con inteligencia artificial — así lucen en acción
          </p>
        </div>

        {/* Phones */}
        <div className={styles.phonesContainer}>
          {projects.map((project, index) => (
            <Phone3D
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={(state) => setHoveredProject(state ? project.id : null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
