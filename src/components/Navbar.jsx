import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import fusion from '../assets/fusion-logo.png';

const services = [
  { title: 'Branding & Marketing', path: '/services/branding' },
  { title: 'Social Media & Content', path: '/services/social-media' },
  { title: 'Graphic Design', path: '/services/design' },
  { title: 'Event Marketing', path: '/services/events' },
  { title: 'Website Services', path: '/services/web' },
  { title: 'OOH & DOOH', path: '/services/advertising' },
  { title: 'UGC Content', path: '/services/ugc' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-screen bg-white/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="lg:w-full sm:max-w-screen px-1">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-0 pl-3">
              <img src={fusion} alt="Fusion" className="h-36 w-46" />
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-black hover:text-gray-600 transition-colors whitespace-nowrap font-medium">
                Home
              </Link>
              <div className="relative group">
                <button
                  className="text-gray-900 hover:text-gray-600 transition-colors flex items-center space-x-1 whitespace-nowrap font-medium"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/about" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Menu Button - Right with adjusted position */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors mr-8"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Services Dropdown for Mobile */}
              <div className="relative">
                <div
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 rounded-md mt-1"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Card Menu - Desktop Only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-2 top-16 w-80 bg-white rounded-lg shadow-xl z-50 hidden md:block"
          >
            <div className="p-6">
              {/* Company Logo */}
              <div className="flex justify-center mb-4">
                <img src={fusion} alt="Fusion" className="h-20 w-auto" />
              </div>
              
              {/* Company Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fusion Media
                </h3>
                <div className="text-gray-600 space-y-2">
                  <p className="text-sm">
                    123 Business Avenue
                  </p>
                  <p className="text-sm">
                    Suite 456, Floor 7
                  </p>
                  <p className="text-sm">
                    New York, NY 10001
                  </p>
                  <p className="text-sm mt-4">
                    Phone: (555) 123-4567
                  </p>
                  <p className="text-sm">
                    Email: contact@fusionmedia.com
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Add your social media icons here */}
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;