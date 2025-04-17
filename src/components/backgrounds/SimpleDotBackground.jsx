/**
 * SimpleDotBackground Component
 * 
 * A lightweight, DOM-based alternative to canvas particles.
 * Creates animated floating dots with different colors and sizes
 * that move around the screen to create a subtle, animated background.
 * 
 * This component is used as a fallback when canvas performance
 * might be an issue, or for browsers with limited canvas support.
 */
import React, { useState, useEffect } from 'react';
import './SimpleDotBackground.css';

const SimpleDotBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Create 50 dots with randomized properties
    const newDots = [];
    for (let i = 0; i < 50; i++) {
      newDots.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        // Increased dot size for better visibility
        size: Math.random() * 5 + 1,
        animationDuration: Math.random() * 50 + 30,
        // Increased opacity for better visibility
        opacity: Math.random() * 0.6 + 0.4,
        color: i % 3 === 0 ? '#4f6df5' : (i % 3 === 1 ? '#06b6d4' : '#6c48cb')
      });
    }
    setDots(newDots);
  }, []);

  return (
    <div className="simple-dot-background">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="floating-dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            animationDuration: `${dot.animationDuration}s`
          }}
        />
      ))}
    </div>
  );
};

export default SimpleDotBackground;