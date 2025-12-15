import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Packages } from './components/sections/Packages';
import { InstagramFeed } from './components/sections/InstagramFeed';
import { BlogPreview } from './components/sections/BlogPreview';
import { Newsletter } from './components/sections/Newsletter';
import { Testimonials } from './components/sections/Testimonials';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-white font-sans text-brand-blue selection:bg-brand-gold selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <About />
        <Packages />
        <InstagramFeed />
        <Testimonials />
        <BlogPreview />
        <Newsletter />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
