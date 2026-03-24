"use client";
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Información Personal */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerName}>Facundo Moriconi</h3>
          <p className={styles.footerDescription}>
            Desarrollador Full Stack con fuerte orientación al<br />
            desarrollo de software. Enfocado en performance, arquitectura<br />
            limpia y experiencias de usuario.
          </p>
          <div className={styles.footerSocials}>
            <a href="https://github.com/Facu-18" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/facundo-moriconi-0668822a0/" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:facundomoriconi19@gmail.com" className={styles.footerSocialLink} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>NAVEGACIÓN</h4>
          <nav className={styles.footerNav}>
            <a href="#hero" className={styles.footerLink}>Inicio</a>
            <a href="#experience" className={styles.footerLink}>Experiencia</a>
            <a href="#phoneduo" className={styles.footerLink}>Proyectos Mobile</a>
            <a href="#projects" className={styles.footerLink}>Portfolio</a>
            <a href="#education-certifications" className={styles.footerLink}>Formación</a>
            <a href="#contact" className={styles.footerLink}>Contacto</a>
          </nav>
        </div>

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>CONTACTO</h4>
          <div className={styles.footerContact}>
            <div className={styles.footerContactItem}>
              <Mail size={16} />
              <a href="mailto:facundo.moriconi@gmail.com" className={styles.footerContactLink}>
                facundomoriconi19@gmail.com
              </a>
            </div>
            <div className={styles.footerContactItem}>
              <MapPin size={16} />
              <span className={styles.footerContactText}>Córdoba, Argentina</span>
            </div>
            <div className={styles.footerContactItem}>
              <Phone size={16} />
              <span className={styles.footerContactText}>Disponible para trabajar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>
          © 2024 Facundo Moriconi. Todos los derechos reservados.
        </p>
        <p className={styles.footerCredits}>
          Diseñado y desarrollado por Facundo Moriconi
        </p>
      </div>
    </footer>
  );
}
