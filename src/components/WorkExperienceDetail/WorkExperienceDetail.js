// src/components/WorkExperienceDetail/WorkExperienceDetail.jsx
import React from "react";
import "./WorkExperienceDetail.scss";

export default function WorkExperienceDetail({ experience, onClose }) {
  if (!experience || !experience.details) return null;

  const { details } = experience;

  return (
    <div className="exp-modal__backdrop" onClick={onClose}>
      <div
        className="exp-modal"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="exp-modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="exp-modal__title">{details.title || experience.role}</h2>
        {details.projectName && (
          <h3 className="exp-modal__subtitle">{details.projectName}</h3>
        )}
        <div className="exp-modal__meta">
          <span>{experience.company}</span>
          <span>{experience.date}</span>
        </div>

        <div className="exp-modal__body">
          <div className="exp-modal__left">
            {/* Overview paragraphs */}
            {Array.isArray(details.overview) &&
              details.overview.map((p, idx) => (
                <p key={`ov-${idx}`} className="exp-modal__paragraph">
                  {p}
                </p>
              ))}

            {/* Responsibilities bullets */}
            {Array.isArray(details.responsibilities) &&
              details.responsibilities.length > 0 && (
                <div className="exp-modal__section">
                  <h4>Key responsibilities</h4>
                  <ul>
                    {details.responsibilities.map((item, idx) => (
                      <li key={`resp-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Technologies */}
            {details.technologies && (
              <p className="exp-modal__technologies">
                <strong>Technologies:</strong> {details.technologies}
              </p>
            )}
          </div>

          <div className="exp-modal__right">
            {/* Large image / gallery: 这里只简单展示第一张 */}
            {Array.isArray(details.images) && details.images[0] && (
              <div className="exp-modal__image-wrapper">
                <img
                  src={details.images[0]}
                  alt={details.projectName || experience.company}
                />
              </div>
            )}

            {/* YouTube link：这里只给按钮，避免一上来全是 iframe */}
            {details.youtubeUrl && (
              <div className="exp-modal__video-link">
                <a
                  href={details.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  ▶ Watch gameplay / trailer on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
