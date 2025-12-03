import React, { useState } from "react";
import "./GameGallery.scss";

// props.projects 来自 portfolio.js 里的 gameProjects.projects
function GameGallery({ sectionTitle, sectionSubtitle, projects }) {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section className="game-gallery">
      <h1 className="game-gallery__title">{sectionTitle}</h1>
      {sectionSubtitle && (
        <p className="game-gallery__subtitle">{sectionSubtitle}</p>
      )}

      <div className="game-gallery__grid">
        {projects.map((p) => (
          <button
            key={p.id}
            className="game-card"
            onClick={() => openModal(p)}
          >
            <div className="game-card__thumb-wrapper">
              <img
                src={p.thumbGif}
                alt={p.name}
                className="game-card__thumb"
                loading="lazy"
              />
            </div>
            <div className="game-card__info">
              <div className="game-card__name">{p.name}</div>
              {p.shortDesc && (
                <div className="game-card__short-desc">{p.shortDesc}</div>
              )}
              {p.tech && (
                <div className="game-card__tags">
                  {p.tech.map((t) => (
                    <span key={t} className="game-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Overlay Modal */}
      {activeProject && (
        <div className="game-modal__overlay" onClick={closeModal}>
          <div
            className="game-modal"
            onClick={(e) => e.stopPropagation()} // 阻止点击内容区域关闭
          >
            <button className="game-modal__close" onClick={closeModal}>
              ×
            </button>

            <h2 className="game-modal__title">{activeProject.name}</h2>

            <div className="game-modal__content">
              <div className="game-modal__media">
                {activeProject.largeGif && (
                  <img
                    src={activeProject.largeGif}
                    alt={activeProject.name}
                    className="game-modal__gif"
                    loading="lazy"
                  />
                )}

                {/* YouTube：只在弹窗打开时渲染 */}
                {activeProject.youtubeUrl && (
                  <div className="game-modal__video">
                    <a
                      href={activeProject.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ▶ Watch on YouTube
                    </a>
                  </div>
                )}
              </div>

              {activeProject.longDesc && (
                <p className="game-modal__desc">{activeProject.longDesc}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GameGallery;
