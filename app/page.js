import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function HomePage() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactSection />
    </div>
  );
}
