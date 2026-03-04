import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative text-center max-w-4xl mx-auto" style={{ padding: '0 30px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight pb-8"
        >
          Websites That Actually
          <br />
          Grow Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed pb-10"
        >
          I design modern, high-converting websites for salons and local businesses
          across BC — built to attract customers, rank on Google, and increase bookings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-2"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full hover:border-white/50 transition-all duration-300 text-base font-medium"
          >
            Book Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
