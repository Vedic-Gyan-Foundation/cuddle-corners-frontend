import { Menu } from "lucide-react";
import { navListItems } from "../utils/constants";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  return (
    <nav>
      <div className="sm:hidden">
        {/* Top Bar */}
        <div className="bg-blue-cc/15 py-4 px-2.5 flex items-center justify-between">
          <div
            onClick={() => setToggleHamburgerMenu((curr) => !curr)}
            className="bg-yellow-cc rounded-lg relative inline-flex items-center justify-center p-1 cursor-pointer"
          >
            <Menu size={40} absoluteStrokeWidth={true} strokeWidth={3} />
          </div>
          <img
            src="./images/logo/logo-without-bg.png"
            alt="logo-without-bg"
            className="h-14"
          />
        </div>

        {/* Dropdown Menu with Framer Motion */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: toggleHamburgerMenu ? "auto" : 0,
            opacity: toggleHamburgerMenu ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`overflow-hidden bg-blue-cc/40 px-4 shadow-sm `}
        >
          <ul className="flex flex-col gap-3 text-sm font-semibold py-2.5">
            {navListItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
