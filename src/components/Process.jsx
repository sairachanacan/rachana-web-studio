import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneCall, Paintbrush, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Strategy Call',
    description: 'Free consultation to understand your business, goals, and target audience.',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Design & Build',
    description: 'Custom design and development with clean code and modern technology.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch',
    description: 'Your site goes live with SEO setup, hosting, and analytics tracking.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Grow',
    description: 'Ongoing marketing, content updates, and optimization to keep growing.',
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative group text-center"
    >
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-50px)] h-px bg-white/8" />
      )}

      <div className="text-5xl font-heading text-white/15 mb-3">{step.number}</div>

      <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-white/25 transition-colors">
        <step.icon size={22} className="text-white/50" />
      </div>

      <h3 className="font-heading text-lg mb-2">{step.title}</h3>
      <p className="text-white/35 text-sm leading-relaxed max-w-[240px] mx-auto">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Process() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="process" className="pt-16 pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl"
          >
            Simple Process, Powerful Results
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
