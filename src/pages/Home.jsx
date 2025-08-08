// src/pages/Home.jsx
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/fabricmart/hero.jpg';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';
import LazyImage from '../components/LazyImage';
import About from './About';
import Contact from './Contact';
import { FiArrowDown } from 'react-icons/fi';
import categories from '../data/categories';
import BorderAnimationButton from '../components/BorderAnimationButton';
import GradientText from '../components/nurui/gradient-text';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();
  // Refs for smooth scrolling
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const categoriesRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Adjust for fixed header
      behavior: 'smooth'
    });
  };

  const [loading] = useState(false);
  const [error] = useState(null);

  return (
    <div className="min-h-screen  ">
      {/* Navigation */}
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} contactRef={contactRef} categoriesRef={categoriesRef} />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <LazyImage 
            src={heroBg} 
            alt="Premium fabric patterns"
            isBackground
            className="w-full h-full"
            style={{
              animation: 'zoomInOut 20s ease-in-out infinite alternate',
              objectPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white animate-fade-in-up ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-4">Elevate Your Space with</span>
            <GradientText
              colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
              animationSpeed={3}
              showBorder={false}
              className="inline-block"
            >
              Premium Fabric Solutions
            </GradientText>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Discover the perfect blend of quality, style, and durability with our exclusive fabric collections designed for events, décor, and luxury interiors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <BorderAnimationButton text="Explore Collections" onClick={() => scrollToSection(categoriesRef)} />
          </div>
          <div 
            onClick={() => scrollToSection(categoriesRef)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          >
            
            <p className="text-sm text-white/70 mt-2 group-hover:text-white transition-colors">Scroll to Explore</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-white  ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-1"></span>
              <span className="inline-block w-1 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full ml-1"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Our Fabric Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our curated selection of premium fabrics, meticulously crafted to bring elegance and sophistication to any space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const thumbnail = category.images && category.images[0] ? category.images[0] : null;
              return (
                <Link 
                  to={`/category/${category.slug || category.id}`}
                  key={category.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={thumbnail} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.description || 'Explore collection'}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate(`/category/${category.slug || category.id}`);
                      }}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                      View Collection
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="aboutRef" ref={aboutRef} className="py-16 py-20 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactRef" ref={contactRef} className="py-16 py-20 ">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>

    </div>
  );
};

export default Home;