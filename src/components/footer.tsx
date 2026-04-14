export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-xs text-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} Ylli Lutfiu. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="transition hover:text-foreground cursor-pointer">
            Top
          </a>
          <a href="#projects" className="transition hover:text-foreground cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-foreground cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
