import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '@hooks/useWindowSize';
import { useScrollData } from '@components/ScrollData';
import '@styles/PageWrapperStyle.css';

const PageWrapper = ({ children, onAnimationComplete, onAnimationStart }) => {
  const { width } = useWindowSize();
  const { setData } = useScrollData();
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 0.6;
  const targetScroll = useRef(0);
  const isScrolling = useRef(false);

  const smoothScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const currentScroll = scrollContainer.scrollTop;
    const delta = (targetScroll.current - currentScroll) * 0.1;

    if (Math.abs(delta) > 0.5) {
      scrollContainer.scrollTop = currentScroll + delta;
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling.current = false;
    }

    setData(scrollContainer.scrollTop);
  };

  const handleWheel = (event) => {
    event.preventDefault();

    const delta = event.deltaY * scrollSpeed;
    targetScroll.current += delta;
    targetScroll.current = Math.max(
      0,
      Math.min(scrollContainerRef.current.scrollHeight, targetScroll.current)
    );

    if (!isScrolling.current) {
      isScrolling.current = true;
      requestAnimationFrame(smoothScroll);
    }
  };

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setData(scrollContainer.scrollTop);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{
        clipPath:
          width <= 600 ? 'inset(100% 0% 0% 0%)' : 'circle(0% at 50% 50%)',
      }}
      animate={{
        clipPath:
          width <= 600 ? 'inset(0% 0% 0% 0%)' : 'circle(150% at 50% 50%)',
      }}
      exit={{
        clipPath:
          width <= 600 ? 'inset(100% 0% 0% 0%)' : 'circle(0% at 50% 50%)',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'white',
        zIndex: 2,
      }}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      <div
        className="wrapped-page"
        ref={scrollContainerRef}
        style={{ overflowY: 'scroll', height: '100%' }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default PageWrapper;
