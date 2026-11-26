import Reveal from "./Reveal";

/** Editorial section opener: hairline rule, "(01) Label", big serif title. */
export default function SectionHeader({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="rule flex items-center justify-between border-t pt-4">
        <p className="label">
          ({index}) &nbsp;{label}
        </p>
        {aside && <div className="label hidden sm:block">{aside}</div>}
      </div>
      <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1] tracking-[-0.01em]">
        {title}
      </h2>
    </Reveal>
  );
}
