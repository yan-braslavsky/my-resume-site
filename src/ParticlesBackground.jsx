import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePosition = useRef({ x: null, y: null });
  const animationFrameId = useRef(null);

  // Initialize particles with improved colors that match the site theme
  const initializeParticles = (canvas) => {
    console.log("Initializing particles with canvas:", canvas.width, "x", canvas.height);
    const ctx = canvas.getContext('2d');
    // Dynamic particle count based on screen size but capped for performance
    const particlesCount = Math.min(canvas.width * canvas.height / 18000, 100); 
    console.log(`Creating ${particlesCount} particles`);
    
    particles.current = [];
    
    // Enhanced colors with higher opacity for better visibility
    const colors = [
      'rgba(79, 109, 245, 0.8)', // primary blue - much higher opacity
      'rgba(6, 182, 212, 0.8)',  // cyan - much higher opacity
      'rgba(108, 72, 203, 0.75)', // purple - much higher opacity
    ];
    
    for (let i = 0; i < particlesCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2, // Even larger particles
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        directionChangeTimer: 0,
        directionChangeInterval: Math.random() * 200 + 100,
      });
    }
  };

  // Draw particles with improved connections
  const drawParticles = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.current.forEach((particle, index) => {
      // Update particle position with slight randomness for organic movement
      particle.x += particle.speedX + (Math.random() * 0.1 - 0.05);
      particle.y += particle.speedY + (Math.random() * 0.1 - 0.05);
      
      // Change direction occasionally for more natural movement
      particle.directionChangeTimer++;
      if (particle.directionChangeTimer > particle.directionChangeInterval) {
        particle.speedX = Math.random() * 0.5 - 0.25;
        particle.speedY = Math.random() * 0.5 - 0.25;
        particle.directionChangeTimer = 0;
        particle.directionChangeInterval = Math.random() * 200 + 100;
      }
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Improved mouse interaction with easing
      if (mousePosition.current.x !== null) {
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - distance) / 800;
          particle.x -= Math.cos(angle) * force * 2;
          particle.y -= Math.sin(angle) * force * 2;
        }
      }
      
      // Draw the particle with slight opacity variation based on position
      const opacity = 0.8 + Math.sin(particle.x * 0.01) * 0.2;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      
      // Extract base color and apply dynamic opacity
      const baseColor = particle.color.replace(/[^,]+(?=\))/, opacity);
      ctx.fillStyle = baseColor;
      ctx.fill();
      
      // Connect nearby particles with gradient lines - increased visibility
      for (let j = index + 1; j < particles.current.length; j++) {
        const p2 = particles.current[j];
        const dx = particle.x - p2.x;
        const dy = particle.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) { // Increased connection distance
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y, p2.x, p2.y
          );
          
          // Create a gradient between the two particles with higher opacity
          const connectionOpacity = 0.3 * (1 - distance / 120);
          gradient.addColorStop(0, particle.color.replace(/[^,]+(?=\))/, connectionOpacity));
          gradient.addColorStop(1, p2.color.replace(/[^,]+(?=\))/, connectionOpacity));
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8; // Increased line width
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });
    
    animationFrameId.current = requestAnimationFrame(() => drawParticles(canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    
    console.log("ParticlesBackground mounted, setting up canvas");
    
    // Make canvas responsive to window size changes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized to:", canvas.width, "x", canvas.height);
      initializeParticles(canvas);
    };
    
    const handleMouseMove = (e) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mousePosition.current.x = null;
      mousePosition.current.y = null;
    };
    
    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize and start animation
    initializeParticles(canvas);
    drawParticles(canvas);
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Check if canvas is actually drawing - debugging
    setTimeout(() => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      ctx.fillRect(0, 0, 100, 100);
      console.log("Drew red rectangle for debugging");
    }, 1000);
    
    return () => {
      // Clean up
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  console.log("Rendering ParticlesBackground component");
  
  // Use inline styles to ensure the canvas is visible
  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, // Force it above other elements temporarily to debug
    pointerEvents: 'none',
    opacity: 1,
    backgroundColor: 'transparent'
  };

  return (
    <canvas 
      ref={canvasRef} 
      className="particles-background" 
      id="particles-canvas" 
      style={canvasStyle}
    />
  );
};

export default ParticlesBackground;