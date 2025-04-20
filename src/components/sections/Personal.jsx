import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { HOBBIES } from '../../data/data';
import Section from '../ui/Section';
import './Personal.css';

// Helper function to resolve icon name strings to corresponding React components
const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const Personal = () => {
  return (
    <Section 
      id="personal"
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
  );
};

export default Personal;