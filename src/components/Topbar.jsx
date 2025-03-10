import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useWindowSizeHook } from '@hooks/useWindowSizeHook';
import ImgLoader from '@components/ImgLoader';
import '@styles/Topbar.css';
import myIcon from '@images/img_topbar/icon.webp';

//TODO::Riscriverlo in maniera più pulita e ssitemare il layout per il maxi schermo 
const Topbar = ({ showTopBarScrolling, toggleMenu }) => {
  const { t } = useTranslation();
  const breakpoint = useWindowSizeHook([600, 1200, 2000]); 

  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, visible: false });
  const [isActive, setIsActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleMouseLeave);
    };
  }, []);

  const handleMouseDown = (value) => setIsActive(value);
  const handleMouseUp = () => setIsActive(0);
  const handleTouchStart = (value) => setIsActive(value);
  const handleTouchEnd = () => setIsActive(0);

  const handleMouseEnter = (e) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;

    if(underlineStyle?.visible){
      setUnderlineStyle({ width: offsetWidth + 20, left: offsetLeft - 10, visible: true});
    }else{
      const left = offsetLeft + (offsetWidth / 2);
      setUnderlineStyle({ width: 0, left: left, visible: true});
      setTimeout(() => setUnderlineStyle({ width: offsetWidth + 20, left: offsetLeft - 10, visible: true}), 200);
    }
  };

  const handleMouseLeave = () => {
    const left = (underlineStyle?.left + 10) + ((underlineStyle?.width - 20) / 2);
    setUnderlineStyle({ width: 0, left: left, visible: false });
  };

  const onClickEvent = (selected) => {
    if(selected === 'menu'){
      toggleMenu();
    }else{
      navigate(`/${selected}`, { replace: true }); 
    }
  }

  return (
    <nav>
      {breakpoint === 0 && 
        <div className={`topbar-mobile ${showTopBarScrolling ? "visible-top-bar" : "hidden-top-bar"}`}>
          <div className='topbar-content-mobile'>
            <div className='container-logo-mobile'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
            <div className='container-topbar-mobile'>
              <div 
                className={`container-element-mobile ${isActive === 1 ? 'active-element' : ''}`}
                title={t('MENU')}
                onMouseDown={() => handleMouseDown(1)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(1)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
                onClick={() => onClickEvent('menu')}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      }

      {breakpoint === 1 && 
        <div className={`topbar-tablet ${showTopBarScrolling ? "visible-top-bar" : "hidden-top-bar"}`}>
          <div className='topbar-content-tablet'>
            <div className='container-logo-tablet'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>
            <div className='container-topbar-tablet' onMouseLeave={handleMouseLeave}>
              <div className='element-primary element-secondary element-third'>
                <div 
                  className={`container-element-tablet ${isActive === 1 ? 'active-element' : ''}`}
                  title={t('HOME')}
                  onClick={(e) => {
                    handleMouseEnter(e)
                    onClickEvent('home')
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseDown={() => handleMouseDown(1)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}  
                  onTouchStart={() => handleTouchStart(1)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd} 
                >
                  <i className="fa-solid fa-house"></i>
                  <b>{t('HOME')}</b>
                </div>
              </div>
              
              <div className='element-primary element-secondary element-third'>
                <div 
                  className={`container-element-tablet ${isActive === 2 ? 'active-element' : ''}`}
                  title={t('TANA_DEL_LUPO')}
                  onClick={(e) => {
                    handleMouseEnter(e)
                    onClickEvent('tanaDelLupo')
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseDown={() => handleMouseDown(2)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}  
                  onTouchStart={() => handleTouchStart(2)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd}  
                >
                  <i className="fa-solid fa-utensils"></i>
                  <b>{t('TANA_DEL_LUPO')}</b>
                </div>
              </div>

              <div className='element-primary element-secondary'>
                <div 
                  className={`container-element-tablet ${isActive === 3 ? 'active-element' : ''}`}
                  title={t('AREA_CAMPING')}
                  onClick={(e) => {
                    handleMouseEnter(e)
                    onClickEvent('areaCamping')
                  }}
                  onMouseEnter={handleMouseEnter}  
                  onMouseDown={() => handleMouseDown(3)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}  
                  onTouchStart={() => handleTouchStart(3)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd}  
                >
                  <i className="fa-solid fa-campground"></i>
                  <b>{t('AREA_CAMPING')}</b>
                </div>
              </div>

              <div className='element-primary'>
                <div 
                  className={`container-element-tablet ${isActive === 4 ? 'active-element' : ''}`}
                  title={t('AREA_CAMPER')}
                  onClick={(e) => {
                    handleMouseEnter(e)
                    onClickEvent('areaCamper')
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseDown={() => handleMouseDown(4)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}  
                  onTouchStart={() => handleTouchStart(4)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd}  
                >
                  <i className="fa-solid fa-caravan"></i>
                  <b>{t('AREA_CAMPER')}</b>
                </div>
              </div>

              <div className='element-primary element-secondary element-third'>
                <div 
                  className={`container-element-tablet ${isActive === 5 ? 'active-element' : ''}`} 
                  title={t('LAGHETTO')}
                  onClick={(e) => {
                    handleMouseEnter(e)
                    onClickEvent('laghetto')
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseDown={() => handleMouseDown(5)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}  
                  onTouchStart={() => handleTouchStart(5)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchEnd}  
                >
                  <i className='fa-fishing'></i>
                  <b>{t('LAGHETTO')}</b>
                </div>
              </div>
              
              <div 
                className={`container-element-tablet ${isActive === 6 ? 'active-element' : ''}`} 
                title={t('MENU')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('menu')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(6)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(6)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}   
              >
                <i className="fa-solid fa-bars"></i>
                <b>{t('MENU')}</b>
              </div>

              <div
                className='underline'
                style={{ width: `${underlineStyle.width}px`, left: `${underlineStyle.left}px` }}
              ></div>
            </div>
          </div>
        </div>
      }

      {(breakpoint === 2 || breakpoint === 3) &&
        <div className={`topbar-pc ${showTopBarScrolling ? "visible-top-bar" : "hidden-top-bar"}`}>
          <div className='topbar-content'>
            <div className='container-logo'>
              <ImgLoader 
                src={myIcon} 
                style={{minWidth: '40px', width: '40%', height: '90%'}} 
                styleImg={{width: 'auto', height: '100%'}}
                alt={t('THE_POLLE')}
              />
            </div>

            <div className='container-topbar' onMouseLeave={handleMouseLeave}>
              <div 
                className={`container-element ${isActive === 1 ? 'active-element' : ''}`}
                title={t('HOME')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('home')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(1)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(1)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}   
              >
                <i className="fa-solid fa-house"></i>
                <b>{t('HOME')}</b>
              </div>

              <div 
                className={`container-element ${isActive === 2 ? 'active-element' : ''}`}
                title={t('TANA_DEL_LUPO')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('tanaDelLupo')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(2)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(2)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
              >
                <i className="fa-solid fa-utensils"></i>
                <b>{t('TANA_DEL_LUPO')}</b>
              </div>

              <div 
                className={`container-element ${isActive === 3 ? 'active-element' : ''}`}
                title={t('AREA_CAMPING')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('areaCamping')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(3)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(3)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
              >
                <i className="fa-solid fa-campground"></i>
                <b>{t('AREA_CAMPING')}</b>
              </div>
              
              <div 
                className={`container-element ${isActive === 4 ? 'active-element' : ''}`}
                title={t('AREA_CAMPER')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('areaCamper')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(4)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(4)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
              >
                <i className="fa-solid fa-caravan"></i>
                <b>{t('AREA_CAMPER')}</b>
              </div>

              <div 
                className={`container-element ${isActive === 5 ? 'active-element' : ''}`}
                title={t('LAGHETTO')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('laghetto')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(5)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(5)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
              >
                <i className='fa-fishing'></i>
                <b>{t('LAGHETTO')}</b>
              </div>

              <div 
                className={`container-element ${isActive === 6 ? 'active-element' : ''}`}
                title={t('MENU')}
                onClick={(e) => {
                  handleMouseEnter(e)
                  onClickEvent('menu')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseDown={() => handleMouseDown(6)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}  
                onTouchStart={() => handleTouchStart(6)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} 
              >
                <i className="fa-solid fa-bars"></i>
                <b>{t('MENU')}</b>
              </div>

              <div
                className='underline'
                style={{ width: `${underlineStyle.width}px`, left: `${underlineStyle.left}px` }}
              ></div>
            </div>
          </div>
        </div>
      }
    </nav >
  );
};

export default Topbar;