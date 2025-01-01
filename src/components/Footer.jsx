import React from "react";
import { useTranslation } from 'react-i18next';
import { useWindowSizeHook } from "@hooks/useWindowSizeHook";
import HoverEffect from "@components/HoverEffect";
import ImgLoader from "@components/ImgLoader";
import myIcon from '@images/img_topbar/icon.webp';

import "@styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]);
  
  const openEmail = () => {
    window.location.href = "mailto:info@lepollesulcimone.com";
  };

  const openPhone = () => {
    window.location.href = "tel:+393397568205"
  };

  const openMaps = () => {
    const url = 'https://www.google.com/maps?q=44.216958, 10.692237';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openInstagram = (profile) => {
    const url = `https://www.instagram.com/${profile}/`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const openFacebook = (profile) => {
    const url = `https://www.facebook.com/${profile}/`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                  style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                  onClickHandler={openEmail}
                />
              </div>
              
              <div className="container-contact-info-row-footer">
                <HoverEffect 
                  text="+39 339 756 8205" 
                  iconClass="fa-solid fa-phone" 
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                  onClickHandler={openPhone}
                />
              </div>

              <div className="container-contact-info-row-footer">
                <HoverEffect 
                  text={t('THE_POLLE')} 
                  iconClass="fa-solid fa-location-dot" 
                  dataReplace={t('THE_POLLE')}
                  bounceClass="fa-bounce"
                  style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                  onClickHandler={openMaps}
                />
              </div>              
            </div>
            
            <div className="container-img-logo-footer-mobile">
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '60px', minHeight: '60px', width: '10vw', height: '10vw'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
          </div>
          <div className="container-socialmedia-footer-mobile">
            <div className="container-socialmedia-column-footer-mobile">
              <HoverEffect 
                text="lagolepolleriolunato" 
                iconClass="fa-brands fa-square-facebook" 
                dataReplace="lagolepolleriolunato"
                bounceClass="fa-bounce"
                style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                onClickHandler={() => openFacebook('lagolepolleriolunato')}
              />

              <HoverEffect 
                text="lagolepolle"
                iconClass="fa-brands fa-square-instagram" 
                dataReplace="lagolepolle"
                bounceClass="fa-bounce"
                style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                onClickHandler={() => openInstagram('lagolepolle')}
              />
            </div>
           
            <div className="container-socialmedia-column-footer-mobile">
              <HoverEffect 
                text="latanadellupolepolleriolunato"
                iconClass="fa-brands fa-square-facebook" 
                dataReplace="latanadellupolepolleriolunato"
                bounceClass="fa-bounce"
                style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                onClickHandler={() => openFacebook('latanadellupolepolleriolunato')}
              />

              <HoverEffect 
                text="latanadellupolepolle"
                iconClass="fa-brands fa-square-instagram" 
                dataReplace="latanadellupolepolle"
                bounceClass="fa-bounce"
                style={{fontSize: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(30px, 2.8vw, 34px)', fontFamily: "Lilita One", fontWeight: "200"}}
                onClickHandler={() => openInstagram('latanadellupolepolle')}
              />
            </div>
          </div>
          {/* Collegamento alle altre pagine? */}
          <div className="container-reservation-footer-mobile">
            {/* Collegamento per i cookie, privacy policy e questo L.E.O. SNOW SYSTEM DI CARZOLI OMBRETTA E GIANNI LISA S.A.S. P.IVA 03098210366- Tutte le immagini sono coperte da Copyright*/}
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </footer>
      )}

      {breakpoint === 1 && (
        <footer className="footer">
          <div>
    
          </div>
          <div>
    
          </div>
        </footer>
      )}

      {breakpoint === 2 && (
        <footer className="footer">
          <div>
    
          </div>
          <div>
    
          </div>
        </footer>
      )}

      {breakpoint === 3 && (
        <footer className="footer">
          <div>
    
          </div>
          <div>
    
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
