import React, { useEffect, useState, useRef } from 'react';

const ScrollReveal = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const topPosition = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (topPosition < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check visibility on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;