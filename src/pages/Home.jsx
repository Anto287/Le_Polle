import React, { lazy } from 'react';
import ParalaxHome from '@components/ParalaxHome';
import WhoAreHome from '@components/WhoAreHome';
import DescriptionHome from '@components/DescriptionHome';

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
