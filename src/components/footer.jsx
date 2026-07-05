import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "../ui";

const EXPLORE = [
  { label: "About Us", to: ROUTES.ABOUT_US.ROOT },
  { label: "Programmes", to: ROUTES.PROGRAMMES.ROOT },
  { label: "Admissions", to: ROUTES.ADMISSION },
  { label: "Locations", to: ROUTES.FRANCHISE_DETAILS },
  { label: "Our Team", to: ROUTES.OUR_TEAM },
  { label: "Careers", to: ROUTES.CAREERS },
];

function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* The pre-footer CTA (VisitCTA / page CTA) owns the single cream→blue
          wave and is also blue, so it flows seamlessly straight into here:
          one continuous dark zone, no second wave, no cream sliver. */}
      <div className="bg-primary-900 pb-20 text-primary-50 lg:pb-0">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <span className="wordmark text-3xl text-white">Cuddle Corners</span>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-primary-100">
              A happy, safe place for little ones aged {SITE.ageRange} to grow,
              play and learn, across {SITE.centresCount} centres in {SITE.city}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cuddle Corners on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary-500 hover:text-primary-900"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cuddle Corners on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary-500 hover:text-primary-900"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Cuddle Corners on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-whatsapp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="font-fredoka text-lg font-semibold text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {EXPLORE.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-primary-100 transition-colors hover:text-secondary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + newsletter */}
          <div>
            <h2 className="font-fredoka text-lg font-semibold text-white">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-[15px] text-primary-100">
              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-secondary-400"
                  aria-hidden="true"
                />
                <a
                  href={SITE.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {SITE.addressFull}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-secondary-400"
                  aria-hidden="true"
                />
                <span>
                  <a href={SITE.phoneHref} className="hover:text-white">
                    {SITE.phone}
                  </a>
                  <span className="px-1 text-primary-300">/</span>
                  <a href={`tel:${SITE.phoneAlt}`} className="hover:text-white">
                    {SITE.phoneAlt}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-secondary-400"
                  aria-hidden="true"
                />
                <a href={SITE.emailHref} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <form
              className="mt-6"
              action={`https://formsubmit.co/${SITE.email}`}
              method="POST"
              aria-label="Newsletter signup"
            >
              <label
                htmlFor="footer-email"
                className="text-sm text-primary-100"
              >
                Little updates, big smiles. Join our list
              </label>
              <div className="mt-2 flex overflow-hidden rounded-full bg-white shadow-soft">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-transparent px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-secondary-500 px-5 font-fredoka font-semibold text-primary-900 transition-colors hover:bg-secondary-400"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-primary-200 sm:flex-row sm:px-8">
            <p>
              © {new Date().getFullYear()} Cuddle Corners. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link to={ROUTES.PRIVACY_POLICY} className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to={ROUTES.TERMS_OF_USE} className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="flex items-center gap-1.5">
              Made with{" "}
              <Heart
                size={14}
                className="fill-secondary-400 text-secondary-400"
              />{" "}
              in Guwahati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
