import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDumbbell, 
  FaBiking, 
  FaHeartbeat, 
  FaFilePdf,
  FaCode,
  FaLaptopCode,
  FaRegLightbulb,
  FaUsers,
  FaBusinessTime,
  FaRocket,
  FaStar,
  FaChevronRight
} from 'react-icons/fa';
import './App.css';

// Resume data
const resumePDF = '/Yan_Braslavsky_-_Director_of_Engineering.pdf';

const LANGUAGES = [
  { name: 'English', icon: '🇬🇧', level: 100 },
  { name: 'German', icon: '🇩🇪', level: 70 },
  { name: 'Hebrew', icon: '🇮🇱', level: 90 },
  { name: 'Russian', icon: '🇷🇺', level: 80 },
];

const SKILLS = [
  {
    category: "Leadership & Management",
    icon: <FaUsers />,
    skills: [
      "Team Leadership & Growth",
      "Tech Strategy & Vision",
      "Budget Management",
      "OKRs & Roadmap Planning",
      "Cross-functional Collaboration"
    ]
  },
  {
    category: "Software Engineering",
    icon: <FaCode />,
    skills: [
      "Microservice Architecture",
      "Cloud Infrastructure (AWS/GCP)",
      "Mobile Development",
      "Front-end Technologies",
      "CI/CD & DevOps"
    ]
  },
  {
    category: "Product Development",
    icon: <FaRegLightbulb />,
    skills: [
      "Agile Methodologies",
      "Product Strategy",
      "UX/UI Best Practices",
      "Performance Optimization",
      "Technical Debt Management"
    ]
  },
  {
    category: "Business Acumen",
    icon: <FaBusinessTime />,
    skills: [
      "E-Commerce Expertise",
      "Stakeholder Management",
      "Cost-benefit Analysis",
      "Resource Allocation",
      "Process Optimization"
    ]
  }
];

const EXPERIENCE = [
  {
    company: "Home24",
    position: "Director of Engineering",
    date: "2017 - Present",
    description: "Leading engineering teams across multiple product lines, managing budget and resources, implementing technical strategy, and working with key stakeholders to deliver scalable e-commerce solutions."
  },
  {
    company: "Previous Role",
    position: "Senior Engineering Manager",
    date: "2014 - 2017",
    description: "Led the development of multiple mobile applications, implemented CI/CD pipelines, and improved development process efficiency resulting in 40% faster time-to-market."
  },
  {
    company: "Early Career",
    position: "Software Engineer",
    date: "2010 - 2014",
    description: "Developed full-stack solutions for enterprise clients, focusing on web applications and early mobile development projects."
  }
];

const EDUCATION = [
  { degree: 'B.Sc. Software Engineering', school: 'Afeka College of Engineering, Tel Aviv, Israel' },
  { degree: 'Applied Electronics Engineering', school: 'Midrashat Hagalil, Migdal Haemek, Israel' }
];

const HOBBIES = [
  { name: 'Calisthenics', icon: <FaDumbbell /> },
  { name: 'Cycling', icon: <FaBiking /> },
  { name: 'HIIT', icon: <FaHeartbeat /> }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">YB</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="hero-background"></div>
        <div className="hero-gradient"></div>
        <div className="grid-background"></div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <FaRocket /> Tech Leader
          </div>
          <h1 className="hero-title">
            Yan Braslavsky<br />
            <span>Director of Engineering</span>
          </h1>
          <p className="hero-subtitle">
            Building high-impact teams and scalable platforms with over 15 years of experience in tech. 
            Calm in chaos, focused under pressure, and always leading with a human-first approach.
          </p>
          <div className="hero-buttons">
            <a href={resumePDF} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <FaFilePdf /> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FaEnvelope /> Get in Touch
            </a>
          </div>
        </motion.div>
      </section>

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
                  <div className="skill-icon">{skillGroup.icon}</div>
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
                  {hobby.icon} {hobby.name}
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

      {/* Footer */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-content">
            © {new Date().getFullYear()} Yan Braslavsky. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;