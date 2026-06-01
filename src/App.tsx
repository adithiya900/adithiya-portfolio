import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveDashboard from './components/LiveDashboard';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to Hero section on page load
    const timer = setTimeout(() => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'auto' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <LiveDashboard />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

