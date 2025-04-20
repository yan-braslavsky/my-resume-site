import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronRight,
  FaArrowUp,
  FaQuoteRight
} from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import SimpleDotBackground from './components/backgrounds/SimpleDotBackground';
import BlurredParallaxBackground from './components/backgrounds/BlurredParallaxBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { 
  resumePDF, 
  KEY_PROJECTS, 
  LANGUAGES, 
  SKILLS, 
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
      <BlurredParallaxBackground />
      <SimpleDotBackground />
      <ParticlesBackground />

      {/* Header - Using the extracted component */}
      <Header />

      {/* Scroll to top button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        tabIndex="0"
      >
        <FaArrowUp />
      </button>

      {/* Hero Section - Now using the Hero component */}
      <Hero resumePDF={resumePDF} scrollY={scrollY} />

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-subtitle">Leveraging deep technical knowledge with strategic vision to deliver exceptional results.</p>

            <div className="skills-container">
              {SKILLS.map((skillGroup, idx) => (
                <motion.div
                  key={skillGroup.category}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="skill-icon">{getIconComponent(skillGroup.iconName)}</div>
                  <h3 className="skill-title">{skillGroup.category}</h3>
                  <ul className="skill-list">
                    {skillGroup.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-subtitle">A track record of leadership, innovation and driving successful outcomes.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Languages</h2>
            <p className="section-subtitle">Communicating effectively across borders and cultures.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic foundation supporting practical expertise.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Key Projects Section - New Addition */}
      <section className="section" id="key-projects">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Key Projects</h2>
            <p className="section-subtitle">Showcasing impactful projects that demonstrate my technical and leadership skills.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">Sharing insights and expertise with the tech community.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - New Addition */}
      <section className="section" id="testimonials">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">What colleagues and clients say about working with me.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="section">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Beyond Work</h2>
            <p className="section-subtitle">Finding balance and maintaining peak performance.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="content-container">
          <motion.div
            className="contact-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Interested in connecting? Reach out through any of these channels.</p>

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
          </motion.div>
        </div>
      </section>

      {/* Footer - Using the extracted component */}
      <Footer />
    </div>
  );
}

export default App;