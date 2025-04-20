import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { SKILLS } from '../../data/data';
import Section from '../ui/Section';
import './Skills.css';

// Helper function to resolve icon name strings to corresponding React components
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const Skills = () => {
  return (
    <Section 
      id="skills"
      title="Core Expertise"
      subtitle="Leveraging deep technical knowledge with strategic vision to deliver exceptional results."
    >
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
    </Section>
  );
};

export default Skills;