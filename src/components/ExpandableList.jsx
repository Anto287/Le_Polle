import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@styles/ExpandableList.css";

const ExpandableList = ({
  items,
  textHead = "",
  iconHeadClose = "",
  iconHeadOpen = "",
  classContainer = "",
  classHead = "",
  classList = "",
  isInitiallyExpanded = false,
  onToggle = () => {},
  listId,
  title
}) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  const listRef = useRef(null);

  useEffect(() => {
    setIsExpanded(isInitiallyExpanded);

    if (isInitiallyExpanded) {
      gsap.to(listRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(listRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isInitiallyExpanded]);

  const toggleExpand = () => {
    const newIsExpanded = !isExpanded;
    setIsExpanded(newIsExpanded);
    onToggle(listId);
  };

  return (
    <div className={"expandable-container " + classContainer}>
      <div className={"expandable-header " + classHead} onClick={toggleExpand} title={title || textHead || ''}>
        {textHead}
        {isExpanded ? (
          <i className={"fa-solid " + iconHeadClose}></i>
        ) : (
          <i className={"fa-solid " + iconHeadOpen}></i>
        )}
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
};

export default ExpandableList;
