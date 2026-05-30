import { motion } from 'framer-motion';
import { Mail, MessageSquare, Code, Send } from 'lucide-react';
const Contact = () => {
  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="title-gradient">Get In Touch</span>
        </h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="text-2xl font-bold mb-4">Let's talk about your next project.</h3>
            <p className="text-secondary mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="social-links-vertical">
              <a href="mailto:contact@adithiya.r" className="contact-link card glass">
                <Mail className="text-cyan-400" />
                <span>contact@adithiya.r</span>
              </a>
              <a href="https://linkedin.com/in/adithiya-r" target="_blank" rel="noopener noreferrer" className="contact-link card glass">
                <MessageSquare className="text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/adithiya-r" target="_blank" rel="noopener noreferrer" className="contact-link card glass">
                <Code className="text-cyan-400" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container card">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can I help you?" className="form-input"></textarea>
              </div>
              <button type="button" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
