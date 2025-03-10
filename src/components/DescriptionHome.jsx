import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowSizeHook } from '@hooks/useWindowSizeHook';
import { useScrollData } from '@components/ScrollData';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '@components/Card';
import CardLarge from '@components/CardLarge';
import '@styles/DescriptionHome.css';

import laghetto_mobile from '@images/img_home/mobile/laghetto.webp';
import la_tana_mobile from '@images/img_home/mobile/la_tana.webp';
import area_camper_mobile from '@images/img_home/mobile/area_camper.webp';
import campeggio_mobile from '@images/img_home/mobile/campeggio.webp';

import laghetto_tablet from '@images/img_home/tablet/laghetto.webp';
import la_tana_tablet from '@images/img_home/tablet/la_tana.webp';
import area_camper_tablet from '@images/img_home/tablet/area_camper.webp';
import campeggio_tablet from '@images/img_home/tablet/campeggio.webp';

import laghetto_desktop from '@images/img_home/desktop/laghetto.webp';
import la_tana_desktop from '@images/img_home/desktop/la_tana.webp';
import area_camper_desktop from '@images/img_home/desktop/area_camper.webp';
import campeggio_desktop from '@images/img_home/desktop/campeggio.webp';

import laghetto_large from '@images/img_home/large/laghetto.webp';
import la_tana_large from '@images/img_home/large/la_tana.webp';
import area_camper_large from '@images/img_home/large/area_camper.webp';
import campeggio_large from '@images/img_home/large/campeggio.webp';

gsap.registerPlugin(useGSAP);

const DescriptionHome = () => {
  const { t } = useTranslation();
  const { data: scrollY } = useScrollData();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]);

  const containerParagraphRef = useRef(null);
  const containerCarouselRef = useRef(null);
  const cardsRef = useRef([]);

  const listStructure = [
    {
      img: {
        mobile: la_tana_mobile,
        tablet: la_tana_tablet,
        desktop: la_tana_desktop,
        large: la_tana_large,
      },
      title: t('LA_TANA_TITLE'),
      description: t('LA_TANA_DESCRIPTION'),
    },
    {
      img: {
        mobile: laghetto_mobile,
        tablet: laghetto_tablet,
        desktop: laghetto_desktop,
        large: laghetto_large,
      },
      title: t('LAGHETTO_TITLE'),
      description: t('LAGHETTO_DESCRIPTION'),
    },
    {
      img: {
        mobile: area_camper_mobile,
        tablet: area_camper_tablet,
        desktop: area_camper_desktop,
        large: area_camper_large,
      },
      title: t('AREA_CAMPER_TITLE'),
      description: t('AREA_CAMPER_DESCRIPTION'),
    },
    {
      img: {
        mobile: campeggio_mobile,
        tablet: campeggio_tablet,
        desktop: campeggio_desktop,
        large: campeggio_large,
      },
      title: t('CAMPING_TITLE'),
      description: t('CAMPING_DESCRIPTION'),
    },
  ];

  const animateOnScroll = () => {
    const viewportHeight = window.innerHeight;
  
    if (containerParagraphRef.current) {
      const paragraphTop = containerParagraphRef.current.getBoundingClientRect().top;
      gsap.to(containerParagraphRef.current, {
        opacity: paragraphTop < viewportHeight * 0.9 ? 1 : 0,
        y: paragraphTop < viewportHeight * 0.9 ? 0 : 100,
        scale: paragraphTop < viewportHeight * 0.9 ? 1 : 0.9,
        duration: 1.2,
        ease: 'power4.out',
        force3D: true,
      });
    }
  
    if (containerCarouselRef.current) {
      const carouselTop = containerCarouselRef.current.getBoundingClientRect().top;
      gsap.to(containerCarouselRef.current, {
        opacity: carouselTop < viewportHeight * 0.75 ? 1 : 0,
        y: carouselTop < viewportHeight * 0.75 ? 0 : 100,
        scale: carouselTop < viewportHeight * 0.75 ? 1 : 0.9,
        duration: 1.2,
        ease: 'power4.out',
        force3D: true,
      });
    }
  
    listStructure.forEach((_, index) => {
      if (cardsRef.current[index]) {
        const cardTop = cardsRef.current[index].getBoundingClientRect().top;
        gsap.to(cardsRef.current[index], {
          opacity: cardTop < viewportHeight * 0.8 ? 1 : 0,
          y: cardTop < viewportHeight * 0.8 ? 0 : 70,
          scale: cardTop < viewportHeight * 0.8 ? 1 : 0.9,
          duration: 1.2,
          ease: 'power4.out',
        });
      }
    });
  };

  useEffect(() => {
    animateOnScroll();

    return () => {
      gsap.killTweensOf([containerParagraphRef.current, containerCarouselRef.current]);
      cardsRef.current.forEach((card) => gsap.killTweensOf(card));
    };
  }, [scrollY]);
  
  return (
    <>
      {breakpoint === 0 && (
        <div className="content-where-are-mobile">
          <div
            className="container-paragraph-mobile"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div className="container-cell-img-mobile">
            {listStructure.map((el, index) => (
              <div
                key={index}
                ref={(elRef) => cardsRef.current[index] = elRef}
                style={{ opacity: 0, willChange: 'transform, opacity'}}
              >
                <Card
                  visible
                  imgCard={el.img.mobile}
                  altImgCard={el.title}
                  titleCard={el.title}
                  descriptionCard={el.description}
                  styleImgLoader={{
                    minWidth: '40px',
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '225px',
                  }}
                  styleImg={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {breakpoint === 1 && (
        <div className="content-where-are-tablet">
          <div
            className="container-paragraph-tablet"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div
            className="container-carusel-tablet"
            ref={containerCarouselRef}
            style={{ opacity: 0 }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop
              grabCursor
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
            >
              {listStructure.map((el, index) => (
                <SwiperSlide key={index} className='container-slide-tablet'>
                  <CardLarge
                    fullLarge
                    visible
                    imgCard={el.img.tablet}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      {breakpoint === 2 && (
        <div className="content-where-are-pc">
          <div
            className="container-paragraph-pc"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div
            className="container-carusel-pc"
            ref={containerCarouselRef}
            style={{ opacity: 0 }}
          >
            <div className="custom-arrow custom-arrow-left">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-arrow-right',
                prevEl: '.custom-arrow-left',
              }}
              loop
              grabCursor
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {listStructure.map((el, index) => (
                <SwiperSlide key={index} className='container-slide-pc'>
                  <CardLarge
                    visible
                    imgCard={el.img.desktop}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-arrow custom-arrow-right">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      )}
      {breakpoint === 3 && (
        <div className="content-where-are-big-monitor">
          <div
            className="container-paragraph-big-monitor"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div
            className="container-carusel-big-monitor"
            ref={containerCarouselRef}
            style={{ opacity: 0 }}
          >
            <div className="custom-arrow custom-arrow-left">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-arrow-right',
                prevEl: '.custom-arrow-left',
              }}
              loop
              grabCursor
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {listStructure.map((el, index) => (
                <SwiperSlide key={index} className='container-slide-big-monitor'>
                  <CardLarge
                    visible
                    textForBigMonitor
                    imgCard={el.img.large}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-arrow custom-arrow-right">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionHome;