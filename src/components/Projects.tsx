import {
  AGENT_PROJECTS,
  DATA_PROJECTS,
  MORE_PROJECTS,
  PERSONAL,
  type Project,
} from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const inner = (
    <div className="grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10">
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[0.68rem] tabular-nums text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="font-serif text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.05] transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h4>
        </div>
        <p className="mt-2 pl-9 text-[0.86rem] text-muted">{project.subtitle}</p>
      </div>

      <div className="md:col-span-7">
        <p className="max-w-[620px] text-[0.9rem] leading-[1.7]">{project.description}</p>

        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-serif text-[1.4rem] leading-none">{m.value}</dd>
              <dt className="label mt-1.5">{m.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <p className="font-mono text-[0.68rem] text-muted">
            {project.tech.join("  /  ")}
          </p>
          {project.link && (
            <span className="text-[0.84rem]">
              <span className="ulink">View source</span>{" "}
              <span className="text-accent">
                ↗
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Reveal>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rule group block border-t"
        >
          {inner}
        </a>
      ) : (
        <div className="rule group border-t">{inner}</div>
      )}
    </Reveal>
  );
}

function Group({
  letter,
  title,
  note,
  items,
  offset,
}: {
  letter: string;
  title: string;
  note: string;
  items: Project[];
  offset: number;
}) {
  return (
    <div className="mt-6 first:mt-0">
      <Reveal className="mb-2 flex flex-wrap items-baseline justify-between gap-2 pt-6">
        <h3 className="font-serif text-[1.25rem] italic">
          <span className="label mr-3 not-italic">({letter})</span>
          {title}
        </h3>
        <p className="label">{note}</p>
      </Reveal>
      {items.map((p, i) => (
        <ProjectRow key={p.title} project={p} index={offset + i} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <SectionHeader
          index="02"
          label="Selected work"
          aside={`${AGENT_PROJECTS.length + DATA_PROJECTS.length} projects`}
          title={
            <>
              Things I&apos;ve <em>built</em>
            </>
          }
        />

        <Group
          letter="A"
          title="AI agents"
          note="Each ships with tests & a reproducible eval"
          items={AGENT_PROJECTS}
          offset={0}
        />
        <Group
          letter="B"
          title="Data engineering & analytics"
          note="Pipelines, warehouses, NL-to-SQL"
          items={DATA_PROJECTS}
          offset={AGENT_PROJECTS.length}
        />

        {/* Earlier work */}
        <div className="mt-6 pt-6">
          <Reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-[1.25rem] italic">
              <span className="label mr-3 not-italic">(C)</span>
              Earlier work
            </h3>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label ulink !text-ink"
            >
              All repositories ↗
            </a>
          </Reveal>
          <ul>
            {MORE_PROJECTS.map((p) => (
              <li key={p.title}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule group grid gap-1 border-t py-4 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <span className="font-serif text-[1.2rem] leading-tight transition-colors group-hover:text-accent md:col-span-3">
                    {p.title}
                  </span>
                  <span className="text-[0.86rem] text-muted md:col-span-6">
                    {p.description}
                  </span>
                  <span className="flex items-baseline justify-between gap-3 font-mono text-[0.66rem] text-muted md:col-span-3">
                    {p.tech}
                    <span className="text-[0.85rem] text-accent">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
