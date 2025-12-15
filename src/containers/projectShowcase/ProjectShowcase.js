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
      <Fade bottom duration={1000} distance="10rem">
        <div className="project-section__inner">
          <h1 className="project-section__title">
            {config.title || "Big Projects"}
          </h1>
          {config.subtitle && (
            <p className="project-section__subtitle">{config.subtitle}</p>
          )}

          {/* 卡片网格 */}
          <div className="project-grid">
            {config.projects &&
              config.projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={
                    "project-card " + (isDark ? "project-card--dark" : "")
                  }
                  onClick={() => handleCardClick(project)}
                >
                  {/* 顶部 banner */}
                  <div
                    className="project-card__banner"
                    style={{
                      background:
                        project.bannerColor ||
                        "linear-gradient(135deg, #f97373, #fbbf77)",
                    }}
                  >
                    <div className="project-card__banner-text">
                      <span className="project-card__banner-title">
                        {project.bannerTitle || ""}
                      </span>
                    </div>

                    {project.logo && (
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="project-card__logo"
                      />
                    )}
                  </div>

                  {/* 标题 + 一行描述 + 封面图/GIF */}
                  <div className="project-card__body">
                    <h3 className="project-card__title">{project.title}</h3>
                    {project.subtitle && (
                      <p className="project-card__subtitle">
                        {project.subtitle}
                      </p>
                    )}

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
                </button>
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
                      {activeProject.bannerTitle}
                    </span>
                  </div>

                  {activeProject.logo && (
                    <img
                      src={activeProject.logo}
                      alt={activeProject.title}
                      className="project-modal__logo"
                    />
                  )}
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
                    {p}
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
                                Gameplay / trailer
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
                    {details?.youtubeUrl && (
                      <div className="project-modal__video-link">
                        <a
                          href={details.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          ▶ Open this video on YouTube
                        </a>
                      </div>
                    )}
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

      {/* 策划区 */}
      <SingleProjectSection
        config={bigProjectShowcaseDesign}
        sectionId="big-projects-design"
      />

      {/* 美术区 */}
      <SingleProjectSection
        config={bigProjectShowcaseArt}
        sectionId="big-projects-art"
      />
    </>
  );
}
