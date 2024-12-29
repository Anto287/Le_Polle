import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSizeHook } from "@hooks/useWindowSizeHook";
import { useScrollData } from "@components/ScrollData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImgLoader from "@components/ImgLoader";
import "@styles/WhoAreHome.css";

import img_1_mobile from "@images/img_home_desc/mobile/img_1.webp";
import img_1_tablet from "@images/img_home_desc/tablet/img_1.webp";
import img_1_desktop from "@images/img_home_desc/desktop/img_1.webp";
import img_1_large from "@images/img_home_desc/large/img_1.webp";

import img_2_mobile from "@images/img_home_desc/mobile/img_2.webp";
import img_2_tablet from "@images/img_home_desc/tablet/img_2.webp";
import img_2_desktop from "@images/img_home_desc/desktop/img_2.webp";
import img_2_large from "@images/img_home_desc/large/img_2.webp";

import img_3_mobile from "@images/img_home_desc/mobile/img_3.webp";
import img_3_tablet from "@images/img_home_desc/tablet/img_3.webp";
import img_3_desktop from "@images/img_home_desc/desktop/img_3.webp";
import img_3_large from "@images/img_home_desc/large/img_3.webp";

import img_4_mobile from "@images/img_home_desc/mobile/img_4.webp";
import img_4_tablet from "@images/img_home_desc/tablet/img_4.webp";
import img_4_desktop from "@images/img_home_desc/desktop/img_4.webp";
import img_4_large from "@images/img_home_desc/large/img_4.webp";

import img_5_mobile from "@images/img_home_desc/mobile/img_5.webp";
import img_5_tablet from "@images/img_home_desc/tablet/img_5.webp";
import img_5_desktop from "@images/img_home_desc/desktop/img_5.webp";
import img_5_large from "@images/img_home_desc/large/img_5.webp";

import img_6_mobile from "@images/img_home_desc/mobile/img_6.webp";
import img_6_tablet from "@images/img_home_desc/tablet/img_6.webp";
import img_6_desktop from "@images/img_home_desc/desktop/img_6.webp";
import img_6_large from "@images/img_home_desc/large/img_6.webp";

import img_7_mobile from "@images/img_home_desc/mobile/img_7.webp";
import img_7_tablet from "@images/img_home_desc/tablet/img_7.webp";
import img_7_desktop from "@images/img_home_desc/desktop/img_7.webp";
import img_7_large from "@images/img_home_desc/large/img_7.webp";

import img_8_mobile from "@images/img_home_desc/mobile/img_8.webp";
import img_8_tablet from "@images/img_home_desc/tablet/img_8.webp";
import img_8_desktop from "@images/img_home_desc/desktop/img_8.webp";
import img_8_large from "@images/img_home_desc/large/img_8.webp";

import img_9_mobile from "@images/img_home_desc/mobile/img_9.webp";
import img_9_tablet from "@images/img_home_desc/tablet/img_9.webp";
import img_9_desktop from "@images/img_home_desc/desktop/img_9.webp";
import img_9_large from "@images/img_home_desc/large/img_9.webp";

import img_10_mobile from "@images/img_home_desc/mobile/img_10.webp";
import img_10_tablet from "@images/img_home_desc/tablet/img_10.webp";
import img_10_desktop from "@images/img_home_desc/desktop/img_10.webp";
import img_10_large from "@images/img_home_desc/large/img_10.webp";

import img_11_mobile from "@images/img_home_desc/mobile/img_11.webp";
import img_11_tablet from "@images/img_home_desc/tablet/img_11.webp";
import img_11_desktop from "@images/img_home_desc/desktop/img_11.webp";
import img_11_large from "@images/img_home_desc/large/img_11.webp";

import img_12_mobile from "@images/img_home_desc/mobile/img_12.webp";
import img_12_tablet from "@images/img_home_desc/tablet/img_12.webp";
import img_12_desktop from "@images/img_home_desc/desktop/img_12.webp";
import img_12_large from "@images/img_home_desc/large/img_12.webp";

gsap.registerPlugin(useGSAP);

const WhoAreHome = () => {
  const { t } = useTranslation();
  const { data: scrollPosition } = useScrollData();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]);
  const listImg = [
    {
      mobile: img_1_mobile,
      tablet: img_1_tablet,
      desktop: img_1_desktop,
      large: img_1_large,
    },
    {
      mobile: img_2_mobile,
      tablet: img_2_tablet,
      desktop: img_2_desktop,
      large: img_2_large,
    },
    {
      mobile: img_3_mobile,
      tablet: img_3_tablet,
      desktop: img_3_desktop,
      large: img_3_large,
    },
    {
      mobile: img_4_mobile,
      tablet: img_4_tablet,
      desktop: img_4_desktop,
      large: img_4_large,
    },
    {
      mobile: img_5_mobile,
      tablet: img_5_tablet,
      desktop: img_5_desktop,
      large: img_5_large,
    },
    {
      mobile: img_6_mobile,
      tablet: img_6_tablet,
      desktop: img_6_desktop,
      large: img_6_large,
    },
    {
      mobile: img_7_mobile,
      tablet: img_7_tablet,
      desktop: img_7_desktop,
      large: img_7_large,
    },
    {
      mobile: img_8_mobile,
      tablet: img_8_tablet,
      desktop: img_8_desktop,
      large: img_8_large,
    },
    {
      mobile: img_9_mobile,
      tablet: img_9_tablet,
      desktop: img_9_desktop,
      large: img_9_large,
    },
    {
      mobile: img_10_mobile,
      tablet: img_10_tablet,
      desktop: img_10_desktop,
      large: img_10_large,
    },
    {
      mobile: img_11_mobile,
      tablet: img_11_tablet,
      desktop: img_11_desktop,
      large: img_11_large,
    },
    {
      mobile: img_12_mobile,
      tablet: img_12_tablet,
      desktop: img_12_desktop,
      large: img_12_large,
    },
  ];

  const titleRef = useRef(null);
  const swiperRef = useRef(null);
  const swiperTextRef = useRef(null);

  const animateOnScroll = () => {
    const viewportHeight = window.innerHeight;

    if (titleRef.current) {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      gsap.to(titleRef.current, {
        opacity: titleTop < viewportHeight * 0.9 ? 1 : 0,
        y: titleTop < viewportHeight * 0.9 ? 0 : 100,
        duration: 1.2,
        ease: "power4.out",
        force3D: true,
      });
    }

    if (swiperRef.current) {
      const swiperTop = swiperRef.current.getBoundingClientRect().top;
      gsap.to(swiperRef.current, {
        opacity: swiperTop < viewportHeight * 0.8 ? 1 : 0,
        y: swiperTop < viewportHeight * 0.8 ? 0 : 100,
        duration: 1.2,
        ease: "power4.out",
        force3D: true,
      });
    }

    if (swiperTextRef.current) {
        const swiperTextTop = swiperTextRef.current.getBoundingClientRect().top;
    
        gsap.to(swiperTextRef.current, {
            opacity: swiperTextTop < viewportHeight * 0.8 ? 1 : 0,
            x: swiperTextTop < viewportHeight * 0.8 ? 0 : swiperTextTop > viewportHeight * 0.8 ? -100 : 100,
            duration: 1.2,
            ease: "power4.out",
            force3D: true,
        });
    }
  };

  useEffect(() => {
    animateOnScroll();

    return () => {
      gsap.killTweensOf([swiperRef.current, titleRef.current]);
    };
  }, [scrollPosition]);

  return (
    <div className="container-who-are">
      {breakpoint === 0 && (
        <div className="container-slider-home-mobile">
          <div className="title-who-are-mobile" ref={titleRef}>
            <h1>{t("WHO_ARE")}</h1>
          </div>

          <div className="container-swiper-home-mobile" ref={swiperRef}>
            <Swiper
              modules={[Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              allowTouchMove={false}
              grabCursor={false}
              speed={2000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <div className="container-who-are-mobile">
                <div className="container-text-who-are-mobile">
                  <b>{t("WHO_ARE_TITLE")}</b>
                  {t("WHO_ARE_LONG_DESC")}
                </div>
              </div>
              {listImg.map((el, index) => (
                <SwiperSlide key={index}>
                  <ImgLoader
                    src={el.mobile}
                    styleImgLoader={{
                      width: "100%",
                      height: "50vh",
                    }}
                    style={{
                      width: "100%",
                      height: "50vh",
                    }}
                    styleImg={{
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {breakpoint === 1 && (
        <div className="container-slider-home-tablet">
          <div className="title-who-are-tablet" ref={titleRef}>
            <h1>{t("WHO_ARE")}</h1>
          </div>

          <div className="container-swiper-home-tablet">
            <div className="container-who-are-tablet" ref={swiperTextRef}>
              <div className="container-text-who-are-tablet">
                <b>{t("WHO_ARE_TITLE")}</b>
                {t("WHO_ARE_LONG_DESC")}
              </div>
            </div>

            <div className="container-swiper-tablet" ref={swiperRef}>
              <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                allowTouchMove={false}
                grabCursor={false}
                speed={2000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {listImg.map((el, index) => (
                  <SwiperSlide key={index}>
                    <ImgLoader
                      src={el.tablet}
                      styleImgLoader={{
                        width: "100%",
                        height: "50vh",
                      }}
                      style={{
                        width: "100%",
                        height: "50vh",
                      }}
                      styleImg={{
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhoAreHome;
