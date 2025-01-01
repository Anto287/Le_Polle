import React, { useState } from "react";
import "@styles/HoverEffect.css";

const HoverEffect = ({
  dataReplace = "",
  iconClass = "",
  bounceClass = "",
  text = "",
  containerClass = "",
  style = {},
  onClickHandler = () => {}
}) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleTransitionEnd = (e) => {
    if (e.propertyName === "transform" && isHovering) {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 1000);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    onClickHandler();
  };

  return (
    <div
      className={`hover-effect-outer-div ${containerClass}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      onClick={handleClick}
    >
      <i className={`hover-effect-icon ${iconClass} ${isBouncing ? bounceClass : ""}`} />
      <div className="hover-effect-inner-span" data-replace={dataReplace}>
        <span onTransitionEnd={handleTransitionEnd}>{text}</span>
      </div>
      <div className="hover-effect-underline"></div>
    </div>
  );
};

export default HoverEffect;