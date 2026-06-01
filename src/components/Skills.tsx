import { motion } from 'framer-motion';
import { Layout, Server, Database, Brain, Code2 } from 'lucide-react';

const skillCategories = [
  {
    icon: <Layout size={18} />,
    name: 'Frontend',
    sub: 'UI Development',
    tags: ['React.js', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    icon: <Server size={18} />,
    name: 'Backend',
    sub: 'Server & API',
    tags: ['Node.js', 'Express.js'],
  },
  {
    icon: <Database size={18} />,
    name: 'Database',
    sub: 'Real-Time Data',
    tags: ['Firebase Firestore'],
  },
  {
    icon: <Brain size={18} />,
    name: 'Artificial Intelligence',
    sub: 'Vision & AI',
    tags: ['Gemini Vision AI'],
  },
  {
    icon: <Code2 size={18} />,
    name: 'Languages',
    sub: 'Programming',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">02 · TECHNICAL ARSENAL</div>
        <h2 className="section-title">Technical <span>Skills</span></h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="skill-module"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="skill-module-header">
              <div className="skill-module-icon">{cat.icon}</div>
              <div>
                <div className="skill-module-name">{cat.name}</div>
                <div className="skill-module-sub">{cat.sub}</div>
              </div>
            </div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
