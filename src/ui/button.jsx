import { Link } from "react-router-dom";
import { WhatsAppIcon } from "./icons";

// Token-driven, accessible button. Renders a react-router <Link> when `to` is
// set, an <a> when `href` is set, otherwise a <button>. All variants clear
// WCAG AA for their (large, bold) label; yellow never carries white text.
const VARIANTS = {
  primary:
    "bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-lift focus-visible:outline-primary-900",
  secondary:
    "bg-secondary-500 text-primary-900 shadow-soft hover:bg-secondary-400 hover:shadow-lift",
  ghost:
    "bg-white/70 text-primary-800 ring-1 ring-inset ring-primary-200 hover:bg-white hover:ring-primary-300",
  whatsapp:
    "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-dark hover:shadow-lift",
  soft:
    "bg-primary-100 text-primary-800 hover:bg-primary-200",
};

const SIZES = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon: Icon,
  iconRight = false,
  className = "",
  ...props
}) {
  // WhatsApp buttons always show the real WhatsApp glyph.
  const IconCmp = variant === "whatsapp" ? WhatsAppIcon : Icon;
  const classes = [
    "group inline-flex items-center justify-center rounded-full font-fredoka font-medium",
    "transition-all duration-300 ease-gentle active:scale-[.98]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className,
  ].join(" ");

  const inner = (
    <>
      {IconCmp && !iconRight && (
        <IconCmp
          className="transition-transform duration-300 ease-gentle group-hover:-translate-x-0.5"
          size={size === "lg" ? 22 : 18}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {IconCmp && iconRight && (
        <IconCmp
          className="transition-transform duration-300 ease-gentle group-hover:translate-x-1"
          size={size === "lg" ? 22 : 18}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:|^tel:|^mailto:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}

export default Button;
