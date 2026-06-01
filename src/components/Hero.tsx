import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profilePic from '../assets/myphoto.jpg.png';

const TYPING_TITLES = ['Software Developer    ', 'AI Engineer           ', 'Full Stack Developer  '];

const useTypingEffect = (words: string[], speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, charIdx === current.length ? pause : speed);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    }

    if (charIdx > current.length && !deleting) {
      timeout = setTimeout(() => { setDeleting(true); }, 0);
    }

    if (charIdx < 0 && deleting) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setCharIdx(0);
        setWordIdx((w) => (w + 1) % words.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

const Hero = () => {
  const typedTitle = useTypingEffect(TYPING_TITLES);

  return (
    <section id="home" className="hero-section">
      {/* Ambient golden radial glow */}
      <div className="hero-ambient-ring" />
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(245,200,66,0.05) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI PORTFOLIO · SMART TOLL PROJECT
          </div>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Adithiya R
        </motion.h1>

        <motion.div
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ minHeight: '2rem', width: '100%', textAlign: 'center', fontFamily: 'var(--mono)', letterSpacing: '0.05em' }}
        >
          <span style={{ display: 'inline-block', textAlign: 'center', minWidth: '400px' }}>
            {typedTitle}
            <span style={{
              display: 'inline-block', width: 2, height: '1.1em',
              background: 'var(--gold)', marginLeft: 4,
              animation: 'cursor-blink 1s step-end infinite',
              verticalAlign: 'middle',
            }} />
          </span>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Creator of <strong style={{ color: 'var(--gold)' }}>Smart Toll AI Gate</strong> — an
          AI-powered toll management system built with React, Node.js, Firebase &amp; Gemini Vision AI.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, marginBottom: 18 }}>
          <motion.img
            src={profilePic}
            alt="Adithiya R"
            className="profile-image"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
        </div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#projects" className="btn btn-gold">
            <ExternalLink size={16} /> View Project
          </a>
          <a href="/resume.pdf" download="Adithiya_Resume.pdf" className="btn btn-ghost">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '1', label: 'AI Project' },
            null,
            { value: '8+', label: 'Technologies' },
            null,
            { value: '7', label: 'Workflow Steps' },
            null,
            { value: '24/7', label: 'System Active' },
          ].map((item, i) =>
            item === null
              ? <div key={i} className="hero-divider" />
              : (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-value">{item.value}</div>
                  <div className="hero-stat-label">{item.label}</div>
                </div>
              )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}
        >
          <a href="#about" style={{
            color: 'var(--text-dim)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 6, textDecoration: 'none',
            animation: 'float-down 2s ease-in-out infinite',
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float-down {
          0%,100%{transform:translateY(0);opacity:0.5}
          50%{transform:translateY(6px);opacity:1}
        }
      `}</style>
    </section>
  );
};

export default Hero;
