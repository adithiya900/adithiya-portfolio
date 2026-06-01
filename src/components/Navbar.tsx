import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ position: 'fixed' }}
    >
      <a href="#home" className="nav-logo">R.ADITHIYA</a>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.name}><a href={l.href}>{l.name}</a></li>
        ))}
      </ul>

      <a href="/resume.pdf" download="Adithiya_Resume.pdf" className="nav-resume">
        <Download size={13} style={{ display: 'inline', marginRight: 6 }} />
        RESUME
      </a>

      <button className="nav-mobile-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>
            ))}
            <a href="/resume.pdf" download="Adithiya_Resume.pdf" style={{ color: 'var(--gold)' }}>
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
