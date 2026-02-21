"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 200);
      setScrolled(y > 40);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "backdrop-blur-xl bg-bg/70 border-b border-border" : ""}`}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[0.82rem] font-medium tracking-wider text-accent"
        >
          {PERSONAL.firstName.toLowerCase()}.sutariya
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.78rem] font-medium tracking-[0.08em] uppercase text-muted hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-7 h-5 gap-[5px] group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-[0.08em] uppercase text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
