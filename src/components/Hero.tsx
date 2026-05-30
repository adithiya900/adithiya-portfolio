
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">
            <span className="title-gradient">Adithiya R</span>
          </h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-description">
            I craft responsive, scalable, and premium web applications. 
            Passionate about modern UI/UX and writing clean, efficient code.
          </p>
          
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" download className="btn btn-outline flex">
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
