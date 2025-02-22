import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Layout, Image, PenTool } from 'lucide-react';

const Design = () => {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80")',
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
            Graphic Design
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto text-gray-300"
          >
            Create stunning visuals that capture attention
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Palette,
                title: 'Brand Design',
                description: 'Create a cohesive visual identity that reflects your brand personality.'
              },
              {
                icon: Layout,
                title: 'Print Design',
                description: 'Design eye-catching marketing materials and collateral.'
              },
              {
                icon: Image,
                title: 'Digital Design',
                description: 'Develop engaging visuals for social media and digital platforms.'
              },
              {
                icon: PenTool,
                title: 'Custom Illustration',
                description: 'Create unique illustrations and graphics for your brand.'
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
                <service.icon className="h-12 w-12 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1626785774625-748b0374e3b8?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1626785774739-4c6f0944e3c4?auto=format&fit=crop&q=80'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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
            Ready to Bring Your Vision to Life?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-gray-400 mb-8"
          >
            Let's create designs that make an impact
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Design;