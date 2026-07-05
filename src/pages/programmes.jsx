import {
  Baby,
  Blocks,
  Palette,
  GraduationCap,
  Clock,
  Users,
  Download,
  ArrowRight,
  MessageCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";

import { PagesBanner, VisitCTA } from "../components";
import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import {
  Section,
  Kicker,
  Button,
  RevealOnScroll,
  CloudPuff,
  Sparkle,
} from "../ui";
import {
  programAdditionalResources,
  programContents,
} from "../utils/data/program_contents";

/* ---------------------------------------------------------------- data ---- */
const AGE_BANDS = [
  {
    name: "Playgroup",
    age: "1.5 – 2.5 yrs",
    icon: Baby,
    blurb:
      "Gentle first steps away from home: sensory play, songs and lots of cuddles.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    name: "Nursery",
    age: "2.5 – 3.5 yrs",
    icon: Blocks,
    blurb:
      "Building blocks of language, sharing and curiosity through guided play.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    name: "LKG",
    age: "3.5 – 4.5 yrs",
    icon: Palette,
    blurb:
      "Early literacy, numbers and creativity, balanced with joyful discovery.",
    tint: "bg-tertiary-50 text-tertiary-600",
  },
  {
    name: "UKG",
    age: "4.5 – 5.5 yrs",
    icon: GraduationCap,
    blurb:
      "School-ready confidence: reading, writing and big-kid independence.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    name: "Daycare",
    age: "Full & half day",
    icon: Clock,
    blurb:
      "Safe, cared-for hours beyond class: meals, rest and play while you work.",
    tint: "bg-secondary-100 text-secondary-800",
  },
];

/* -------------------------------------------------------------- sections -- */
function AgeBands() {
  return (
    <Section tone="paper">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Kicker>Programmes by age</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            A gentle stage for every age
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">
            From first steps to school-ready, each year is shaped around how
            little ones actually learn, through play, warmth and wonder.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-card border border-line bg-white px-6 py-4 shadow-soft">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary-100 text-secondary-800">
            <Users size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="font-fredoka text-2xl font-semibold text-ink">
              {AGE_BANDS.length} stages
            </p>
            <p className="text-sm text-ink-soft">for ages {SITE.ageRange}</p>
          </div>
        </div>
      </div>

      <RevealOnScroll
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerChildren={0.1}
      >
        {AGE_BANDS.map(({ name, age, icon: Icon, blurb, tint }) => (
          <div
            key={name}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}
            >
              <Icon size={24} aria-hidden="true" />
            </span>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <h3 className="font-fredoka text-xl font-semibold text-ink">
                {name}
              </h3>
              <span className="rounded-full bg-paper-alt px-2.5 py-0.5 text-xs font-semibold text-ink-soft">
                {age}
              </span>
            </div>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
              {blurb}
            </p>
          </div>
        ))}

        {/* helper card completes the row */}
        <div className="flex h-full flex-col justify-center rounded-card border border-primary-200 bg-primary-100 p-6 shadow-soft">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary-700">
            <Sparkles size={24} aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
            Not sure which fits?
          </h3>
          <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
            Tell us your little one&apos;s age and we&apos;ll gently guide you
            to the right stage.
          </p>
          <div className="mt-5">
            <Button href={SITE.whatsappHref} variant="whatsapp" size="sm">
              Ask us
            </Button>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}

function Curriculum() {
  return (
    <Section tone="blue">
      <div className="mb-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <Kicker>Our curriculum</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            How we nurture the whole child
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">
            Every day weaves together the skills a growing mind and heart need,
            thoughtfully planned and gently delivered across{" "}
            {programContents?.length} connected areas of growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={ROUTES.ADMISSION} icon={ArrowRight} iconRight>
              Book a Visit
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              icon={MessageCircle}
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* photo cluster fills the column */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            className="overflow-hidden border-4 border-white shadow-lift"
            style={{ borderRadius: "46% 54% 55% 45% / 50% 46% 54% 50%" }}
          >
            <img
              src="/images/photos/kindergarten.jpg"
              alt="Children exploring a hands-on learning activity together"
              className="aspect-[4/3.6] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-32 overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:block">
            <img
              src="/images/photos/ride.jpg"
              alt="A child painting with bright colours"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <Sparkle className="absolute -right-2 top-4 w-7 text-secondary-400" />
          <CloudPuff className="absolute -left-6 top-8 hidden w-16 lg:block" />
        </div>
      </div>

      <RevealOnScroll
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerChildren={0.08}
      >
        {programContents?.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-100">
              <img
                src={item?.imageSrc}
                alt=""
                aria-hidden="true"
                className="h-7 w-7"
              />
            </span>
            <h3 className="mt-5 font-fredoka text-lg font-semibold text-ink">
              {item?.heading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item?.para}
            </p>
          </div>
        ))}

        {/* closing accent card completes the grid */}
        <div className="flex h-full flex-col justify-center rounded-card border border-primary-200 bg-primary-100 p-6 shadow-soft">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-primary-700">
            <Sparkles size={24} aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-fredoka text-lg font-semibold text-ink">
            One joyful whole
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            These strands never stand alone. A single morning of play can grow
            language, confidence and little hands all at once.
          </p>
        </div>
      </RevealOnScroll>
    </Section>
  );
}

function ClassroomDetail() {
  const highlights = [
    { icon: Users, label: "Small 1:10 groups" },
    { icon: Baby, label: "Ages 3 – 5 years" },
    { icon: BookOpen, label: "Experience Preschool curriculum" },
  ];
  return (
    <Section tone="paper">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="overflow-hidden border-4 border-white shadow-lift"
            style={{ borderRadius: "46% 54% 55% 45% / 50% 46% 54% 50%" }}
          >
            <img
              src="/images/photos/learning.jpg"
              alt="Children exploring and learning together in a Cuddle Corners classroom"
              className="aspect-[4/3.4] w-full object-cover"
              loading="lazy"
              width="640"
              height="544"
            />
          </div>
          <Sparkle className="absolute -left-3 top-6 w-7 text-secondary-400" />
        </div>

        {/* copy */}
        <div className="max-w-xl">
          <Kicker>Inside the classroom</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            The Preschool Classroom
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A calm, colourful room for children aged three to five, kept to
            small groups so every child is seen, heard and gently guided through
            the day.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-medium text-ink">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={ROUTES.ADMISSION} icon={ArrowRight} iconRight>
              Book a Visit
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              icon={MessageCircle}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AdditionalResources() {
  return (
    <Section tone="paper">
      <div className="mb-12 max-w-2xl">
        <Kicker>Additional resources</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Handy things for families
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          A little more of what makes each day at Cuddle Corners thoughtful,
          wholesome and full of character.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {programAdditionalResources?.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary-100 text-secondary-800">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
              {item?.heading}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
              {item?.para}
            </p>
            {item?.fileUrl && (
              <div className="mt-5">
                <Button
                  href={item.fileUrl}
                  variant="soft"
                  size="sm"
                  icon={Download}
                >
                  Download
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Programmes() {
  return (
    <>
      <PagesBanner
        kicker="Programmes"
        headingText="Inspiring young explorers every step of the way"
        subtitle={`A warm, play-led journey for little ones aged ${SITE.ageRange}, from first steps to school-ready.`}
      />
      <AgeBands />
      <Curriculum />
      <ClassroomDetail />
      <AdditionalResources />
      <VisitCTA heading="See our programmes in action" />
    </>
  );
}

export default Programmes;
