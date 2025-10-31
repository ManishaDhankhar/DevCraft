import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Process', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-transparent backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:brightness-125 transition-all duration-300">
              DevCraft
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-semibold transition-all duration-300 relative group ${
                  scrolled ? 'text-white/80' : 'text-white/70'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button className={`hidden md:block px-6 py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            scrolled
              ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-purple-500/50'
              : 'bg-white/10 text-white border border-white/30 glass-morphism hover:bg-white/20'
          }`}>
            Get Started
          </button>

          <button
            className={`md:hidden transition-all duration-300 ${scrolled ? 'text-white' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/98 to-gray-900/95 backdrop-blur-xl border-t border-white/10 animate-slide-down">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/70 hover:text-white transition-all duration-300 font-semibold py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
