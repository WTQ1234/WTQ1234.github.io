import React, { useState, useRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark, onOpenDetails }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef(null);
  const rootRef = useRef(null);

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      if (imgRef.current && imgRef.current.complete) {
        const color = colorThief.getColor(imgRef.current);
        setColorArrays(color);
      }
    } catch (e) {
      console.warn("ColorThief failed:", e);
    }
  }

  function rgb(values) {
    return !values || values.length !== 3
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const handleClick = () => {
    if (onOpenDetails) {
      const bannerColor = rgb(colorArrays);
      onOpenDetails({ bannerColor });
    }
  };

  return (
    <div
      ref={rootRef}
      className={
        isDark ? "experience-card experience-card-dark" : "experience-card"
      }
      onClick={handleClick}
    >
      {/* 顶部 banner */}
      <div
        style={{ background: rgb(colorArrays) || undefined }}
        className="experience-banner"
      >
        <div className="experience-blurred_div" />
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={getColorArrays}
        />
      </div>

      {/* 文本内容 */}
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>

      {/* 底部按钮 */}
      <div className="experience-card-footer">
        <button
          className="experience-card-detail-button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          View details
        </button>
      </div>
    </div>
  );
}
