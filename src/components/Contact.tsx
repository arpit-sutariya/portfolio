import { PERSONAL } from "@/lib/data";
import Reveal from "./Reveal";

const links = [
  { label: "LinkedIn", href: PERSONAL.linkedin },
  { label: "GitHub", href: PERSONAL.github },
];

export default function Contact() {
  const [user, domain] = PERSONAL.email.split("@");

  return (
    <footer id="contact" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="rule flex items-center justify-between border-t pt-4">
            <p className="label">(05) &nbsp;Contact</p>
            <p className="label hidden sm:block">Say hello</p>
          </div>

          <h2 className="mt-8 font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
            Let&apos;s <em className="text-accent">talk.</em>
          </h2>

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12">
            <p className="max-w-[420px] text-[0.92rem] leading-[1.65] text-muted md:col-span-5">
              I&apos;m graduating in December 2026 and looking for full-time roles
              in software engineering, data science, data engineering, and
              machine learning. The fastest way to reach me is email.
            </p>

            <div className="md:col-span-7">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="group block break-all font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] leading-tight"
              >
                <span className="ulink">
                  {user}
                  <span className="text-muted transition-colors group-hover:text-accent">
                    @
                  </span>
                  {domain}
                </span>{" "}
                <span className="text-accent">
                  ↗
                </span>
              </a>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ulink text-[0.9rem]"
                  >
                    {l.label} <span className="text-accent">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="rule mt-20 flex flex-col gap-3 border-t py-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p>© {new Date().getFullYear()} {PERSONAL.name}</p>
          <p className="font-serif text-[0.92rem] italic">Designed &amp; built in Los Angeles</p>
          <a href="#top" className="ulink text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
