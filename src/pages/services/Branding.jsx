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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[80vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Transform Your Brand into a Powerhouse!
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Your brand is more than just a logo—it's an experience. We craft compelling brand strategies, unique identities, and marketing campaigns that make your business unforgettable.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition-all shadow-lg"
            >
              Let's Talk
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Benefits of Our Branding Services
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Stand Out from Competition</h3>
                <p className="text-gray-700">Develop a unique brand identity that sets you apart in your industry and captures your audience's attention.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Build Trust & Credibility</h3>
                <p className="text-gray-700">Create a professional image that instills confidence and builds lasting relationships with your customers.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Increase Brand Value</h3>
                <p className="text-gray-700">Establish a strong brand presence that adds value to your products or services and commands premium pricing.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Consistent Brand Experience</h3>
                <p className="text-gray-700">Deliver a cohesive brand experience across all touchpoints to build recognition and loyalty.</p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                alt="Branding Strategy"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Brand Identity & Logo Design',
                description: 'Create a distinctive visual identity that captures your brand essence through professional logo design and comprehensive brand guidelines.'
              },
              {
                icon: Target,
                title: 'Brand Positioning & Strategy',
                description: 'Develop a strategic framework that positions your brand for success and resonates with your target audience.'
              },
              {
                icon: ChartBar,
                title: 'Marketing Campaigns & Storytelling',
                description: 'Craft compelling narratives and execute integrated marketing campaigns that bring your brand story to life.'
              },
              {
                icon: Users,
                title: 'Print & Digital Branding',
                description: 'Create cohesive brand experiences across all touchpoints, from traditional print materials to digital platforms.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/20"
              >
                <service.icon className="h-12 w-12 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-white/5 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's build your brand's legacy
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition-all shadow-lg"
          >
            Let's Talk
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Branding;