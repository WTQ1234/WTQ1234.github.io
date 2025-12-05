import React, { useContext, useState, lazy, Suspense } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Lazy load the detail modal so it's only downloaded when needed
const WorkExperienceDetail = lazy(() =>
  import("../../components/WorkExperienceDetail/WorkExperienceDetail")
);

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const [selectedExperience, setSelectedExperience] = useState(null);

  if (!workExperiences.display) {
    return null;
  }

  const handleOpenDetails = (card) => {
    setSelectedExperience(card);
  };

  const handleCloseDetails = () => {
    setSelectedExperience(null);
  };

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
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
                    details: card.details // 传给卡片，方便里面显示/判断
                  }}
                  onOpenDetails={() => handleOpenDetails(card)}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* 懒加载 Modal，只有选中时才渲染 */}
      <Suspense fallback={null}>
        {selectedExperience && (
          <WorkExperienceDetail
            experience={selectedExperience}
            onClose={handleCloseDetails}
          />
        )}
      </Suspense>
    </div>
  );
}
