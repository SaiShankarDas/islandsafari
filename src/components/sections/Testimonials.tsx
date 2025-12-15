import React from 'react';
import { testimonials } from '../../data/mockData';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Community Love</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-brand-gold/20"
            >
              <Quote className="w-8 h-8 text-brand-gold mb-6 opacity-80" />
              {/* Replaced text-neutral-200 with text-brand-gold/80 */}
              <p className="text-lg italic text-brand-gold/80 mb-8 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold"
                />
                <div>
                  <h4 className="font-serif font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-brand-gold/80 uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
