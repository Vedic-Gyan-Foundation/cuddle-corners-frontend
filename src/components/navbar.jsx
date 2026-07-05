import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarHeart, Store } from "lucide-react";

import ROUTES from "../config/routes";
import { SITE } from "../config/site";
import { Button } from "../ui";

// Explicit label→route map, clearer for parents than the raw route names
// ("Locations" instead of "Franchise Details", which read as "buy a franchise").
const NAV = [
  { label: "Home", to: ROUTES.HOME },
  { label: "About", to: ROUTES.ABOUT_US.ROOT },
  { label: "Programmes", to: ROUTES.PROGRAMMES.ROOT },
  { label: "Admissions", to: ROUTES.ADMISSION },
  { label: "Locations", to: ROUTES.FRANCHISE_DETAILS },
  { label: "Our Team", to: ROUTES.OUR_TEAM },
  { label: "Careers", to: ROUTES.CAREERS },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "relative py-1 font-fredoka text-[15px] font-medium transition-colors",
      isActive ? "text-primary-700" : "text-ink hover:text-primary-700",
    ].join(" ");

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-paper/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        {/* Logo */}
        <Link
          to={ROUTES.HOME}
          className="flex shrink-0 items-center"
          aria-label="Cuddle Corners home"
        >
          <img
            src="/images/logos/logo-without-bg.webp"
            alt="Cuddle Corners"
            className="h-10 w-auto sm:h-11"
            width="140"
            height="44"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <li key={item.label}>
              <NavLink to={item.to} className={linkClass} end={item.to === "/"}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-secondary-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 font-fredoka text-sm font-medium text-primary-800 transition-colors hover:bg-primary-50 xl:inline-flex"
          >
            <Phone size={17} aria-hidden="true" />
            <span>{SITE.phone}</span>
          </a>
          <Button
            to={ROUTES.JOIN_US}
            variant="ghost"
            size="sm"
            icon={Store}
            className="hidden lg:inline-flex"
          >
            Franchise
          </Button>
          <Button
            to={ROUTES.ADMISSION}
            size="sm"
            icon={CalendarHeart}
            className="hidden sm:inline-flex"
          >
            Book a Visit
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-full bg-primary-600 p-2.5 text-white shadow-soft transition-colors hover:bg-primary-700 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8">
              {NAV.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-fredoka text-lg font-medium transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-800"
                          : "text-ink hover:bg-paper-alt"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3 grid grid-cols-2 gap-3">
                <Button
                  href={SITE.phoneHref}
                  variant="ghost"
                  size="md"
                  icon={Phone}
                >
                  Call us
                </Button>
                <Button to={ROUTES.ADMISSION} size="md" icon={CalendarHeart}>
                  Book a Visit
                </Button>
              </li>
              <li className="mt-3">
                <Button
                  to={ROUTES.JOIN_US}
                  variant="secondary"
                  size="md"
                  icon={Store}
                  className="w-full"
                >
                  Own a Cuddle Corners franchise
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
