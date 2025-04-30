import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { KEY_PROJECTS } from '../../data/data';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
import './KeyProjects.css';

// Helper function to resolve icon name strings to corresponding React components
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const KeyProjects = () => {
  return (
    <Section 
      id="key-projects"
      title="Key Projects"
      subtitle="Showcasing impactful projects that demonstrate my technical and leadership skills."
    >
      <div className="projects-container">
        {KEY_PROJECTS.map((project, idx) => (
          <AnimatedComponent
            key={idx}
            className="project-card"
            motionProps={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: idx * 0.2 },
              viewport: { once: true }
            }}
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
          </AnimatedComponent>
        ))}
      </div>
    </Section>
  );
};

export default KeyProjects;