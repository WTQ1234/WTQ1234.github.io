import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade left duration={1000} distance="20rem">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <div className="resume-download-group">
                    <a
                      href={require("./resume_onepage.pdf")}
                      download="Resume_TaiqiWang_1Page.pdf"
                      className="download-link-button"
                    >
                      <Button text="Resume (1 Page)" />
                    </a>

                    <a
                      href={require("./resume_full.pdf")}
                      download="Resume_TaiqiWang_2Pages_Detailed.pdf"
                      className="download-link-button"
                    >
                      <Button text="Resume (2 Pages, Detailed)" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
        <img src="/images/divider.png" alt="divider" className="img-divider" />
      </div>
    </Fade>
  );
}
