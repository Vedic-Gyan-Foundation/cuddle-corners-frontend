import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  GraduationCap,
  Megaphone,
  Map,
  Award,
  ClipboardList,
  Users,
  LineChart,
  FileSignature,
  Rocket,
  PartyPopper,
  Plus,
  Minus,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Send,
} from "lucide-react";

import { PagesBanner } from "../components";
import { SITE, HQ_EMAIL, HQ_PHONE, HQ_PHONE_ALT } from "../config/site";
import {
  Section,
  Container,
  Kicker,
  Button,
  RevealOnScroll,
  BearMascot,
  CloudDivider,
  CloudPuff,
  Sparkle,
} from "../ui";

/* ---------------------------------------------------------------- data ---- */
const BENEFITS = [
  {
    icon: Wallet,
    title: "Low investment, high returns",
    body: "Start your own Cuddle Corners with minimal capital and enjoy an attractive return within a short timeframe.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    icon: TrendingUp,
    title: "A proven business model",
    body: "Lean on an established curriculum and operational systems that have already succeeded across multiple locations.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive training",
    body: "Receive thorough initial training and ongoing support from our experienced team of education professionals.",
    tint: "bg-tertiary-50 text-tertiary-600",
  },
  {
    icon: Megaphone,
    title: "Marketing support",
    body: "Get ready-made marketing materials and proven strategies to help you attract families in your community.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    icon: Map,
    title: "Exclusive territory",
    body: "Secure the rights to operate in your designated area — no competition from other Cuddle Corners centres.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    icon: Award,
    title: "A trusted brand",
    body: "Join a name that parents already recognise and trust for quality early childhood education.",
    tint: "bg-tertiary-50 text-tertiary-600",
  },
];

const STAGES = [
  {
    icon: ClipboardList,
    title: "Initial inquiry",
    body: "Complete our franchise questionnaire and speak with our development team.",
  },
  {
    icon: Users,
    title: "Discovery meeting",
    body: "Learn more about our model and the franchise opportunity in detail.",
  },
  {
    icon: LineChart,
    title: "Business review",
    body: "Review the financial details and the requirements for your location.",
  },
  {
    icon: FileSignature,
    title: "Sign agreement",
    body: "Formalise our partnership with the franchise documentation.",
  },
  {
    icon: Rocket,
    title: "Training & setup",
    body: "Complete our comprehensive training programme and prepare your location.",
  },
  {
    icon: PartyPopper,
    title: "Grand opening",
    body: "Launch your Cuddle Corners preschool with our full marketing support.",
  },
];

const FAQS = [
  {
    q: "What is the joining / sign-in fee?",
    a: "The joining fee is ₹1,25,000. This covers your franchise application, onboarding and initial training. Additional setup costs may apply depending on your location and requirements.",
  },
  {
    q: "What education background do I need?",
    a: "An education background is helpful but not mandatory. Our comprehensive training programme equips you with everything you need — a genuine passion for early childhood education is what matters most.",
  },
  {
    q: "How long does it take to open a franchise?",
    a: "Typically 2–3 months from signing the franchise agreement to opening day, covering location selection, staff hiring, training and setup.",
  },
  {
    q: "What ongoing support will I receive?",
    a: "Continuous curriculum updates, marketing assistance, operational guidance and access to our franchise support team, plus regular training workshops and an annual conference.",
  },
  {
    q: "What are the royalty fees?",
    a: "We do not charge any royalty fee on your gross revenue.",
  },
];

const inputClasses =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted transition-colors duration-200 ease-gentle focus:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-200";
const labelClasses = "block font-fredoka text-sm font-semibold text-ink";

/* -------------------------------------------------------------- sections -- */
function Intro() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <RevealOnScroll>
          <Kicker>Franchise opportunity</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Build a preschool your neighbourhood will love
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A Cuddle Corners franchise lets you bring warm, high-quality early
            childhood education to your community — backed by a proven model,
            hands-on training and a brand that families already trust across{" "}
            {SITE.city}.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Whether or not you come from an education background, our team walks
            with you from your first enquiry to your grand opening. Explore the
            process below, then request information and we&apos;ll be in touch.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#process" size="lg" icon={ArrowRight} iconRight>
              See our process
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
            >
              WhatsApp us
            </Button>
          </div>
        </RevealOnScroll>

        <div className="relative mx-auto hidden w-full max-w-sm justify-self-end lg:block">
          <div
            className="overflow-hidden border-4 border-white shadow-lift"
            style={{ borderRadius: "46% 54% 55% 45% / 50% 46% 54% 50%" }}
          >
            <img
              src="/images/photos/school-ready.jpg"
              alt="A happy young child, ready and excited for school"
              className="aspect-[4/4.2] w-full object-cover"
              loading="lazy"
              width="384"
              height="403"
            />
          </div>
          <BearMascot className="absolute -bottom-6 -left-4 w-24 drop-shadow-md" />
        </div>
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <Section tone="blue">
      <div className="mb-12 max-w-2xl">
        <Kicker>Why partner with us</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Why choose a Cuddle Corners franchise
        </h2>
        <p className="mt-3 text-lg text-ink-soft">
          You bring the heart for your community; we bring the systems, training
          and support that make it work.
        </p>
      </div>

      <RevealOnScroll
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerChildren={0.1}
      >
        {BENEFITS.map(({ icon: Icon, title, body, tint }) => (
          <div
            key={title}
            className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}
            >
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
              {body}
            </p>
          </div>
        ))}
      </RevealOnScroll>
    </Section>
  );
}

function Process() {
  return (
    <Section tone="paper" id="process">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* intro + supporting visual fills the left column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Kicker>How it works</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            From first inquiry to grand opening
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Six clear steps, and our team beside you at every one of them — from
            your very first enquiry to the day you cut the ribbon.
          </p>

          <div className="relative mx-auto mt-10 hidden w-full max-w-xs lg:block">
            <div
              className="overflow-hidden border-4 border-white shadow-lift"
              style={{ borderRadius: "48% 52% 53% 47% / 52% 48% 52% 48%" }}
            >
              <img
                src="/images/photos/outdoor.jpg"
                alt="A Cuddle Corners classroom ready to welcome children"
                className="aspect-[4/3.6] w-full object-cover"
                loading="lazy"
              />
            </div>
            <Sparkle className="absolute -right-2 top-2 w-7 text-secondary-400" />
            <BearMascot className="absolute -bottom-7 -left-4 w-24 drop-shadow-md" />
            <CloudPuff className="pointer-events-none absolute -left-6 top-10 w-16" />
          </div>
        </div>

        <RevealOnScroll className="relative" staggerChildren={0.1}>
          {/* vertical spine */}
          <span
            className="absolute left-6 top-2 hidden w-px bg-line sm:block"
            style={{ height: "calc(100% - 1rem)" }}
            aria-hidden="true"
          />
          <ol className="space-y-5">
            {STAGES.map(({ icon: Icon, title, body }, i) => (
              <li
                key={title}
                className="relative flex gap-5 rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift sm:pl-8"
              >
                <div className="relative shrink-0">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-secondary-500 font-fredoka text-xs font-semibold text-primary-900">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </div>
    </Section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="alt">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* heading + supporting help card fills the left column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Kicker>Good to know</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            The details franchise partners ask about most. Can&apos;t find your
            answer? We&apos;re always happy to talk it through.
          </p>

          <div className="relative mt-8 rounded-card border border-line bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary-100 text-primary-900">
              <MessageCircle size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-fredoka text-lg font-semibold text-ink">
              Still have questions?
            </h3>
            <p className="mt-1.5 leading-relaxed text-ink-soft">
              Chat with our franchise development team — no obligation, just a
              friendly conversation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="#contact" variant="soft" icon={ArrowRight} iconRight>
                Request information
              </Button>
              <Button
                href={SITE.whatsappHref}
                variant="whatsapp"
                icon={MessageCircle}
              >
                WhatsApp us
              </Button>
            </div>
            <CloudPuff className="pointer-events-none absolute -right-4 -top-5 hidden w-16 sm:block" />
          </div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-card border border-line bg-white shadow-soft"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200 ease-gentle hover:bg-paper-alt"
                >
                  <span className="font-fredoka text-lg font-semibold text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-200 ${
                      isOpen
                        ? "bg-primary-600 text-white"
                        : "bg-primary-100 text-primary-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} aria-hidden="true" />
                    ) : (
                      <Plus size={18} aria-hidden="true" />
                    )}
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="leading-relaxed text-ink-soft">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </Section>
  );
}

function RequestInfo() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) setPhone(value);
  };

  return (
    <Section tone="paper" id="contact">
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* copy + contact */}
        <div>
          <Kicker>Get in touch</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Request information
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Share your details and our franchise development team will contact
            you to discuss the opportunity in detail. There is no obligation —
            just a friendly conversation about what a Cuddle Corners could look
            like in your community.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                <Mail size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-fredoka text-sm font-semibold text-ink">
                  Email us
                </p>
                <a
                  href={SITE.emailHref}
                  className="text-ink-soft transition-colors duration-200 hover:text-primary-700"
                >
                  {HQ_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                <Phone size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-fredoka text-sm font-semibold text-ink">
                  Call us
                </p>
                <p className="text-ink-soft">
                  <a
                    href={`tel:${HQ_PHONE}`}
                    className="transition-colors duration-200 hover:text-primary-700"
                  >
                    {HQ_PHONE}
                  </a>
                  <span className="px-1 text-ink-muted">/</span>
                  <a
                    href={`tel:${HQ_PHONE_ALT}`}
                    className="transition-colors duration-200 hover:text-primary-700"
                  >
                    {HQ_PHONE_ALT}
                  </a>
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              icon={MessageCircle}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* form */}
        <form
          action={`https://formsubmit.co/${HQ_EMAIL}`}
          method="POST"
          className="space-y-6 rounded-card border border-line bg-white p-6 shadow-soft sm:p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New franchise enquiry — Cuddle Corners"
          />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="franchise-name" className={labelClasses}>
                Full name{" "}
                <span className="font-normal text-ink-muted">(required)</span>
              </label>
              <input
                id="franchise-name"
                type="text"
                name="Name"
                required
                autoComplete="name"
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="franchise-email" className={labelClasses}>
                Email{" "}
                <span className="font-normal text-ink-muted">(required)</span>
              </label>
              <input
                id="franchise-email"
                type="email"
                name="Email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="franchise-phone" className={labelClasses}>
                Phone{" "}
                <span className="font-normal text-ink-muted">(required)</span>
              </label>
              <input
                id="franchise-phone"
                type="tel"
                name="Number"
                required
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                className={inputClasses}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div>
              <label htmlFor="franchise-location" className={labelClasses}>
                Interested location{" "}
                <span className="font-normal text-ink-muted">(required)</span>
              </label>
              <input
                id="franchise-location"
                type="text"
                name="Interested Location"
                required
                placeholder="City, State"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="franchise-message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="franchise-message"
              rows={4}
              name="Message"
              placeholder="Tell us about your interest in the franchise opportunity."
              className={`${inputClasses} resize-none`}
            />
          </div>

          <Button type="submit" size="lg" icon={Send} className="w-full">
            Submit request
          </Button>
        </form>
      </div>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative text-white">
      <CloudDivider className="-mb-px text-primary-900" />
      <div className="relative overflow-hidden bg-primary-900">
        <CloudPuff className="pointer-events-none absolute left-[7%] top-10 hidden w-24 opacity-20 md:block" />
        <CloudPuff className="pointer-events-none absolute bottom-10 right-[9%] hidden w-28 opacity-20 md:block" />
        <Container className="relative flex flex-col items-center gap-6 py-20 text-center">
          <BearMascot className="w-24" />
          <h2 className="max-w-2xl font-fredoka text-3xl font-semibold sm:text-4xl">
            Begin your franchising journey today
          </h2>
          <p className="max-w-xl text-lg text-primary-100">
            Join a growing family of educators making a real difference in their
            communities through early childhood education.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#contact" variant="secondary" size="lg" icon={ArrowRight} iconRight>
              Request information
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
            >
              Message us on WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

function JoinUs() {
  return (
    <>
      <PagesBanner
        headingText="Partner with Cuddle Corners"
        kicker="Join our family"
        subtitle="Bring the joy of quality early childhood education to your community with a Cuddle Corners franchise."
      />
      <Intro />
      <Benefits />
      <Process />
      <Faqs />
      <RequestInfo />
      <ClosingCTA />
    </>
  );
}

export default JoinUs;
