"use client";
import React, { useState } from "react";
import styles from "./SkillsKeyboard.module.css";

import { IconJS, IconTS, IconReact, IconNext, IconNode } from './icons1';
import { IconExpress, IconNest, IconPostgres, IconMongo, IconDocker } from './icons2';
import { IconClaude, IconGit, IconVite, IconFigma, IconAtg } from './icons3';
import { IconGithub, Iconn8n, IconTailwind, IconOpenAI } from './icons4';

const skills = [
  // Row 1
  { id: 1, label: "JS", name: "JavaScript", color: "#ffffff", textColor: "#000", icon: <IconJS />, size: "normal", border: "#cccccc" },
  { id: 2, label: "TS", name: "TypeScript", color: "#f5f5f5", textColor: "#000", icon: <IconTS />, size: "normal", border: "#e0e0e0" },
  { id: 3, label: "React", name: "React", color: "#000000", textColor: "#fff", icon: <IconReact />, size: "normal" },
  { id: 4, label: "Next", name: "Next.js", color: "#111111", textColor: "#fff", icon: <IconNext />, size: "normal", border: "#333333" },
  { id: 5, label: "Node", name: "Node.js", color: "#ffffff", textColor: "#000", icon: <IconNode />, size: "normal", border: "#cccccc" },

  // Row 2
  { id: 6, label: "Express", name: "Express.js", color: "#f5f5f5", textColor: "#000", icon: <IconExpress />, size: "normal", border: "#e0e0e0" },
  { id: 7, label: "Nest", name: "NestJS", color: "#ffffff", textColor: "#000", icon: <IconNest />, size: "normal", border: "#cccccc" },
  { id: 8, label: "Postgres", name: "PostgreSQL", color: "#111111", textColor: "#fff", icon: <IconPostgres />, size: "normal", border: "#333333" },
  { id: 9, label: "Mongo", name: "MongoDB", color: "#000000", textColor: "#fff", icon: <IconMongo />, size: "normal" },
  { id: 10, label: "Docker", name: "Docker", color: "#ffffff", textColor: "#000", icon: <IconDocker />, size: "normal", border: "#cccccc" },

  // Row 3
  { id: 11, label: "Antigravity", name: "Antigravity", color: "#f5f5f5", textColor: "#000", icon: <IconAtg />, size: "normal", border: "#e0e0e0" },
  { id: 12, label: "Claude", name: "Claude AI", color: "#000000", textColor: "#fff", icon: <IconClaude />, size: "normal" },
  { id: 13, label: "Git", name: "Git", color: "#ffffff", textColor: "#000", icon: <IconGit />, size: "normal", border: "#cccccc" },
  { id: 14, label: "Vite", name: "Vite", color: "#111111", textColor: "#fff", icon: <IconVite />, size: "normal", border: "#333333" },
  { id: 15, label: "Figma", name: "Figma", color: "#f5f5f5", textColor: "#000", icon: <IconFigma />, size: "normal", border: "#e0e0e0" },

  // Row 4
  { id: 16, label: "API", name: "API REST", color: "#ffffff", textColor: "#000", icon: "{ }", size: "normal", border: "#cccccc" },
  { id: 17, label: "GitHub", name: "GitHub", color: "#000000", textColor: "#fff", icon: <IconGithub />, size: "normal" },
  { id: 18, label: "n8n", name: "n8n", color: "#f5f5f5", textColor: "#000", icon: <Iconn8n />, size: "normal", border: "#e0e0e0" },
  { id: 19, label: "Tailwind", name: "Tailwind CSS", color: "#ffffff", textColor: "#000", icon: <IconTailwind />, size: "normal", border: "#cccccc" },
  { id: 20, label: "Chatgpt", name: "Chatgpt", color: "#111111", textColor: "#fff", icon: <IconOpenAI />, size: "normal", border: "#333333" },
];

export default function SkillsKeyboard() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pressed, setPressed] = useState<number | null>(null);

  const rows = [
    skills.slice(0, 5),
    skills.slice(5, 10),
    skills.slice(10, 15),
    skills.slice(15, 20),
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Ambient background glows */}
      <div className={`${styles.bgGlow} ${styles.bgGlow1}`} />
      <div className={`${styles.bgGlow} ${styles.bgGlow2}`} />
      <div className={`${styles.bgGlow} ${styles.bgGlow3}`} />

      <div className={styles.skillsHeader}>
        <span className={styles.skillsEyebrow}>// lo que uso</span>
        <h2 className={styles.skillsTitle}>
          <span className={styles.titleMain}>Skills</span>
          <span className={styles.titleCursor}>_</span>
        </h2>
        <p className={styles.skillsHint}>pasa el cursor por una tecla</p>
      </div>

      <div className={styles.skillsContent}>
        {/* Left side: Keyboard */}
        <div className={styles.keyboardScene}>
          <div className={styles.keyboardWrapper}>
            {/* Keyboard base plate */}
            <div className={styles.keyboardPlate}>
              <div className={styles.keyboardGrid}>
                {rows.map((row, rowIndex) => (
                  <div
                    className={styles.keyRow}
                    key={rowIndex}
                    style={{ "--row-index": rowIndex } as React.CSSProperties}
                  >
                    {row.map((skill, colIndex) => (
                      <div
                        key={skill.id}
                        className={`${styles.keyWrapper} ${hovered === skill.id ? styles.isHovered : ""} ${pressed === skill.id ? styles.isPressed : ""}`}
                        style={{
                          "--key-color": skill.color,
                          "--key-text": skill.textColor,
                          "--col-index": colIndex,
                          "--row-idx": rowIndex,
                        } as React.CSSProperties}
                        onMouseEnter={() => setHovered(skill.id)}
                        onMouseLeave={() => { setHovered(null); setPressed(null); }}
                        onMouseDown={() => setPressed(skill.id)}
                        onMouseUp={() => setPressed(null)}
                      >
                        <div className={styles.keycap}>
                          <div className={styles.keycapTop}>
                            <span className={styles.keyIcon}>{skill.icon}</span>
                            <span className={styles.keyLabel}>{skill.label}</span>
                          </div>
                          <div className={styles.keycapSideRight} />
                          <div className={styles.keycapSideBottom} />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Plate edges for 3D effect */}
              <div className={styles.plateEdgeRight} />
              <div className={styles.plateEdgeBottom} />
            </div>

            {/* Reflection/floor */}
            <div className={styles.keyboardReflection} />
          </div>
        </div>

        {/* Right side: Terminal UI */}
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={`${styles.terminalDot} ${styles.red}`} />
            <div className={`${styles.terminalDot} ${styles.yellow}`} />
            <div className={`${styles.terminalDot} ${styles.green}`} />
          </div>
          <div className={styles.terminalBody}>
            <span className={styles.terminalPrompt}>{">_"}</span>
            {hovered ? (
              <>
                <div className={styles.terminalIconWrapper}>
                  {skills.find((s) => s.id === hovered)?.icon}
                </div>
                <div className={styles.terminalSkillName}>
                  {skills.find((s) => s.id === hovered)?.name}
                </div>
              </>
            ) : (
              <div className={styles.terminalIdle}>
                Esperando interacción...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
