import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight">Gandhi Enterprises</span>
          <span className="text-xs bg-white/20 rounded px-2 py-1 ml-2">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap items-center space-x-6 text-sm">
          <a
            href="/"
            className="hover:underline hover:text-blue-100 transition"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a
            href="#aboutRef"
            className="hover:underline hover:text-blue-100 transition"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('aboutRef');
              if (el) {
                window.scrollTo({
                  top: el.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            About
          </a>
          <a
            href="#contactRef"
            className="hover:underline hover:text-blue-100 transition"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contactRef');
              if (el) {
                window.scrollTo({
                  top: el.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
