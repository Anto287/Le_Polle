import React, { useState, useRef, memo } from "react";
import { gsap } from "gsap";
import "@styles/ExpandableList.css";

const ExpandableList = memo(({ items, textHead = "", iconHeadClose = "", iconHeadOpen = "", classContainer = "", classHead = "", classList = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listRef = useRef(null);

  const toggleExpand = () => {
    if (isExpanded) {
      gsap.to(listRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(listRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
      });
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className={"expandable-container " + classContainer}>
      <div className={"expandable-header " + classHead} onClick={toggleExpand}>
        {textHead}
        {isExpanded ? <i className={"fa-solid " + iconHeadClose}></i> : <i className={"fa-solid " + iconHeadOpen}></i>}
      </div>
      <div className={"expandable-content " + classList} ref={listRef}>
        {(items || []).map((item, index) => (
          <div key={index} className="expandable-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ExpandableList;
