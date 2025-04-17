import React, { useEffect, useState } from 'react';
import './BlurredParallaxBackground.css';
import profileImage from '../../assets/profile-image.png';

const BlurredParallaxBackground = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll offset for parallax effect
      setOffset(window.pageYOffset * 0.006);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="blurred-parallax-background">
      <div 
        className="blurred-bg-image" 
        style={{ 
          transform: `translateY(${offset}px)`,
          backgroundImage: `url(${profileImage})`
        }}
      />
    </div>
  );
};

export default BlurredParallaxBackground;