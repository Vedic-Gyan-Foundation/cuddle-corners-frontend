import { Link } from "react-router";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

import { navListItems } from "../utils/data/navListItems";
import { getRouteKey } from "../utils/navigation/getRouteKey";
import ROUTES from "../config/routes";

function Footer() {
  return (
    <footer className="bg-linear-primary-soft py-12 shadow-inner *:font-robotoSlab *:text-stone-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:mb-0 md:w-1/3">
            {/* <!---- Get in touch details ---> */}
            <div className="mb-7 space-y-7">
              <h2 className="text-3xl font-bold text-stone-800">
                Get in Touch
              </h2>
              <div className="space-y-5 *:text-sm">
                <p className="group flex transform items-center gap-2 transition-transform duration-300 hover:scale-110">
                  <span className="self-start transition-colors duration-300 group-hover:text-secondary-50">
                    <MapPin size={20} />
                  </span>
                  <a
                    href="https://maps.app.goo.gl/DpoUnPBk86P9UYDg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-secondary-50"
                  >
                    Mahapurush Madhabdev Path, Near ITI, Nalapara, Sarusajai,
                    Guwahati, Assam, 781040
                  </a>
                </p>
                <p className="group flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                  <span className="transition-colors duration-300 group-hover:text-secondary-50">
                    <Phone size={20} />
                  </span>
                  <span>
                    <a
                      href="tel:+917002446735"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-secondary-50"
                    >
                      +91-7002446735
                    </a>
                    <span> / </span>
                    <a
                      href="tel:+919856199105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-secondary-50"
                    >
                      +91-9856199105
                    </a>
                  </span>
                </p>
                <p className="group flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                  <span className="transition-colors duration-300 group-hover:text-secondary-50">
                    <Mail size={20} />
                  </span>
                  <a
                    href="mailto:info@cuddlecorners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-secondary-50"
                  >
                    info@cuddlecorners.com
                  </a>
                </p>
              </div>
            </div>

            {/* <!---- Social media link ---> */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Cuddle-Corners/61572448028455/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square w-7 transform items-center justify-center rounded-full bg-primary-600 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-xl font-bold text-primary-25">
                  <img
                    src="./images/icons/facebook-icon.svg"
                    alt="cuddles-corner-facebook-link-img"
                  />
                </span>
              </a>
              <a
                href="https://www.instagram.com/cuddle__corners?igsh=MWQ5NGxrcXY3a3dkbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square h-7 transform items-center justify-center rounded-full bg-primary-600 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-xl font-bold text-primary-25">
                  <img
                    src="./images/icons/instagram-icon.svg"
                    alt="cuddles-corner-instagram-link-img"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* <!---- Pages naviagtion links ----> */}
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <h3 className="mb-6 text-3xl font-bold text-stone-800">
              Quick Links
            </h3>
            <ul className="space-y-3 pl-3">
              {navListItems.map((item, index) => {
                // Get the route path, checking for ROOT first, then falling back to the direct route or home ("/") if undefined.
                const path =
                  ROUTES[getRouteKey(item)]?.ROOT ||
                  ROUTES[getRouteKey(item)] ||
                  "/";

                return (
                  <li key={index} className="cursor-pointer list-disc">
                    <Link
                      to={path}
                      className="flex transform items-center text-lg transition-transform duration-300 hover:translate-x-2 hover:text-secondary-400"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <!--- Newsletter ----> */}
          <div className="w-full md:w-1/3">
            <h3 className="mb-6 text-2xl font-bold text-stone-800">
              Parent&apos;s Corner
            </h3>
            <p className="mb-4">Stay updated with our latest activities!</p>
            <div className="mb-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-full px-4 py-3 text-black focus:outline-none"
              />
              <button className="rounded-r-full bg-secondary-500 px-6 font-bold text-white transition-colors duration-300 hover:bg-secondary-400">
                Join!
              </button>
            </div>
            <p className="text-sm">We promise fun emails only!</p>
          </div>
        </div>

        {/* <!---- Privacy , Terms and Condition , Contact Us ---->*/}
        <div className="relative mt-12 border-t border-stone-500 border-opacity-30 pt-8">
          <div className="text-center *:text-black">
            <p>
              &copy; {new Date().getFullYear()} Cuddles Corner. All rights
              reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-sm">
              <Link href="#" className="hover:text-secondary-75">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary-75">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-secondary-75">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
