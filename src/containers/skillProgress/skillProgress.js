import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (
      <Fade left duration={1000} distance="20rem">
        <div className="skills-main">
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className={isDark ? "dark-mode Proficiency-heading" : "Proficiency-heading"}>Proficiency</h1>
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                return (
                  <div key={i} className="skill">
                    <p className="skills-bar-name">{exp.Stack}</p>
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
          <img src="/images/divider.png" alt="divider" className="img-divider" />
        </div>
      </Fade>
    );
  }
  return null;
}
