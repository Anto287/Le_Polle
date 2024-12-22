import React, { lazy } from 'react';
import ParalaxHome from '@components/ParalaxHome';

const DescriptionHome = lazy(() => import('@components/DescriptionHome'));

import '@styles/HomeStyle.css';

const Home = () => {
  return (
    <div className="container-page">
      <div className='container-paralax-effect'>
        <ParalaxHome />
      </div>
      <DescriptionHome />
    </div>
  );
};

export default Home;
