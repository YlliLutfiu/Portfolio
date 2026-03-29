import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-12 md:mb-14">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
          <p className="text-xs uppercase tracking-[0.26em] text-accent/95">Portfolio</p>
        </div>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{title}</h2>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/68 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
