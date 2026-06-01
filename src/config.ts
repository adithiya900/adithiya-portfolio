// src/config.ts
export const config = {
  // Branding
  name: "Adithiya R",
  titles: ["Software Developer", "AI Engineer", "Full Stack Developer"],
  tagline: "Building Intelligent Software Systems and AI‑Powered Applications",

  // Navigation sections (ids must match component ids)
  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "featured", label: "Featured Project" },
    { id: "projects", label: "Other Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "techstack", label: "Tech Stack" },
    { id: "filerepo", label: "File Repository" },
    { id: "contact", label: "Contact" },
  ],

  // Skills grouped by category
  skillCategories: [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Firebase"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git & GitHub", "AI Integration", "SQL"]
    }
  ],

  // Featured project (Smart Toll AI Gate)
  featuredProject: {
    id: "smart-toll-ai",
    title: "Smart Toll AI Gate",
    description:
      "AI‑driven toll gate system with real‑time vehicle detection, automated billing, and secure cloud backend.",
    demoLink: "https://smart-toll.netlify.app/",
    repoLink: "https://github.com/adithiya900/smart-toll-ai-gate",
    techStack: ["React", "Vite", "Framer Motion", "tsparticles", "Node.js", "Firebase"],
    screenshots: [
      "/assets/screenshots/toll-1.png",
      "/assets/screenshots/toll-2.png",
      "/assets/screenshots/toll-3.png"
    ]
  },

  // Other placeholder projects (can be expanded later)
  otherProjects: [
    {
      id: "project-2",
      title: "Project Two",
      description: "Brief description of project two.",
      demoLink: "#",
      repoLink: "#",
      techStack: ["React", "TypeScript"],
      screenshots: []
    },
    {
      id: "project-3",
      title: "Project Three",
      description: "Brief description of project three.",
      demoLink: "#",
      repoLink: "#",
      techStack: ["Node.js", "Express"],
      screenshots: []
    }
  ],

  // Achievements & certifications (list of objects)
  achievements: [
    { name: "Top 10% in Kaggle Competition", date: "2025" },
    { name: "Speaker at AI Security Conference", date: "2024" }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", file: "/assets/certificates/aws.pdf" },
    { name: "CISSP", file: "/assets/certificates/cissp.pdf" }
  ],

  // Education timeline
  education: [
    { label: "SSLC", score: "100%", year: "2018" },
    { label: "HSC", score: "79%", year: "2020" },
    { label: "B.Tech – Information Technology", score: "—", year: "2024" }
  ],

  // Technical stack overview (icons will be rendered based on this list)
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Framer Motion",
    "tsparticles",
    "Vite",
    "Git",
    "Docker"
  ],

  // File repository paths (placeholders – replace with real files later)
  fileRepository: {
    resume: "/assets/resume/Adithiya_Resume.pdf",
    certificates: "/assets/certificates/",
    internships: "/assets/internships/",
    reports: "/assets/reports/",
    documentation: "/assets/docs/",
    screenshots: "/assets/screenshots/"
  },

  // Social links
  social: {
    email: "mailto:adithiyaadithiya29@gmail.com",
    github: "https://github.com/adithiya900",
    linkedin: "https://linkedin.com/in/adithiya900"
  },

  // Version (read from package.json during build)
  version: "1.0.0"
};

export default config;
