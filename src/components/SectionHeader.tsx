"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}

const ease = [0.22, 1, 0.36, 1];

export default function SectionHeader({
  label,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={center ? "text-center" : ""}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal mb-4"
      >
        <i>{title}</i>
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className={`text-muted leading-relaxed mb-10 max-w-[560px] ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
