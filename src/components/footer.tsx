import { GitBranch, BriefcaseBusiness } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-xs text-foreground/60 md:items-start">
          <p className="font-medium text-foreground">&copy; 2024–{new Date().getFullYear()} Ylli Lutfiu.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-foreground/70">
          <div className="flex gap-4">
            <a href="https://github.com/YlliLutfiu" target="_blank" rel="noreferrer" className="transition hover:text-accent" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ylli-lutfiu/" target="_blank" rel="noreferrer" className="transition hover:text-accent" aria-label="LinkedIn">
              <BriefcaseBusiness size={18} />
            </a>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex gap-4 text-xs font-medium uppercase tracking-widest">
            <a href="#projects" className="transition hover:text-foreground">Projects</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
