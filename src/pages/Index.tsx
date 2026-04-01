
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = "Sampath Nanamcharla — Senior Python & Data Engineer";
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
