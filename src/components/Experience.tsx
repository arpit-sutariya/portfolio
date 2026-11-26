import { EXPERIENCE } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeader
          index="01"
          label="Experience"
          aside="2023 — Now"
          title={
            <>
              Where I&apos;ve <em>worked</em>
            </>
          }
        />

        <ol>
          {EXPERIENCE.map((exp) => (
            <li key={exp.company + exp.period}>
              <Reveal>
                <article className="rule grid gap-6 border-t py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="md:col-span-3">
                    <p className="font-mono text-[0.72rem] tabular-nums">{exp.period}</p>
                    <p className="mt-1 text-[0.8rem] text-muted">{exp.location}</p>
                    {exp.latest && (
                      <p className="label mt-4 !text-accent">(Latest)</p>
                    )}
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.05]">
                      {exp.company}
                    </h3>
                    {exp.team && (
                      <p className="mt-1 font-serif text-[1.05rem] italic text-muted">
                        {exp.team}
                      </p>
                    )}
                    <p className="mt-3 text-[0.88rem]">{exp.role}</p>
                  </div>

                  <div className="md:col-span-5">
                    <ul className="space-y-3">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="grid grid-cols-[1.5rem_1fr] text-[0.88rem] leading-[1.65] text-muted"
                        >
                          <span className="font-mono text-[0.7rem] leading-[2.4] text-accent">
                            0{j + 1}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 pl-6 font-mono text-[0.68rem] leading-relaxed text-muted">
                      {exp.tags.join("  /  ")}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
