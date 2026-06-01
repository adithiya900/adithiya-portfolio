import { motion } from 'framer-motion';
import { ExternalLink, Code, Star } from 'lucide-react';
import portfolioData from '../portfolioData';

const Projects = () => {
  const featured = portfolioData.projects.find((p) => p.featured) ?? portfolioData.projects[0];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">03 · DEPLOYED SYSTEMS</div>
          <h2 className="section-title">AI <span>Projects</span></h2>
        </motion.div>

        <motion.div
          className="project-panel featured"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 28 }}
        >
          <div className="project-panel-inner">
            <div>
              <div className="project-featured-tag">
                <Star size={10} /> FEATURED PROJECT
              </div>
              <h3 className="project-name">{featured.name}</h3>
              <p className="project-desc">{featured.description}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {featured.keyFeatures.map((txt) => (
                  <div
                    key={txt}
                    style={{
                      background: 'rgba(245,200,66,0.04)',
                      border: '1px solid rgba(245,200,66,0.10)',
                      borderRadius: 12,
                      padding: '10px 12px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {'•'} {txt}
                  </div>
                ))}
              </div>

              <div className="project-tech-stack">
                {featured.technologiesUsed.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
            <a
              href="/Updated_SmartToll_Interview_Prep.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
            >
              <ExternalLink size={14} /> Project Details
            </a>
            <a
              href={featured.liveDemo}
              onClick={(e) => { e.preventDefault(); if (featured.liveDemo) window.open(featured.liveDemo, '_blank', 'noopener,noreferrer'); }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href={featured.github}
              onClick={(e) => { e.preventDefault(); if (featured.github) window.open(featured.github, '_blank', 'noopener,noreferrer'); }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <Code size={14} /> Source
            </a>
              </div>
            </div>

            <div className="project-preview">
              <div
                className="project-preview-placeholder"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 18,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.75rem',
                      color: 'var(--gold)',
                      letterSpacing: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    LIVE SYSTEM
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: 1 }}>
                    {featured.liveDemo.replace('https://', '')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

