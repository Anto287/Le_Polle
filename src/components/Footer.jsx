import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
  const [activeList, setActiveList] = useState(null);

  const styleRowMobile = {
    fontSize: "clamp(14px, 2.8vw, 20px)",
    height: "clamp(30px, 2.8vw, 34px)",
    fontFamily: "Lilita One",
    fontWeight: "200",
  };

  const styleRowTablet = {
    fontSize: "clamp(14px, 2vw, 16px)",
    height: "clamp(30px, 2.8vw, 34px)",
    fontFamily: "Lilita One",
    fontWeight: "200",
  };

  const styleRowPc = {
    fontSize: "clamp(14px, 2.8vw, 20px)",
    height: "clamp(30px, 2.8vw, 34px)",
    fontFamily: "Lilita One",
    fontWeight: "200",
  };

  const styleRowLarge = {
    fontSize: "clamp(20px, 1.3vw, 80px)",
    height: "clamp(30px, 2.8vw, 100px)",
    fontFamily: "Lilita One",
    fontWeight: "200",
  };

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
  };

  const handleExpandListToggle = (listId) => {
    if (activeList === listId) {
      setActiveList(null);
    } else {
      setActiveList(listId);
    }
  };

  const generateHoverEffects = (items, styleRow) => {
    return items.map((item, index) => (
      <HoverEffect
        key={index}
        text={item.text}
        iconClass={item.iconClass}
        dataReplace={item.text}
        bounceClass="fa-bounce"
        style={styleRow}
        onClickHandler={item.onClickHandler}
      />
    ));
  };
  
  const socialItems = [
    { text: "lagolepolleriolunato", iconClass: "fa-brands fa-square-facebook", onClickHandler: () => openFacebook("lagolepolleriolunato") },
    { text: "lagolepolle", iconClass: "fa-brands fa-square-instagram", onClickHandler: () => openInstagram("lagolepolle") },
    { text: "latanadellupolepolleriolunato", iconClass: "fa-brands fa-square-facebook", onClickHandler: () => openFacebook("latanadellupolepolleriolunato") },
    { text: "latanadellupolepolle", iconClass: "fa-brands fa-square-instagram", onClickHandler: () => openInstagram("latanadellupolepolle") },
  ];
  
  const pageItems = [
    { text: t("HOME"), iconClass: "fa-solid fa-house", onClickHandler: () => navigatePage("home") },
    { text: t("TANA_DEL_LUPO"), iconClass: "fa-solid fa-utensils", onClickHandler: () => navigatePage("tanaDelLupo") },
    { text: t("AREA_CAMPING"), iconClass: "fa-solid fa-campground", onClickHandler: () => navigatePage("areaCamping") },
    { text: t("AREA_CAMPER"), iconClass: "fa-solid fa-caravan", onClickHandler: () => navigatePage("areaCamper") },
    { text: t("LAGHETTO"), iconClass: "fa-fishing", onClickHandler: () => navigatePage("laghetto") },
  ];
  
  const cookiesItems = [
    { text: t("COOKIE"), iconClass: "fa-solid fa-cookie", onClickHandler: () => navigatePage("cookie") },
    { text: t("PRIVACY_POLICY"), iconClass: "fa-solid fa-shield-halved", onClickHandler: () => navigatePage("privacy-policy") },
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
                  style={styleRowMobile}
                  onClickHandler={openEmail}
                />
              </div>

              <div className="container-contact-info-row-footer">
                <HoverEffect
                  text="+39 339 756 8205"
                  iconClass="fa-solid fa-phone"
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={styleRowMobile}
                  onClickHandler={openPhone}
                />
              </div>

              <div className="container-contact-info-row-footer">
                <HoverEffect
                  text={t("THE_POLLE")}
                  iconClass="fa-solid fa-location-dot"
                  dataReplace={t("THE_POLLE")}
                  bounceClass="fa-bounce"
                  style={styleRowMobile}
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
              items={generateHoverEffects(pageItems, styleRowMobile)}
              textHead={t("EXPLORE")}
              iconHeadOpen="fa-solid fa-chevron-down"
              iconHeadClose="fa-solid fa-chevron-up"
              classHead="container-socialmedia-footer-thead-mobile"
              isInitiallyExpanded={activeList === "explore"}
              onToggle={handleExpandListToggle}
              listId="explore"
            />
          </div>
          <div className="container-socialmedia-footer-mobile">
            <ExpandableList
              items={generateHoverEffects(socialItems, styleRowMobile)}
              textHead={t("SOCIAL")}
              iconHeadOpen="fa-solid fa-chevron-down"
              iconHeadClose="fa-solid fa-chevron-up"
              classHead="container-socialmedia-footer-thead-mobile"
              isInitiallyExpanded={activeList === "social"}
              onToggle={handleExpandListToggle}
              listId="social"
            />
          </div>
          <div className="container-socialmedia-footer-mobile">
            <ExpandableList
              items={generateHoverEffects(cookiesItems, styleRowMobile)}
              textHead={t("COOKIES_AND_PRIVACY")}
              iconHeadOpen="fa-solid fa-chevron-down"
              iconHeadClose="fa-solid fa-chevron-up"
              classHead="container-socialmedia-footer-thead-mobile"
              isInitiallyExpanded={activeList === "cookie"}
              onToggle={handleExpandListToggle}
              listId="cookie"
            />
          </div>
          <div className="container-reservation-footer-mobile">
            <div className="container-reservation-footer-text-mobile">
              <p>{t("TEXT_FOOTER")}</p>
            </div>

            <div className="container-reservation-footer-copyright-mobile">
              <i className="fa-regular fa-copyright"></i>
              {new Date().getFullYear()} {t("COPYRIGHT_TEXT")}
            </div>
          </div>
        </footer>
      )}

      {breakpoint === 1 && (
        <footer className="footer-tablet">
          <div className="container-info-footer-tablet">
            <div className="container-data-footer-tablet">
              <div className="container-img-logo-footer-tablet">
                <ImgLoader
                  src={myIcon}
                  style={{
                    minWidth: "60px",
                    minHeight: "60px",
                    width: "7vw",
                    height: "7vw",
                  }}
                  styleImg={{ width: "auto", height: "100%" }}
                  alt={t("THE_POLLE")}
                />
              </div>

              <div className="container-contact-info-footer-tablet">
                <HoverEffect
                  text="info@lepollesulcimone.com"
                  iconClass="fa-solid fa-envelope"
                  dataReplace="info@lepollesulcimone.com"
                  bounceClass="fa-bounce"
                  style={styleRowTablet}
                  onClickHandler={openEmail}
                />

                <HoverEffect
                  text="+39 339 756 8205"
                  iconClass="fa-solid fa-phone"
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={styleRowTablet}
                  onClickHandler={openPhone}
                />

                <HoverEffect
                  text={t("THE_POLLE")}
                  iconClass="fa-solid fa-location-dot"
                  dataReplace={t("THE_POLLE")}
                  bounceClass="fa-bounce"
                  style={styleRowTablet}
                  onClickHandler={openMaps}
                />
              </div>
            </div>

            <div className="container-page-footer-tablet">
              <div className="container-socialmedia-footer-tablet">
                <ExpandableList
                  items={generateHoverEffects(pageItems, styleRowTablet)}
                  textHead={t("EXPLORE")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-tablet"
                  isInitiallyExpanded={activeList === "explore"}
                  onToggle={handleExpandListToggle}
                  listId="explore"
                />
              </div>
              <div className="container-socialmedia-footer-tablet">
                <ExpandableList
                  items={generateHoverEffects(socialItems, styleRowTablet)}
                  textHead={t("SOCIAL")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-tablet"
                  isInitiallyExpanded={activeList === "social"}
                  onToggle={handleExpandListToggle}
                  listId="social"
                />
              </div>
              <div className="container-socialmedia-footer-tablet">
                <ExpandableList
                  items={generateHoverEffects(cookiesItems, styleRowTablet)}
                  textHead={t("COOKIES_AND_PRIVACY")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-tablet"
                  isInitiallyExpanded={activeList === "cookie"}
                  onToggle={handleExpandListToggle}
                  listId="cookie"
                />
              </div>
            </div>
          </div>
          <div className="container-reservation-footer-tablet">
            <div className="container-reservation-footer-text-tablet">
              <p>{t("TEXT_FOOTER")}</p>
            </div>

            <div className="container-reservation-footer-copyright-tablet">
              <i className="fa-regular fa-copyright"></i>
              {new Date().getFullYear()} {t("COPYRIGHT_TEXT")}
            </div>
          </div>
        </footer>
      )}

      {breakpoint === 2 && (
        <footer className="footer-pc">
          <div className="container-info-footer-pc">
            <div className="container-data-footer-pc">
              <div className="container-img-logo-footer-pc">
                <ImgLoader
                  src={myIcon}
                  style={{
                    minWidth: "60px",
                    minHeight: "60px",
                    width: "7vw",
                    height: "7vw",
                  }}
                  styleImg={{ width: "auto", height: "100%" }}
                  alt={t("THE_POLLE")}
                />
              </div>

              <div className="container-contact-info-footer-pc">
                <HoverEffect
                  text="info@lepollesulcimone.com"
                  iconClass="fa-solid fa-envelope"
                  dataReplace="info@lepollesulcimone.com"
                  bounceClass="fa-bounce"
                  style={styleRowPc}
                  onClickHandler={openEmail}
                />

                <HoverEffect
                  text="+39 339 756 8205"
                  iconClass="fa-solid fa-phone"
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={styleRowPc}
                  onClickHandler={openPhone}
                />

                <HoverEffect
                  text={t("THE_POLLE")}
                  iconClass="fa-solid fa-location-dot"
                  dataReplace={t("THE_POLLE")}
                  bounceClass="fa-bounce"
                  style={styleRowPc}
                  onClickHandler={openMaps}
                />
              </div>
            </div>

            <div className="container-page-footer-pc">
              <div className="container-socialmedia-footer-pc">
                <ExpandableList
                  items={generateHoverEffects(pageItems, styleRowPc)}
                  textHead={t("EXPLORE")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-pc"
                  isInitiallyExpanded={activeList === "explore"}
                  onToggle={handleExpandListToggle}
                  listId="explore"
                />
              </div>
              <div className="container-socialmedia-footer-pc">
                <ExpandableList
                  items={generateHoverEffects(socialItems, styleRowPc)}
                  textHead={t("SOCIAL")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-pc"
                  isInitiallyExpanded={activeList === "social"}
                  onToggle={handleExpandListToggle}
                  listId="social"
                />
              </div>
              <div className="container-socialmedia-footer-pc">
                <ExpandableList
                  items={generateHoverEffects(cookiesItems, styleRowPc)}
                  textHead={t("COOKIES_AND_PRIVACY")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-pc"
                  isInitiallyExpanded={activeList === "cookie"}
                  onToggle={handleExpandListToggle}
                  listId="cookie"
                />
              </div>
            </div>
          </div>
          <div className="container-reservation-footer-pc">
            <div className="container-reservation-footer-text-pc">
              <p>{t("TEXT_FOOTER")}</p>
            </div>

            <div className="container-reservation-footer-copyright-pc">
              <i className="fa-regular fa-copyright"></i>
              {new Date().getFullYear()} {t("COPYRIGHT_TEXT")}
            </div>
          </div>
        </footer>
      )}

      {breakpoint === 3 && (
        <footer className="footer-large">
          <div className="container-info-footer-large">
            <div className="container-data-footer-large">
              <div className="container-img-logo-footer-large">
                <ImgLoader
                  src={myIcon}
                  style={{
                    minWidth: "60px",
                    minHeight: "60px",
                    width: "7vw",
                    height: "7vw",
                  }}
                  styleImg={{ width: "auto", height: "100%" }}
                  alt={t("THE_POLLE")}
                />
              </div>

              <div className="container-contact-info-footer-large">
                <HoverEffect
                  text="info@lepollesulcimone.com"
                  iconClass="fa-solid fa-envelope"
                  dataReplace="info@lepollesulcimone.com"
                  bounceClass="fa-bounce"
                  style={styleRowLarge}
                  onClickHandler={openEmail}
                />

                <HoverEffect
                  text="+39 339 756 8205"
                  iconClass="fa-solid fa-phone"
                  dataReplace="+39 339 756 8205"
                  bounceClass="fa-bounce"
                  style={styleRowLarge}
                  onClickHandler={openPhone}
                />

                <HoverEffect
                  text={t("THE_POLLE")}
                  iconClass="fa-solid fa-location-dot"
                  dataReplace={t("THE_POLLE")}
                  bounceClass="fa-bounce"
                  style={styleRowLarge}
                  onClickHandler={openMaps}
                />
              </div>
            </div>

            <div className="container-page-footer-large">
              <div className="container-socialmedia-footer-large">
                <ExpandableList
                  items={generateHoverEffects(pageItems, styleRowLarge)}
                  textHead={t("EXPLORE")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-large"
                  isInitiallyExpanded={activeList === "explore"}
                  onToggle={handleExpandListToggle}
                  listId="explore"
                />
              </div>
              <div className="container-socialmedia-footer-large">
                <ExpandableList
                  items={generateHoverEffects(socialItems, styleRowLarge)}
                  textHead={t("SOCIAL")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-large"
                  isInitiallyExpanded={activeList === "social"}
                  onToggle={handleExpandListToggle}
                  listId="social"
                />
              </div>
              <div className="container-socialmedia-footer-large">
                <ExpandableList
                  items={generateHoverEffects(cookiesItems, styleRowLarge)}
                  textHead={t("COOKIES_AND_PRIVACY")}
                  iconHeadOpen="fa-solid fa-chevron-down"
                  iconHeadClose="fa-solid fa-chevron-up"
                  classHead="container-socialmedia-footer-thead-large"
                  isInitiallyExpanded={activeList === "cookie"}
                  onToggle={handleExpandListToggle}
                  listId="cookie"
                />
              </div>
            </div>
          </div>
          <div className="container-reservation-footer-large">
            <div className="container-reservation-footer-text-large">
              <p>{t("TEXT_FOOTER")}</p>
            </div>

            <div className="container-reservation-footer-copyright-large">
              <i className="fa-regular fa-copyright"></i>
              {new Date().getFullYear()} {t("COPYRIGHT_TEXT")}
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
