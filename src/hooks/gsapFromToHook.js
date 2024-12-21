import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGsapAnimation = (animationConfig) => {
  const elementRef = useRef();

  useEffect(() => {
    const el = elementRef.current;
    if (el) {
      gsap.fromTo(el, animationConfig.from, animationConfig.to);
    }
  }, [animationConfig]);

  return elementRef;
};
