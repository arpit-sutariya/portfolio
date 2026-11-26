/**
 * Plain layout wrapper. Scroll animations were removed to keep the site calm;
 * the component stays so sections keep a consistent structure.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
