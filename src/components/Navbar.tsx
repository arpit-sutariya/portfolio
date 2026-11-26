"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

function useLATime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="group relative grid h-7 w-7 place-items-center"
    >
      <span className="block h-3.5 w-3.5 rounded-full border border-ink bg-[linear-gradient(90deg,rgb(var(--ink))_50%,transparent_50%)]" />
    </button>
  );
}

export default function Navbar() {
  const time = useLATime();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-paper/85 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto grid h-14 max-w-page grid-cols-[1fr_auto] items-center gap-6 px-5 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#top" className="text-[0.85rem] font-medium tracking-tight">
          Arpit Sutariya
          <span className="ml-2 hidden font-serif text-[0.95rem] italic text-muted lg:inline">
            software · data · ai
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="ulink text-[0.82rem]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <span className="label hidden tabular-nums sm:inline" suppressHydrationWarning>
            LA {time}
          </span>
          <ThemeToggle />
          <button
            className="label md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="rule mx-5 border-t pb-6 pt-2">
          {NAV_LINKS.map((l, i) => (
            <li key={l.href} className="rule border-b">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-3 font-serif text-[1.5rem] leading-tight"
              >
                {l.label}
                <span className="label">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
