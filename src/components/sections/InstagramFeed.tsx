import React from 'react';
import { instagramPosts } from '../../data/mockData';
import { Instagram, ExternalLink } from 'lucide-react';
import { Marquee } from '../ui/Marquee';

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-brand-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue mb-3">
            Visual Diary
          </h2>
          <p className="text-brand-blue/70 text-lg">
            Snapshots from our latest adventures around the globe.
          </p>
        </div>
        <a
          href="https://www.instagram.com/island__safari/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-white border border-brand-gold/50 text-brand-blue rounded-full font-medium hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <Instagram className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" />
          <span>@island__safari</span>
          <ExternalLink className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        </a>
      </div>

      {/* Rolling Gallery */}
      <div className="relative w-full py-8">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-brand-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-brand-white to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} pauseOnHover={true} className="py-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/island__safari/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer shadow-md mx-2 block"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-brand-gold" />
                </div>
              </div>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
