import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does website design cost in Surrey BC?',
    answer:
      'Our website design packages start at $2,000 for a starter site with up to 5 pages. Most small businesses in Surrey choose our Business Growth package at $3,200 which includes custom design, advanced SEO optimization, Google Business setup, and hosting. We also offer monthly marketing packages starting at $700/month for ongoing growth.',
  },
  {
    question: 'Do you build websites for businesses near me in Surrey?',
    answer:
      'Yes! Rachana Web Studio is based in Surrey, BC and serves all of Greater Vancouver including Burnaby, Langley, White Rock, Delta, Richmond, Coquitlam, New Westminster, Abbotsford, and Maple Ridge. We work closely with local business owners to create websites tailored to their market.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most websites are completed within 1-2 weeks depending on complexity. A starter website can be ready in as little as 5 business days. We work efficiently to get your business online fast without compromising on quality or design.',
  },
  {
    question: 'Do you help with Google ranking and local SEO?',
    answer:
      'Absolutely. Every website we build includes SEO optimization for local search. Our Business Growth package includes advanced SEO, Google Business Profile setup, and analytics tracking to help your Surrey or Vancouver business rank higher for searches like "website design in Surrey" and your industry-specific keywords.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We build websites for all types of small businesses in Surrey and Vancouver — salons, barbershops, restaurants, cafes, bakeries, dental offices, real estate agents, contractors, plumbers, cleaning companies, fitness studios, tutoring services, and more. If you run a local business in BC, we can help.',
  },
  {
    question: 'What makes Rachana Web Studio different from other web designers?',
    answer:
      'We specialize in affordable, high-quality websites for local businesses. Unlike large agencies that charge $5,000+, we deliver modern, custom-coded websites with SEO, hosting, and support included — at prices small businesses can actually afford. We understand the Surrey and Vancouver market and design websites that convert visitors into paying customers.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <h3 className="font-heading text-lg pr-4">{faq.question}</h3>
        <ChevronDown
          size={18}
          className={`text-white/30 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}
      >
        <p className="text-white/40 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="pt-16 pb-20 relative">
      <div className="max-w-3xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl"
          >
            Website Design in Surrey
            <br />
            — FAQ
          </motion.h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
