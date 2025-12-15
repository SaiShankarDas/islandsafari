import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-brand-white rounded-2xl shadow-2xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-brand-gold/10">
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Unlock Exclusive Travel Guides
            </h2>
            {/* Updated to brand-blue/70 */}
            <p className="text-brand-blue/70 mb-8 max-w-lg mx-auto">
              Join our newsletter to receive curated destination tips, photography hacks, and hidden gem alerts directly to your inbox.
            </p>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-green-600 p-4"
              >
                <CheckCircle className="w-12 h-12 mb-2" />
                <p className="font-medium text-lg">You're on the list! Happy travels.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 rounded-md border border-brand-gold/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-blue placeholder:text-brand-blue/40"
                />
                <Button type="submit" variant="primary" className="whitespace-nowrap bg-brand-blue hover:bg-brand-blue/90">
                  Subscribe <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
            
            <p className="text-xs text-brand-blue/50 mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
