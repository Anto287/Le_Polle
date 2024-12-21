import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import '@styles/NoPage.css';

//TODO rifarlo perché il layout è orribile, anche il componente button probabilmente 
const NoPage = () => {
  const { t } = useTranslation();
  const [widthDevice, setWidthDevice] = useState('-small');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  useEffect(() => {
    switch (breakpoint) {
      case 0:
        setWidthDevice('-small');
        break;
      case 1:
        setWidthDevice('-mind');
        break;
      case 2:
        setWidthDevice('-large');
        break;
      case 3:
        setWidthDevice('-extra-large');
        break;
      default:
        setWidthDevice('-small');
        break;
    }
  }, [breakpoint]);

  const handleClick = () => {
    navigate(from, { replace: true }); 
  }
  
  return (
    <>
      <div className={"wrapper" + widthDevice}>
        <div className={"landing-page" + widthDevice}>
          <div className={"container-svg" + widthDevice}>
            <p>Test</p>
          </div>
          <div className={"container-text" + widthDevice}>
            <h1>{t('404_ERROR')}</h1>
            <p>{t('IMPOSSIBLE_LOAD_PAGE')}</p>
            <Button 
              className="btn-default" 
              style={{width: '25vw', minWidth: breakpoint === 3 ? '25vw' : '120px', maxWidth: breakpoint === 3 ? '20vw' : '250px'}}
              icon="fa-solid fa-house" 
              text={t('BACK_TO_HOME')}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;