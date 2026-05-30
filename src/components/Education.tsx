
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="title-gradient">Education</span>
        </h2>
        
        <div className="timeline">
          <div className="timeline-item card">
            <div className="timeline-icon glass">
              <GraduationCap size={24} className="text-cyan-400" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">SSLC</h3>
              <h4 className="timeline-subtitle title-gradient">100% Score</h4>
              <p className="timeline-text">
                Achieved a perfect score indicating outstanding dedication and academic performance.
              </p>
            </div>
          </div>
          
          <div className="timeline-item card">
            <div className="timeline-icon glass">
              <GraduationCap size={24} className="text-cyan-400" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">HSC</h3>
              <h4 className="timeline-subtitle title-gradient">79% Score</h4>
              <p className="timeline-text">
                Demonstrated strong analytical and scientific prowess during higher secondary education.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
