import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowSizeHook } from '@hooks/useWindowSizeHook';
import { MouseParallax } from 'react-just-parallax';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import '@styles/ParalaxHome.css';

import cieloMobile from '@images/img_paralax_home/mobile/cielo.webp';
import nuvolaMobile from '@images/img_paralax_home/mobile/nuvola.webp';
import fog2Mobile from '@images/img_paralax_home/mobile/fog_2.webp';
import secondoPianoMobile from '@images/img_paralax_home/mobile/secondo_piano.webp';
import fog1Mobile from '@images/img_paralax_home/mobile/fog_1.webp';
import laghettoMobile from '@images/img_paralax_home/mobile/laghetto.webp';
import sunRaysMobile from '@images/img_paralax_home/mobile/sun_rays.webp';
import frontMobile from '@images/img_paralax_home/mobile/front.webp';

import cieloTablet from '@images/img_paralax_home/tablet/cielo.webp';
import nuvolaTablet from '@images/img_paralax_home/tablet/nuvola.webp';
import fog2Tablet from '@images/img_paralax_home/tablet/fog_2.webp';
import secondoPianoTablet from '@images/img_paralax_home/tablet/secondo_piano.webp';
import fog1Tablet from '@images/img_paralax_home/tablet/fog_1.webp';
import laghettoTablet from '@images/img_paralax_home/tablet/laghetto.webp';
import sunRaysTablet from '@images/img_paralax_home/tablet/sun_rays.webp';
import frontTablet from '@images/img_paralax_home/tablet/front.webp';

import cieloDesktop from '@images/img_paralax_home/desktop/cielo.webp';
import nuvolaDesktop from '@images/img_paralax_home/desktop/nuvola.webp';
import fog2Desktop from '@images/img_paralax_home/desktop/fog_2.webp';
import secondoPianoDesktop from '@images/img_paralax_home/desktop/secondo_piano.webp';
import fog1Desktop from '@images/img_paralax_home/desktop/fog_1.webp';
import laghettoDesktop from '@images/img_paralax_home/desktop/laghetto.webp';
import sunRaysDesktop from '@images/img_paralax_home/desktop/sun_rays.webp';
import frontDesktop from '@images/img_paralax_home/desktop/front.webp';

import cieloLarge from '@images/img_paralax_home/large/cielo.webp';
import nuvolaLarge from '@images/img_paralax_home/large/nuvola.webp';
import fog2Large from '@images/img_paralax_home/large/fog_2.webp';
import secondoPianoLarge from '@images/img_paralax_home/large/secondo_piano.webp';
import fog1Large from '@images/img_paralax_home/large/fog_1.webp';
import laghettoLarge from '@images/img_paralax_home/large/laghetto.webp';
import sunRaysLarge from '@images/img_paralax_home/large/sun_rays.webp';
import frontLarge from '@images/img_paralax_home/large/front.webp';

gsap.registerPlugin(useGSAP);

const ParalaxHome = memo(() => {
  const { t } = useTranslation();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]);
  const [loadedImages, setLoadedImages] = useState(0);
  const loadedImagesRef = useRef(0);
  const [errorPageLoaded, setErrorPageLoaded] = useState(false);
  const [gyroData, setGyroData] = useState({ alpha: 0, beta: 0 });
  const titlesRef = useRef(null);

  const imageSources = [
    {
      mobile: cieloMobile,
      tablet: cieloTablet,
      desktop: cieloDesktop,
      large: cieloLarge,
    }, 
    {
      mobile: nuvolaMobile,
      tablet: nuvolaTablet,
      desktop: nuvolaDesktop,
      large: nuvolaLarge,
    }, 
    {
      mobile: fog2Mobile,
      tablet: fog2Tablet,
      desktop: fog2Desktop,
      large: fog2Large,
    }, 
    {
      mobile: secondoPianoMobile,
      tablet: secondoPianoTablet,
      desktop: secondoPianoDesktop,
      large: secondoPianoLarge,
    }, 
    {
      mobile: fog1Mobile,
      tablet: fog1Tablet,
      desktop: fog1Desktop,
      large: fog1Large,
    }, 
    {
      mobile: laghettoMobile,
      tablet: laghettoTablet,
      desktop: laghettoDesktop,
      large: laghettoLarge,
    }, 
    {
      mobile: sunRaysMobile,
      tablet: sunRaysTablet,
      desktop: sunRaysDesktop,
      large: sunRaysLarge,
    }, 
    {
      mobile: frontMobile,
      tablet: frontTablet,
      desktop: frontDesktop,
      large: frontLarge,  
    }
  ];

  useEffect(() => {
    if (loadedImages >= imageSources.length || errorPageLoaded) {
      gsap.fromTo(
        titlesRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1.2 }
      );
    }
  }, [loadedImages, errorPageLoaded]);

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      const { alpha, beta } = event;
      setGyroData((prevData) => {
        if (Math.abs(prevData.alpha - alpha) > 1 || Math.abs(prevData.beta - beta) > 1) {
          return { alpha, beta };
        }
        return prevData;
      });
    };  

    if (breakpoint <= 1) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);
      return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
    }
  }, [breakpoint]);

  const handleImageLoad = () => {
    loadedImagesRef.current += 1;
    setLoadedImages(loadedImagesRef.current);
  };

  const gyroX = (gyroData.alpha > 180 ? gyroData.alpha - 360 : gyroData.alpha) || 0;
  const gyroY = (gyroData.beta - 90) || 0;

  const lerp = (start, end, t) => start + (end - start) * t;

  const getGyroStyle = useCallback((lerpEase, strength) => {
    const maxX = 50;
    const maxY = 25;

    const transitionX = Math.max(Math.min(gyroX * strength, maxX), -maxX);
    const transitionY = Math.max(Math.min(gyroY * strength, maxY), -maxY);

    const newX = lerp(currentX.current, transitionX, lerpEase);
    const newY = lerp(currentY.current, transitionY, lerpEase);
    currentX.current = newX;
    currentY.current = newY;

    return {
      height: '100vh',
      width: '100vw',
      transform: `translate(${newX}px, ${newY}px) translateZ(0)`,
    };
  }, [gyroX, gyroY]);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const handleImageError = () => setErrorPageLoaded(true);

  const renderParallaxLayer = (src, className, style, lerpEase, strength) => (
    <MouseParallax
      key={src.desktop}
      enableOnTouchDevice
      shouldResetPosition
      shouldPause
      isAbsolutelyPositioned
      lerpEase={lerpEase}
      strength={strength}
    >
      <div style={style}>
        <picture>
          <source srcSet={src.mobile} media="(max-width: 599px)" />
          <source srcSet={src.tablet} media="(min-width: 600px) and (max-width: 1199px)" />
          <source srcSet={src.desktop} media="(min-width: 1200px) and (max-width: 1999px)" />
          <source srcSet={src.large} media="(min-width: 2000px)" />
          <img 
            src={src.desktop}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`${className}`}
            alt=""
          />
        </picture>
      </div>
    </MouseParallax>
  );

  const renderContent = (deviceClass, titlesClass) => (
    <div>
      {renderParallaxLayer(imageSources[0], `cielo-${deviceClass}`, {}, 0, 0)}
      {renderParallaxLayer(imageSources[1], `nuvola-${deviceClass}`, getGyroStyle(0.7, 0.2), 0.02, 0.02)}
      {renderParallaxLayer(imageSources[2], `fog-2-${deviceClass}`, getGyroStyle(0.7, 0.45), 0.1, 0.05)}
      {renderParallaxLayer(imageSources[3], `secondo-piano-${deviceClass}`, getGyroStyle(0.7, 0.45), 0.05, 0.05)}
      {renderParallaxLayer(imageSources[5], `laghetto-${deviceClass}`, getGyroStyle(0.7, 0.5), 0.04, 0.1)}
      {renderParallaxLayer(imageSources[4], `fog-1-${deviceClass}`, getGyroStyle(0.7, 0.55), 0.05, 0.15)}
      {renderParallaxLayer(imageSources[6], `sun-rays-${deviceClass}`, {}, 0.02, 0.02)}
      <MouseParallax enableOnTouchDevice shouldResetPosition shouldPause isAbsolutelyPositioned lerpEase={0.1} strength={0.1}>
        <div className={titlesClass} ref={titlesRef} style={{ opacity: 0 }}>
          <p className='first-title' translate="no">{t('WELCOME')}</p>
          <p className='second-title' translate="no">{t('TO_THE')}</p>
          <b translate="no">{t('POLLE')}</b>
        </div>
      </MouseParallax>
      {renderParallaxLayer(imageSources[7], `front-${deviceClass}`, getGyroStyle(0.7, 0.55), 0.05, 0.15)}
    </div>
  );

  return (
    <div className='container-paralax'>
      {breakpoint === 0 && !errorPageLoaded && renderContent('img-mobile', 'title-img-mobile')}
      {breakpoint === 1 && !errorPageLoaded && renderContent('img-tablet', 'title-img-tablet')}
      {breakpoint === 2 && !errorPageLoaded && renderContent('img-pc', 'title-img-pc')}
      {breakpoint === 3 && !errorPageLoaded && renderContent('img-big-monitor', 'title-img-big-monitor')}
      {errorPageLoaded &&
        <div className="error-load" ref={titlesRef}>
          <p className='first-title' translate="no">{t('WELCOME')}</p>
          <p className='second-title' translate="no">{t('TO_THE')}</p>
          <b translate="no">{t('POLLE')}</b>
        </div>
      }
      <div className='gradient-for-background'></div>
    </div>
  );
});

export default ParalaxHome;