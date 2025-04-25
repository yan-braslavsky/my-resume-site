import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDumbbell, 
  FaBook, 
  FaTrophy, 
  FaHandRock, 
  FaCode, 
  FaApple, 
  FaUsers, 
  FaBookOpen, 
  FaChartLine, 
  FaHandsHelping, 
  FaBrain, 
  FaLightbulb, 
  FaChalkboardTeacher 
} from 'react-icons/fa';
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
            <FaDumbbell className="personal-card-icon" />
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
            <FaBook className="personal-card-icon" />
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
            <FaTrophy className="personal-card-icon" />
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

        {/* Enhanced Activities I Enjoy Section */}
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
          
          <div className="activities-grid">
            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaHandRock className="activity-icon" />
              </div>
              <h4 className="activity-title">Calisthenics & Advanced Bodyweight Training</h4>
              <p className="activity-description">
                You thrive in pushing physical limits with handstands, muscle-ups, planche progressions, and gymnastic ring work.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaCode className="activity-icon" />
              </div>
              <h4 className="activity-title">Building Purpose-Driven Software Projects</h4>
              <p className="activity-description">
                Whether it's automating Telegram workouts or building event platforms—tech becomes meaningful for you when it serves a real-world cause.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaApple className="activity-icon" />
              </div>
              <h4 className="activity-title">Biohacking & Nutritional Optimization</h4>
              <p className="activity-description">
                Your diet is intentional. You experiment with protein timing, macro balancing, and monitor how food affects energy and recovery.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaUsers className="activity-icon" />
              </div>
              <h4 className="activity-title">Leadership with Emotional Intelligence</h4>
              <p className="activity-description">
                You don't just manage—you lead with empathy, reflection, and constant iteration. Your leadership philosophy is as strong as your code.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaBookOpen className="activity-icon" />
              </div>
              <h4 className="activity-title">Learning Through Deep Reading</h4>
              <p className="activity-description">
                You seek timeless knowledge in books like The 48 Laws of Power, not to manipulate—but to understand, grow, and lead wisely.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaChartLine className="activity-icon" />
              </div>
              <h4 className="activity-title">Financial Engineering & Strategic Wealth Building</h4>
              <p className="activity-description">
                You're not just investing—you're building a freedom plan with ETFs, real estate, and data-backed strategies.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaHandsHelping className="activity-icon" />
              </div>
              <h4 className="activity-title">Volunteering Skills for Communities</h4>
              <p className="activity-description">
                Whether it's <a href="https://barliner-workout.de/" target="_blank" rel="noopener noreferrer" className="personal-link">Barliner</a> or future fitness communities, you enjoy giving back through code, leadership, and vision.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaBrain className="activity-icon" />
              </div>
              <h4 className="activity-title">Self-Reflection & Personal Growth Routines</h4>
              <p className="activity-description">
                From battling insomnia to overcoming mental noise, you've built a lifestyle around growth—physically, mentally, and emotionally.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaLightbulb className="activity-icon" />
              </div>
              <h4 className="activity-title">Innovating in Fitness-Tech Concepts</h4>
              <p className="activity-description">
                Your vision for interactive studios like Beat81 + boxing tech shows how your brain connects training, tech, and community.
              </p>
            </motion.div>

            <motion.div 
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-container">
                <FaChalkboardTeacher className="activity-icon" />
              </div>
              <h4 className="activity-title">Mentoring & Interview Coaching</h4>
              <p className="activity-description">
                With a goal to build a tech mentoring community, your drive to uplift others matches your hunger for mastery.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Personal;