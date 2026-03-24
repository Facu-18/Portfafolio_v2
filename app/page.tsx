import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
// import TechStack from "../components/sections/TechStack";
import SkillsKeyboard from "../components/sections/SkillsKeyboard";
import PhoneDuo from "../components/sections/PhoneDuo";
import Projects from "../components/sections/Projects";
import EducationCertifications from "../components/sections/EducationCertifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <SkillsKeyboard />
      <div className="divider" />
      <PhoneDuo />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <EducationCertifications />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
