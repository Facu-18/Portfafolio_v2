"use client";
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroContainer}>
          <div className={styles.heroProfile}>
            <div className={styles.profileImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDE5MzE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Foto de perfil"
                className={styles.profileImage}
              />
              <div className={styles.profileRing}></div>
            </div>
          </div>

          <div className={styles.heroText}>
            <span className={styles.heroGreeting}>¡Hola! Soy</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroName}>Facundo Moriconi</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Fullstack Node.js Developer</h2>
            <p className={styles.heroDescription}>
              Desarrollo productos web robustos, APIs escalables y automatizaciones inteligentes para transformar procesos complejos en experiencias simples, mantenibles y listas para crecer.
            </p>
            
            <div className={styles.heroActions}>
              <a href="#projects" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
                Ver Proyectos
              </a>
              <a href="#contact" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
                Contactar
              </a>
            </div>

            <div className={styles.heroSocial}>
              <a href="https://github.com/Facu-18" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroScroll}>
        <span className={styles.scrollText}>Desliza hacia abajo</span>
        <div className={styles.scrollArrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
