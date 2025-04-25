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
      subtitle="While I spend most of my day operating in the world of engineering and leadership, my identity reaches far beyond the professional realm."
    >
      <div className="personal-content">
        {/* Sports & Community Section */}
        <motion.div 
          className="personal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="personal-card-header">
            <FaIcons.FaDumbbell className="personal-card-icon" />
            <h3 className="personal-card-title">Passion for Sports & Community</h3>
          </div>
          <p className="personal-card-text">
            Sports and calisthenics are not just hobbies—they're a core part of my lifestyle. I've been fortunate to combine my love for movement with my skills in tech by contributing to the <a href="https://barliner-workout.de/" target="_blank" rel="noopener noreferrer" className="personal-link">Barliner Workout</a> community. This volunteer project allowed me to build meaningful software solutions for a cause I believe in—fostering accessible and structured workout routines for fitness lovers like myself.
          </p>
        </motion.div>

        {/* Psychology & Reading Section */}
        <motion.div 
          className="personal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="personal-card-header">
            <FaIcons.FaBook className="personal-card-icon" />
            <h3 className="personal-card-title">Forever a Student of Human Nature</h3>
          </div>
          <p className="personal-card-text">
            My bookshelf leans heavily into psychology and personal growth. I'm particularly inspired by the work of Robert Greene. Books like "The 48 Laws of Power" and "The Laws of Human Nature" have shaped how I think about influence, leadership, and the balance between rational strategy and emotional intelligence. I lead with empathy and strive for a "human-first" approach in all my interactions.
          </p>
        </motion.div>

        {/* Personal Milestones Section */}
        <motion.div 
          className="personal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="personal-card-header">
            <FaIcons.FaTrophy className="personal-card-icon" />
            <h3 className="personal-card-title">Personal Milestones</h3>
          </div>
          <ul className="personal-milestones">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Self-taught much of my deep technical foundation in software engineering
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Moved countries and adapted to new cultures
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Invested in real estate and built long-term financial stability
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Earned the privilege of working with industry leaders like SoundCloud and AWS
            </motion.li>
          </ul>
          <p className="personal-philosophy">
            Each chapter of my life reflects a drive to evolve, push boundaries, and make meaningful contributions inside and outside the workplace.
          </p>
        </motion.div>

        {/* Hobbies Section - Maintaining the existing functionality */}
        <div className="hobbies-section">
          <motion.h3 
            className="hobbies-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Activities I Enjoy
          </motion.h3>
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
        </div>
      </div>
    </Section>
  );
};

export default Personal;