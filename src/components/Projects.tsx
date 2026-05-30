import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: "Smart Toll AI Gate",
      description: "An advanced vehicle detection and toll management system utilizing AI to ensure strict vehicle detection and processing. Features automated detection and robust reporting.",
      tags: ["AI/ML", "Vehicle Detection", "React", "Python"],
      demoLink: "https://smart-toll.netlify.app/",
      codeLink: "#",
      featured: true
    },
    {
      title: "Movie Recommendation Platform",
      description: "A full-stack movie recommendation website with personalized suggestions based on user viewing history and preferences.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="title-gradient">Featured Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`card project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <Code size={16} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
