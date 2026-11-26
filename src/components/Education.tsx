import { EDUCATION } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeader
          index="04"
          label="Education"
          title={
            <>
              Where I <em>studied</em>
            </>
          }
        />

        {EDUCATION.map((edu) => (
          <Reveal key={edu.school}>
            <article className="rule grid gap-6 border-t py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-3">
                <p className="font-mono text-[0.72rem] tabular-nums">{edu.period}</p>
                <p className="mt-1 text-[0.8rem] text-muted">{edu.location}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-[clamp(1.4rem,2.2vw,1.75rem)] leading-[1.1]">
                  {edu.school}
                </h3>
                <p className="mt-2 text-[0.88rem]">{edu.degree}</p>
                <p className="mt-1 font-serif text-[1rem] italic text-accent">
                  {edu.gpa}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="label">Coursework</p>
                <p className="mt-2 text-[0.88rem] leading-[1.7] text-muted">
                  {edu.coursework.join(", ")}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
