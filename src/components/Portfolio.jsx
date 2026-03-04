import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Monitor, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'BrowLoft',
    category: 'Beauty & Salon Website',
    description:
      'Designed and developed a modern, conversion-focused website for a brow and lash studio. Built with responsive layouts, online booking integration, and local SEO — helping the business attract new clients organically.',
    tags: ['React', 'Responsive Design', 'SEO', 'Booking Integration'],
    gradient: 'from-[#111] to-[#0a0a0a]',
  },
  {
    title: 'VybeDrive',
    category: 'Lifestyle & Discovery',
    description:
      'Designed and developed a vibe-based search platform for exploring BC by mood — whether you\'re looking for cozy coffee shops, scenic long drives, bookstores, local eats, or bars. Built with intuitive filtering, location-aware results, and a smooth mobile experience.',
    tags: ['React', 'Search & Filtering', 'Location-Based', 'UI/UX Design'],
    gradient: 'from-[#0e0e0e] to-[#080808]',
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'Enterprise Web Application',
    description:
      'Architected and built a real-time analytics dashboard for an e-commerce platform. Implemented complex data visualizations, responsive grid layouts, and optimized rendering for large datasets.',
    tags: ['React', 'TypeScript', 'Data Visualization', 'REST APIs'],
    gradient: 'from-[#0c0c0c] to-[#060606]',
  },
  {
    title: 'SaaS Landing Pages',
    category: 'Marketing & Conversion',
    description:
      'Designed and developed high-converting landing pages for multiple SaaS products. Focused on performance, A/B testing, accessibility, and pixel-perfect implementation from Figma designs.',
    tags: ['Next.js', 'Tailwind CSS', 'Figma to Code', 'A/B Testing'],
    gradient: 'from-[#101010] to-[#070707]',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={`relative rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-400 p-8`}>
        <span className="text-white/30 text-xs uppercase tracking-[0.15em] font-medium">
          {project.category}
        </span>

        <h3 className="font-heading text-2xl md:text-3xl mt-2 mb-4">
          {project.title}
        </h3>

        <p className="text-white/40 leading-relaxed text-sm mb-6 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const highlights = [
  { icon: Code, label: '6+ Years Experience' },
  { icon: Layers, label: 'Front-End Specialist' },
  { icon: Monitor, label: 'Enterprise & Startups' },
  { icon: Smartphone, label: 'Mobile-First Design' },
];

export default function Portfolio() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="pt-16 pb-20 relative">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
          >
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl mb-6"
          >
            6 Years of Building
            <br />
            Digital Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-white/40 max-w-2xl mx-auto leading-relaxed"
          >
            From client websites to enterprise applications — I bring professional
            front-end development experience to every project.
          </motion.p>
        </div>

        {/* Experience highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-14"
        >
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <item.icon size={14} className="text-white/40" />
              </div>
              <span className="text-white/50 text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
