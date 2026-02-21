"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="font-mono text-[0.73rem] tracking-[0.15em] uppercase text-accent mb-6"
        >
          Data Scientist · ML Engineer · Full Stack Developer · USC &apos;26
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-normal leading-[1.06] tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
        >
          
          <i>{PERSONAL.firstName}</i>
          <br />
          <i>{PERSONAL.lastName}</i>
          <em className="text-accent">.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="text-[clamp(1rem,1.8vw,1.15rem)] text-muted max-w-[520px] leading-relaxed mb-10"
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg text-[0.85rem] font-medium tracking-wide rounded-md border border-accent hover:bg-[#d4b578] hover:shadow-[0_4px_24px_rgba(201,169,110,0.25)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-[0.85rem] font-medium tracking-wide rounded-md border border-border-hover hover:border-accent hover:text-accent transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Ambient orb */}
      <div className="absolute right-[-5%] top-[20%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.07)_0%,transparent_70%)] blur-[60px] animate-float pointer-events-none md:block hidden" />
      <div className="absolute left-[-8%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.04)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
    </section>
  );
}
