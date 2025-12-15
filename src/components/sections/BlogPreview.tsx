import React from 'react';
import { blogPosts } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-brand-gold/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-brand-blue mb-4"
          >
            Travel Journal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-blue/70"
          >
            Tips, guides, and stories from the road.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 md:p-0 md:bg-transparent md:shadow-none"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue shadow-sm border border-brand-gold/20">
                  {post.category}
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-gold transition-colors">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0 md:hidden" /> {/* Full card click on mobile */}
                  {post.title}
                </a>
              </h3>
              {/* Updated to brand-blue/70 for readability */}
              <p className="text-brand-blue/70 mb-6 line-clamp-2 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="inline-flex items-center text-brand-blue font-bold group-hover:text-brand-gold transition-colors mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
