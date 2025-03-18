import { Menu } from "lucide-react";
import { navListItems } from "../utils/constants";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const [hasBackground, setHasBackground] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner-container");
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
        <div className="bg-blue-cc5 flex items-center justify-between px-2.5 py-4">
          <button
            onClick={() => setToggleHamburgerMenu((prev) => !prev)}
            className="relative inline-flex items-center justify-center rounded-lg bg-yellow-cc p-1"
          >
            <Menu size={40} absoluteStrokeWidth strokeWidth={3} />
          </button>
          <img
            src="/images/logos/logo-without-bg.png"
            alt="Logo"
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`bg-blue-cc5 overflow-hidden border px-4 shadow-inner ${
            toggleHamburgerMenu ? "border" : "border-0"
          }`}
        >
          <ul className="flex flex-col gap-3 py-2.5 text-sm font-semibold">
            {navListItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* <!--- Desktop Navbar ----> */}
      <div
        ref={navbarRef}
        className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${
          hasBackground ? "" : "shadow-md"
        }`}
      >
        <div className="bg-blue-cc5 relative hidden items-center justify-between px-4 py-3 sm:flex">
          <img
            src="/images/logos/logo-without-bg.png"
            alt="Logo"
            className="h-10"
          />
          <ul className="flex space-x-6 py-2.5 font-robotoslab font-medium *:text-stone-700 *:sm:text-xs lg:space-x-10 *:lg:text-base">
            {navListItems.map((item, index) => (
              <li key={index} className="cursor-pointer whitespace-nowrap">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* <!--- Wavey Background Image ----> */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hasBackground ? 1 : 0,
            height: hasBackground ? "0.75rem" : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing
          }}
          className="relative hidden bg-[url(/images/backgrounds/wavey-bg.png)] bg-contain sm:block"
        />
      </div>
    </nav>
  );
}

export default Navbar;
