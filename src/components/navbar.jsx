import { Menu } from "lucide-react";
import { navListItems } from "../utils/constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const [hasBackground, setHasBackground] = useState(true);

  useEffect(() => {
    // Handles navbar wavey corner image toggle on scroll
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const banner = document.getElementById("banner-container");

      if (!navbar || !banner) return;

      const navbarHeight = navbar.offsetHeight;
      const bannerTop = banner.getBoundingClientRect().top;

      // Add wavey corner image if the banner is scrolled past the navbar height
      setHasBackground(bannerTop > -navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {/* <!--- Mobile view navbar ----> */}
      <div className="sm:hidden">
        {/* <!--- Bar ----> */}
        <div className="flex items-center justify-between bg-blue-cc2 px-2.5 py-4">
          <div
            onClick={() => setToggleHamburgerMenu((curr) => !curr)}
            className="relative inline-flex cursor-pointer items-center justify-center rounded-lg bg-yellow-cc p-1"
          >
            <Menu size={40} absoluteStrokeWidth={true} strokeWidth={3} />
          </div>
          <img
            src="./images/logos/logo-without-bg.png"
            alt="logo-without-bg"
            className="h-14"
          />
        </div>

        {/* <!--- Hamberger menu ----> */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: toggleHamburgerMenu ? "auto" : 0,
            opacity: toggleHamburgerMenu ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`overflow-hidden border bg-blue-cc2 px-4 shadow-inner ${toggleHamburgerMenu ? "border" : "border-0"}`}
        >
          <ul className="flex flex-col gap-3 py-2.5 text-sm font-semibold">
            {navListItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* <!--- Desktop view navbar ----> */}
      <div id="navbar" className="fixed z-50 w-full">
        <div className="relative hidden items-center justify-between bg-blue-cc2 px-4 py-3 transition-all duration-300 sm:flex">
          <img
            id="banner-image"
            src="./images/logos/logo-without-bg.png"
            alt="logo-without-bg"
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
        {/* <!--- Wavey Corners Image ---> */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hasBackground ? 1 : 0,
            height: hasBackground ? "0.75rem" : 0,
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative hidden bg-[url(/images/backgrounds/wavey-bg.png)] bg-contain sm:block"
        />
      </div>
    </nav>
  );
}

export default Navbar;
