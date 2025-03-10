import { Menu } from "lucide-react";
import { navListItems } from "../utils/constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the navbar and banner elements by their IDs
      const navbar = document.getElementById("navbar");
      const banner = document.getElementById("banner-container");

      // If either navbar or banner is not found, exit the function
      if (!navbar || !banner) return;

      // Get the height of the navbar (used to determine when the background should change)
      const navbarHeight = navbar.offsetHeight;

      // Get the top position of the banner relative to the viewport
      const bannerTop = banner.getBoundingClientRect().top;

      // If the banner's top has moved above (past) the navbar's height, add a background
      if (bannerTop <= -navbarHeight) {
        setHasBackground(true);
      }
      // If the banner is still visible near the top, keep the navbar background transparent
      else {
        setHasBackground(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
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
      <div
        id="navbar"
        className={`fixed left-0 top-0 z-50 hidden w-full items-center justify-between px-4 py-3 transition-all duration-300 sm:flex ${
          hasBackground ? "bg-blue-cc2" : "bg-transparent"
        }`}
      >
        <img
          id="banner-image"
          src="./images/logos/logo-with-bg-elliptical.png"
          alt="logo-without-bg"
          className="h-20"
        />
        <ul className="flex space-x-6 py-2.5 font-robotoslab font-medium *:text-stone-700 *:sm:text-xs lg:space-x-10 *:lg:text-base">
          {navListItems.map((item, index) => (
            <li key={index} className="cursor-pointer whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
