import React, { useContext, useState, useEffect } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

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
      bannerColor: extra?.bannerColor || null
    });
  };

  const handleCloseDetails = () => {
    // 先触发缩小动画，真正卸载由上面的 useEffect 处理
    setShowExpanded(false);
  };

  return (
    <div id="experience">
      <Fade left duration={1000} distance="10rem">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Work Experiences</h1>
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
                    details: card.details
                  }}
                  onOpenDetails={(extra) => handleOpenDetails(card, extra)}
                />
              ))}
            </div>
          </div>
          
        </div>
        <div className="experience-container" id="1">
        <img src="/images/divider.png" alt="divider" className="img-divider" /></div>
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
            {/* 顶部 banner + logo */}
            <div
              className="experience-banner"
              style={{
                background: expanded.bannerColor || "#222"
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
              {expanded.card.details &&
                Array.isArray(expanded.card.details.overview) &&
                expanded.card.details.overview.map((p, idx) => (
                  <p
                    key={`ov-${idx}`}
                    className="exp-expanded-paragraph"
                  >
                    {p}
                  </p>
                ))}

              {/* responsibilities */}
              {expanded.card.details &&
                Array.isArray(expanded.card.details.responsibilities) &&
                expanded.card.details.responsibilities.length > 0 && (
                  <section className="exp-expanded-section">
                    <h4>Key responsibilities</h4>
                    <ul>
                      {expanded.card.details.responsibilities.map(
                        (item, idx) => (
                          <li key={`resp-${idx}`}>{item}</li>
                        )
                      )}
                    </ul>
                  </section>
                )}

              {/* Technologies */}
              {expanded.card.details &&
                expanded.card.details.technologies && (
                  <p className="exp-expanded-technologies">
                    <strong>Technologies:&nbsp;</strong>
                    {expanded.card.details.technologies}
                  </p>
                )}

              {/* fallback：没写 details 就用 bullets */}
              {!expanded.card.details &&
                expanded.card.descBullets && (
                  <section className="exp-expanded-section">
                    <h4>Highlights</h4>
                    <ul>
                      {expanded.card.descBullets.map((b, i) => (
                        <li key={`hb-${i}`}>{b}</li>
                      ))}
                    </ul>
                  </section>
                )}

              {/* 可选：项目截图（只显示第1张，够当大预览了） */}
              {expanded.card.details &&
                Array.isArray(expanded.card.details.images) &&
                expanded.card.details.images[0] && (
                  <div className="exp-expanded-media">
                    <img
                      src={expanded.card.details.images[0]}
                      alt={
                        expanded.card.details.projectName ||
                        expanded.card.company
                      }
                    />
                  </div>
                )}

              {/* 可选：YouTube 链接按钮（不嵌 iframe，避免首页预加载视频） */}
              {expanded.card.details &&
                expanded.card.details.youtubeUrl && (
                  <div className="exp-expanded-video-link">
                    <a
                      href={expanded.card.details.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ▶ Watch gameplay / trailer on YouTube
                    </a>
                  </div>
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
