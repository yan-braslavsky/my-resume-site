// Flashy and polished version of the React App with enhanced layout and styling
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDumbbell, FaBiking, FaHeartbeat, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './App.css';

const resumePDF = '/Yan_Braslavsky_-_Director_of_Engineering.pdf';

const LANGUAGES = [
  { name: 'English', icon: '🇬🇧', level: 100 },
  { name: 'German', icon: '🇩🇪', level: 70 },
  { name: 'Hebrew', icon: '🇮🇱', level: 90 },
  { name: 'Russian', icon: '🇷🇺', level: 80 },
];

const SKILLS = [
  'Software Development', 'E-Commerce', 'Budgeting', 'Management', 'Leadership', 'Software Architecture',
  'Software Engineering', 'People / Team management', 'OKRs / Roadmaps', 'Agile / Scrum / Kanban',
  'Tech Processes / Strategy', 'Hiring / Interviewing',
  'Mobile Development (Android, iOS, React Native)', 'Microservices AWS / GCP',
  'Front End Development React / Javascript / Typescript'
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
  return (
    <div className="resume-container fancy-background">
      <div className="left-panel gradient-glass">
        <motion.section className="hero" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-name">Yan Braslavsky</h1>
          <h2 className="hero-title">Director of Engineering</h2>
          <p className="hero-summary">With over 15 years of experience in tech, I build high-impact teams and scalable platforms that ship, grow, and last.<br/><br/>Calm in chaos. Focused under pressure. And always human-first.</p>
          <div className="hero-buttons">
            <a href={resumePDF} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FaFilePdf /> Download Resume</a>
            <a href="mailto:yan.braslavsky@gmail.com" className="btn btn-secondary"><FaEnvelope /> Contact Me</a>
          </div>
        </motion.section>

        <motion.section className="skills-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h3>Core Skills</h3>
          <ul className="skills-list">
            {SKILLS.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </motion.section>

        <motion.section className="languages" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h3>Languages</h3>
          <div className="languages-list">
            {LANGUAGES.map(lang => (
              <div key={lang.name} className="language-item">
                <span className="lang-icon" role="img" aria-label={lang.name}>{lang.icon}</span>
                <span>{lang.name}</span>
                <div className="lang-bar"><div style={{ width: lang.level + '%' }} /></div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="links" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h3>Online</h3>
          <div className="links-list">
            <a href="https://github.com/yan-braslavsky" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com/in/yanbraslavsky" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </motion.section>

        <motion.section className="hobbies-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h3>Personal Joys</h3>
          <div className="hobbies-list">
            {HOBBIES.map(hobby => (
              <span key={hobby.name} className="hobby-item">{hobby.icon} {hobby.name}</span>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="right-panel light-overlay">
        <motion.section className="education-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h3>Education</h3>
          <ul>
            {EDUCATION.map(e => <li key={e.degree}><strong>{e.degree}</strong> — {e.school}</li>)}
          </ul>
        </motion.section>

        <motion.section className="publications-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h3>Publication</h3>
          <ul>
            <li>
              <a href="https://tech.home24.com/continuous-delivery-of-mobile-applications-at-home24/" target="_blank" rel="noopener noreferrer">
                Continuous Delivery of Mobile Applications at Home24
              </a>
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}

export default App;