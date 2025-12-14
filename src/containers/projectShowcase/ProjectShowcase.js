// src/containers/projectShowcase/ProjectShowcase.js

import React, { useContext, useState, useEffect } from "react";
import "./ProjectShowcase.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
// import { bigProjectShowcase } from "../../portfolio";
// import { bigProjectShowcaseDesign as bigProjectShowcase } from "../../portfolio";
import { bigProjectShowcaseDesign, bigProjectShowcaseProgramming, bigProjectShowcaseArt } from "../../portfolio";

/**
 * 期望的 bigProjectShowcase 数据结构（在 portfolio.js 里定义）：
 *
 * export const bigProjectShowcase = {
 *   display: true,
 *   title: "Big Projects – Programming",
 *   subtitle: "Selected gameplay / system prototypes.",
 *   projects: [
 *     {
 *       id: "swarm-system",
 *       bannerTitle: "UE5 Prototype",
 *       bannerColor: "#6b4ce6",         // 可选，不填就用默认渐变
 *       logo: "/images/swarm-logo.png", // 可选，小圆图标（类似公司 logo）
 *       title: "AI Swarm Stealth System",
 *       subtitle: "3D stealth gameplay prototype with multi-layer AI.",
 *       coverImage: "/images/swarm-cover.gif", // 卡片上的主图 / GIF
 *
 *       details: {
 *         title: "AI Swarm Stealth System",
 *         overview: [
 *           "Short intro paragraph 1",
 *           "Short intro paragraph 2"
 *         ],
 *         bullets: [
 *           "What you did / contributions ...",
 *           "Another key bullet ..."
 *         ],
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

  const details = activeProject?.details;
  const images =
    details && Array.isArray(details.images)
      ? details.images.filter(Boolean)
      : [];
  const hasImages = images.length > 0;

  const youtubeEmbedUrl =
    details && details.youtubeUrl
      ? getYoutubeEmbedUrl(details.youtubeUrl)
      : null;
  const hasYoutube = !!youtubeEmbedUrl;

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

                {(hasYoutube || hasImages) && (
                  <section className="project-modal__media-section">
                    {hasYoutube && (
                      <div className="project-modal__media-video">
                        <div className="project-modal__video-wrapper">
                          <iframe
                            src={youtubeEmbedUrl}
                            title={details?.title || activeProject.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                        <p className="project-modal__video-caption">
                          Gameplay / trailer preview
                        </p>
                      </div>
                    )}

                    {hasImages && (
                      <div
                        className={
                          "project-modal__media-grid " +
                          (images.length === 1
                            ? "project-modal__media-grid--single"
                            : "")
                        }
                      >
                        {images.map((src, idx) => (
                          <button
                            key={`img-${idx}`}
                            type="button"
                            className="project-modal__media-item"
                            onClick={() => window.open(src, "_blank")}
                          >
                            <img
                              src={src}
                              alt={`${activeProject.title} screenshot ${
                                idx + 1
                              }`}
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {hasYoutube && details?.youtubeUrl && (
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