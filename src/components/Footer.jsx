import { ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Design', href: '#services' },
      { name: 'SEO & Google Ranking', href: '#services' },
      { name: 'Hosting & Domain', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto" style={{ padding: '0 30px' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="font-heading text-xl">
              Rachana <span className="text-white/50">Web Studio</span>
            </span>
            <p className="mt-4 text-white/25 text-sm leading-relaxed">
              Web design, hosting, SEO, and digital marketing for local
              businesses across British Columbia.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/25 hover:text-white/60 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} Rachana Web Studio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/25 hover:text-white/60 transition-colors"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
