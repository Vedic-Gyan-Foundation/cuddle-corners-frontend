import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin   } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 pt-10 pb-6">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-around">
          <div className="w-12 h-12 bg-green-400 rounded-full transform translate-y-6 animate-bounce" style={{ animationDuration: '2s' }}></div>
          <div className="w-16 h-16 bg-blue-400 rounded-full transform translate-y-4 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="w-10 h-10 bg-red-400 rounded-full transform translate-y-8 animate-bounce" style={{ animationDuration: '2.5s' }}></div>
          <div className="w-14 h-14 bg-yellow-400 rounded-full transform translate-y-2 animate-bounce" style={{ animationDuration: '4s' }}></div>
          <div className="w-12 h-12 bg-purple-400 rounded-full transform translate-y-6 animate-bounce" style={{ animationDuration: '3.5s' }}></div>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold text-white tracking-wider">Cuddles Corner</h2>
              <div className="ml-2 w-8 h-8 bg-yellow-300 rounded-full"></div>
            </div>
            <p className="text-white text-lg mb-6">
              Join us on an exciting adventure of learning and fun!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-purple-500 text-xl font-bold"><Facebook /></span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-purple-500 text-xl font-bold"><Instagram /></span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-purple-500 text-xl font-bold"><Linkedin /></span>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              {['Games', 'Stories', 'Learn', 'Create', 'Videos'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white text-lg hover:text-yellow-300 flex items-center transform hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">•</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-6">Parent's Corner</h3>
            <p className="text-white mb-4">Stay updated with our latest activities!</p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-full w-full focus:outline-none text-purple-900"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 px-6 rounded-r-full font-bold transition-colors duration-300">
                Join!
              </button>
            </div>
            <p className="text-white text-sm">We promise fun emails only!</p>
          </div>
        </div>

        {/* Cloud shapes at bottom */}
        <div className="relative mt-12 pt-8 border-t border-white border-opacity-30">
          <div className="absolute bottom-12 left-10">
            <div className="w-16 h-6 bg-white rounded-full opacity-70"></div>
            <div className="w-10 h-6 bg-white rounded-full opacity-70 -mt-4 ml-8"></div>
            <div className="w-12 h-6 bg-white rounded-full opacity-70 -mt-2 ml-4"></div>
          </div>
          <div className="absolute bottom-16 right-10">
            <div className="w-16 h-6 bg-white rounded-full opacity-70"></div>
            <div className="w-10 h-6 bg-white rounded-full opacity-70 -mt-4 ml-8"></div>
            <div className="w-12 h-6 bg-white rounded-full opacity-70 -mt-2 ml-4"></div>
          </div>
          
          <div className="text-center text-white">
            <p>&copy; {new Date().getFullYear()} Cuddles Corner. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4 text-sm">
              <Link href="#" className="hover:text-yellow-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-yellow-300">Terms of Use</Link>
              <Link href="#" className="hover:text-yellow-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rainbow border at bottom */}
      <div className="h-4 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mt-8"></div>
    </footer>
  );
};

export default Footer;