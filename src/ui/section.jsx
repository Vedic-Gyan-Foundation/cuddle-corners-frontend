// Layout primitives that enforce the site's vertical rhythm and max width.

const TONES = {
  paper: "bg-paper",
  alt: "bg-paper-alt",
  blue: "bg-primary-50",
  sky: "bg-primary-100",
  deep: "bg-primary-900 text-white",
  none: "",
};

export function Container({ children, className = "", size = "default" }) {
  const max = size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "paper",
  className = "",
  containerClassName = "",
  size,
  id,
}) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-28 ${TONES[tone] ?? ""} ${className}`}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/** Eyebrow / kicker label used above section headings. */
export function Kicker({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-fredoka text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 ${className}`}
    >
      <span className="h-[3px] w-6 rounded-full bg-secondary-500" aria-hidden="true" />
      {children}
    </span>
  );
}

export default Section;
