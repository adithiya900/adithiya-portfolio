import { motion } from 'framer-motion';
import portfolioData from '../portfolioData';

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">04 · SYSTEM LOGS</div>
        <h2 className="section-title">Education <span>History</span></h2>
      </motion.div>

      <div className="edu-timeline">
        {portfolioData.education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-entry"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="edu-entry-tag">{e.tag}</div>
            <div className="edu-entry-title">{e.title}</div>
            <div className="edu-entry-score">{e.score}</div>
            <div className="edu-entry-desc">{e.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

