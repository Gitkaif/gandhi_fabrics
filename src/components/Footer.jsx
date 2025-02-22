import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>info@agency.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>123 Agency Street, NY 10001</span>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
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
                  whileHover={{ x: 10 }}
                  className="cursor-pointer hover:text-gray-600 transition-colors"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="hover:text-gray-600 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;