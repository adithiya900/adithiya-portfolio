
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Python", "REST APIs", "SQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Agile"]
    }
  ];

  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="title-gradient">Technical Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
