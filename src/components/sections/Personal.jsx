import React from 'react';
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
  FaChalkboardTeacher 
} from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import { HOBBIES } from '../../data/data';
import Section from '../ui/Section';
import AnimatedComponent from '../ui/AnimatedComponent';
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
        <AnimatedComponent 
          className="personal-card"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            viewport: { once: true }
          }}
        >
          <div className="personal-card-header">
            <FaDumbbell className="personal-card-icon" />
            <h3 className="personal-card-title">Passion for Sports & Community</h3>
          </div>
          <p className="personal-card-text">
            Sports and calisthenics are not just hobbies—they're a core part of my lifestyle. I've been fortunate to combine my love for movement with my skills in tech by contributing to the <a href="https://barliner-workout.de/" target="_blank" rel="noopener noreferrer" className="personal-link">Barliner Workout</a> community. This volunteer project allowed me to build meaningful software solutions for a cause I believe in—fostering accessible and structured workout routines for fitness lovers like myself.
          </p>
        </AnimatedComponent>

        {/* Psychology & Reading Section */}
        <AnimatedComponent 
          className="personal-card"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            viewport: { once: true }
          }}
        >
          <div className="personal-card-header">
            <FaBook className="personal-card-icon" />
            <h3 className="personal-card-title">Forever a Student of Human Nature</h3>
          </div>
          <p className="personal-card-text">
            My bookshelf leans heavily into psychology and personal growth. I'm particularly inspired by the work of Robert Greene. Books like "The 48 Laws of Power" and "The Laws of Human Nature" have shaped how I think about influence, leadership, and the balance between rational strategy and emotional intelligence. I lead with empathy and strive for a "human-first" approach in all my interactions.
          </p>
        </AnimatedComponent>

        {/* Personal Milestones Section */}
        <AnimatedComponent 
          className="personal-card"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            viewport: { once: true }
          }}
        >
          <div className="personal-card-header">
            <FaTrophy className="personal-card-icon" />
            <h3 className="personal-card-title">Personal Milestones</h3>
          </div>
          <ul className="personal-milestones">
            <AnimatedComponent
              as="li"
              motionProps={{
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.3 },
                viewport: { once: true }
              }}
            >
              Self-taught much of my deep technical foundation in software engineering
            </AnimatedComponent>
            <AnimatedComponent
              as="li"
              motionProps={{
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.4 },
                viewport: { once: true }
              }}
            >
              Moved countries and adapted to new cultures
            </AnimatedComponent>
            <AnimatedComponent
              as="li"
              motionProps={{
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.5 },
                viewport: { once: true }
              }}
            >
              Invested in real estate and built long-term financial stability
            </AnimatedComponent>
            <AnimatedComponent
              as="li"
              motionProps={{
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.3, delay: 0.6 },
                viewport: { once: true }
              }}
            >
              Earned the privilege of working with industry leaders like SoundCloud and AWS
            </AnimatedComponent>
          </ul>
          <p className="personal-philosophy">
            Each chapter of my life reflects a drive to evolve, push boundaries, and make meaningful contributions inside and outside the workplace.
          </p>
        </AnimatedComponent>

        {/* Enhanced Activities I Enjoy Section */}
        <div className="hobbies-section">
          <AnimatedComponent 
            as="h3"
            className="hobbies-title"
            motionProps={{
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.5 },
              viewport: { once: true }
            }}
          >
            What I'm Into
          </AnimatedComponent>
          
          <div className="activities-grid">
            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaHandRock className="activity-icon" />
              </div>
              <h4 className="activity-title">Calisthenics & Bodyweight Mastery</h4>
              <p className="activity-description">
                I train daily with a focus on advanced bodyweight movements—handstands, muscle-ups, planche work, and gymnastic rings keep me grounded, challenged, and growing.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.15 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaCode className="activity-icon" />
              </div>
              <h4 className="activity-title">Building Software That Matters</h4>
              <p className="activity-description">
                I love building tech that solves real problems. Whether it's a passion project like Barliner Workout or a productivity tool, I enjoy bringing ideas to life with clean, purposeful code.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.2 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaApple className="activity-icon" />
              </div>
              <h4 className="activity-title">Optimizing My Body & Nutrition</h4>
              <p className="activity-description">
                I'm constantly iterating my diet, macros, and recovery to align with my training goals. Health, performance, and longevity are a big part of how I live.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.25 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaUsers className="activity-icon" />
              </div>
              <h4 className="activity-title">Leading With Empathy</h4>
              <p className="activity-description">
                My leadership approach is human-first. I care deeply about the people I work with, and I believe in clarity, presence, and emotional intelligence as pillars of great management.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.3 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaBookOpen className="activity-icon" />
              </div>
              <h4 className="activity-title">Reading to Evolve</h4>
              <p className="activity-description">
                I'm a big fan of timeless reads—especially those exploring human nature and power dynamics. Robert Greene's work has deeply influenced how I think and lead.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.35 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaChartLine className="activity-icon" />
              </div>
              <h4 className="activity-title">Building Long-Term Wealth Strategically</h4>
              <p className="activity-description">
                I'm passionate about financial freedom. I track my cash flow, invest regularly in ETFs, own real estate, and enjoy planning for the long game.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.4 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaHandsHelping className="activity-icon" />
              </div>
              <h4 className="activity-title">Giving Back With My Skills</h4>
              <p className="activity-description">
                Volunteering is my way of saying thanks to the communities that inspire me. When I believe in something—like calisthenics—I want to contribute with what I do best: building.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.45 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaBrain className="activity-icon" />
              </div>
              <h4 className="activity-title">Reflecting & Growing</h4>
              <p className="activity-description">
                I'm constantly working on myself—mentally, emotionally, and physically. Whether it's navigating insomnia, dealing with ambiguity, or finding balance, I treat life as one long iteration loop.
              </p>
            </AnimatedComponent>

            <AnimatedComponent 
              className="activity-card"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.5 },
                viewport: { once: true },
                whileHover: { y: -8, transition: { duration: 0.2 } }
              }}
            >
              <div className="activity-icon-container">
                <FaChalkboardTeacher className="activity-icon" />
              </div>
              <h4 className="activity-title">Mentoring & Coaching</h4>
              <p className="activity-description">
                I've benefited from strong mentorship, and now I want to give back. Whether it's career advice, interview prep, or leadership growth, I enjoy supporting others on their path.
              </p>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Personal;