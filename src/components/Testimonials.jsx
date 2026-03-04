import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amrit',
    business: 'BrowLoft Studio',
    location: 'Surrey, BC',
    text: "Rachana Web Studio completely transformed our online presence. Our website looks incredible and we've seen a real increase in bookings since launch. The monthly marketing has been a game-changer for our visibility on Google.",
    rating: 5,
  },
  {
    name: 'VybeDrive',
    business: 'VybeDrive',
    location: 'BC, Canada',
    text: 'The website exceeded our expectations. Clean, fast, and exactly the vibe we wanted. They understood our brand from the first conversation and delivered something that truly represents who we are.',
    rating: 5,
  },
  {
    name: 'Your Name Here',
    business: 'Your Business',
    location: 'BC, Canada',
    text: "This could be your success story. We're currently taking on new clients and would love to help your business grow with a stunning online presence.",
    rating: 5,
    placeholder: true,
  },
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`p-7 rounded-2xl border transition-all duration-400 ${
        testimonial.placeholder
          ? 'border-dashed border-white/15'
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-white/40 fill-white/40" />
        ))}
      </div>

      <p
        className={`leading-relaxed mb-6 text-sm ${
          testimonial.placeholder ? 'text-white/25 italic' : 'text-white/50'
        }`}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border ${
            testimonial.placeholder
              ? 'border-white/10 text-white/20'
              : 'border-white/15 text-white/50'
          }`}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className={`font-medium text-sm ${testimonial.placeholder ? 'text-white/25' : 'text-white/80'}`}>
            {testimonial.name}
          </div>
          <div className="text-white/25 text-xs">
            {testimonial.business} — {testimonial.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="pt-16 pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl"
          >
            What Our Clients
            <br />
            Are Saying
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
