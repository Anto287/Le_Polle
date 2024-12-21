import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Topbar from '@components/Topbar';

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
        <Outlet />
    </>
  );
};

export default Layout;