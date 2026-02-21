"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLAnchorElement>();

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.12 }}
      className="group relative flex flex-col bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-1 transition-all duration-400"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

      <span className="font-mono text-[0.7rem] text-accent tracking-widest mb-4">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="font-serif text-[1.4rem] font-normal mb-1">
        {project.title}
      </h3>
      <p className="text-[0.78rem] text-accent/70 mb-4 font-medium">
        {project.subtitle}
      </p>

      <p className="text-[0.87rem] text-muted leading-[1.65] flex-grow mb-5">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex gap-4 mb-5">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <span className="font-mono text-[1.1rem] font-medium text-white">
              {m.value}
            </span>
            <span className="font-mono text-[0.62rem] text-muted tracking-wide uppercase">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.67rem] px-2.5 py-1 bg-accent-dim text-accent rounded tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <span className="font-mono text-[0.75rem] text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
        View on GitHub
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeader
          label="03 / Projects"
          title="Selected Work"
          description="Projects combining data science, AI engineering, and thoughtful product design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
