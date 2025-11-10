import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  opacity?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    speed = 0.5,
    direction = 'up',
    scale = 1,
    opacity = false
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Calculate if element is in viewport
    const isInView = scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight;
    
    if (!isInView) return;

    // Calculate parallax offset
    const elementCenter = elementTop + elementHeight / 2;
    const scrollProgress = (scrollY + windowHeight / 2 - elementCenter) / windowHeight;
    
    // Apply transformations
    const transforms: string[] = [];
    
    // Translation based on direction and speed
    let translateX = 0;
    let translateY = 0;
    
    switch (direction) {
      case 'up':
        translateY = scrollProgress * speed * 100;
        break;
      case 'down':
        translateY = -scrollProgress * speed * 100;
        break;
      case 'left':
        translateX = scrollProgress * speed * 100;
        break;
      case 'right':
        translateX = -scrollProgress * speed * 100;
        break;
    }

    if (translateX !== 0 || translateY !== 0) {
      transforms.push(`translate3d(${translateX}px, ${translateY}px, 0)`);
    }

    // Scale effect
    if (scale !== 1) {
      const scaleValue = 1 + (scrollProgress * (scale - 1));
      transforms.push(`scale(${scaleValue})`);
    }

    // Apply transformations
    element.style.transform = transforms.join(' ');
    element.style.willChange = 'transform';

    // Opacity effect
    if (opacity) {
      const opacityValue = Math.max(0.3, Math.min(1, 1 - Math.abs(scrollProgress) * 0.5));
      element.style.opacity = opacityValue.toString();
    }

  }, [scrollY, speed, direction, scale, opacity]);

  return elementRef;
};

// Simple parallax hook for background elements
export const useBackgroundParallax = (speed: number = 0.5) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const yPos = -(scrollY * speed);
    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    element.style.willChange = 'transform';
  }, [scrollY, speed]);

  return elementRef;
};

// Luxury parallax hook with enhanced effects
export const useLuxuryParallax = (options: ParallaxOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    speed = 0.3,
    direction = 'up',
    scale = 1.1,
    opacity = true
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    const isInView = scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight;
    
    if (!isInView) return;

    const elementCenter = elementTop + elementHeight / 2;
    const scrollProgress = (scrollY + windowHeight / 2 - elementCenter) / windowHeight;
    
    const transforms: string[] = [];
    
    // Enhanced parallax movement
    let translateX = 0;
    let translateY = 0;
    
    switch (direction) {
      case 'up':
        translateY = scrollProgress * speed * 150;
        break;
      case 'down':
        translateY = -scrollProgress * speed * 150;
        break;
      case 'left':
        translateX = scrollProgress * speed * 150;
        break;
      case 'right':
        translateX = -scrollProgress * speed * 150;
        break;
    }

    if (translateX !== 0 || translateY !== 0) {
      transforms.push(`translate3d(${translateX}px, ${translateY}px, 0)`);
    }

    // Luxury scale effect
    if (scale !== 1) {
      const scaleValue = 1 + (scrollProgress * (scale - 1) * 0.5);
      transforms.push(`scale(${scaleValue})`);
    }

    element.style.transform = transforms.join(' ');
    element.style.willChange = 'transform';
    element.style.transition = 'transform 0.1s ease-out';

    // Enhanced opacity
    if (opacity) {
      const opacityValue = Math.max(0.3, Math.min(1, 1 - Math.abs(scrollProgress) * 0.3));
      element.style.opacity = opacityValue.toString();
    }

  }, [scrollY, speed, direction, scale, opacity]);

  return elementRef;
};