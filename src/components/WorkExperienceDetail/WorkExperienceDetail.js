// src/components/WorkExperienceDetail/WorkExperienceDetail.js
import React from "react";
import "./WorkExperienceDetail.scss";

export default function WorkExperienceDetail({ experience, onClose }) {
  if (!experience) return null;

  // 允许没有 details 字段，也能展示基础信息
  const details = experience.details || {};

  return (
    <div className="exp-modal__backdrop" onClick={onClose}>
      <div
        className="exp-modal"
        onClick={(e) => e.stopPropagation()} // 阻止点击内容冒泡到背景
      >
        <button className="exp-modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="exp-modal__title">
          {details.title || `${experience.company} — ${experience.role}`}
        </h2>

        {details.projectName && (
          <h3 className="exp-modal__subtitle">{details.projectName}</h3>
        )}

        <div className="exp-modal__meta">
          <span>{experience.company}</span>
          <span>{experience.date}</span>
        </div>

        <div className="exp-modal__body">
          <div className="exp-modal__left">
            {/* Overview 段落 */}
            {Array.isArray(details.overview) &&
              details.overview.map((p, idx) => (
                <p key={`ov-${idx}`} className="exp-modal__paragraph">
                  {p}
                </p>
              ))}

            {/* Responsibilities 列表 */}
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

            {/* 如果你暂时没写 details，也至少展示原来的 descBullets */}
            {!details.overview &&
              !details.responsibilities &&
              experience.descBullets && (
                <div className="exp-modal__section">
                  <h4>Highlights</h4>
                  <ul>
                    {experience.descBullets.map((b, i) => (
                      <li key={`hb-${i}`}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>

          <div className="exp-modal__right">
            {/* 大图（可选） */}
            {Array.isArray(details.images) && details.images[0] && (
              <div className="exp-modal__image-wrapper">
                <img
                  src={details.images[0]}
                  alt={details.projectName || experience.company}
                />
              </div>
            )}

            {/* YouTube 链接（用按钮打开新标签，避免首页加载 iframe） */}
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
