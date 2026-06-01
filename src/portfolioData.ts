// src/portfolioData.ts
export const portfolioData = {
  personal: {
    name: "Adithiya R",
    title: "Software Developer | AI Engineer | Full Stack Developer",
    email: "adithiyaadithiya29@gmail.com",
    phone: "+91 6385854707",
    aboutParagraphs: [
      "Motivated Computer Science student with hands-on experience in full-stack web development and AI integration. Passionate about building practical, real-world applications using modern technologies like React, Firebase, and Google Gemini AI.",
      "I have practical experience developing modern web applications, integrating AI services, creating responsive user interfaces, and building scalable backend systems. Currently completed a Fullstack Internship at Botroid Tech, gaining expertise in frontend and backend development.",
      "Seeking to contribute and grow in a tech-driven environment where innovation and problem-solving are valued. Particularly interested in Software Engineering, Artificial Intelligence, Full Stack Development, Cloud Technologies, and Modern Web Applications.",
    ],
  },

  contact: {
    emailHref: "mailto:adithiyaadithiya29@gmail.com",
    github: "https://github.com/adithiya900",
    linkedin: "https://linkedin.com/in/adithiya-raju-3b533922a",
    statusText:
      "Open to Full Stack Developer, AI Engineer, Software Developer, and Graduate Trainee opportunities. Ready for immediate employment or internship roles.",
  },

  skills: {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "Backend Proxy Pattern"],
    databases: ["Firebase Firestore", "Firebase Authentication", "PostgreSQL"],
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
    aiTools: ["Google Gemini AI", "Multimodal AI", "Git & GitHub", "ESLint", "react-webcam"],
  },

  projects: [
    {
      name: "Smart Toll AI Gate",
      featured: true,
      liveDemo: "https://smart-toll.netlify.app/",
      github: "https://github.com/adithiya900/smart-toll-ai-gate",
      description:
        "AI-powered toll management system with real-time vehicle detection, license plate recognition, automated billing, and secure cloud backend.",
      keyFeatures: [
        "Real-time vehicle detection using Gemini Vision AI",
        "Automatic license plate recognition",
        "Intelligent toll fee calculation",
        "Live transaction dashboard",
        "Firebase real-time database synchronization",
        "Secure backend API with Node.js & Express",
        "Mobile-responsive futuristic UI",
        "Vehicle classification & tracking",
        "24/7 system uptime",
      ],
      technologiesUsed: [
        "React 19",
        "TypeScript",
        "Vite",
        "Node.js",
        "Express.js",
        "Firebase",
        "Google Gemini Vision AI",
        "Framer Motion",
        "Tailwind CSS",
      ],
    },
  ],

  education: [
    {
      tag: "ACADEMIC · SSLC",
      title: "Secondary School Certificate",
      score: "100%",
      desc: "Jeeva Matriculation Higher Secondary School — Cuddalore.",
    },
    {
      tag: "ACADEMIC · HSC",
      title: "Higher Secondary Certificate",
      score: "79%",
      desc: "Jeeva Matriculation Higher Secondary School — Cuddalore.",
    },
    {
      tag: "ACADEMIC · B.TECH",
      title: "Bachelor of Technology in Information Technology",
      score: "CGPA: 7.35",
      desc: "Rathinam Technical Campus, Pollachi Main Road — Coimbatore. (2023–2027)",
    },
  ],

  experience: [
    {
      tag: "PROFESSIONAL · INTERNSHIP",
      title: "Fullstack Development Internship",
      company: "Botroid Tech, Coimbatore",
      duration: "01/2025 – 02/2025",
      desc: "Gained hands-on experience with frontend (HTML, CSS, JavaScript) and backend (Python, PostgreSQL). Collaborated with team members to design, develop, and deploy web applications.",
    },
  ],

  certifications: [
    {
      name: "MongoDB Basics For Students",
      issuer: "MongoDB",
    },
    {
      name: "Supervised Machine Learning",
      issuer: "Scaler",
    },
    {
      name: "Data Visualization and Dashboard with Excel and Cognos",
      issuer: "Coursera",
    },
  ],
};

export default portfolioData;

