// src/containers/projectShowcase/ProjectShowcase.js

import React, { useContext, useState, useEffect } from "react";
import "./ProjectShowcase.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {
  bigProjectShowcaseDesign,
  bigProjectShowcaseProgramming,
  bigProjectShowcaseArt,
} from "../../portfolio";

/**
 * 期望的 bigProjectShowcase 数据结构（在 portfolio.js 里定义）：
 *
 * export const bigProjectShowcaseProgramming = {
 *   display: true,
 *   title: "Big Projects – Programming",
 *   subtitle: "Selected gameplay / system prototypes.",
 *   projects: [
 *     {
 *       id: "swarm-system",
 *       bannerTitle: "UE5 Prototype",
 *       bannerColor: "#6b4ce6",
 *       logo: "/images/swarm-logo.png",
 *       title: "AI Swarm Stealth System",
 *       subtitle: "3D stealth gameplay prototype with multi-layer AI.",
 *       coverImage: "/images/swarm-cover.gif",
 *
 *       details: {
 *         title: "AI Swarm Stealth System",
 *         overview: [...],
 *         bullets: [...],
 *         technologies: "Unreal Engine 5, C++, Behavior Tree",
 *         youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
 *         images: [
 *           "/images/swarm-shot-1.png",
 *           "/images/swarm-shot-2.png"
 *         ]
 *       }
 *     }
 *   ]
 * };
 */

// 把普通的 YouTube 链接转成可嵌入的 embed 链接
function getYoutubeEmbedUrl(youtubeUrl) {
  if (!youtubeUrl) return null;
  try {
    const watchMatch = youtubeUrl.match(/[?&]v=([^&#]+)/);
    const shortMatch = youtubeUrl.match(/youtu\.be\/([^?&#]+)/);
    const embedMatch = youtubeUrl.match(/youtube\.com\/embed\/([^?&#]+)/);
    const videoId =
      (watchMatch && watchMatch[1]) ||
      (shortMatch && shortMatch[1]) ||
      (embedMatch && embedMatch[1]);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  } catch (e) {
    return null;
  }
}

const urlPattern = /(https?:\/\/[^\s]+)/g;
const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

function appendPlainTextWithUrls(parts, text, keyPrefix) {
  if (!text) return;

  const urlRegex = new RegExp(urlPattern);
  let lastIndex = 0;
  let match;
  let segmentIndex = 0;

  while ((match = urlRegex.exec(text))) {
    const before = text.slice(lastIndex, match.index);
    if (before) {
      parts.push(before);
    }

    parts.push(
      <a
        key={`link-auto-${keyPrefix}-${segmentIndex}-${match.index}`}
        href={match[0]}
        target="_blank"
        rel="noreferrer"
      >
        {match[0]}
      </a>
    );

    segmentIndex += 1;
    lastIndex = match.index + match[0].length;
  }

  const remaining = text.slice(lastIndex);
  if (remaining) {
    parts.push(remaining);
  }
}

function linkifyText(text) {
  if (!text || typeof text !== "string") {
    return text;
  }

  const tokens = [];
  let lastIndex = 0;
  const regex = new RegExp(markdownLinkPattern);
  let match;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      tokens.push({
        type: "text",
        value: text.slice(lastIndex, match.index),
      });
    }

    tokens.push({
      type: "customLink",
      label: match[1],
      url: match[2],
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    tokens.push({
      type: "text",
      value: text.slice(lastIndex),
    });
  }

  if (tokens.length === 0) {
    const fallback = [];
    appendPlainTextWithUrls(fallback, text, "fallback");
    if (fallback.length === 1 && typeof fallback[0] === "string") {
      return fallback[0];
    }
    return fallback;
  }

  const parts = [];
  tokens.forEach((token, tokenIndex) => {
    if (token.type === "customLink") {
      parts.push(
        <a
          key={`link-md-${tokenIndex}-${token.url}`}
          href={token.url}
          target="_blank"
          rel="noreferrer"
        >
          {token.label}
        </a>
      );
    } else if (token.value) {
      appendPlainTextWithUrls(parts, token.value, tokenIndex);
    }
  });

  if (parts.length === 1 && typeof parts[0] === "string") {
    return parts[0];
  }

  return parts;
}

/**
 * 单个大项目 Section，可复用三次
 */
function SingleProjectSection({ config, sectionId }) {
  const { isDark } = useContext(StyleContext);
  const [activeProject, setActiveProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 打开时触发淡入动画
  useEffect(() => {
    if (activeProject) {
      requestAnimationFrame(() => setShowModal(true));
    } else {
      setShowModal(false);
    }
  }, [activeProject]);

  // 关闭时延迟卸载，保证动画完成
  useEffect(() => {
    if (!showModal && activeProject) {
      const timer = setTimeout(() => setActiveProject(null), 200);
      return () => clearTimeout(timer);
    }
  }, [showModal, activeProject]);

  if (!config || !config.display) return null;

  const handleCardClick = (project) => {
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const details = activeProject?.details || null;

  // 原始图片数组
  const rawImages =
    details && Array.isArray(details.images)
      ? details.images.filter(Boolean)
      : [];

  // YouTube embed 链接
  const embedUrl =
    details && details.youtubeUrl
      ? getYoutubeEmbedUrl(details.youtubeUrl)
      : null;

  // 统一媒体 items：视频在前，后面是图片
  const mediaItems = [];
  if (embedUrl) {
    mediaItems.push({ type: "video", key: "video" });
  }
  rawImages.forEach((src, idx) => {
    mediaItems.push({ type: "image", src, key: `img-${idx}` });
  });

  const hasMedia = mediaItems.length > 0;

  // 文本部分
  const overview =
    details && Array.isArray(details.overview) ? details.overview : [];
  const bullets =
    details && Array.isArray(details.bullets) ? details.bullets : [];
  const technologies = details?.technologies || null;

  return (
    <section id={sectionId} className="project-section">
      <Fade left duration={1000} distance="20rem">
        <div className="project-section__inner">
          <h1 className="project-section__title">
            {config.title || "Big Projects"}
          </h1>
          {config.subtitle && (
            <p className="project-section__subtitle">{config.subtitle}</p>
          )}

          {/* 卡片网格 */}
          <div
            className="project-grid"
            style={{
              gridTemplateColumns: `repeat(${config.columnCount || 3}, minmax(0, 1fr))`,
            }}
          >
            {config.projects &&
              config.projects.map((project) => (
                <div
                  key={project.id}
                  className={
                    isDark
                      ? "experience-card experience-card-dark"
                      : "experience-card"
                  }
                  onClick={() => handleCardClick(project)}
                >
                  {/* 顶部 banner */}
                  <div
                    className="experience-banner"
                    style={{
                      background:
                        project.bannerColor ||
                        "linear-gradient(135deg, #f97373, #fbbf77)",
                    }}
                  >
                    <div className="experience-blurred_div" />
                    <div className="experience-div-company">
                      <h5 className="experience-text-company">
                        {project.title || ""}
                      </h5>
                    </div>
                  </div>

                  {/* 标题 + 一行描述 + 封面图/GIF */}



                  {project.coverImage && (
                    <div className="project-card__cover-wrapper">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="project-card__cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </Fade>

      {/* Modal */}
      {activeProject && (
        <>
          <div
            className="project-modal__backdrop"
            onClick={handleCloseModal}
          />
          <div
            className={
              "project-modal " +
              (isDark ? "project-modal--dark " : "") +
              (showModal ? "project-modal--visible" : "")
            }
          >
            <div className="project-modal__content">
              {/* Banner */}
              <div
                className="project-modal__banner"
                style={{
                  background:
                    activeProject.bannerColor ||
                    "linear-gradient(135deg, #f97373, #fbbf77)",
                }}
              >
                <div className="project-modal__banner-inner">
                  <div className="project-modal__banner-text">
                    <span className="project-modal__company">
                      {activeProject.title}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="project-modal__close"
                type="button"
                onClick={handleCloseModal}
              >
                ×
              </button>

              {/* 内容区（可滚动） */}
              <div className="project-modal__body">
                <h2 className="project-modal__title">
                  {details?.title || activeProject.title}
                </h2>

                {activeProject.subtitle && (
                  <p className="project-modal__subtitle">
                    {activeProject.subtitle}
                  </p>
                )}

                    {overview.map((p, idx) => (
                      <p
                        key={`ov-${idx}`}
                        className="project-modal__paragraph"
                      >
                        {linkifyText(p)}
                      </p>
                    ))}

                {bullets.length > 0 && (
                  <section className="project-modal__section">
                    <h4>Key contributions</h4>
                    <ul>
                      {bullets.map((b, idx) => (
                        <li key={`b-${idx}`}>{b}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {technologies && (
                  <p className="project-modal__technologies">
                    <strong>Technologies:&nbsp;</strong>
                    {technologies}
                  </p>
                )}

                {/* 统一媒体 Grid：第一个是视频，其余是图片；图片只有 hover 没有点击 */}
                {hasMedia && (
                  <section className="project-modal__media-section">
                    <div
                      className={
                        "project-modal__media-grid " +
                        (mediaItems.length === 1
                          ? "project-modal__media-grid--single"
                          : "")
                      }
                    >
                      {mediaItems.map((item, index) => {
                        if (item.type === "video") {
                          return (
                            <div
                              key={item.key}
                              className="project-modal__media-item project-modal__media-item--video"
                            >
                              <div className="project-modal__video-wrapper">
                                <iframe
                                  src={embedUrl}
                                  title={details?.title || activeProject.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  loading="lazy"
                              />
                            </div>
                            <p className="project-modal__video-caption">
                              {details?.youtubeUrl ? (
                                <a
                                  href={details.youtubeUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ▶ Open this video on YouTube
                                </a>
                              ) : (
                                "Gameplay / trailer"
                              )}
                            </p>
                          </div>
                          );
                        }

                        return (
                          <div
                            key={item.key}
                            className="project-modal__media-item project-modal__media-item--image"
                          >
                            <img
                              src={item.src}
                              alt={`${activeProject.title} screenshot ${
                                index
                              }`}
                              loading="lazy"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* 保留一个外链按钮到 YouTube */}
                    
                  </section>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/** 默认导出：一次性渲染三块 section */
export default function ProjectShowcase() {
  return (
    <>
      {/* 程序区 */}
      <SingleProjectSection
        config={bigProjectShowcaseProgramming}
        sectionId="big-projects-programming"
      />
      <img src="/images/divider.png" alt="divider" className="img-divider" />

      {/* 策划区 */}
      <SingleProjectSection
        config={bigProjectShowcaseDesign}
        sectionId="big-projects-design"
      />

      <img src="/images/divider.png" alt="divider" className="img-divider" />
      
      {/* 美术区 */}
      <SingleProjectSection
        config={bigProjectShowcaseArt}
        sectionId="big-projects-art"
      />

      <img src="/images/divider.png" alt="divider" className="img-divider" />
    </>
  );
}
