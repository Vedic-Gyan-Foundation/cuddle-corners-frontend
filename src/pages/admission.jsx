import { useState } from "react";
import {
  CalendarHeart,
  MapPinned,
  FileCheck2,
  Sparkles,
  ClipboardList,
  Download,
  Mail,
  MessageCircle,
  ArrowRight,
  Wallet,
  ListChecks,
  BadgeCheck,
} from "lucide-react";

import { PagesBanner, VisitCTA } from "../components";
import { SITE } from "../config/site";
import {
  Section,
  Kicker,
  Button,
  RevealOnScroll,
  CloudPuff,
  Sparkle,
} from "../ui";
import Modal from "../ui/modal";
import EnrollmentForm from "../components/enrollment_form";

const ADMISSION_PDF = "/pdf/cuddle-corners-admission-form.pdf";

const STEPS = [
  {
    icon: CalendarHeart,
    title: "Enquire & book a visit",
    body: "Fill our short questionnaire or send a quick WhatsApp. Tell us a little about your little one and the days that suit you.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    icon: MapPinned,
    title: "Tour the centre",
    body: "Walk our classrooms, meet the educators and see the daily rhythm for yourself — in person or on a virtual tour.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    icon: FileCheck2,
    title: "Submit application & deposit",
    body: "Ready to join? Submit the Application for Enrollment along with the Enrollment Deposit to secure a spot or hold a place on our waitlist.",
    tint: "bg-tertiary-50 text-tertiary-600",
  },
  {
    icon: Sparkles,
    title: "Orientation",
    body: "Once we receive both, you'll get an enrollment packet and we'll schedule your orientation — the first happy step of the journey.",
    tint: "bg-primary-100 text-primary-700",
  },
];

const POLICY = [
  {
    icon: Wallet,
    q: "How does the Enrollment Deposit work?",
    a: "After your visit, submit an Application for Enrollment and Enrollment Deposit to secure a spot in our program or to hold a place on our waitlist. Once a spot becomes available and is reserved for your child, the deposit becomes non-refundable.",
  },
  {
    icon: ListChecks,
    q: "What if my child is placed on the waitlist?",
    a: "If your child is placed on the waitlist, your deposit will be held until a space becomes available. Should you choose to withdraw before a space opens up, your deposit may be refunded — however, you must notify the Centre in writing.",
  },
  {
    icon: BadgeCheck,
    q: "How are places allocated?",
    a: "Enrollment at Cuddle Corners is offered on a first come, first served basis. We are unable to hold spots without both an Application for Enrollment and Enrollment Deposit. Once our program is full, children are added to the waitlist and admitted as space becomes available.",
  },
];

function Admission() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value) => setIsOpen(value);

  return (
    <>
      <PagesBanner
        headingText="A strong, joyful foundation for your child's future"
        kicker="Admissions open"
        subtitle={`Now welcoming little ones aged ${SITE.ageRange} across our ${SITE.centresCount} centres in ${SITE.city}. Here's how to take the first step.`}
      />

      {/* ---- Intro + primary actions ---------------------------------- */}
      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="max-w-xl">
            <Kicker>Getting started</Kicker>
            <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
              Take the first step toward Cuddle Corners
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We&apos;d love to learn more about your child. There are two easy
              ways to begin — book a warm, no-pressure visit through our short
              questionnaire, or download the admission form and email it back to
              us. Either way, we&apos;ll take it from there.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                icon={ArrowRight}
                iconRight
                onClick={() => setIsOpen(true)}
              >
                Book a Visit
              </Button>
              <Button
                href={SITE.whatsappHref}
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
              >
                Enquire on WhatsApp
              </Button>
            </div>
          </div>

          {/* two action cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                <ClipboardList size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
                Fill the questionnaire
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
                Please take a moment to fill out our short questionnaire and
                we&apos;ll arrange a visit that fits your family.
              </p>
              <div className="mt-5">
                <Button onClick={() => setIsOpen(true)} icon={CalendarHeart}>
                  Book a Visit
                </Button>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary-100 text-secondary-800">
                <Download size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
                Download the admission form
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
                Ready to join us? Download the admission form and email it to{" "}
                <a
                  href={SITE.emailHref}
                  className="font-medium text-primary-700 underline underline-offset-2 hover:text-primary-800"
                >
                  {SITE.email}
                </a>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button
                  href={ADMISSION_PDF}
                  variant="secondary"
                  icon={Download}
                >
                  Download form
                </Button>
                <Button href={SITE.emailHref} variant="ghost" icon={Mail}>
                  Email us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- How to enrol steps --------------------------------------- */}
      <Section tone="blue">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <Kicker>How to enrol</Kicker>
            <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
              Four gentle steps to a spot
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">
              From your first enquiry to your child&apos;s orientation, we keep
              every step warm, clear and simple. No confusing forms, no pressure
              — just a friendly hand guiding you from hello to your little
              one&apos;s very first day.
            </p>
          </div>

          {/* photo cluster fills the column */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              className="overflow-hidden border-4 border-white shadow-lift"
              style={{ borderRadius: "54% 46% 48% 52% / 50% 52% 48% 50%" }}
            >
              <img
                src="/images/photos/portrait-red.jpg"
                alt="A child settling happily into Cuddle Corners"
                className="aspect-[4/4.1] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-32 overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:block">
              <img
                src="/images/photos/blocks.jpg"
                alt="Children playing together"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <Sparkle className="absolute -left-2 top-4 w-7 text-secondary-400" />
            <CloudPuff className="absolute -right-6 top-8 hidden w-16 lg:block" />
          </div>
        </div>

        <RevealOnScroll
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.12}
        >
          {STEPS.map(({ icon: Icon, title, body, tint }, i) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="font-fredoka text-3xl font-semibold text-primary-200">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-fredoka text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
                {body}
              </p>
            </div>
          ))}
        </RevealOnScroll>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button onClick={() => setIsOpen(true)} icon={ArrowRight} iconRight>
            Start with a visit
          </Button>
          <Button href={ADMISSION_PDF} variant="ghost" icon={Download}>
            Or download the form
          </Button>
        </div>
      </Section>

      {/* ---- Enrollment details (accordion) --------------------------- */}
      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="max-w-md">
            <Kicker>Enrollment details</Kicker>
            <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
              The deposit &amp; waitlist policy
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A little clarity up front. Here&apos;s how deposits, the waitlist
              and place allocation work at Cuddle Corners. Have a question we
              haven&apos;t covered? We&apos;re a message away.
            </p>
            <div className="mt-6">
              <Button
                href={SITE.whatsappHref}
                variant="whatsapp"
                icon={MessageCircle}
              >
                Ask on WhatsApp
              </Button>
            </div>
          </div>

          <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white shadow-soft">
            {POLICY.map(({ icon: Icon, q, a }) => (
              <details key={q} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="flex-grow font-fredoka text-lg font-semibold text-ink">
                    {q}
                  </h3>
                  <ArrowRight
                    size={20}
                    className="shrink-0 text-primary-600 transition-transform duration-300 ease-gentle group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-6 pl-[3.75rem] leading-relaxed text-ink-soft">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Closing CTA ---------------------------------------------- */}
      <VisitCTA heading="Ready when you are" />

      {/* ---- Modal ---------------------------------------------------- */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cuddle Corners enrollment"
      >
        <EnrollmentForm onOpenModal={handleOpenModal} />
      </Modal>
    </>
  );
}

export default Admission;
