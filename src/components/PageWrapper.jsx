import React from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '@hooks/useWindowSize';

const PageWrapper = ({ children, onAnimationComplete  }) => {
  const { width } = useWindowSize();

  return (
    <motion.div
      initial={{
        clipPath: width < 600
          ? 'inset(100% 0% 0% 0%)'
          : 'circle(0% at 50% 50%)',
      }}
      animate={{
        clipPath: width < 600
          ? 'inset(0% 0% 0% 0%)'
          : 'circle(150% at 50% 50%)',
      }}
      exit={{
        clipPath: width < 600
          ? 'inset(100% 0% 0% 0%)'
          : 'circle(0% at 50% 50%)',
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
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
