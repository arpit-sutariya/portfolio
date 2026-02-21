"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { EXPERIENCE } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.15 }}
      className="relative pl-8 md:pl-10 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-[7px] w-[11px] h-[11px] rounded-full bg-bg border-2 border-accent" />

      <p className="font-mono text-[0.72rem] text-accent tracking-wider mb-2">
        {exp.period}
      </p>
      <h3 className="text-[1.12rem] font-semibold mb-1">{exp.role}</h3>
      <p className="text-muted text-[0.88rem] mb-4">
        {exp.company} · {exp.location}
      </p>

      <ul className="flex flex-col gap-2.5">
        {exp.bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-4 text-[0.87rem] text-muted leading-[1.65]"
          >
            <span className="absolute left-0 text-accent font-light">—</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeader
          label="02 / Experience"
          title="Where I've Worked"
          description="Professional experience in data science, machine learning, and building production-grade data systems."
        />

        <div className="relative ml-1">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
