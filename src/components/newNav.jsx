import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Sparkle } from "lucide-react";

const RefinedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateCloud, setAnimateCloud] = useState(false);

  useEffect(() => {
    setAnimateCloud(true);
  }, []);

  return (
    <nav className="relative z-10 rounded-b-2xl py-2 font-bold">
      {/* Rainbow background with texture */}
      <div className="rainbow-bg absolute inset-0 shadow-lg sm:rounded-b-3xl"></div>

      {/* Cloud design */}
      <div
        className={`absolute -bottom-5 left-6 h-8 w-24 rounded-full bg-white transition-all duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>
      <div
        className={`absolute -bottom-8 left-12 h-10 w-16 rounded-full bg-white transition-all delay-300 duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>
      <div
        className={`absolute -bottom-6 left-28 h-9 w-20 rounded-full bg-white transition-all delay-100 duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>

      <div
        className={`absolute -bottom-5 right-6 h-8 w-24 rounded-full bg-white transition-all delay-500 duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>
      <div
        className={`absolute -bottom-8 right-12 h-10 w-16 rounded-full bg-white transition-all delay-700 duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>
      <div
        className={`delay-600 absolute -bottom-6 right-28 h-9 w-20 rounded-full bg-white transition-all duration-1000 ease-in-out ${animateCloud ? "opacity-100" : "translate-y-4 opacity-0"}`}
      ></div>

      {/* Stars - made smaller and fewer */}
      <div className="absolute left-20 top-3 animate-pulse text-xl text-yellow-200">
        <Sparkle size={20} strokeWidth={1} absoluteStrokeWidth />
      </div>
      <div className="absolute right-20 top-6 animate-pulse text-xl text-blue-200 delay-500">
        <Sparkle size={20} strokeWidth={0.5} absoluteStrokeWidth />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo - made smaller */}
          <div className="flex items-center space-x-3">
            <div className="flex h-20 w-20 transform items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:rotate-12">
              {/* <span className="text-3xl"></span> */}
              <img
                src="/images/logos/logo-without-bg.png"
                alt="cuddle-corners-logo"
                className="h-9 w-20"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider text-white">
                Cuddles Corner
              </span>
              <span className="text-xs text-blue-100">
                Where imagination grows!
              </span>
            </div>
          </div>

          {/* Desktop Menu - more compact */}
          <div className="hidden items-center space-x-4 lg:flex">
            {[
              {
                name: "Home",
                url: "",
                icon: "🏠",
                color: "bg-gradient-to-b from-red-400 to-red-600",
              },
              {
                name: "About Us",
                url: "about-us",
                icon: "🏫",
                color: "bg-gradient-to-b from-yellow-400 to-yellow-600",
              },
              {
                name: "Admission",
                url: "",
                icon: "📑",
                color: "bg-gradient-to-b from-green-400 to-green-600",
              },
              {
                name: "Classes",
                url: "",
                icon: "📚",
                color: "bg-gradient-to-b from-blue-400 to-blue-600",
              },
              {
                name: "Contact US",
                url: "",
                icon: "📞",
                color: "bg-gradient-to-b from-purple-400 to-purple-600",
              },
            ].map((item, index) => (
              <Link to={`/${item.url}`} key={index}>
                <div className="group">
                  <div className="relative">
                    {/* Button shadow effect */}
                    <div className="absolute inset-0 -rotate-2 rounded-lg bg-white shadow-md transition-all duration-300 group-hover:rotate-2"></div>
                    <div className="absolute inset-0 translate-y-1 rounded-lg bg-black opacity-10 blur-sm"></div>

                    {/* Button */}
                    <div
                      className={`relative rounded-lg px-4 py-2 text-base font-bold text-white transition-all duration-300 ${item.color} transform group-hover:scale-105 group-hover:shadow-md`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </div>
                  </div>

                  {/* Animation element */}
                  <div className="absolute -bottom-6 hidden animate-bounce text-lg group-hover:block">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white blur-sm"></div>
                      <span className="relative">{item.icon}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative transform rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">🌈</span>
              ) : (
                <span className="text-2xl">🎪</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="mb-4 rounded-xl bg-white bg-opacity-95 p-4 shadow-lg">
              <div className="hide-scrollbar flex space-x-3 overflow-x-auto pb-4">
                {[
                  {
                    name: "Home",
                    url: "",
                    icon: "🏠",
                    color: "bg-gradient-to-b from-red-400 to-red-600",
                  },
                  {
                    name: "About Us",
                    url: "about-us",
                    icon: "🏫",
                    color: "bg-gradient-to-b from-yellow-400 to-yellow-600",
                  },
                  {
                    name: "Admission",
                    url: "",
                    icon: "📑",
                    color: "bg-gradient-to-b from-green-400 to-green-600",
                  },
                  {
                    name: "Classes",
                    url: "",
                    icon: "📚",
                    color: "bg-gradient-to-b from-blue-400 to-blue-600",
                  },
                  {
                    name: "Contact US",
                    url: "",
                    icon: "📞",
                    color: "bg-gradient-to-b from-purple-400 to-purple-600",
                  },
                ].map((item, index) => (
                  <Link to={`/${item.url}`} key={index}>
                    <div
                      className={`flex min-w-max flex-col items-center rounded-lg px-6 py-3 font-bold text-white ${item.color} transform shadow-md transition-all duration-300 hover:scale-105`}
                    >
                      <span className="mb-1 text-2xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* <div className="mt-3 grid grid-cols-3 gap-2">
                <Link href="/favorites">
                  <div className="rounded-lg bg-pink-100 p-2 text-center">
                    <span className="text-lg">❤️</span>
                    <div className="text-xs font-medium text-pink-800">
                      Favorites
                    </div>
                  </div>
                </Link>
                <Link href="/new">
                  <div className="rounded-lg bg-blue-100 p-2 text-center">
                    <span className="text-lg">✨</span>
                    <div className="text-xs font-medium text-blue-800">New</div>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="rounded-lg bg-purple-100 p-2 text-center">
                    <span className="text-lg">⚙️</span>
                    <div className="text-xs font-medium text-purple-800">
                      Settings
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        )}
      </div>

      <div className="absolute -bottom-4 left-0 right-0 mx-10 h-6 rounded-full bg-white bg-opacity-50"></div>
    </nav>
  );
};

export default RefinedNavbar;
