import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { Instagram, ArrowRight, MapPin } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Scale */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Updated to a tropical beach sunset vibe to match Goa/Maldives theme
            backgroundImage: 'url("https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2874&auto=format&fit=crop")',
          }}
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-transparent to-brand-blue/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest uppercase text-brand-gold mb-8"
          >
            <MapPin className="w-3 h-3" />
            <span>Agatti Island, Lakshadweep</span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-white drop-shadow-lg">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Escape to our sanctuary
            </motion.span>
            <motion.span
              className="block italic text-brand-gold font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              of serene luxury
            </motion.span>
          </h1>

          <motion.p
            className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover the rare natural beauty of Agatti Island, Lakshadweep. A tropical paradise waiting for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button variant="primary" size="lg" className="group bg-brand-gold hover:bg-brand-gold/90 text-white border-none min-w-[200px] shadow-xl shadow-brand-blue/20">
              Book Your Safari
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <a
              href="https://www.instagram.com/island__safari/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group min-w-[200px] backdrop-blur-sm hover:bg-white/10 border-white/40">
                <Instagram className="mr-2 w-5 h-5" />
                Follow on Instagram
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </div>
  );
};
