import { Menu } from "lucide-react";
import {
  navListItemsDesktop,
  navListItemsMobile,
} from "../utils/data/navlist_items";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import ROUTES from "../config/routes";
import { getRouteKey } from "../utils/navigation/getRouteKey";
import { MoveRight } from "lucide-react";

function Navbar() {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const [hasBackground, setHasBackground] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("main-container");
      if (!banner) return;

      const bannerTop = banner.getBoundingClientRect().top;
      const shouldHaveBackground = bannerTop > -80; // Adjust threshold if needed

      setHasBackground(shouldHaveBackground);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {/* <!--- Mobile Navbar ----> */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between bg-linear-primary-mix-tb px-2.5 py-4">
          <button
            onClick={() => setToggleHamburgerMenu((prev) => !prev)}
            className="relative inline-flex items-center justify-center rounded-lg bg-secondary-500 p-1"
          >
            <Menu size={40} absoluteStrokeWidth strokeWidth={3} />
          </button>
          <img
            src="/images/logos/logo-without-bg.webp"
            alt="cuddle-corners-logo"
            className="h-14"
          />
        </div>

        {/* <!--- Hamburger Menu ----> */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: toggleHamburgerMenu ? "auto" : 0,
            opacity: toggleHamburgerMenu ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`overflow-hidden border bg-primary-100 px-4 shadow-inner ${
            toggleHamburgerMenu ? "border" : "border-0"
          }`}
        >
          <ul className="flex flex-col gap-3 py-2.5 text-sm font-semibold">
            {navListItemsMobile.map((item, index) => {
              // Get the route path, checking for ROOT first, then falling back to the direct route or home ("/") if undefined.
              const path =
                ROUTES[getRouteKey(item)]?.ROOT ||
                ROUTES[getRouteKey(item)] ||
                "/";

              return (
                <li key={index} className="cursor-pointer">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-tertiary-300 underline underline-offset-4"
                        : ""
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      {/* <!--- Desktop Navbar ----> */}
      <div
        ref={navbarRef}
        className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${!hasBackground ? "shadow-xl" : ""}`}
      >
        <div className="relative hidden items-center justify-between bg-linear-primary-mix-tb px-7 py-4 sm:flex lg:px-14">
          <img
            src="/images/logos/logo-without-bg.webp"
            alt="cuddle-corners-logo"
            className="h-10 lg:h-14"
          />

          <ul className="space-x-5 py-3 font-fredoka text-sm font-medium *:inline-block lg:space-x-10 lg:text-base">
            {navListItemsDesktop.map((item, index) => {
              // Get the route path, checking for ROOT first, then falling back to the direct route or home ("/") if undefined.
              const path =
                ROUTES[getRouteKey(item)]?.ROOT ||
                ROUTES[getRouteKey(item)] ||
                "/";

              return (
                <li key={index} className="cursor-pointer">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-tertiary-300 underline underline-offset-4"
                        : "hover:text-tertiary-300"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Link
            to={ROUTES.JOIN_US}
            className="flex items-center gap-1 rounded-full bg-secondary-500 px-2 py-1 text-sm font-semibold text-white transition-all duration-300 ease-linear hover:bg-secondary-400 hover:text-stone-700 hover:shadow-md lg:gap-2 lg:px-4 lg:text-base"
          >
            <span> Join Us</span> <MoveRight size={20} />
          </Link>
        </div>
        {/* <!--- Wavey Background Image ----> */}
        <motion.div
          initial={{ opacity: 1, height: "1.75rem" }}
          animate={{
            opacity: hasBackground ? 1 : 0,
            height: hasBackground ? "1.75rem" : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing
          }}
          className="hidden bg-[url(/images/backgrounds/wavey-bg-downfacing.webp)] bg-contain sm:block"
        />
      </div>
    </nav>
  );
}

export default Navbar;
