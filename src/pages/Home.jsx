import React, { useState, useEffect, lazy } from 'react';
import ParalaxHome from '@components/ParalaxHome';

const WhoAreHome = lazy(() => import('@components/WhoAreHome'));
const DescriptionHome = lazy(() => import('@components/DescriptionHome'));
const Footer = lazy(() => import('@components/Footer'));

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
      <div>
       {/* Un divisore dal colore ad un altro in un modo carino */}
  
        {/* I nostri menu */}
        
        {/* Un altro divisore che mi ritorni al colore di sopra */}
        
        {/* Le prenotazioni */}

        {/* La posizione con l'effetto che compare dopo un immagine grande messa in modo carino*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
