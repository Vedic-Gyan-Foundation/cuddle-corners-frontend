import {
  Heart,
  Sparkles,
  Users,
  GraduationCap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { PagesBanner } from "../components";
import CareersForm from "../components/careers_form";
import { SITE } from "../config/site";
import {
  Section,
  Container,
  Kicker,
  Button,
  RevealOnScroll,
  BearMascot,
  CloudPuff,
  CloudDivider,
} from "../ui";

/* ---------------------------------------------------------------- data ---- */
const VALUES = [
  {
    icon: Heart,
    title: "Children come first",
    body: "Every decision starts with what is warmest and safest for the little ones in our care.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    icon: Users,
    title: "A supportive team",
    body: "Small groups, shared planning and colleagues who genuinely have your back. Teaching here never feels lonely.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    icon: GraduationCap,
    title: "Grow with us",
    body: `Ongoing training and a play-based curriculum, in partnership with ${SITE.curriculumPartner}, that sharpens your craft year on year.`,
    tint: "bg-tertiary-50 text-tertiary-600",
  },
  {
    icon: Sparkles,
    title: "Joy is part of the job",
    body: "Songs, stories, art and belly-laughs are the everyday tools of the trade, and you get paid to spark wonder.",
    tint: "bg-primary-100 text-primary-700",
  },
];

/* -------------------------------------------------------------- sections -- */
function Intro() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <RevealOnScroll>
          <Kicker>We&apos;re hiring</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Passionate educators, this is your corner
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We are seeking qualified, experienced and passionate educators to
            join Cuddle Corners in {SITE.city}. Our goal is simple: to add
            talented, energetic and positive people to a team that treats every
            child like their own.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            If that sounds like you, fill out the application form below and one
            of our administrators will be in touch. Prefer to say hello first?
            Message us anytime.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#apply" size="lg" icon={ArrowRight} iconRight>
              Apply now
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
              src="/images/photos/friends.jpg"
              alt="Educators playing with children at a Cuddle Corners centre"
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

function Culture() {
  return (
    <Section tone="blue">
      <div className="mb-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <Kicker>Why work at Cuddle Corners</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            A workplace built on the same warmth we give the children
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            We look after the people who look after our little ones. Here is
            what being part of the team feels like.
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-card border border-line bg-white p-8 shadow-soft sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary-100 text-primary-900">
              <Heart size={28} aria-hidden="true" />
            </span>
            <p className="mt-6 font-fredoka text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              &ldquo;The best days start with a small hand in yours and a story
              waiting to be told.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-ink-soft">
              on the everyday joy of teaching at Cuddle Corners
            </p>
            <CloudPuff className="pointer-events-none absolute -right-4 -top-5 hidden w-16 sm:block" />
          </div>
          <BearMascot className="absolute -bottom-8 -left-4 hidden w-20 drop-shadow-md sm:block" />
        </div>
      </div>

      <RevealOnScroll
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        staggerChildren={0.12}
      >
        {VALUES.map(({ icon: Icon, title, body, tint }) => (
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

function Apply() {
  return (
    <Section tone="paper" id="apply">
      <div className="relative overflow-hidden">
        <CloudPuff
          className="pointer-events-none absolute right-[4%] top-2 hidden w-20 text-primary-100 md:block"
          aria-hidden="true"
        />
        <div className="mb-10 max-w-2xl">
          <Kicker>Application form</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Tell us about yourself
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            Share your details and attach your resume as a PDF. We read every
            application and reply to the ones that feel like a fit.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <CareersForm />
        </div>
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
            Ready to join the Cuddle Corners team?
          </h2>
          <p className="max-w-xl text-lg text-primary-100">
            Send us your application above, or say a quick hello on WhatsApp.
            We&apos;d love to hear how you&apos;d like to spark wonder with us.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href="#apply"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconRight
            >
              Apply now
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

function Careers() {
  return (
    <>
      <PagesBanner
        headingText="Be a part of something special at Cuddle Corners"
        kicker="Careers"
        subtitle="Join a team of warm, dedicated educators shaping the earliest, happiest years of childhood."
      />
      <Intro />
      <Culture />
      <Apply />
      <ClosingCTA />
    </>
  );
}

export default Careers;
