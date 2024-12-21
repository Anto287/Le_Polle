import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '@components/PageWrapper';
import Layout from '@components/Layout';

import Home from '@pages/Home';
import About from '@pages/About';
import NoPage from '@pages/NoPage';

const App = () => {
  const location = useLocation();
  const [animationEnd, setAnimationEnd] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationEnd(true);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout animationEnd={animationEnd}/>}>
          <Route
            path="home"
            element={<PageWrapper onAnimationComplete={handleAnimationComplete}><Home/></PageWrapper>}
          />
          <Route
            path="about"
            element={<PageWrapper onAnimationComplete={handleAnimationComplete}><About/></PageWrapper>}
          />
        </Route>

        <Route path="*" element={<Layout/>}>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;