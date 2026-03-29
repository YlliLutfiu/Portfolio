import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 opacity-40" />
      <div className="orb-pulse pointer-events-none fixed -right-20 top-[18%] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
