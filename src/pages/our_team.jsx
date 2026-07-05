import {
  Heart,
  Sparkles,
  Leaf,
  MessageCircle,
  Briefcase,
  Store,
} from "lucide-react";

import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import { teamMembers } from "../utils/data/team_members";
import PagesBanner from "../components/pages_banner";
import TeamMemberCard from "../components/team_member_card";
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
const VALUES = [
  {
    icon: Heart,
    title: "Led with heart",
    body: "Every decision starts with the well-being of the child — the same warmth we would give our own.",
    tint: "bg-primary-100 text-primary-700",
  },
  {
    icon: Sparkles,
    title: "Rooted in experience",
    body: "Decades of educational and operational leadership shaping how our little ones learn and grow.",
    tint: "bg-secondary-100 text-secondary-800",
  },
  {
    icon: Leaf,
    title: "Growing sustainably",
    body: "A vision that blends academic excellence with sanskars, sports and a genuine love for the world around us.",
    tint: "bg-tertiary-50 text-tertiary-600",
  },
];

/* -------------------------------------------------------------- sections -- */
function Intro() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <Kicker>The people behind Cuddle Corners</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            The passionate individuals behind our success
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Our leadership brings together experience, passion and dedication to
            create a nurturing environment where children can explore, learn and
            grow with confidence.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body, tint }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-card border border-line bg-white p-5 shadow-soft"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${tint}`}
                >
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-fredoka text-base font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {body}
                </p>
              </div>
            ))}
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
              alt="The Cuddle Corners team with children"
              className="aspect-[4/4.2] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-32 overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:block">
            <img
              src="/images/photos/portrait-red.jpg"
              alt="Children playing together at Cuddle Corners"
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

function Leadership() {
  return (
    <Section tone="paper">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <Kicker>Leadership</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Meet our trustees
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The dedicated educators and visionaries who make our preschool a
          second home for your little ones.
        </p>
      </div>

      <RevealOnScroll
        className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        staggerChildren={0.12}
      >
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.designation}
            image={member.image}
            bio={member.description}
          />
        ))}
      </RevealOnScroll>
    </Section>
  );
}

function JoinBand() {
  return (
    <section className="relative text-white">
      <CloudDivider className="-mb-px text-primary-900" />
      <div className="relative overflow-hidden bg-primary-900">
        <CloudPuff className="pointer-events-none absolute left-[7%] top-10 hidden w-24 opacity-20 md:block" />
        <CloudPuff className="pointer-events-none absolute bottom-10 right-[9%] hidden w-28 opacity-20 md:block" />
        <Container className="relative flex flex-col items-center gap-6 py-20 text-center">
          <BearMascot className="w-24" />
          <span className="inline-flex items-center gap-2 font-fredoka text-xs font-semibold uppercase tracking-[0.16em] text-secondary-400">
            <span
              className="h-[3px] w-6 rounded-full bg-secondary-500"
              aria-hidden="true"
            />
            Join our growing family
          </span>
          <h2 className="max-w-2xl font-fredoka text-3xl font-semibold sm:text-4xl">
            We&apos;re always looking for passionate people
          </h2>
          <p className="max-w-xl text-lg text-primary-100">
            Whether you dream of shaping little minds as an educator, or of
            opening a Cuddle Corners in your own neighbourhood, we&apos;d love
            to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              to={ROUTES.CAREERS}
              variant="secondary"
              size="lg"
              icon={Briefcase}
            >
              Career Opportunities
            </Button>
            <Button to={ROUTES.JOIN_US} variant="ghost" size="lg" icon={Store}>
              Franchise Information
            </Button>
            <Button
              href={SITE.whatsappHref}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
            >
              WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <>
      <PagesBanner
        kicker="Our Team"
        headingText="Our amazing team"
        subtitle="Meet the dedicated educators and professionals who make our preschool a second home for your little ones."
      />
      <Intro />
      <Leadership />
      <JoinBand />
    </>
  );
}

export default OurTeam;
