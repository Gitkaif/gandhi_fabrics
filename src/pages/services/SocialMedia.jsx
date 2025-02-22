import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Share2, MessageCircle, TrendingUp, Camera } from 'lucide-react';

const SocialMedia = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Social Media & Content
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto text-gray-300"
          >
            Engage your audience and build meaningful connections
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Share2,
                title: 'Social Media Management',
                description: 'Full-service social media management across all major platforms.'
              },
              {
                icon: MessageCircle,
                title: 'Community Management',
                description: 'Build and nurture an engaged community around your brand.'
              },
              {
                icon: TrendingUp,
                title: 'Content Strategy',
                description: 'Develop content strategies that drive engagement and growth.'
              },
              {
                icon: Camera,
                title: 'Content Creation',
                description: 'Create compelling content that resonates with your audience.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg"
              >
                <service.icon className="h-12 w-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-3xl font-bold mb-12"
          >
            Platforms We Manage
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Instagram',
              'Facebook',
              'Twitter',
              'LinkedIn',
              'TikTok',
              'YouTube',
              'Pinterest',
              'Snapchat'
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-700 rounded-lg"
              >
                <h3 className="text-lg font-semibold">{platform}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-3xl font-bold mb-6"
          >
            Ready to Elevate Your Social Media Presence?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-gray-400 mb-8"
          >
            Let's create content that engages and converts
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;