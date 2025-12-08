import React from "react";
import "./Education.scss";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <Fade left duration={1000} distance="20rem">
        <div className="education-section" id="education">
          <h1 className="education-heading">Education                
            {/* {" "}
            <span className="wave-emoji">{emoji("👋")}</span> */}
          </h1>
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
