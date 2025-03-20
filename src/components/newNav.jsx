import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const RefinedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateCloud, setAnimateCloud] = useState(false);

  useEffect(() => {
    setAnimateCloud(true);
  }, []);

  return (
    <nav className="relative font-bold py-2 z-10 rounded-b-2xl">
      {/* Rainbow background with texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-600 rounded-b-3xl shadow-lg"></div>
      <div className="rounded-b-3xl absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      {/* Cloud design */}
      <div className={`absolute -bottom-5 left-6 w-24 h-8 bg-white rounded-full transition-all duration-1000 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute -bottom-8 left-12 w-16 h-10 bg-white rounded-full transition-all duration-1000 delay-300 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute -bottom-6 left-28 w-20 h-9 bg-white rounded-full transition-all duration-1000 delay-100 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      
      <div className={`absolute -bottom-5 right-6 w-24 h-8 bg-white rounded-full transition-all duration-1000 delay-500 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute -bottom-8 right-12 w-16 h-10 bg-white rounded-full transition-all duration-1000 delay-700 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute -bottom-6 right-28 w-20 h-9 bg-white rounded-full transition-all duration-1000 delay-600 ease-in-out ${animateCloud ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      
      {/* Stars - made smaller and fewer */}
      <div className="absolute top-3 left-20 text-yellow-200 text-xl animate-pulse">✦</div>
      <div className="absolute top-6 right-20 text-blue-200 text-xl animate-pulse delay-500">✦</div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-3">
          {/* Logo - made smaller */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md transform hover:rotate-12 transition-all duration-300">
              {/* <span className="text-3xl"></span> */}
              <img
                src="/images/logos/logo-without-bg.png"
                alt="cuddle-corners-logo"
                className="h-9 w-20"                
            />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-extrabold tracking-wider">Cuddles Corner</span>
              <span className="text-blue-100 text-xs">Where imagination grows!</span>
            </div>
          </div>
          
          {/* Desktop Menu - more compact */}
          <div className="hidden lg:flex items-center space-x-4">
            {[
              { name: 'Home', url: '', icon: '🏠', color: 'bg-gradient-to-b from-red-400 to-red-600' },
              { name: 'About Us', url: 'about-us', icon: '🏫', color: 'bg-gradient-to-b from-yellow-400 to-yellow-600' },
              { name: 'Admission', url: '', icon: '📑', color: 'bg-gradient-to-b from-green-400 to-green-600' },
              { name: 'Classes', url: '', icon: '📚', color: 'bg-gradient-to-b from-blue-400 to-blue-600' },
              { name: 'Contact US', url: '', icon: '📞', color: 'bg-gradient-to-b from-purple-400 to-purple-600' }
            ].map((item, index) => (
              <Link to={`/${item.url}`} key={index}>
                <div className="group">
                  <div className="relative">
                    {/* Button shadow effect */}
                    <div className="absolute inset-0 bg-white rounded-lg -rotate-2 group-hover:rotate-2 transition-all duration-300 shadow-md"></div>
                    <div className="absolute inset-0 bg-black opacity-10 rounded-lg translate-y-1 blur-sm"></div>
                    
                    {/* Button */}
                    <div className={`
                      relative px-4 py-2 rounded-lg font-bold text-base text-white transition-all duration-300
                      ${item.color}
                      transform group-hover:scale-105 group-hover:shadow-md
                    `}>
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </div>
                  </div>
                  
                  {/* Animation element */}
                  <div className="hidden group-hover:block animate-bounce text-lg absolute -bottom-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
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
              className="relative bg-white p-2 rounded-full focus:outline-none shadow-md transform hover:scale-110 transition-all duration-300"
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
            <div className="bg-white bg-opacity-95 rounded-xl p-4 mb-4 shadow-lg">
              <div className="flex overflow-x-auto pb-4 space-x-3 hide-scrollbar">
                {[
                    { name: 'Home', url: '', icon: '🏠', color: 'bg-gradient-to-b from-red-400 to-red-600' },
                    { name: 'About Us', url: 'about-us', icon: '🏫', color: 'bg-gradient-to-b from-yellow-400 to-yellow-600' },
                    { name: 'Admission', url: '', icon: '📑', color: 'bg-gradient-to-b from-green-400 to-green-600' },
                    { name: 'Classes', url: '', icon: '📚', color: 'bg-gradient-to-b from-blue-400 to-blue-600' },
                    { name: 'Contact US', url: '', icon: '📞', color: 'bg-gradient-to-b from-purple-400 to-purple-600' }
                ].map((item, index) => (
                  <Link href={`/${item.name.toLowerCase()}`} key={index}>
                    <div className={`
                      flex flex-col items-center min-w-max px-6 py-3 rounded-lg font-bold text-white
                      ${item.color}
                      transform hover:scale-105 transition-all duration-300 shadow-md
                    `}>
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <Link href="/favorites">
                  <div className="bg-pink-100 p-2 rounded-lg text-center">
                    <span className="text-lg">❤️</span>
                    <div className="text-xs font-medium text-pink-800">Favorites</div>
                  </div>
                </Link>
                <Link href="/new">
                  <div className="bg-blue-100 p-2 rounded-lg text-center">
                    <span className="text-lg">✨</span>
                    <div className="text-xs font-medium text-blue-800">New</div>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="bg-purple-100 p-2 rounded-lg text-center">
                    <span className="text-lg">⚙️</span>
                    <div className="text-xs font-medium text-purple-800">Settings</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute -bottom-4 left-0 right-0 h-6 bg-white bg-opacity-50 rounded-full mx-10"></div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default RefinedNavbar;