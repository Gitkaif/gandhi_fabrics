import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Palette, Users, TrendingUp } from 'lucide-react';

const SocialMedia = () => {
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80")',
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
              Social Media & Content 
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              We create scroll-stopping social media campaigns, compelling content, and strategies that increase engagement, build communities, and drive conversions.
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
            Benefits of Our Social Media & Content Services
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Increased Brand Visibility</h3>
                <p className="text-gray-700">Stand out in crowded social feeds with eye-catching content that captures attention and drives engagement.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Targeted Audience Growth</h3>
                <p className="text-gray-700">Reach and connect with your ideal customers through strategic content and community management.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Higher Conversion Rates</h3>
                <p className="text-gray-700">Transform followers into customers with compelling calls-to-action and optimized content strategies.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Measurable ROI</h3>
                <p className="text-gray-700">Track and optimize performance with detailed analytics and data-driven insights.</p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Social Media Analytics"
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
                icon: Rocket,
                title: 'Social Media Strategy & Management',
                description: 'Data-driven strategies and full-service management to elevate your brand across all major platforms.'
              },
              {
                icon: Palette,
                title: 'Content Creation',
                description: 'Eye-catching graphics, engaging videos, and compelling copywriting that resonates with your audience.'
              },
              {
                icon: Users,
                title: 'Influencer & Community Marketing',
                description: 'Build authentic relationships and leverage influencer partnerships to expand your reach.'
              },
              {
                icon: TrendingUp,
                title: 'Paid Social Advertising',
                description: 'Targeted campaigns that maximize ROI and drive meaningful conversions.'
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
            Boost your brand's digital presence
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

export default SocialMedia;