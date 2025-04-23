import React, { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';
import SimpleDotBackground from './components/backgrounds/SimpleDotBackground';
import BlurredParallaxBackground from './components/backgrounds/BlurredParallaxBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Languages from './components/sections/Languages';
import Education from './components/sections/Education';
import KeyProjects from './components/sections/KeyProjects';
import Personal from './components/sections/Personal';
import Testimonials from './components/sections/Testimonials';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import SocialIcons from './components/ui/SocialIcons';
import { resumePDF } from './data/data';
import './App.css';

function App() {

  return (
    <div className="app-container">
      {/* Background */}
      <BlurredParallaxBackground />
      <SimpleDotBackground />
      <ParticlesBackground />

      {/* Header */}
      <Header />
      
      {/* Sticky Social Icons */}
      <SocialIcons vertical={true} />

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Hero Section */}
      <Hero resumePDF={resumePDF}/>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Languages Section */}
      <Languages />

      {/* Education Section */}
      <Education />

      {/* Key Projects Section */}
      <KeyProjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Personal Section */}
      <Personal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;