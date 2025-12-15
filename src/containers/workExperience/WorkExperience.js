import React, { useContext, useState, useEffect } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Helper: convert normal YouTube URLs to embed URL
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

export default function WorkExperience() {
  
  const { isDark } = useContext(StyleContext);

  // 展开中的卡片 & 是否播放“显示动画”
  const [expanded, setExpanded] = useState(null); // { card, bannerColor }
  const [showExpanded, setShowExpanded] = useState(false);

  // 控制动画的出现/消失
  useEffect(() => {
    if (expanded) {
      // 下一帧加上“可见”class，触发 scale+opacity 动画
      requestAnimationFrame(() => setShowExpanded(true));
    } else {
      setShowExpanded(false);
    }
  }, [expanded]);

  // 动画结束后真正卸载
  useEffect(() => {
    if (!showExpanded && expanded) {
      const timer = setTimeout(() => {
        setExpanded(null);
      }, 200); // 对应 SCSS 里 transition 0.2s
      return () => clearTimeout(timer);
    }
  }, [showExpanded, expanded]);

  // ❗ 注意：Hooks 一定要写在 return 之前
  if (!workExperiences.display) {
    return null;
  }

  const handleOpenDetails = (card, extra) => {
    setExpanded({
      card,
      bannerColor: extra?.bannerColor || null,
    });
  };

  const handleCloseDetails = () => {
    // 先触发缩小动画，真正卸载由上面的 useEffect 处理
    setShowExpanded(false);
  };

  // 当前展开卡片的详情 & 媒体信息
  const currentDetails = expanded?.card?.details || null;

  // 原始图片数组
  const rawImages =
    currentDetails && Array.isArray(currentDetails.images)
      ? currentDetails.images.filter(Boolean)
      : [];

  // YouTube embed 链接
  const youtubeEmbedUrl =
    currentDetails && currentDetails.youtubeUrl
      ? getYoutubeEmbedUrl(currentDetails.youtubeUrl)
      : null;

  // 统一媒体 items：如果有视频就放在第一个，后面是图片
  const mediaItems = [];
  if (youtubeEmbedUrl) {
    mediaItems.push({ type: "video", key: "video" });
  }
  rawImages.forEach((src, idx) => {
    mediaItems.push({ type: "image", src, key: `img-${idx}` });
  });

  const hasMedia = mediaItems.length > 0;

  return (
    <div id="experience">
      <Fade left duration={1000} distance="10rem">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className={isDark ? "dark-mode experience-heading" : "experience-heading"}>Work Experiences</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets,
                    details: card.details,
                  }}
                  onOpenDetails={(extra) => handleOpenDetails(card, extra)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 分割线图片 */}
        {/* <div className="experience-container" id="experience-divider">
          <img
            src="/images/divider.png"
            alt="divider"
            className="img-divider"
          />
        </div> */}
        <img src="/images/divider.png" alt="divider" className="img-divider" />
      </Fade>

      {/* Overlay：视口居中 + 缩放动画 */}
      {expanded && (
        <>
          <div
            className="exp-expanded-backdrop"
            onClick={handleCloseDetails}
          />

          <div
            className={
              "experience-card " +
              (isDark ? "experience-card-dark " : "") +
              "exp-expanded-card " +
              (showExpanded ? "exp-expanded-card--visible" : "")
            }
          >
            {/* 顶部 banner + logo（固定高度） */}
            <div
              className="experience-banner"
              style={{
                background: expanded.bannerColor || "#222",
              }}
            >
              <div className="experience-blurred_div" />
              <div className="experience-div-company">
                <h5 className="experience-text-company">
                  {expanded.card.company}
                </h5>
              </div>

              <img
                className="experience-roundedimg"
                src={expanded.card.companylogo}
                alt={expanded.card.company}
              />
            </div>

            {/* 文本内容：详细版 */}
            <div className="experience-text-details exp-expanded-content">
              <h5 className="experience-text-role">
                {expanded.card.role}
              </h5>
              <h5 className="experience-text-date">
                {expanded.card.date}
              </h5>

              <p className="subTitle experience-text-desc">
                {expanded.card.details?.projectName || expanded.card.desc}
              </p>

              {/* overview */}
              {currentDetails &&
                Array.isArray(currentDetails.overview) &&
                currentDetails.overview.map((p, idx) => (
                  <p
                    key={`ov-${idx}`}
                    className="exp-expanded-paragraph"
                  >
                    {p}
                  </p>
                ))}

              {/* responsibilities */}
              {currentDetails &&
                Array.isArray(currentDetails.responsibilities) &&
                currentDetails.responsibilities.length > 0 && (
                  <section className="exp-expanded-section">
                    <h4>Key responsibilities</h4>
                    <ul>
                      {currentDetails.responsibilities.map((item, idx) => (
                        <li key={`resp-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

              {/* Technologies */}
              {currentDetails && currentDetails.technologies && (
                <p className="exp-expanded-technologies">
                  <strong>Technologies:&nbsp;</strong>
                  {currentDetails.technologies}
                </p>
              )}

              {/* fallback：没写 details 就用 bullets */}
              {!currentDetails && expanded.card.descBullets && (
                <section className="exp-expanded-section">
                  <h4>Highlights</h4>
                  <ul>
                    {expanded.card.descBullets.map((b, i) => (
                      <li key={`hb-${i}`}>{b}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 媒体区：YouTube + 图片统一 Grid（视频在第一个） */}
              {hasMedia && (
                <section className="exp-expanded-media-section">
                  <div
                    className={
                      "exp-expanded-media-grid " +
                      (mediaItems.length === 1
                        ? "exp-expanded-media-grid--single"
                        : "")
                    }
                  >
                    {mediaItems.map((item, index) => {
                      if (item.type === "video") {
                        return (
                          <div className='exp-expanded-media-itemlink'>
                          <div
                            key={item.key}
                            className="exp-expanded-media-item exp-expanded-media-item--video"
                          >
                            <div className="exp-expanded-video-wrapper">
                              <iframe
                                src={youtubeEmbedUrl}
                                title={
                                  currentDetails?.projectName ||
                                  expanded.card.company
                                }
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                            {/* 外链按钮：打开 YouTube（可选） */}
                            {currentDetails?.youtubeUrl && (
                              <div className="exp-expanded-video-link">
                                <a
                                  href={currentDetails.youtubeUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ▶ Open this video on YouTube
                                </a>
                              </div>
                            )}
                          </div>

                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.key}
                          className="exp-expanded-media-item exp-expanded-media-item--image"
                        >
                          <img
                            src={item.src}
                            alt={
                              currentDetails?.projectName ||
                              `${expanded.card.company} screenshot ${
                                index
                              }`
                            }
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            <button
              className="exp-expanded-close"
              onClick={handleCloseDetails}
            >
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
}
