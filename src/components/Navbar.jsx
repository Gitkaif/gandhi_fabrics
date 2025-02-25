import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const profileCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileCardRef.current && !profileCardRef.current.contains(event.target)) {
        const menuButton = document.querySelector('[aria-label="Menu"]');
        if (!menuButton?.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-screen bg-white/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="lg:w-full sm:max-w-screen px-1">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-0 pl-3 mt-4">
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
                      className="absolute left-0 mt-2 w-64 bg-black rounded-lg shadow-xl py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors font-medium"
                          onClick={() => setIsServicesOpen(false)}
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
                <button
                  className="w-full block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex items-center justify-between"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-black rounded-md mt-1 overflow-hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-6 py-2 text-sm text-white hover:bg-gray-800"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
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
            ref={profileCardRef}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-2 top-16 w-96 bg-white rounded-lg shadow-xl z-50 hidden md:block"
          >
            <div className="p-8">
              {/* Company Logo */}
              <div className="flex justify-center mb-0">
                <img src={fusion} alt="Fusion" className="h-48 w-auto" />
              </div>
              
              {/* Company Info */}
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm mb-6">
                  We are a full-service creative agency specializing in helping brands grow fast.
                  Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a href="mailto:info@fusionmedias.in" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">info@fusionmedias.in</span>
                </a>
                <a href="tel:+918655625936"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">+91 86556 25936</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span className="text-sm">
                    2nd floor, Tirupati udyog,<br />
                    Office No, 208/209, IB Patel Rd,<br />
                    Goregaon, Mumbai,<br />
                    Maharashtra 400063
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-100">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;