import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { useWindowSizeHook } from "@hooks/useWindowSizeHook";
import HoverEffect from "@components/HoverEffect";
import ImgLoader from "@components/ImgLoader";
import ExpandableList from "@components/ExpandableList";
import myIcon from "@images/img_topbar/icon.webp";

import "@styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]);

  const openEmail = () => {
    window.location.href = "mailto:info@lepollesulcimone.com";
  };

  const openPhone = () => {
    window.location.href = "tel:+393397568205";
  };

  const openMaps = () => {
    const url = "https://www.google.com/maps?q=44.216958, 10.692237";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openInstagram = (profile) => {
    const url = `https://www.instagram.com/${profile}/`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openFacebook = (profile) => {
    const url = `https://www.facebook.com/${profile}/`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navigatePage = (selected) => {
    navigate(`/${selected}`, { replace: true }); 
  }

  const itemsSocial = [
    <HoverEffect
      text="lagolepolleriolunato"
      iconClass="fa-brands fa-square-facebook"
      dataReplace="lagolepolleriolunato"
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => openFacebook("lagolepolleriolunato")}
    />,

    <HoverEffect
      text="lagolepolle"
      iconClass="fa-brands fa-square-instagram"
      dataReplace="lagolepolle"
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => openInstagram("lagolepolle")}
    />,

    <HoverEffect
      text="latanadellupolepolleriolunato"
      iconClass="fa-brands fa-square-facebook"
      dataReplace="latanadellupolepolleriolunato"
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => openFacebook("latanadellupolepolleriolunato")}
    />,

    <HoverEffect
      text="latanadellupolepolle"
      iconClass="fa-brands fa-square-instagram"
      dataReplace="latanadellupolepolle"
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => openInstagram("latanadellupolepolle")}
    />,
  ];

  const itemsPage = [
    <HoverEffect
      text={t('HOME')}
      iconClass="fa-solid fa-house"
      dataReplace={t('HOME')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("home")}
    />,

    <HoverEffect
      text={t('TANA_DEL_LUPO')}
      iconClass="fa-solid fa-utensils"
      dataReplace={t('TANA_DEL_LUPO')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("tanaDelLupo")}
    />,

    <HoverEffect
      text={t('AREA_CAMPING')}
      iconClass="fa-solid fa-campground"
      dataReplace={t('AREA_CAMPING')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("areaCamping")}
    />,

    <HoverEffect
      text={t('AREA_CAMPER')}
      iconClass="fa-solid fa-caravan"
      dataReplace={t('AREA_CAMPER')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("areaCamper")}
    />,

    <HoverEffect
      text={t('LAGHETTO')}
      iconClass="fa-fishing"
      dataReplace={t('LAGHETTO')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("laghetto")}
    />
  ];

  const itemsCookies = [
    <HoverEffect
      text={t('COOKIE')}
      iconClass="fa-solid fa-cookie"
      dataReplace={t('COOKIE')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("cookie")}
    />,

    <HoverEffect
      text={t('PRIVACY_POLICY')}
      iconClass="fa-solid fa-shield-halved"
      dataReplace={t('PRIVACY_POLICY')}
      bounceClass="fa-bounce"
      style={{
        fontSize: "clamp(14px, 2.8vw, 20px)",
        height: "clamp(30px, 2.8vw, 34px)",
        fontFamily: "Lilita One",
        fontWeight: "200",
      }}
      onClickHandler={() => navigatePage("privacy-policy")}
    />
  ];

  return (
    <>
      {breakpoint === 0 && (
        <footer className="footer-mobile">
          <div className="container-contact-footer-mobile">
            <div className="container-contact-info-footer-mobile">
              <div className="container-contact-info-row-footer">
                <HoverEffect
                  text="info@lepollesulcimone.com"
                  iconClass="fa-solid fa-envelope"
                  dataReplace="info@lepollesulcimone.com"
                  bounceClass="fa-bounce"
                  style={{
                    fontSize: "clamp(14px, 2.8vw, 20px)",
                    height: "clamp(30px, 2.8vw, 34px)",
                    fontFamily: "Lilita One",
                    fontWeight: "200",
                  }}
                  onClickHandler={openEmail}
                />
              </div>

              <div className="container-contact-info-row-footer">
                <HoverEffect
                  text="+39 339 756 8205"
                  iconClass="fa-solid fa-phone"
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={{
                    fontSize: "clamp(14px, 2.8vw, 20px)",
                    height: "clamp(30px, 2.8vw, 34px)",
                    fontFamily: "Lilita One",
                    fontWeight: "200",
                  }}
                  onClickHandler={openPhone}
                />
              </div>

              <div className="container-contact-info-row-footer">
                <HoverEffect
                  text={t("THE_POLLE")}
                  iconClass="fa-solid fa-location-dot"
                  dataReplace={t("THE_POLLE")}
                  bounceClass="fa-bounce"
                  style={{
                    fontSize: "clamp(14px, 2.8vw, 20px)",
                    height: "clamp(30px, 2.8vw, 34px)",
                    fontFamily: "Lilita One",
                    fontWeight: "200",
                  }}
                  onClickHandler={openMaps}
                />
              </div>
            </div>

            <div className="container-img-logo-footer-mobile">
              <ImgLoader
                src={myIcon}
                style={{
                  minWidth: "60px",
                  minHeight: "60px",
                  width: "10vw",
                  height: "10vw",
                }}
                styleImg={{ width: "auto", height: "100%" }}
                alt={t("THE_POLLE")}
              />
            </div>
          </div>
          <div className="container-page-footer-mobile">
            <ExpandableList 
              items={itemsPage} 
              textHead={t('EXPLORE')} 
              iconHeadOpen="fa-solid fa-chevron-down" 
              iconHeadClose="fa-solid fa-chevron-up" 
              classHead="container-socialmedia-footer-thead-mobile"
            />
          </div>
          <div className="container-socialmedia-footer-mobile">
            <ExpandableList 
              items={itemsSocial} 
              textHead={t('SOCIAL')} 
              iconHeadOpen="fa-solid fa-chevron-down" 
              iconHeadClose="fa-solid fa-chevron-up" 
              classHead="container-socialmedia-footer-thead-mobile"
            />
          </div>
          <div className="container-socialmedia-footer-mobile">
            <ExpandableList 
              items={itemsCookies} 
              textHead={t('COOKIES_AND_PRIVACY')} 
              iconHeadOpen="fa-solid fa-chevron-down" 
              iconHeadClose="fa-solid fa-chevron-up" 
              classHead="container-socialmedia-footer-thead-mobile"
            />
          </div>
          <div className="container-reservation-footer-mobile">
            <div className="container-reservation-footer-text-mobile">
              <p>{t('TEXT_FOOTER')}</p>
            </div>
            
            <div className="container-reservation-footer-copyright-mobile">
              <i class="fa-regular fa-copyright"></i>
              <p>
                {new Date().getFullYear()} {t('COPYRIGHT_TEXT')}
              </p>
            </div> 
          </div>
        </footer>
      )}

      {breakpoint === 1 && (
        <footer className="footer">
          <div></div>
          <div></div>
        </footer>
      )}

      {breakpoint === 2 && (
        <footer className="footer">
          <div></div>
          <div></div>
        </footer>
      )}

      {breakpoint === 3 && (
        <footer className="footer">
          <div></div>
          <div></div>
        </footer>
      )}
    </>
  );
};

export default Footer;
