import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1Img from "../images/ProvenSuccess/Project1.jpg";
import Project2Img from "../images/ProvenSuccess/Project2.jpg";
import Project3Img from "../images/ProvenSuccess/Project3.jpg";
import "./ProvenSuccess.css";

function ProvenSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false); // State to track if info should be shown

  const handleDragStart = (e) => e.preventDefault();
  const [hover, setHover] = useState(false);

  const projectInfo = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  const items = [
    <div>
      <div className="image-container">
        <img
          src={Project1Img}
          alt="Project 1"
          onDragStart={handleDragStart}
          className="carousel-image"
          key="Pimg1"
        />
        {showInfo && activeIndex === 0 && (
          <div className="info-overlay">
            <p className="project-info">{projectInfo[0]}</p>
          </div>
        )}
      </div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`buttonPS ${hover ? "button-hoverPS" : ""}`}
        onClick={() => {
          setActiveIndex(0);
          setShowInfo(prevShowInfo => !prevShowInfo);
        }}
      >
        Project 1 Info
      </button>
    </div>,
    <div>
      <div className="image-container">
        <img
          src={Project2Img}
          alt="Project 2"
          onDragStart={handleDragStart}
          className="carousel-image"
          key="Pimg2"
        />
        {showInfo && activeIndex === 1 && (
          <div className="info-overlay">
            <p className="project-info">{projectInfo[1]}</p>
          </div>
        )}
      </div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`buttonPS ${hover ? "button-hoverPS" : ""}`}
        onClick={() => {
          setActiveIndex(1);
          setShowInfo(prevShowInfo => !prevShowInfo);
        }}
      >
        Project 2 Info
      </button>
    </div>,
    <div>
      <div className="image-container">
        <img
          src={Project3Img}
          alt="Project 3"
          onDragStart={handleDragStart}
          className="carousel-image"
          key="Pimg3"
        />
        {showInfo && activeIndex === 2 && (
          <div className="info-overlay">
            <p className="project-info">{projectInfo[2]}</p>
          </div>
        )}
      </div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`buttonPS ${hover ? "button-hoverPS" : ""}`}
        onClick={() => {
          setActiveIndex(2);
          setShowInfo(prevShowInfo => !prevShowInfo);
        }}
      >
        Project 3 Info
      </button>
    </div>,
  ];

  const handleSlideChanged = ({ item }) => {
    setActiveIndex(item);
    setShowInfo(false); // Hide info when sliding to a new project
  };

  const renderDotsItem = ({ isActive, itemIndex }) => (
    <div
      className={`dot ${isActive ? "active-dot" : "inactive-dot"}`}
      onClick={() => {
        setActiveIndex(itemIndex);
        setShowInfo(false); // Hide info when clicking on dots to change project
      }}
    ></div>
  );

  const renderPrevButton = ({ isDisabled }) => (
    <span
      className="carousel-arrow carousel-arrow-prev"
      style={{ opacity: isDisabled ? "0.5" : 1 }}
    >
      &lang;
    </span>
  );
  const renderNextButton = ({ isDisabled }) => (
    <span
      className="carousel-arrow carousel-arrow-next"
      style={{ opacity: isDisabled ? "0.5" : 1 }}
    >
      &rang;
    </span>
  );

  return (
    <div className="backgroundPS">
      <div className="layoutPS">
        <p className="titlePS">
          <b>Proven Success</b>
        </p>
        <p className="subtitlePS">Engineering Energy, Empowering Progress</p>
        <div className="carousel-wrapper">
          <AliceCarousel
            renderPrevButton={renderPrevButton}
            items={items}
            renderNextButton={renderNextButton}
            activeIndex={activeIndex}
            onSlideChanged={handleSlideChanged}
            renderDotsItem={renderDotsItem}
            mouseTracking
            infinite
            animationType="fadeout"
            animationEasingFunction="ease-in-out"
            animationDuration={800}
          />
        </div>
      </div>
    </div>
  );
}

export default ProvenSuccess;


