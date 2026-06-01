import { motion } from 'framer-motion';
import profilePic from '../assets/myphoto.jpg.png';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">01 · DEVELOPER PROFILE</div>
        <h2 className="section-title">About <span>Me</span></h2>
      </motion.div>

      <div className="about-grid">
        {/* ID Card */}
        <motion.div
          className="about-id-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilePic}
            alt="Adithiya R"
            style={{
              width: 100, height: 100, borderRadius: '50%', objectFit: 'cover',
              border: '2px solid var(--gold-deep)', margin: '0 auto 20px',
              display: 'block', boxShadow: '0 0 24px rgba(245,200,66,0.35)',
            }}
          />
          <div className="about-id-name">Adithiya R</div>
          <div className="about-id-role">IT Student · AI Developer</div>
          <div className="about-id-status">
            <span className="status-dot" />
            Open to Opportunities
          </div>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { label: 'DEGREE', value: 'B.Tech — Information Technology' },
              { label: 'COLLEGE', value: 'Rathinam Technical Campus' },
              { label: 'CGPA', value: '7.35' },
              { label: 'LOCATION', value: 'Coimbatore, Tamil Nadu' },
              { label: 'SSLC', value: '100%' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0', borderBottom: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                }}
              >
                <span style={{ fontFamily: 'var(--mono)', color: 'var(--text-dim)', fontSize: '0.68rem', letterSpacing: '1px' }}>
                  {item.label}
                </span>
                <span style={{ color: 'var(--text-secondary)', textAlign: 'right', maxWidth: 200 }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text block */}
        <motion.div
          className="about-text-block"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-desc">
            I am an <strong style={{ color: 'var(--gold)' }}>Information Technology student</strong> passionate
            about Artificial Intelligence, Full Stack Development, and Real-World Problem Solving. My flagship
            project, <strong style={{ color: 'var(--gold)' }}>Smart Toll AI Gate</strong>, demonstrates my ability
            to design and deliver complete AI-powered infrastructure solutions from scratch.
          </p>
          <p className="about-desc">
            I built Smart Toll AI Gate end-to-end — designing the React + TypeScript frontend, implementing a
            real-time webcam capture pipeline, integrating{' '}
            <strong style={{ color: 'var(--gold)' }}>Google Gemini Vision AI</strong> for intelligent vehicle
            analysis, and building a secure Express.js backend with Firebase Firestore for real-time data
            management.
          </p>
          <p className="about-desc">
            My goal is to contribute to innovative AI-powered software products while continuously growing my
            skills in full stack engineering, machine learning integration, and scalable system design.
          </p>

          <div className="about-highlights">
            {[
              { value: 'AI', label: 'Core Focus' },
              { value: 'Full Stack', label: 'Expertise' },
              { value: 'Firebase', label: 'Database' },
              { value: 'React', label: 'Frontend' },
            ].map((h) => (
              <div key={h.label} className="about-highlight-item">
                <div className="ahi-value">{h.value}</div>
                <div className="ahi-label">{h.label}</div>
              </div>
            ))}
          </div>

          {/* Contact quick-links */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <a
              href="mailto:adithiyaadithiya29@gmail.com"
              className="btn btn-ghost btn-sm"
            >
              Email Me
            </a>
            <a
              href="https://github.com/adithiya900"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/adithiya-raju-3b533922a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
