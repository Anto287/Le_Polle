import React, { useState, useEffect, lazy } from 'react';
import ParalaxHome from '@components/ParalaxHome';

const WhoAreHome = lazy(() => import('@components/WhoAreHome'));
const DescriptionHome = lazy(() => import('@components/DescriptionHome'));

import '@styles/HomeStyle.css';

const Home = ({ animationEnd }) => {
  const [animationTitleParalax, setAnimationTitleParalax] = useState(false);

  useEffect(() => {
    setAnimationTitleParalax(animationEnd);
  }, [animationEnd]);

  return (
    <div className="container-page">
      <div className='container-paralax-effect'>
        <ParalaxHome animationTitleParalax={animationTitleParalax}/>
      </div>
      <WhoAreHome />
      <DescriptionHome />
    </div>
  );
};

export default Home;
