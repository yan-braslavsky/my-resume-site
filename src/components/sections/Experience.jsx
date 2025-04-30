import React from 'react';
import { EXPERIENCE } from '../../data/data';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
import './Experience.css';

const Experience = () => {
  return (
    <Section 
      id="experience"
      title="Professional Journey"
      subtitle="A track record of leadership, innovation and driving successful outcomes."
    >
      <div className="experience-container">
        <div className="experience-timeline"></div>

        {EXPERIENCE.map((exp, idx) => (
          <AnimatedComponent
            key={idx}
            className="experience-item"
            motionProps={{
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: idx * 0.1 },
              viewport: { once: true }
            }}
          >
            <div className="experience-dot"></div>
            <h3 className="experience-company">{exp.company}</h3>
            <div className="experience-position">{exp.position}</div>
            <div className="experience-date">{exp.date}</div>
            <p className="experience-description">{exp.description}</p>
          </AnimatedComponent>
        ))}
      </div>
    </Section>
  );
};

export default Experience;