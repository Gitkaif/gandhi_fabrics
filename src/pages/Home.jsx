import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Palette, Share2, Monitor, Megaphone, Video, Users } from 'lucide-react';
import fusion from '../assets/fusion-logo.png';
import { Link } from 'react-router-dom';

const services = [
  { 
    icon: Briefcase, 
    title: 'Branding & Marketing', 
    description: 'Build your brand identity and market presence',
    path: '/services/branding'
  },
  { 
    icon: Share2, 
    title: 'Social Media & Content', 
    description: 'Engage your audience across platforms',
    path: '/services/social-media'
  },
  { 
    icon: Palette, 
    title: 'Graphic Design', 
    description: 'Create stunning visuals that capture attention',
    path: '/services/design'
  },
  { 
    icon: Megaphone, 
    title: 'Event Marketing', 
    description: 'Make your events memorable and impactful' },
  { icon: Monitor, title: 'Website Services', description: 'Develop powerful digital experiences' },
  { icon: Video, title: 'OOH & DOOH', description: 'Reach audiences with outdoor advertising' },
  { icon: Users, title: 'UGC Content', description: 'Harness the power of user-generated content' }
];

const projects = [
  { 
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80', 
    title: 'Digital Campaign',
    category: 'Marketing'
  },
  { 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', 
    title: 'Brand Strategy',
    category: 'Branding'
  },
  { 
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80', 
    title: 'Social Media',
    category: 'Content'
  },
  { 
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80', 
    title: 'Web Design',
    category: 'Development'
  }
];

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Transform Your Brand
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Full-service digital marketing agency for the modern age
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
            <h1 className="text-[5rem] md:text-[3rem] font-bold mb-6">YOUR GROWTH PARTNER IN DIGITAL MARKETING</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 text-lg mb-6">
                At Fusion, we don't just market your business — we help it thrive. 
                As a leading digital marketing agency based in Mumbai, we specialize in crafting 
                strategies that captivate audiences, drive engagement and deliver measurable results.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're a budding startup or an established brand, our dynamic team is here 
                to turn your vision into reality, scaling your business to new heights.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center mt-14">
              <motion.img 
                src={fusion}
                alt="Fusion Logo" 
                className="w-100 h-80"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="overflow-hidden py-20 bg-gray-50">
        <div className="w-full mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Projects</h2>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-scroll gap-8 py-12">
              {[...projects, ...projects, ...projects, ...projects].map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl"
                  style={{
                    transform: 'rotate(-3deg)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <style jsx>{`
                    @keyframes scroll {
                      0% {
                        transform: translateX(0);
                      }
                      100% {
                        transform: translateX(calc(-50% - 2rem));
                      }
                    }
                    .animate-scroll {
                      animation: scroll 30s linear infinite;
                    }
                    .pause:hover {
                      animation-play-state: paused;
                    }
                    .group:hover {
                      transform: rotate(0deg) scale(1.05) !important;
                      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                      z-index: 10;
                    }
                  `}</style>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-medium mb-3 opacity-80">{project.category}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[5rem] md:text-[3rem] font-bold mb-6 text-center"
          >
            OUR EXPERTISE
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
            {services.map((service, index) => (
              <Link 
                to={service.path} 
                key={index}
                className="no-underline"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl 
                    transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2" />
                  <div className="relative bg-white p-8 rounded-2xl transform transition-all duration-300 
                    group-hover:-translate-y-2 group-hover:-translate-x-2 h-full">
                    <div className="absolute -top-8 left-4">
                      <motion.div
                        className="bg-white p-4 rounded-xl shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                      >
                        <service.icon className="h-8 w-8 text-gray-900" />
                      </motion.div>
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <motion.div
                      className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="text-gray-400 transform transition-transform group-hover:translate-x-1">
                        →
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;