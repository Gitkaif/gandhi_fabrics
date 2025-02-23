import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="0.5" className="text-gray-200/50" fill="none"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[Mail, Phone, MessageCircle, Clock].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-gray-400/10"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 1.5
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <Icon size={32} />
            </motion.div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Let's Connect
              <span className="block text-gray-900">
                and Create Together
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-lg"
            >
              Ready to start your next project? We're here to turn your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900 px-8 py-4 text-white"
              >
                <span className="relative z-10 flex items-center justify-center font-medium">
                  Get Started
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform transition-transform duration-200 ease-out group-hover:scale-x-100 scale-x-0" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block relative"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-200/40 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-300/40 rounded-full blur-2xl"></div>
          </motion.div>
        </div>


      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Mail className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@agency.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <MapPin className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      123 Agency Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-64 bg-gray-100 rounded-lg mt-8 shadow-lg"
              >
                {/* Add map integration here if needed */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;