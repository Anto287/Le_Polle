import React, { Suspense, useState, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '@components/PageWrapper';
import Topbar from '@components/Topbar';

const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const NoPage = lazy(() => import('@pages/NoPage'));

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
            index 
            element={<PageWrapper onAnimationComplete={handleAnimationComplete}><Home/></PageWrapper>} 
          />
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

const Layout = ({animationEnd}) => {
    const [showTopbar, setShowTopbar] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showTopBarScrolling, setShowTopBarScrolling] = useState(true);

    useEffect(() => {
        setShowTopbar(animationEnd);
    }, [animationEnd]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
        {showTopbar && !isMenuOpen && (<Topbar showTopBarScrolling={showTopBarScrolling} toggleMenu={toggleMenu} />)}
        <Suspense fallback={<div style={{color: 'red'}}>Pippo...</div>}>
          <Outlet />
        </Suspense>
    </>
  );
};