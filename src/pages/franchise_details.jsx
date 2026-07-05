import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Mail,
  Clock,
  Building2,
} from "lucide-react";

import { PagesBanner, VisitCTA } from "../components";
import { franchiseDetails } from "../utils/data/franchise_details";
import { SITE, waLink } from "../config/site";
import {
  Section,
  Kicker,
  Button,
  RevealOnScroll,
  CloudPuff,
  BearMascot,
  Sparkle,
  FacebookIcon,
  InstagramIcon,
} from "../ui";

/* Pull the individual dial-able numbers out of a free-text contact string. */
const extractPhoneNumbers = (contactNumber = "") => {
  const matches = contactNumber.match(/\+?\d{7,15}/g) || [];
  return [...new Set(matches)];
};

const isComingSoon = (branch) => branch.contactNumber === "Coming Soon";

/* --------------------------------------------------------- opening-soon --- */
function ComingSoonCard({ branch }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-dashed border-line bg-primary-50 p-6 shadow-soft sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-fredoka text-xl font-semibold text-ink">
          {branch.franchiseName}
        </h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-primary-900">
          <Clock size={13} aria-hidden="true" />
          Opening soon
        </span>
      </div>
      <p className="mt-4 flex-grow text-sm leading-relaxed text-ink-soft">
        A brand-new Cuddle Corners centre is on its way to Mirza. Leave us a note
        on WhatsApp and we&apos;ll tell you the moment doors open.
      </p>
      <div className="mt-5">
        <Button href={SITE.whatsappHref} variant="whatsapp" size="sm" icon={MessageCircle}>
          Notify me
        </Button>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- branch --- */
function BranchCard({ branch }) {
  const numbers = extractPhoneNumbers(branch.contactNumber);
  const primaryNumber = numbers[0];

  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-lift sm:p-7">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700">
          <Building2 size={24} aria-hidden="true" />
        </span>
        <h3 className="mt-1 font-fredoka text-xl font-semibold text-ink">
          {branch.franchiseName}
        </h3>
      </div>

      <p className="mt-5 flex gap-2.5 text-sm leading-relaxed text-ink-soft">
        <MapPin size={18} className="mt-0.5 shrink-0 text-primary-600" aria-hidden="true" />
        <span>{branch.franchiseAddress}</span>
      </p>

      {branch.emailId && (
        <p className="mt-3 flex items-center gap-2.5 text-sm text-ink-soft">
          <Mail size={18} className="shrink-0 text-primary-600" aria-hidden="true" />
          <a
            href={`mailto:${branch.emailId}`}
            className="break-all font-medium text-primary-700 underline-offset-2 hover:underline"
          >
            {branch.emailId}
          </a>
        </p>
      )}

      {/* primary actions */}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {primaryNumber && (
          <Button href={`tel:${primaryNumber}`} variant="soft" size="sm" icon={Phone}>
            Call
          </Button>
        )}
        {branch.whatsappLink && (
          <Button
            href={waLink(branch.whatsappLink)}
            variant="whatsapp"
            size="sm"
            icon={MessageCircle}
          >
            WhatsApp
          </Button>
        )}
        {branch.googleMapLocation && (
          <Button
            href={branch.googleMapLocation}
            variant="ghost"
            size="sm"
            icon={Navigation}
          >
            Directions
          </Button>
        )}
      </div>

      {/* secondary numbers + socials */}
      {(numbers.length > 1 || branch.facebookLink || branch.instagramLink) && (
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-sm">
          {numbers.length > 1 && (
            <a
              href={`tel:${numbers[1]}`}
              className="inline-flex items-center gap-1.5 font-medium text-ink-soft hover:text-primary-700"
            >
              <Phone size={15} aria-hidden="true" />
              {numbers[1]}
            </a>
          )}
          {branch.facebookLink && (
            <a
              href={branch.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ink-soft hover:text-primary-700"
            >
              <FacebookIcon size={15} aria-hidden="true" />
              Facebook
            </a>
          )}
          {branch.instagramLink && (
            <a
              href={branch.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ink-soft hover:text-primary-700"
            >
              <InstagramIcon size={15} aria-hidden="true" />
              Instagram
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------- page --- */
function FranchiseDetails() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBranches = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return franchiseDetails;

    return franchiseDetails.filter((branch) =>
      [
        branch.franchiseName,
        branch.franchiseAddress,
        branch.contactNumber,
        branch.emailId,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [searchQuery]);

  return (
    <>
      <PagesBanner
        headingText="Our Centres in Guwahati"
        kicker="Locate us"
        subtitle={`Find the Cuddle Corners nearest to you — ${SITE.centresCount} warm, welcoming centres across ${SITE.city}. Call, message or get directions in a tap.`}
      />

      <Section tone="paper">
        {/* intro + search — balanced two-column so no half sits empty */}
        <div className="mb-12 grid items-center gap-12 lg:mb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <Kicker>Find your neighbourhood centre</Kicker>
            <h2 className="mt-3 font-fredoka text-3xl font-semibold text-ink sm:text-4xl">
              Branches in &amp; around Guwahati
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">
              Every centre shares the same care, curriculum and safety promise —
              just closer to home.
            </p>

            <div className="mt-6">
              <label
                htmlFor="franchise-search"
                className="mb-2 block text-sm font-semibold text-ink"
              >
                Search by branch name, area, contact or email
              </label>
              <div className="relative">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                  aria-hidden="true"
                />
                <input
                  id="franchise-search"
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Try Beltola, Rehabari, Nalapara…"
                  className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink shadow-soft outline-none transition-colors placeholder:text-ink-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>
            </div>
          </div>

          {/* photo cluster + stat card fills the column */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              className="overflow-hidden border-4 border-white shadow-lift"
              style={{ borderRadius: "46% 54% 55% 45% / 50% 46% 54% 50%" }}
            >
              <img
                src="/images/photos/portrait-white.jpg"
                alt="Happy children at a Cuddle Corners centre"
                className="aspect-[4/3.6] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:-left-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary-100 text-secondary-800">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="font-fredoka text-lg font-semibold text-ink">
                  {SITE.centresCount} centres
                </p>
                <p className="text-xs text-ink-soft">across {SITE.city}</p>
              </div>
            </div>
            <BearMascot className="absolute -right-3 -top-6 hidden w-20 drop-shadow-md sm:block" />
            <Sparkle className="absolute -left-4 top-6 w-7 text-secondary-400" />
            <CloudPuff className="pointer-events-none absolute -right-6 bottom-10 hidden w-16 lg:block" />
          </div>
        </div>

        {/* cards */}
        {filteredBranches.length > 0 ? (
          <RevealOnScroll
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.1}
          >
            {filteredBranches.map((branch) =>
              isComingSoon(branch) ? (
                <ComingSoonCard key={branch.id} branch={branch} />
              ) : (
                <BranchCard key={branch.id} branch={branch} />
              ),
            )}
          </RevealOnScroll>
        ) : (
          <div className="rounded-card border border-dashed border-line bg-primary-50 p-10 text-center">
            <p className="font-fredoka text-xl font-semibold text-ink">
              No centre matched “{searchQuery.trim()}”.
            </p>
            <p className="mt-2 text-ink-soft">
              Try a locality like Beltola, Rehabari or Nalapara — or reach out and
              we&apos;ll point you to the closest one.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                href={SITE.whatsappHref}
                variant="whatsapp"
                icon={MessageCircle}
              >
                Ask us on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </Section>

      <VisitCTA heading="Come see your nearest centre for yourself" />
    </>
  );
}

export default FranchiseDetails;
