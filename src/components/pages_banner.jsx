import Breadcrumbs from "./breadcrumbs";
import { Container, CloudDivider, CloudPuff, BearMascot } from "../ui";

/**
 * Warm inner-page hero. Backward-compatible props:
 *   headingText – the H1 (required)
 *   imgSrc      – optional photo shown in a blob beside the title
 *   kicker      – optional eyebrow label
 *   subtitle    – optional supporting line
 */
function PagesBanner({ headingText, imgSrc, kicker, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* single soft sky wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 80% at 85% -10%, rgba(8,174,240,.16), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <CloudPuff className="pointer-events-none absolute left-[8%] top-10 hidden w-20 text-white/80 md:block" />

      <Container className="relative grid items-center gap-8 py-12 lg:grid-cols-[1.4fr_0.9fr] lg:py-16">
        <div>
          <Breadcrumbs className="mb-5" />
          {kicker && (
            <span className="mb-3 inline-flex items-center gap-2 font-fredoka text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
              <span className="h-[3px] w-6 rounded-full bg-secondary-500" aria-hidden="true" />
              {kicker}
            </span>
          )}
          <h1 className="font-fredoka text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            {headingText}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {subtitle}
            </p>
          )}
        </div>

        {/* decorative side */}
        <div className="relative hidden justify-self-end lg:block">
          {imgSrc ? (
            <div
              className="w-72 overflow-hidden border-4 border-white shadow-lift"
              style={{ borderRadius: "46% 54% 55% 45% / 50% 46% 54% 50%" }}
            >
              <img src={imgSrc} alt="" className="aspect-square w-full object-cover" />
            </div>
          ) : (
            <div className="relative flex justify-center">
              <BearMascot className="w-40" />
              <CloudPuff className="absolute -left-6 top-2 w-20 text-white" />
              <CloudPuff className="absolute -right-4 bottom-6 w-14 text-white/90" />
            </div>
          )}
        </div>
      </Container>

      <CloudDivider className="text-paper-alt" />
    </section>
  );
}

export default PagesBanner;
