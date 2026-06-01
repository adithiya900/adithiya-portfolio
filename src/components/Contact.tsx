import { motion } from 'framer-motion';
import { Mail, MessageSquare, Code2 } from 'lucide-react';
import portfolioData from '../portfolioData';

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail size={18} />,
      label: 'EMAIL',
      value: portfolioData.personal.email,
      href: portfolioData.contact.emailHref,
    },
    {
      icon: <MessageSquare size={18} />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/adithiya-raju-3b533922a',
      href: portfolioData.contact.linkedin,
    },
    {
      icon: <Code2 size={18} />,
      label: 'GITHUB',
      value: 'github.com/adithiya900',
      href: portfolioData.contact.github,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">05 · COMMUNICATION INTERFACE</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-terminal-header">SECURE CHANNELS</div>
            {contactLinks.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-value">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div
              style={{
                marginTop: 16,
                padding: '16px 20px',
                background: 'rgba(245,200,66,0.04)',
                border: '1px solid rgba(245,200,66,0.1)',
                borderRadius: 12,
                fontFamily: 'var(--mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              <div style={{ color: 'var(--gold)', marginBottom: 8 }}>{'>'} STATUS</div>
              <div>{portfolioData.contact.statusText}</div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              MESSAGE ROUTING
            </div>

            <div
              style={{
                padding: '14px 16px',
                background: 'rgba(245,200,66,0.04)',
                border: '1px solid rgba(245,200,66,0.1)',
                borderRadius: 12,
                fontFamily: 'var(--mono)',
                color: 'var(--text-secondary)',
                fontSize: '0.75rem',
                lineHeight: 1.8,
              }}
            >
              Prefer contacting via email or LinkedIn. For the fastest response, include the project scope and timeline.
            </div>

            <div style={{ height: 16 }} />

            <a
              href={portfolioData.contact.emailHref}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }}
            >
              <Mail size={16} /> Email Adithiya
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

