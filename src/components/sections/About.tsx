import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Camera, Heart } from 'lucide-react';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.img
                style={{ y: y1 }}
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop"
                alt="Traveler looking at view"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-12"
              />
              <motion.img
                style={{ y: y2 }}
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
                alt="Coffee and map"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -z-10 top-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl"
            />
            <div className="absolute -z-10 bottom-0 right-0 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-brand-gold font-medium tracking-widest uppercase mb-4 text-sm font-bold">Your Gateway to Paradise</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              Experience Lakshadweep <br />
              <span className="italic font-light">Like Never Before</span>
            </h2>
            {/* Updated text color to brand-blue/80 for readability on white */}
            <p className="text-brand-blue/80 leading-relaxed mb-8 text-lg font-medium">
              Island Safari offers exclusive access to the pristine beaches and vibrant coral reefs of Agatti and Kalpitti Islands. We are dedicated to showcasing the natural splendor of Lakshadweep.
            </p>
            <p className="text-brand-blue/70 leading-relaxed mb-10">
              Located at Island Safari Airport road, Agatti Island, Lakshadweep, India 682553. We specialize in creating unforgettable memories, from scuba diving adventures to serene sunset cruises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Compass, label: "Local Guides", color: "text-brand-blue" },
                { icon: Camera, label: "Scenic Views", color: "text-brand-gold" },
                { icon: Heart, label: "Hospitality", color: "text-brand-blue" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-brand-gold/30"
                >
                  <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <h5 className="font-serif font-semibold text-brand-blue">{item.label}</h5>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
