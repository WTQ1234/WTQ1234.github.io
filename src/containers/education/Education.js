import React, {useContext} from "react";
import "./Education.scss";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (educationInfo.display) {
    return (
      <Fade left duration={1000} distance="20rem">
        <div className="education-section" id="education">
          <h1 className={isDark ? "dark-mode education-heading" : "education-heading"}>Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
