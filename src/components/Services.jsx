import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Search, TrendingUp, Server, Share2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Custom, mobile-friendly websites designed to look professional and convert visitors into customers.',
    features: ['Responsive Design', 'Custom Layouts', 'Fast Performance'],
  },
  {
    icon: Search,
    title: 'SEO & Google Ranking',
    description:
      'Get found by local customers searching for your services. We optimize your website to rank higher on Google.',
    features: ['Local SEO', 'Google Business', 'Keyword Optimization'],
  },
  {
    icon: Server,
    title: 'Hosting & Domain Registration',
    description:
      'Reliable, fast hosting and domain registration handled for you. No technical hassle — we manage everything.',
    features: ['Managed Hosting', 'Domain Setup', 'SSL Security'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Strategic social media management that builds your audience and drives real engagement across platforms.',
    features: ['Content Creation', 'Scheduling', 'Audience Growth'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Ongoing marketing strategies that keep your business growing with content updates and monthly reports.',
    features: ['Monthly Reports', 'Content Updates', 'Performance Tracking'],
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-400"
    >
      <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center mb-5 group-hover:border-white/30 transition-colors">
        <service.icon size={20} className="text-white/60" />
      </div>

      <h3 className="font-heading text-xl mb-3">{service.title}</h3>

      <p className="text-white/35 leading-relaxed text-sm mb-5">{service.description}</p>

      <div className="flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span
            key={feature}
            className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/30"
          >
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-3xl mx-auto pb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium pb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl pb-8"
          >
            Everything Your Business
            <br />
            Needs to Grow Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed"
          >
            From design to marketing, we handle everything so you can focus on running your business.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4 max-w-[calc(66.666%+0.5rem)] mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
