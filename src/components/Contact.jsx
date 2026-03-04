import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xlgwqdqz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl"
          >
            Get a Free,
            <br />
            No-Obligation Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/35 text-base"
          >
            Tell us about your business and we'll put together a plan
            that fits your needs and budget.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-heading text-2xl mb-4">Let's Talk</h3>
              <p className="text-white/35 leading-relaxed text-sm">
                Whether you need a new website, want to improve your Google
                ranking, or need help with social media — we're here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-white/50" />
                </div>
                <div>
                  <div className="text-xs text-white/25 uppercase tracking-wider">Email</div>
                  <a
                    href="mailto:hello@rachanawebstudio.com"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    hello@rachanawebstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-white/50" />
                </div>
                <div>
                  <div className="text-xs text-white/25 uppercase tracking-wider">Phone</div>
                  <a href="tel:6132616897" className="text-white/70 hover:text-white transition-colors text-sm">(613) 261-6897</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-white/50" />
                </div>
                <div>
                  <div className="text-xs text-white/25 uppercase tracking-wider">Location</div>
                  <span className="text-white/70 text-sm">Surrey, BC, Canada</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/10">
              <p className="text-white/40 text-sm">
                <span className="text-white/70 font-medium">Free consultation</span>{' '}
                — No obligations, no pressure. Let's chat about what you need.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center p-12 rounded-2xl border border-white/15">
                <div>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-white/60" />
                  </div>
                  <h3 className="font-heading text-2xl mb-3">Message Sent!</h3>
                  <p className="text-white/40 text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                      placeholder="john@business.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                      placeholder="Your Business"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      What Do You Need?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors text-sm appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="website">New Website</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="hosting">Hosting & Domain</option>
                      <option value="seo">SEO & Google Ranking</option>
                      <option value="social">Social Media</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
                    placeholder="What's your business about? What are your goals?"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full flex items-center justify-center gap-3 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Get Your Free Quote'}
                  {!submitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
