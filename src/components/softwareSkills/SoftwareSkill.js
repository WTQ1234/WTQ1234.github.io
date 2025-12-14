// src/components/softwareSkills/SoftwareSkill.js
import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);

  // 没开这个 section 就不渲染
  if (!skillsSection.display) {
    return null;
  }

  const { softwareSkillRows, softwareSkills = [] } = skillsSection;

  // 如果配置了多行，就用多行；否则退回旧的一维数组
  const hasRows =
    Array.isArray(softwareSkillRows) && softwareSkillRows.length > 0;

  const rowsToRender = hasRows ? softwareSkillRows : [softwareSkills];

  return (
    <div className="software-skills-main-div">
      {rowsToRender.map((row, rowIndex) => (
        <ul className="dev-icons software-skill-row" key={rowIndex}>
          {Array.isArray(row) &&
            row.map((skill, i) => {
              const key = `${rowIndex}-${skill.skillName || i}`;

              return (
                <li
                  key={key}
                  className="software-skill-inline"
                  name={skill.skillName}
                >
                  {/* ✅ 优先用自定义 logo，其次才用 Font Awesome */}
                  {skill.iconUrl ? (
                    <img
                      src={skill.iconUrl}
                      alt={skill.skillName}
                      className="software-skill-icon"
                      loading="lazy"
                    />
                  ) : skill.fontAwesomeClassname ? (
                    <i className={skill.fontAwesomeClassname}></i>
                  ) : null}
                  {/* <h1 className={isDark ? "dark-mode software-skills-name" : "software-skills-name"} >{skill.skillName}</h1> */}
                  <p className={isDark ? "dark-mode software-skills-name" : "software-skills-name"}>{skill.skillName}</p>
                </li>
              );
            })}
        </ul>
      ))}
    </div>
  );
}
