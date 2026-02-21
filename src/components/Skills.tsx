"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { SKILLS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeader
          label="01 / Expertise"
          title="Skills & Tools"
          description="A deep toolkit spanning machine learning, data engineering, and full-stack AI development."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden"
        >
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
              className="bg-bg-card p-6 hover:bg-bg-card-hover transition-colors duration-300"
            >
              <h3 className="flex items-center gap-2 text-[0.92rem] font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[0.68rem] px-2.5 py-1 bg-accent-dim text-accent rounded tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
