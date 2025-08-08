// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiTruck, FiShield, FiAward, FiStar, FiGlobe, FiFeather, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';
// Removed: import { GiCrown } from 'react-icons/gi';
import AboutImage from '../assets/fabricmart/about-us.png';
import SanjayGandhi from '../assets/partners/Sanjay gandhi.jpeg';
import vaibhavGandhi from '../assets/partners/vaibhav-gandhi.jpg';
import ankitGandhi from '../assets/partners/ankit-gandhi.jpg';
import LazyImage from '../components/LazyImage';
import { motion } from 'framer-motion';
import BorderAnimationButton from '../components/BorderAnimationButton';

const partners = [
  {
    id: 1,
    name: 'Ankit Gandhi',
    logo:  ankitGandhi,
  },
  {
    id: 2,
    name: 'Sanjay Gandhi',
    logo: SanjayGandhi,
  },
  {
    id: 3,
    name: 'Vaibhav Gandhi',
    logo: vaibhavGandhi,
  }
];

const premiumFeatures = [
  {
    icon: <FiStar className="w-8 h-8 text-yellow-400" />,
    title: "Unmatched Quality",
    description: "Every fabric is handpicked and rigorously inspected to ensure only the finest materials reach you.",
    highlight: "Premium Selection"
  },
  {
    icon: <FiTruck className="w-8 h-8 text-blue-600" />,
    title: "Express Nationwide Delivery",
    description: "Swift, secure, and reliable shipping to your doorstep, anywhere in India.",
    highlight: "Fast & Reliable"
  },
  {
    icon: <FiShield className="w-8 h-8 text-emerald-500" />,
    title: "Satisfaction Guarantee",
    description: "We stand behind our products with a robust quality and satisfaction guarantee.",
    highlight: "Peace of Mind"
  },
];

const founderCardVariants = {
  initial: { opacity: 0, y: 24, scale: 0.97 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 80 }
  })
};

const About = () => {
  return (
    <div className="relative min-h-screen ">
      {/* About Content */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <LazyImage 
                    src={AboutImage} 
                    alt="About us" 
                    className="w-full h-auto rounded-xl shadow-xl transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:pl-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs md:text-sm text-slate-600 shadow-sm mb-4">
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  About Fabric Wholesaler
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mb-4">
                  We're Redefining Fabric Excellence
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Fabric Wholesaler has grown from a small family business to one of the leading fabric suppliers in the region. 
                  Our passion for quality textiles and commitment to customer satisfaction has been the cornerstone of our success.
                </p>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We source our fabrics from the finest mills around the world, ensuring that every piece meets our high standards of quality and durability. 
                  Our extensive collection includes a wide range of textiles suitable for both residential and commercial applications.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Premium quality fabrics",
                    "Competitive wholesale pricing",
                    "Extensive color and pattern selection",
                    "Custom solutions available",
                    "Eco-friendly options"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start rounded-xl border border-slate-100 bg-white/80 p-3">
                      <FiCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <BorderAnimationButton
                  text="Contact Us"
                  onClick={() => {
                    const contactSection = document.getElementById('contactRef');
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
 
      {/* Enhanced Features Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 mb-4 drop-shadow-lg">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Experience the difference with our premium fabrics, world-class service, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 xl:gap-10">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative rounded-3xl border border-blue-100/60 bg-gradient-to-br from-white/90 via-blue-50/80 to-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-7 xs:p-8 md:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center shadow-md border border-white/80">
                    {feature.icon}
                  </div>
                </div>
                <div className="pt-12 pb-2 flex flex-col items-center w-full">
                  <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 mb-1">{feature.highlight}</span>
                  <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm xs:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
 
      {/* Founders Section - Enhanced Premium */}
      <motion.section
        className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg border border-yellow-200 text-yellow-900 font-semibold text-sm uppercase tracking-widest">
                {/* Removed Crown Icon */}
                Premium Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 mb-4 drop-shadow-lg">
              Meet Our Founders
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-700 text-lg md:text-xl font-medium">
              The driving force behind our legacy of excellence. Our founders blend vision, expertise, and passion to deliver a truly premium experience for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-16">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                custom={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={founderCardVariants}
                className="relative p-8 rounded-3xl border-2 bg-gradient-to-br from-white/90 to-blue-50/80 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center h-full"
              >
                {/* Image is now inside the card, not absolutely positioned */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white p-2 shadow-2xl flex items-center justify-center border-4 border-white/80 mb-8 mt-2">
                  <LazyImage 
                    src={partner.logo} 
                    alt={`${partner.name} portrait`} 
                    className="w-full h-full rounded-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random`;
                    }}
                  />
                </div>
                {/* Removed Crown Icon */}
                <div className="flex flex-col items-center w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-1">{partner.name}</h3>
                  <div className="mt-auto pt-4 border-t border-yellow-100 w-full text-center">
                    <span className="inline-block w-16 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;