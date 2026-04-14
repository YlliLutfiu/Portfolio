"use client";

import type { Project } from '@/lib/portfolio-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { projects } from '@/lib/portfolio-data';
import { ArrowUpRight, ExternalLink, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './section-wrapper';

interface ProjectsSectionProps { }

export default function ProjectsSection({ }: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Selected work focused on performance, scalability, and product quality."
    >
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((project: Project, index: number) => {
          const isFeatured = index === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`group premium-card relative overflow-hidden rounded-3xl p-6 lg:p-7 flex flex-col justify-between ${isFeatured
                  ? 'md:col-span-2 lg:col-span-3 xl:col-span-4 lg:row-span-2 col-start-1 row-start-1'
                  : 'md:col-span-1 lg:col-span-2'
                }`}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-accent/15 to-transparent blur-xl"
                />
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/28 blur-3xl" />
                <div className="absolute -bottom-14 left-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
              </div>

              <div className="relative flex flex-col h-full">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-background/50 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground/70">
                    {project.label || 'Project'}
                  </span>
                  <ArrowUpRight className="text-foreground/40 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>

                <h3
                  className={`font-semibold tracking-[-0.02em] ${isFeatured ? 'text-2xl lg:text-3xl mb-6' : 'text-xl lg:text-2xl mb-4'
                    }`}
                >
                  {project.name}
                </h3>

                {isFeatured && project.images && project.images.length > 0 && (
                  <div className="relative mb-6 aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay, EffectFade]}
                      slidesPerView={1}
                      loop
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      speed={500}
                      autoplay={{
                        delay: 4000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: `.project-${index}-next`,
                        prevEl: `.project-${index}-prev`,
                      }}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      className="h-full w-full"
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img}
                            alt={`${project.name} screenshot ${i + 1}`}
                            className="h-full w-full object-contain transition-all duration-500 hover:scale-105 hover:brightness-110"
                            loading="lazy"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <button
                      type="button"
                      className={`project-${index}-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent hover:bg-accent/20 transition-all duration-300 opacity-80 hover:opacity-100`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      className={`project-${index}-next absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent hover:bg-accent/20 transition-all duration-300 opacity-80 hover:opacity-100`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}

                <p className="text-sm leading-7 text-foreground/74">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 bg-background/65 px-3 py-1.5 text-xs transition group-hover:border-accent/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <GitBranch size={16} /> GitHub
                    </a>
                  )}

                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:opacity-90"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0.5 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="mt-6 h-px origin-left bg-gradient-to-r from-accent/75 via-white/35 to-transparent"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}