import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Remove FiMenu and FiX imports as we'll use SVG directly

const navItems = [
  { name: 'Home', path: 'home', section: 'home' },
  { name: 'Collections', path: 'collections', section: 'collections' },
  { name: 'About', path: 'about', section: 'about' },
  { name: 'Contact', path: 'contact', section: 'contact' },
];

const Navbar = ({ scrollToSection, aboutRef, contactRef, categoriesRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              Fabric <span className="text-blue-600">Wholesaler</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const handleClick = (e) => {
                e.preventDefault();
                if (item.section === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (item.section === 'collections' && categoriesRef?.current) {
                  scrollToSection(categoriesRef);
                } else if (item.section === 'about' && aboutRef?.current) {
                  scrollToSection(aboutRef);
                } else if (item.section === 'contact' && contactRef?.current) {
                  scrollToSection(contactRef);
                }
              };

              return (
                <a
                  key={item.name}
                  href={`#${item.section}`}
                  onClick={handleClick}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    location.hash === `#${item.section}` || 
                    (location.pathname === '/' && !location.hash && item.section === 'home')
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {(location.hash === `#${item.section}` || 
                   (location.pathname === '/' && !location.hash && item.section === 'home')) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none z-50 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation - positioned relative to the nav (fixed) element */}
          <div
            className={`md:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-48 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            } overflow-hidden`}
            style={{ top: '100%' }}
          >
            <div className="py-4 px-4 space-y-4">
              {navItems.map((item) => {
                const handleClick = (e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (item.section === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.section === 'collections' && categoriesRef?.current) {
                    scrollToSection(categoriesRef);
                  } else if (item.section === 'about' && aboutRef?.current) {
                    scrollToSection(aboutRef);
                  } else if (item.section === 'contact' && contactRef?.current) {
                    scrollToSection(contactRef);
                  }
                };

                return (
                  <a 
                    key={item.name}
                    href={`#${item.section}`}
                    onClick={handleClick}
                    className={`block text-lg ${location.hash === `#${item.section}` || 
                      (location.pathname === '/' && !location.hash && item.section === 'home')
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;