"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { PERSONAL } from "@/lib/data";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const links = [
  {
    label: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: PERSONAL.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: PERSONAL.github,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <>
      <section
        id="contact"
        className="py-[clamp(5rem,10vw,8rem)] text-center"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <SectionHeader
            label="05 / Contact"
            title="Let's Connect"
            description="Open to opportunities in data science, machine learning, and AI engineering. Let's talk."
            center
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex justify-center gap-3 flex-wrap mt-6"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2.5 px-5 py-3 bg-bg-card border border-border rounded-lg font-mono text-[0.78rem] tracking-wide text-white hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
                {link.external && (
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <p className="font-mono text-[0.72rem] text-muted tracking-wide">
            © {new Date().getFullYear()} {PERSONAL.name}
          </p>
        </div>
      </footer>
    </>
  );
}
