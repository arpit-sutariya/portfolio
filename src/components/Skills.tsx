import { SKILLS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeader
          index="03"
          label="Toolkit"
          aside="What I reach for"
          title={
            <>
              Tools of the <em>trade</em>
            </>
          }
        />

        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.06}>
              <div className="rule border-t py-6">
                <p className="label">
                  {String(i + 1).padStart(2, "0")} &nbsp;{group.category}
                </p>
                <p className="mt-3 font-serif text-[1.15rem] leading-[1.4]">
                  {group.items.map((item, j) => (
                    <span key={item}>
                      {item}
                      {j < group.items.length - 1 && (
                        <span className="text-muted/60">, </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
