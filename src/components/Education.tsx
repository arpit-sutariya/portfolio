"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { EDUCATION } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { GraduationCap } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Education() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeader label="04 / Education" title="Academic Background" />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-4.5 h-4.5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-[1.15rem]">{edu.school}</h3>
                  <p className="text-accent text-[0.88rem] mt-0.5">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-[0.72rem] text-muted tracking-wide mb-3">
                <span>{edu.gpa}</span>
                <span className="w-1 h-1 rounded-full bg-border-hover" />
                <span>{edu.period}</span>
              </div>

              <p className="text-[0.82rem] text-muted/70 leading-relaxed">
                <span className="text-muted text-[0.72rem] font-mono tracking-wider uppercase">
                  Coursework:{" "}
                </span>
                {edu.coursework}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
