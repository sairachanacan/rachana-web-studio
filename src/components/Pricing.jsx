import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Starter Website',
    price: '2000',
    period: 'starting from',
    description: 'Perfect for new businesses ready to go online.',
    features: [
      'Custom responsive website (up to 5 pages)',
      'Mobile-optimized design',
      'Basic SEO setup',
      'Contact form integration',
      'Hosting & domain setup',
      '1 round of revisions',
    ],
    popular: false,
  },
  {
    name: 'Business Growth',
    price: '3,200',
    period: 'starting from',
    description: 'For businesses ready to dominate their local market.',
    features: [
      'Custom website (up to 10 pages)',
      'Advanced SEO optimization',
      'Google Business setup',
      'Hosting & domain included',
      'Social media integration',
      'Analytics & tracking setup',
      '3 rounds of revisions',
    ],
    popular: true,
  },
  {
    name: 'Monthly Marketing',
    price: '700',
    period: '/month',
    description: 'Ongoing growth and maintenance for your business.',
    features: [
      'Website maintenance & updates',
      'Monthly SEO improvements',
      'Social media management',
      'Performance monitoring',
      'Google ranking reports',
      'Priority support',
    ],
    popular: false,
  },
];

function PriceCard({ pkg, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative rounded-2xl p-8 transition-all duration-300 border border-white/10 hover:border-white/25 hover:bg-white/[0.02] hover:scale-[1.02]"
    >

      <div className="mb-6">
        <h3 className="font-heading text-2xl mb-2">{pkg.name}</h3>
        <p className="text-white/35 text-sm">{pkg.description}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-white/8">
        <div className="text-xs text-white/30 uppercase tracking-wider mb-1">{pkg.period}</div>
        <div className="flex items-end gap-1">
          <span className="text-sm text-white/40">$</span>
          <span className="font-heading text-5xl">{pkg.price}</span>
          {pkg.period === '/month' && (
            <span className="text-white/30 text-sm mb-2">/mo</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={16} className="text-white/30 mt-0.5 shrink-0" />
            <span className="text-white/50 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-white/90"
      >
        Get a Free Quote
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="pt-16 pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl"
          >
            Simple, Transparent
            <br />
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/35 text-base"
          >
            Every project is unique. Get in touch for a free, no-obligation quote.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PriceCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
