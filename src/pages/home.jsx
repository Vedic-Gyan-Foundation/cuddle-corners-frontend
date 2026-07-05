import {
  ShieldCheck,
  Users,
  Bus,
  Apple,
  HeartHandshake,
  Baby,
  Blocks,
  Palette,
  GraduationCap,
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Navigation,
  Sun,
} from "lucide-react";

import ROUTES from "../config/routes";
import { SITE, waLink } from "../config/site";
import { franchiseDetails } from "../utils/data/franchise_details";
import { VisitCTA } from "../components";
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
const TRUST = [
  { icon: ShieldCheck, label: "Safe, secure campuses" },
  { icon: HeartHandshake, label: "Warm, trained educators" },
  { icon: Users, label: "Small 1:10 groups" },
  { icon: Apple, label: "Fresh vegetarian meals" },
  { icon: Bus, label: "GPS-tracked transport" },
];

const PROGRAMMES = [
  { name: "Playgroup", age: "1.5 – 2.5 yrs", icon: Baby, blurb: "Gentle first steps away from home — sensory play, songs and lots of cuddles.", tint: "bg-primary-100 text-primary-700" },
  { name: "Nursery", age: "2.5 – 3.5 yrs", icon: Blocks, blurb: "Building blocks of language, sharing and curiosity through guided play.", tint: "bg-secondary-100 text-secondary-800" },
  { name: "LKG", age: "3.5 – 4.5 yrs", icon: Palette, blurb: "Early literacy, numbers and creativity, balanced with joyful discovery.", tint: "bg-tertiary-50 text-tertiary-600" },
  { name: "UKG", age: "4.5 – 5.5 yrs", icon: GraduationCap, blurb: "School-ready confidence — reading, writing and big-kid independence.", tint: "bg-primary-100 text-primary-700" },
];

const FACILITIES = [
  { icon: Bus, title: "Safe school transport", body: "Reliable, GPS-tracked buses with trained staff so every drop-off and pick-up is worry-free.", tint: "bg-primary-50" },
  { icon: Sun, title: "Room to run & play", body: "Spacious, secure playgrounds that build motor skills, teamwork and a love for the outdoors.", tint: "bg-secondary-50" },
  { icon: Apple, title: "Healthy, home-style meals", body: "Fresh, nutritious, all-vegetarian food from our in-house kitchen — balanced for growing bodies.", tint: "bg-tertiary-50" },
  { icon: Sparkles, title: "Learning that sparks joy", body: `A warm, engaging curriculum in partnership with ${SITE.curriculumPartner} where children explore and grow with confidence.`, tint: "bg-primary-50" },
];

const PROMISES = [
  { title: "Treated like our own", body: "Every child is nurtured with the same love, patience and care they get at home." },
  { title: "Play with purpose", body: "A real curriculum delivered through play — literacy, numeracy, art and social-emotional growth." },
  { title: "Always in the loop", body: "Regular progress notes and parent–teacher chats so you never miss a milestone." },
];

/* ----------------------------------------------------------------- hero --- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* soft sky wash — a single deliberate gradient accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 78% 0%, rgba(8,174,240,.18), transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* floating clouds */}
      <CloudPuff className="pointer-events-none absolute left-[6%] top-24 hidden w-24 text-white/80 md:block" />
      <CloudPuff className="pointer-events-none absolute right-[42%] top-16 hidden w-16 text-white/70 lg:block" />

      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* copy */}
        <div className="max-w-xl">
          <Kicker>Admissions open · {SITE.city}</Kicker>
          <h1 className="mt-4 font-fredoka text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            A happy, safe place to{" "}
            <span className="relative whitespace-nowrap text-primary-700">
              grow &amp; play
              <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 h-2.5 w-full text-secondary-400" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 8c40-7 156-7 196 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Cuddle Corners is a warm preschool &amp; daycare for little ones aged{" "}
            <strong className="font-semibold text-ink">{SITE.ageRange}</strong>, with{" "}
            {SITE.centresCount} nurturing centres across {SITE.city}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={ROUTES.ADMISSION} size="lg" icon={ArrowRight} iconRight>
              Book a Visit
            </Button>
            <Button href={SITE.whatsappHref} variant="whatsapp" size="lg" icon={MessageCircle}>
              Enquire on WhatsApp
            </Button>
          </div>

          {/* trust chips */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft">
            <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary-600" /> Safe &amp; secure</li>
            <li className="flex items-center gap-2"><Users size={18} className="text-primary-600" /> Small 1:10 groups</li>
            <li className="flex items-center gap-2"><Sparkles size={18} className="text-primary-600" /> {SITE.curriculumPartner} curriculum</li>
          </ul>
        </div>

        {/* image + mascot */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div
              className="overflow-hidden border-4 border-white shadow-lift"
              style={{ borderRadius: "44% 56% 58% 42% / 48% 44% 56% 52%" }}
            >
              <img
                src="/images/photos/hero-classroom.jpg"
                alt="Happy young children learning together at a Cuddle Corners preschool"
                className="aspect-[4/3.6] w-full object-cover"
                width="640"
                height="576"
                fetchPriority="high"
              />
            </div>
            <Sparkle className="absolute -left-3 top-6 w-7 text-secondary-400" />
            {/* mascot peeking from behind the photo */}
            <BearMascot className="absolute -bottom-6 -right-2 w-28 drop-shadow-md sm:w-36" />
            {/* floating stat card */}
            <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary-100 text-secondary-800">
                <HeartHandshake size={20} />
              </span>
              <div className="leading-tight">
                <p className="font-fredoka text-lg font-semibold text-ink">{SITE.centresCount} centres</p>
                <p className="text-xs text-ink-soft">across {SITE.city}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <CloudDivider className="text-paper-alt" />
    </section>
  );
}

/* -------------------------------------------------------------- sections -- */
function TrustStrip() {
  return (
    <div className="bg-paper-alt">
      <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {TRUST.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary-700 shadow-soft">
              <Icon size={22} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-ink-soft">{label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}

function Programmes() {
  return (
    <Section tone="paper">
      <div className="mb-12 max-w-2xl">
        <Kicker>Programmes</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          A gentle stage for every age
        </h2>
        <p className="mt-3 text-lg text-ink-soft">
          From first steps to school-ready, each year is designed around how
          little ones actually learn — through play, warmth and wonder.
        </p>
      </div>

      <RevealOnScroll className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.12}>
        {PROGRAMMES.map(({ name, age, icon: Icon, blurb, tint }) => (
          <div
            key={name}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift"
          >
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
              <Icon size={24} aria-hidden="true" />
            </span>
            <div className="mt-5 flex items-center gap-2">
              <h3 className="font-fredoka text-xl font-semibold text-ink">{name}</h3>
              <span className="rounded-full bg-paper-alt px-2.5 py-0.5 text-xs font-semibold text-ink-soft">{age}</span>
            </div>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-soft">{blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1 font-fredoka text-sm font-medium text-primary-700">
              Explore
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        ))}
      </RevealOnScroll>

      <div className="mt-10">
        <Button to={ROUTES.PROGRAMMES.ROOT} variant="ghost" icon={ArrowRight} iconRight>
          See the full curriculum
        </Button>
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <Section tone="blue">
      <div className="mb-12 max-w-2xl">
        <Kicker>Why families choose us</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Everything a little one needs to thrive
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {FACILITIES.map(({ icon: Icon, title, body, tint }) => (
          <div key={title} className={`flex gap-5 rounded-card ${tint} p-6 sm:p-7`}>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-primary-700 shadow-soft">
              <Icon size={26} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-fredoka text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-ink-soft">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Locations() {
  const branches = franchiseDetails
    .filter((b) => b.contactNumber !== "Coming Soon")
    .slice(0, 3);
  return (
    <Section tone="paper">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Kicker>Find your nearest centre</Kicker>
          <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
            A Cuddle Corners in your neighbourhood
          </h2>
        </div>
        <Button to={ROUTES.FRANCHISE_DETAILS} variant="ghost" icon={ArrowRight} iconRight>
          View all {SITE.centresCount} centres
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {branches.map((b) => {
          const phone = (b.contactNumber.split("/")[0] || "").trim();
          return (
            <div key={b.id} className="flex flex-col rounded-card border border-line bg-white p-6 shadow-soft">
              <h3 className="font-fredoka text-lg font-semibold text-ink">{b.franchiseName}</h3>
              <p className="mt-2 flex flex-grow gap-2 text-sm leading-relaxed text-ink-soft">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-600" aria-hidden="true" />
                {b.franchiseAddress}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={`tel:${phone.replace(/\s/g, "")}`} variant="soft" size="sm" icon={Phone}>Call</Button>
                {b.whatsappLink && (
                  <Button href={waLink(b.whatsappLink)} variant="whatsapp" size="sm" icon={MessageCircle}>WhatsApp</Button>
                )}
                {b.googleMapLocation && (
                  <Button href={b.googleMapLocation} variant="ghost" size="sm" icon={Navigation}>Directions</Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Promise() {
  return (
    <Section tone="alt">
      <div className="mb-10 max-w-2xl">
        <Kicker>Our promise</Kicker>
        <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
          Peace of mind, built into every day
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {PROMISES.map((p, i) => (
          <div key={p.title} className="rounded-card bg-white p-7 shadow-soft">
            <span className="font-fredoka text-3xl font-semibold text-primary-200">0{i + 1}</span>
            <h3 className="mt-2 font-fredoka text-xl font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Programmes />
      <WhyUs />
      <Locations />
      <Promise />
      <VisitCTA />
    </>
  );
}

export default Home;
