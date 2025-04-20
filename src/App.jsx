import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronRight,
  FaQuoteRight
} from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import SimpleDotBackground from './components/backgrounds/SimpleDotBackground';
import BlurredParallaxBackground from './components/backgrounds/BlurredParallaxBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Section from './components/ui/Section';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { 
  resumePDF, 
  KEY_PROJECTS, 
  LANGUAGES, 
  EXPERIENCE, 
  EDUCATION, 
  HOBBIES, 
  TESTIMONIALS 
} from './data/data';
import './App.css';

// Helper function to resolve icon name strings to corresponding React components
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScrollTop = window.scrollY > 500;

      if (shouldShowScrollTop !== showScrollTop) {
        setShowScrollTop(shouldShowScrollTop);
      }

      // Update scroll position for parallax effect
      setScrollY(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTop]);

  return (
    <div className="app-container">
      <BlurredParallaxBackground />
      <SimpleDotBackground />
      <ParticlesBackground />

      {/* Header */}
      <Header />

      {/* Scroll to top button - Now using the extracted component */}
      <ScrollToTopButton visible={showScrollTop} />

      {/* Hero Section */}
      <Hero resumePDF={resumePDF} scrollY={scrollY} />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Section 
        id="experience"
        title="Professional Journey"
        subtitle="A track record of leadership, innovation and driving successful outcomes."
      >
        <div className="experience-container">
          <div className="experience-timeline"></div>

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-dot"></div>
              <h3 className="experience-company">{exp.company}</h3>
              <div className="experience-position">{exp.position}</div>
              <div className="experience-date">{exp.date}</div>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Languages Section */}
      <Section 
        title="Languages"
        subtitle="Communicating effectively across borders and cultures."
      >
        <div className="languages-container">
          {LANGUAGES.map((lang, idx) => (
            <motion.div
              key={lang.name}
              className="language-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="language-icon">{lang.icon}</div>
              <div className="language-name">{lang.name}</div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section 
        id="education"
        title="Education"
        subtitle="Academic foundation supporting practical expertise."
      >
        <div className="education-container">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              className="education-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-school">{edu.school}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Projects Section */}
      <Section 
        id="key-projects"
        title="Key Projects"
        subtitle="Showcasing impactful projects that demonstrate my technical and leadership skills."
      >
        <div className="projects-container">
          {KEY_PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-icon">{getIconComponent(project.iconName)}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-item">{tech}</span>
                ))}
              </div>
              <p className="project-impact">{project.impact}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section 
        title="Publications"
        subtitle="Sharing insights and expertise with the tech community."
      >
        <div className="publications-container">
          <motion.div
            className="publication-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="publication-title">Continuous Delivery of Mobile Applications</h3>
            <a
              href="https://tech.home24.com/continuous-delivery-of-mobile-applications-at-home24/"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              Read article <FaChevronRight />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        id="testimonials"
        title="Testimonials"
        subtitle="What colleagues and clients say about working with me."
      >
        <div className="testimonials-container">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteRight className="testimonial-quote" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Personal Section */}
      <Section 
        title="Beyond Work"
        subtitle="Finding balance and maintaining peak performance."
      >
        <div className="hobbies-container">
          {HOBBIES.map((hobby, idx) => (
            <motion.div
              key={hobby.name}
              className="hobby-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {getIconComponent(hobby.iconName)} {hobby.name}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section 
        id="contact"
        title="Get In Touch"
        subtitle="Interested in connecting? Reach out through any of these channels."
      >
        <div className="social-links">
          <motion.a
            href="https://github.com/yan-braslavsky"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yanbraslavsky"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:yan.braslavsky@gmail.com"
            className="social-link"
            whileHover={{ y: -5 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;