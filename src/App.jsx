import React, { Suspense, useState, lazy, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '@components/PageWrapper';
import Topbar from '@components/Topbar';
import LoadingSpinner from '@components/LoadingSpinner';
import { useScrollData } from '@components/ScrollData';
import '@styles/App.css';

const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const NoPage = lazy(() => import('@pages/NoPage'));

const App = () => {
  const location = useLocation();
  const [animationEnd, setAnimationEnd] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationEnd(true);
  };

  const handleAnimationStart = () => {
    setAnimationEnd(false);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout animationEnd={animationEnd} />}>
          <Route
            index
            element={
              <PageWrapper
                onAnimationComplete={handleAnimationComplete}
                onAnimationStart={handleAnimationStart}
              >
                <Home animationEnd={animationEnd}/>
              </PageWrapper>
            }
          />
          <Route
            path="home"
            element={
              <PageWrapper
                onAnimationComplete={handleAnimationComplete}
                onAnimationStart={handleAnimationStart}
              >
                <Home animationEnd={animationEnd}/>
              </PageWrapper>
            }
          />
          <Route
            path="about"
            element={
              <PageWrapper
                onAnimationComplete={handleAnimationComplete}
                onAnimationStart={handleAnimationStart}
              >
                <About />
              </PageWrapper>
            }
          />
        </Route>

        <Route path="*" element={<Layout animationEnd={false} />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;

// ------------------- COMPONENTE LAYOUT -------------------

const Layout = ({ animationEnd }) => {
  const { data: scrollY } = useScrollData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBarScrolling, setShowTopBarScrolling] = useState(false);
  const lastScrollTop = useRef(0);

  const handleScroll = (scrollTop) => {
    if (scrollTop > lastScrollTop.current) {
      setShowTopBarScrolling(false);
    } else if (scrollTop < lastScrollTop.current) {
      setShowTopBarScrolling(true);
    }
    lastScrollTop.current = scrollTop;
  };

  useEffect(() => {
    setShowTopBarScrolling(animationEnd);
  }, [animationEnd]);

  useEffect(() => {
    handleScroll(scrollY);
  }, [scrollY]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="container-web">
      <Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};