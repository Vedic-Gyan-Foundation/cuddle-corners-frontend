import {
  HeartHandshake,
  MapPin,
  Navigation,
  ArrowRight,
  MessageCircle,
  Globe2,
  BookOpen,
  Compass,
} from "lucide-react";

import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import { learningDomains } from "../utils/data/learning_journey";
import {
  Section,
  Kicker,
  Button,
  RevealOnScroll,
  CloudPuff,
  Sparkle,
} from "../ui";
import { PagesBanner, VisitCTA } from "../components";
import { GreenSchoolLink } from "../components/green_school_link";

/* ---------------------------------------------------------------- data ---- */
const LOCATIONS = [
  { name: "The Green School International", area: "Nalapara, Guwahati" },
  {
    name: "R.K. Choudhury Road Centre",
    area: "Near Sluice Gate, Bharalumukh, Guwahati",
  },
  {
    name: "Battalion Gate Centre",
    area: "House No. 13, Lutuma Road, 4th Battalion Gate, Kahilipara, Guwahati",
  },
];

const CURRICULUM_POINTS = [
  {
    icon: Globe2,
    title: "Singapore-crafted",
    body: "A globally benchmarked early-years framework, adapted for our little learners in Guwahati.",
  },
  {
    icon: BookOpen,
    title: "Play with purpose",
    body: "Literacy, numeracy, art and social-emotional growth, all delivered through joyful, hands-on play.",
  },
  {
    icon: Compass,
    title: "Guided by educators",
    body: "Warm, trained teachers who follow each child's pace and celebrate every small milestone.",
  },
];

/* --------------------------------------------------------------- story ---- */
function OurStory() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <Kicker>Our story</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            A warm corner of Guwahati, made for little ones
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              At Cuddle Corners, we provide a warm, nurturing preschool
              experience for children aged{" "}
              <strong className="font-semibold text-ink">
                {SITE.ageRange}
              </strong>
              . With {SITE.centresCount} welcoming centres across {SITE.city},
              our bright, engaging classrooms are the perfect place for early
              learning, play and discovery.
            </p>
            <p>
              In partnership with{" "}
              <strong className="font-semibold text-ink">
                {SITE.curriculumPartner}
              </strong>
              , Singapore&apos;s leading early-education provider, we deliver a
              well-rounded curriculum that blends creativity, structure and
              meaningful exploration, from literacy and numeracy to art and
              social-emotional growth.
            </p>
            <p>
              Our passionate educators focus on strong relationships and every
              child&apos;s unique potential. Rooted in care, curiosity and
              connection, we help children grow into confident, happy learners.
            </p>
          </div>
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
              src="/images/photos/learning.jpg"
              alt="A happy child learning at Cuddle Corners"
              className="aspect-[4/4.2] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-32 overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:block">
            <img
              src="/images/photos/blocks.jpg"
              alt="Children playing together"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <Sparkle className="absolute -right-2 top-4 w-7 text-secondary-400" />
          <CloudPuff className="absolute -left-6 top-8 hidden w-16 lg:block" />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- mission ---- */
function Mission() {
  return (
    <Section tone="blue">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative rounded-card border border-line bg-white p-8 shadow-soft sm:p-10">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-secondary-100 text-primary-900">
              <HeartHandshake size={30} aria-hidden="true" />
            </span>
            <p className="mt-6 font-fredoka text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              Nurtured with the same love and care they receive at home.
            </p>
            <CloudPuff className="pointer-events-none absolute -right-4 -top-5 hidden w-16 sm:block" />
          </div>
        </div>

        <div className="order-1 max-w-xl lg:order-2">
          <Kicker>Our mission</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            A strong foundation for a lifetime of learning
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Our mission is to nurture every child with the same love, patience
              and care they receive at home. We are committed to a programme
              focused on the holistic development of young children. We create
              enriching experiences through exploration, discovery and hands-on
              activities.
            </p>
            <p>
              By fostering a safe, supportive environment, we build a strong
              foundation for lifelong learning, helping each child grow with
              confidence, curiosity and a genuine love for education.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- locations ---- */
function Locations() {
  return (
    <Section tone="paper">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Kicker>Where to find us</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            Warm centres across {SITE.city}
          </h2>
        </div>
        <Button
          to={ROUTES.FRANCHISE_DETAILS}
          variant="ghost"
          icon={ArrowRight}
          iconRight
        >
          View all {SITE.centresCount} centres
        </Button>
      </div>

      <RevealOnScroll
        className="grid gap-5 md:grid-cols-3"
        staggerChildren={0.12}
      >
        {LOCATIONS.map(({ name, area }) => (
          <div
            key={name}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-100 text-primary-700">
              <MapPin size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
              {name === SITE.greenSchoolName ? <GreenSchoolLink /> : name}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
              {area}
            </p>
            <Button
              to={ROUTES.FRANCHISE_DETAILS}
              variant="soft"
              size="sm"
              icon={Navigation}
              className="mt-5 self-start"
            >
              Centre details
            </Button>
          </div>
        ))}
      </RevealOnScroll>
    </Section>
  );
}

/* ---------------------------------------------------- learning journey ---- */
function LearningJourney() {
  return (
    <Section tone="alt">
      <div className="mb-12 max-w-2xl">
        <Kicker>Our learning journey</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Six ways little minds grow with us
        </h2>
        <p className="mt-3 text-lg text-ink-soft">
          Every day weaves these domains together through play, warmth and
          wonder, so children build real skills without ever feeling like
          they&apos;re at &ldquo;work&rdquo;.
        </p>
      </div>

      <RevealOnScroll
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        staggerChildren={0.1}
      >
        {learningDomains.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-100 text-primary-700 transition-transform duration-300 ease-gentle group-hover:scale-110">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-fredoka text-xl font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">
              {description}
            </p>
          </div>
        ))}
      </RevealOnScroll>
    </Section>
  );
}

/* ------------------------------------------------------- curriculum ------- */
function Curriculum() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <Kicker>The curriculum</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            In partnership with {SITE.curriculumPartner}, Singapore
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            We&apos;ve teamed up with {SITE.curriculumPartner}, one of
            Singapore&apos;s leading early-education providers, to bring a
            well-rounded, research-backed curriculum to Cuddle Corners. It
            balances creativity with structure, so every day feels playful, yet
            quietly builds the skills children carry into big school and beyond.
          </p>
        </div>

        <div className="grid gap-4">
          {CURRICULUM_POINTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-5 rounded-card border border-line bg-white p-6 shadow-soft"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary-100 text-primary-900">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-fredoka text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- page ----- */
function AboutUs() {
  return (
    <>
      <PagesBanner
        kicker={`About ${SITE.name}`}
        headingText="Every child is born with a natural curiosity and a love for learning."
        subtitle={`A warm preschool and daycare for little ones aged ${SITE.ageRange}, with ${SITE.centresCount} nurturing centres across ${SITE.city}.`}
        imgSrc="/images/photos/portrait-white.jpg"
      />
      <OurStory />
      <Mission />
      <Locations />
      <LearningJourney />
      <Curriculum />
      <VisitCTA heading="Ready to visit Cuddle Corners?" />
    </>
  );
}

export default AboutUs;
