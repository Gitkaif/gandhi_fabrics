import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Palette, Share2, Monitor, Megaphone, Video, Users, BarChart2, Settings, Target } from 'lucide-react';
import fusion from '../assets/fusion-logo.png';
import { Link } from 'react-router-dom';
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.png';
import poster3 from '../assets/poster3.png';
import hero from '../assets/hero.png';

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
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${hero})`,
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
            Empowering Brands with Creativity & Strategy!
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
      <motion.section 
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4" 
        style={{ backgroundColor: '#F2F0F7' }}
      >
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
              <img 
                src={poster1}
                alt="Fusion Logo" 
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Strategic Planning</h3>
              <p className="text-gray-600 text-lg mb-6">
                Our approach begins with thorough market research and analysis. We develop 
                comprehensive strategies tailored to your unique business needs and goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Market Analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Competitor Research</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Strategy Development</span>
                </li>
              </ul>
            </div>

            {/* Center Image */}
            <div className="lg:w-1/3 flex justify-center items-center">
              <img 
                src={poster2}
                alt="Our Process" 
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600">Execution & Results</h3>
              <p className="text-gray-600 text-lg mb-6">
                We implement data-driven strategies and continuously optimize our approach 
                to ensure maximum ROI and sustainable growth for your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-purple-600">→</span>
                  <span className="text-gray-700">Campaign Implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-purple-600">→</span>
                  <span className="text-gray-700">Performance Tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-purple-600">→</span>
                  <span className="text-gray-700">Continuous Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* New Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
        style={{ backgroundColor: '#F2F0F7' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/3 flex justify-center items-center">
              <img 
                src={poster3} 
                alt="New Section" 
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-600">New Section Title</h3>
              <p className="text-gray-600 text-lg mb-6">
                This section provides an overview of our new offerings and insights into our innovative approaches.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">→</span>
                  <span className="text-gray-700">Insight 1</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">→</span>
                  <span className="text-gray-700">Insight 2</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-600">→</span>
                  <span className="text-gray-700">Insight 3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="overflow-hidden py-20 bg-gray-50"
      >
        <div className="w-full mt-20">
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
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }} 
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
                  animate={{ y: 0, opacity: 1 }}
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
      </motion.section>

      {/* Why Choose Us Section with Marquee */}
      <motion.section 
        ref={whyChooseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }} 
        className="py-20 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Choose Us?
          </motion.h2>

          {/* Marquee Text */}
          <div className="w-full">
            <div className="relative flex overflow-x-hidden">
              <div className="flex animate-scroll gap-8 py-12">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex flex-shrink-0">
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-blue-500 font-sans">BRANDING & MARKETING</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-red-500 font-serif">SOCIAL MEDIA & CONTENT</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-extrabold mx-8 text-purple-400 font-mono">GRAPHIC DESIGN</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-green-400 font-sans">EVENT MARKETING</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-blue-500 font-serif">WEBSITE SERVICES</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-pink-500 font-serif">OOH & DOOH</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-blue-500 font-sans">UGC CONTENT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {/* Industry Expertise */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Briefcase className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-400">
                Over a decade of experience in branding and marketing, delivering exceptional results across industries.
              </p>
            </motion.div>

            {/* Creative & Data-Driven */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <BarChart2 className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative & Data-Driven</h3>
              <p className="text-gray-400">
                Perfect blend of creative innovation and data-driven strategies for maximum impact.
              </p>
            </motion.div>

            {/* Customized Solutions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Settings className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customized Solutions</h3>
              <p className="text-gray-400">
                Tailored strategies designed specifically for your brand's unique needs and goals.
              </p>
            </motion.div>

            {/* Result-Oriented */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Target className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Result-Oriented</h3>
              <p className="text-gray-400">
                Focused on delivering measurable success and tangible business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative">
            <div className="flex gap-8 overflow-x-hidden">
              <motion.div 
                className="flex gap-8"
                drag="x"
                dragConstraints={{ right: 0, left: -2800 }}
              >
                {/* Testimonial 1 */}
                <motion.div 
                  className="w-[400px] bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col flex-shrink-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/men/1.jpg" 
                      alt="Client" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-xl">John Smith</h4>
                      <p className="text-gray-600">CEO, Tech Corp</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Fusion transformed our digital presence completely. Their strategic approach and creative solutions helped us achieve remarkable growth."
                  </p>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div 
                  className="w-[400px] bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col flex-shrink-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/women/1.jpg" 
                      alt="Client" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-xl">Sarah Johnson</h4>
                      <p className="text-gray-600">Marketing Director, Brand Co</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The team's creativity and attention to detail is outstanding. They delivered beyond our expectations and helped us reach new audiences."
                  </p>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div 
                  className="w-[400px] bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col flex-shrink-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/men/2.jpg" 
                      alt="Client" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-xl">Michael Chen</h4>
                      <p className="text-gray-600">Founder, StartUp Inc</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Working with Fusion has been a game-changer for our business. Their innovative strategies and dedicated team delivered exceptional results."
                  </p>
                </motion.div>

                {/* Testimonial 4 */}
                <motion.div 
                  className="w-[400px] bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col flex-shrink-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/women/2.jpg" 
                      alt="Client" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-xl">Emily Davis</h4>
                      <p className="text-gray-600">Marketing Manager, Creative Co</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The team's ability to understand our brand's voice and translate it into impactful marketing campaigns is truly remarkable."
                  </p>
                </motion.div>

                {/* Testimonial 5 */}
                <motion.div 
                  className="w-[400px] bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col flex-shrink-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/men/3.jpg" 
                      alt="Client" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-xl">David Wilson</h4>
                      <p className="text-gray-600">Brand Strategist, Growth Co</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Fusion's data-driven approach to marketing has helped us optimize our strategies and achieve better results."
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                const container = document.querySelector('.flex.gap-8.overflow-x-hidden');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                const container = document.querySelector('.flex.gap-8.overflow-x-hidden');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;