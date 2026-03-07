import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Surrey',
  'Vancouver',
  'Burnaby',
  'Langley',
  'White Rock',
  'Delta',
  'Richmond',
  'Coquitlam',
  'New Westminster',
  'Abbotsford',
  'Maple Ridge',
];

export default function LocalArea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="pb-20 relative">
      <div className="max-w-4xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={ref} className="rounded-2xl border border-white/10 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-8"
          >
            <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center mx-auto mb-5">
              <MapPin size={20} className="text-white/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Serving Local Businesses Across Greater Vancouver
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Based in Surrey, BC, we build websites for small businesses throughout the
              Lower Mainland. Whether you run a salon in Langley, a restaurant in Vancouver,
              or a contracting business in Burnaby — we design websites that bring you
              local customers and help you grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 text-sm rounded-full border border-white/10 text-white/40"
              >
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
