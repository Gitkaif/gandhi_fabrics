import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">FUSION MEDIA</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Branding & Marketing',
                'Social Media Management',
                'Graphic Design',
                'Event Marketing',
                'Website Services',
                'OOH & DOOH',
                'UGC Content'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:info@fusionmedias.in" className="block">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6 text-white mt-1" />
                  <span className="text-sm">info@fusionmedias.in</span>
                </motion.div>
              </a>
              <a href="tel:+918655625936" className="block">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-6 w-6 text-white mt-1" />
                  <span className="text-sm">+91 86556 25936</span>
                </motion.div>
              </a>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <MapPin className="h-6 w-6 text-white mt-1" />
                <span className="text-sm">2nd floor, Tirupati udyog,<br />Office No, 208/209, IB Patel Rd,<br />Goregaon, Mumbai,<br />Maharashtra 400063</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Fusion Media. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;