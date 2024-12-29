import React, { lazy } from 'react';
import ParalaxHome from '@components/ParalaxHome';

const WhoAreHome = lazy(() => import('@components/WhoAreHome'));
const DescriptionHome = lazy(() => import('@components/DescriptionHome'));

import '@styles/HomeStyle.css';

const Home = () => {
  return (
    <div className="container-page">
      <div className='container-paralax-effect'>
        <ParalaxHome />
      </div>
      <WhoAreHome />
      <DescriptionHome />
    </div>
  );
};

export default Home;
