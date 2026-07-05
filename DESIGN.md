# Cuddle Corners — Design System

The contract for how this site looks and behaves. It exists so the brand stays
deliberate and does not drift back into generic, machine-made defaults. When a
choice isn't covered here, favour warmth, legibility, and restraint.

Positioning: **a warm, grounded, trustworthy neighbourhood preschool.** The
child is the user; the parent is the buyer. Every screen must feel joyful to a
child _and_ signal safety and competence to an anxious parent on a phone.

---

## 1. Colour — roles, not decoration

Defined as Tailwind tokens in `tailwind.config.js`. Use the token, never a raw
hex value in a component and never a stock Tailwind colour (`blue-`, `green-`,
`indigo-`, `purple-`, `slate-`, `gray-` …).

| Role             | Token                                                  | Use for                                                |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| **Trust anchor** | `primary` (sky-blue, `500` = `#08AEF0`, ink `800/900`) | Primary CTAs, links, key headings, large calm fills    |
| **Joy accent**   | `secondary` (golden-yellow `500` = `#FEC802`)          | Sparing highlights, the motif, one hover state         |
| **Brand red**    | `tertiary` (`600` = `#7C0001`)                         | The wordmark/logo lockup and rare emphasis **only**    |
| **Ground**       | `paper` (`#FBF7EF`, `alt`, `deep`)                     | The canvas for everything — warm, never clinical white |
| **Text**         | `ink` (`#0E3A49`, `soft`, `muted`)                     | Body and heading text; clears WCAG AA on paper         |
| **Hairline**     | `line`                                                 | Card borders, dividers                                 |

Rules:

- **Contrast is non-negotiable.** Every text/icon/border colour must clear WCAG
  AA against its _actual_ background — 4.5:1 for body text, 3:1 for large text
  and UI. Pastels (`primary-100/200`, `secondary-50/75`) live only in **fills
  and decorative shapes**, never as text colour.
- **Never white or light text on `secondary` (yellow).** Yellow surfaces take
  `text-primary-900` ink. (The old white-on-yellow pills failed at ~1.7:1.)
- The `primary` ramp darkens monotonically (`500` → `900`). It was previously
  inverted at `500/600`; don't reintroduce that.

## 2. Typography — two families + a wordmark

Self-hosted in `/public/fonts` (WOFF2, variable, `font-display: swap`). No font
CDN links.

- **Display / headings → `font-fredoka`** (Fredoka). Rounded, friendly, credible.
- **Body / everything you read → `font-body`** (Nunito). It is also the default
  `sans`. Set at ~1rem, ~65ch measure on long text.
- **Wordmark → `.wordmark` / `font-wordmark`** (Lobster Two). Reserved for the
  logo lockup and, at most, a single hero accent word. **Never** for body or
  section headings. (The old global rule that forced this script face onto every
  `h1–h6` is gone — do not bring it back.)

One `<h1>` per page. `<h2>` for sections, `<h3>` for cards.

## 3. Layout, spacing, motif

- **Rounded everything** — cards, buttons, image masks (`rounded-card`, the
  `rounded-blob` organic mask, `rounded-full` pills).
- Prefer **slightly asymmetric, offset compositions** over a dead-centre hero.
- Use the spacing / `boxShadow` (`shadow-soft`, `shadow-lift`) / `borderRadius`
  tokens. No magic-number margins; no "larger gap on mobile than desktop" bugs.
- **One signature motif:** the Cuddle Corners bear (hand-drawn, slightly
  imperfect) + clouds as soft curved section dividers. Repeated with restraint —
  not a rainbow of decorations.
- **Conversion is a first-class layout element:** a sticky mobile action bar
  (Call · WhatsApp · Book a Visit) for the Indian parent funnel.
- **Wave/footer transition:** the pre-footer CTA owns the single cream→blue wave
  and flows straight into the (blue) footer — the footer has no second wave. The
  section directly above a CTA must be `tone="paper"` (the base cream the wave
  sits on) so there's no third-colour sliver where `paper-alt` would meet it.

## 4. Motion — meaning, not ambience

- Build the **static layout as the real design**; motion is additive.
- Framer Motion is gated globally by `<MotionConfig reducedMotion="user">` in
  `src/app/App.jsx`; CSS animations degrade via the `prefers-reduced-motion`
  block in `src/index.css`. Scroll-linked parallax must be gated manually.
- **Animate only `transform`, `opacity`, `filter`.** Never `top/left/width/
height/margin` (layout thrash). Float things with `transform: translate()`.
- Motion never gates content — a fade that fails must still leave text visible.

## 5. Anti-AI-slop rules (enforced)

Run `npm run lint:design` — it flags raw hex and off-palette Tailwind colours in
`src/`. Existing violations are tracked debt, cleaned up phase by phase.

Banned, with the intended alternative:

- ✗ Purple / indigo / violet anywhere · ✗ renaming a Tailwind default to a token
  → sky-blue / gold / red, always via tokens.
- ✗ Pure-white or tinted-white ground → warm `paper` (`#FBF7EF`).
- ✗ Centred hero + three identical icon-on-top cards → asymmetric, photo-led.
- ✗ Gradient-mesh blobs, glassmorphism, floating radial glows → real texture,
  photography, hand-drawn line work; gradients only as a single deliberate accent.
- ✗ Emoji as icons/section markers → the custom / lucide icon set in brand colour.
- ✗ Machine-perfect flat-vector "plastic" illustration → hand-drawn, imperfect.
- ✗ Inter-for-everything / Space-Grotesk+serif combo → Fredoka + Nunito + Lobster
  Two (wordmark only).

## 6. Imagery

Authentic photography does the **trust** work; hand-drawn illustration does the
**delight** work. Never ship borrowed stock or hotlinked third-party images.
Until real photos of the actual Guwahati centres/children (with consent)/named
teachers arrive, hand-drawn illustration is the honest interim.

Performance: `<picture>` with AVIF/WebP + `srcset`; one `fetchpriority="high"`
LCP hero, everything below the fold `loading="lazy"` with explicit dimensions.
