import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Target, BarChart as ChartBar, Users } from 'lucide-react';

const Branding = () => {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80")',
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
            Branding & Marketing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto text-gray-300"
          >
            Build a powerful brand that resonates with your audience
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Brand Strategy',
                description: 'Develop a comprehensive brand strategy that aligns with your business goals and resonates with your target audience.'
              },
              {
                icon: Target,
                title: 'Brand Identity',
                description: 'Create a unique and memorable brand identity including logo design, color palette, typography, and visual elements.'
              },
              {
                icon: ChartBar,
                title: 'Marketing Strategy',
                description: 'Build data-driven marketing strategies that drive growth and deliver measurable results.'
              },
              {
                icon: Users,
                title: 'Brand Positioning',
                description: 'Position your brand effectively in the market to stand out from competitors and connect with your ideal customers.'
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
                <service.icon className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your business and goals' },
              { number: '02', title: 'Strategy', description: 'Developing a tailored brand strategy' },
              { number: '03', title: 'Creation', description: 'Building your brand assets and identity' },
              { number: '04', title: 'Implementation', description: 'Launching and growing your brand' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
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
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-gray-400 mb-8"
          >
            Let's work together to create a brand that makes a lasting impression
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Branding;