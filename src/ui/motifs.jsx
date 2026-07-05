// Hand-drawn signature motifs for Cuddle Corners: a friendly bear, soft clouds,
// and a smooth wave section divider. Soft and a touch imperfect: the brand's
// warmth, not machine-perfect vector.

/**
 * A smooth, elegant wave divider between two colour bands.
 * Set the fill via a text color class (e.g. `text-primary-900`). The path
 * uses currentColor. `flip` points the wave the other way (for footers).
 */
export function CloudDivider({ className = "text-paper", flip = false }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${className} ${flip ? "rotate-180" : ""}`}
      style={{ height: "clamp(34px, 5vw, 64px)" }}
    >
      <path
        fill="currentColor"
        d="M0,42 C160,8 320,8 480,34 C640,60 760,62 900,40 C1010,23 1110,20 1200,34 L1200,80 L0,80 Z"
      />
    </svg>
  );
}

/**
 * A soft, clearly-visible cloud puff (white with a gentle shadow + faint
 * outline so it reads on the cream ground). Size/position via className.
 */
export function Cloud({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 128 76"
      aria-hidden="true"
      className={className}
      style={{
        filter: "drop-shadow(0 6px 12px rgba(2,90,119,0.12))",
        ...style,
      }}
    >
      <path
        d="M34 68C18 68 6 57 6 43c0-12 9-21 21-22 3-11 13-19 25-19 12 0 22 7 26 18 1 0 2-1 3-1 13 0 23 9 23 21 0 6-3 12-7 15 3 2 5 6 5 10 0 3-3 5-6 5H34z"
        className="fill-white stroke-primary-200"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A defined four-point sparkle twinkle. */
export function Sparkle({ className = "text-secondary-400", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M12 1c1.1 5.6 4.3 8.8 9.9 9.9C16.3 12 13.1 15.2 12 20.8 10.9 15.2 7.7 12 2.1 10.9 7.7 9.8 10.9 6.6 12 1z"
        fill="currentColor"
        className="stroke-secondary-600"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The Cuddle Corners bear, a warm, waving honey-bear character.
 * Decorative; give it an accessible label only where it carries meaning.
 */
export function BearMascot({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 240"
      className={className}
      role="img"
      aria-label="Cuddle Corners bear mascot"
    >
      <ellipse
        cx="110"
        cy="226"
        rx="66"
        ry="10"
        className="fill-ink"
        opacity="0.08"
      />

      {/* ---- body ---- */}
      <path
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
        d="M56 150c0-26 24-42 54-42s54 16 54 42c0 34-24 60-54 60s-54-26-54-60z"
      />
      {/* dungarees */}
      <path
        className="fill-primary-500"
        d="M64 168c14 8 32 12 46 12s32-4 46-12c4 22-6 42-46 42s-50-20-46-42z"
      />
      <rect
        x="96"
        y="150"
        width="10"
        height="26"
        rx="5"
        className="fill-primary-500"
      />
      <rect
        x="114"
        y="150"
        width="10"
        height="26"
        rx="5"
        className="fill-primary-500"
      />
      <circle cx="101" cy="182" r="4" className="fill-secondary-400" />
      <circle cx="119" cy="182" r="4" className="fill-secondary-400" />

      {/* left arm */}
      <circle
        cx="58"
        cy="164"
        r="16"
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
      />
      {/* right arm waving */}
      <path
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
        d="M150 150c14-14 30-24 44-18 8 4 6 16-4 22-12 8-28 12-40 8z"
      />
      <circle
        cx="192"
        cy="130"
        r="15"
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
      />

      {/* ---- ears ---- */}
      <circle
        cx="72"
        cy="58"
        r="24"
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
      />
      <circle
        cx="148"
        cy="58"
        r="24"
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
      />
      <circle cx="72" cy="58" r="12" className="fill-sand-light" />
      <circle cx="148" cy="58" r="12" className="fill-sand-light" />

      {/* ---- head ---- */}
      <circle
        cx="110"
        cy="86"
        r="58"
        className="fill-sand stroke-sand-dark"
        strokeWidth="2"
      />

      {/* muzzle */}
      <ellipse cx="110" cy="104" rx="34" ry="27" className="fill-sand-light" />
      <ellipse cx="110" cy="94" rx="9" ry="7" className="fill-ink" />
      <path
        d="M96 108c6 8 22 8 28 0"
        className="stroke-ink"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* eyes */}
      <circle cx="88" cy="80" r="6" className="fill-ink" />
      <circle cx="132" cy="80" r="6" className="fill-ink" />
      <circle cx="90" cy="78" r="2" className="fill-white" />
      <circle cx="134" cy="78" r="2" className="fill-white" />
      {/* cheeks */}
      <circle cx="74" cy="98" r="9" className="fill-blush" opacity="0.75" />
      <circle cx="146" cy="98" r="9" className="fill-blush" opacity="0.75" />
    </svg>
  );
}
