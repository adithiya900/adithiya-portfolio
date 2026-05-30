
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="title-gradient">About Me</span>
        </h2>
        <div className="card about-card">
          <p className="about-text">
            Hello! I'm Adithiya R, a passionate Software Developer dedicated to building 
            exceptional digital experiences. I specialize in modern web technologies, crafting 
            robust web applications that are both beautiful and scalable.
          </p>
          <p className="about-text mt-4">
            My journey in software development has equipped me with a strong foundation in problem-solving and full-stack architecture. I thrive in dynamic environments where I can learn new technologies and apply them to solve real-world problems.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-value title-gradient">100%</h3>
              <p className="stat-label">Dedication</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-value title-gradient">24/7</h3>
              <p className="stat-label">Learning</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-value title-gradient">10+</h3>
              <p className="stat-label">Technologies</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
