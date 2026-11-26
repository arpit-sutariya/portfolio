import { HIGHLIGHTS, PERSONAL } from "@/lib/data";

const facts = [
  { k: "Currently", v: "Software Engineering Intern, Amazon Music", s: "Summer 2026" },
  { k: "Previously", v: "Graduate Research Assistant, USC Viterbi", s: "2025 – 2026" },
  { k: "Studying", v: "M.S. Applied Data Science, USC", s: "Graduating Dec 2026" },
  { k: "Based in", v: "Los Angeles, California", s: "Pacific Time" },
];

const socials = [
  { label: "Email", href: `mailto:${PERSONAL.email}` },
  { label: "LinkedIn", href: PERSONAL.linkedin },
  { label: "GitHub", href: PERSONAL.github },
];

// Hairline borders for the 2×2 (mobile) / 1×4 (desktop) numbers grid
const CELL = [
  "border-b lg:border-b-0",
  "border-b border-l pl-5 lg:border-b-0 lg:pl-8",
  "lg:border-l lg:pl-8",
  "border-l pl-5 lg:pl-8",
];

export default function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="label">Portfolio &nbsp;/&nbsp; 2026</p>
          <p className="label flex items-center gap-2 !text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for full-time roles
          </p>
        </div>

        <h1 className="mt-8 max-w-[900px] font-serif text-[clamp(2.4rem,5.6vw,4.75rem)] leading-[1] tracking-[-0.02em] md:mt-12">
          I build software, data systems &amp;{" "}
          <em className="text-accent">AI</em> you can actually <em>trust.</em>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
          <p className="max-w-[420px] text-[0.95rem] leading-[1.65] text-muted md:col-span-5">
            <span className="text-ink">Hi, I&apos;m Arpit,</span> a software
            engineer finishing my M.S. in Applied Data Science at USC. I work across
            the stack, from backend services and data pipelines to machine
            learning models and LLM agents, and I care about shipping things that
            are tested, measured, and reliable.
          </p>

          <div className="md:col-span-7 md:col-start-6">
            <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.k} className="rule border-t py-3.5">
                  <dt className="label">({f.k})</dt>
                  <dd className="mt-1.5 text-[0.88rem] leading-snug">{f.v}</dd>
                  <dd className="mt-0.5 text-[0.78rem] text-muted">{f.s}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="ulink text-[0.88rem]"
                >
                  {s.label} <span className="text-accent">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Numbers */}
        <dl className="rule mt-16 grid grid-cols-2 border-t md:mt-20 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <div key={h.label} className={`rule py-8 pr-4 md:py-10 ${CELL[i]}`}>
              <dd className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-none tracking-[-0.01em]">
                {h.value}
              </dd>
              <dt className="mt-2.5 max-w-[220px] text-[0.8rem] leading-snug text-muted">
                {h.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
