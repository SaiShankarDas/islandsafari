import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-brand-gold pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">My Kind of Travel</h3>
            {/* Replaced text-brand-white/70 with text-brand-gold */}
            <p className="text-brand-gold text-sm leading-relaxed">
              Curating authentic travel experiences and inspiring your next great adventure. Travel deeper, live fuller.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/my_kind_of_travel_/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gold hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gold hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3 text-sm text-brand-gold">
              <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lifestyle</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-brand-gold">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-gold">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>123 Wanderlust Ave,<br />New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:hello@mykindoftravel.com" className="hover:text-white transition-colors">hello@mykindoftravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-8 text-center text-sm text-brand-gold/60">
          <p>&copy; {new Date().getFullYear()} My Kind of Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
