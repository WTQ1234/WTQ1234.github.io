import React, {useContext, useEffect, useRef, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [forceHide, setForceHide] = useState(false);
  const hideTimeoutRef = useRef(null);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const handleNavClick = () => {
    setForceHide(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setForceHide(false);
      hideTimeoutRef.current = null;
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Headroom>
      <header
        className={
          (isDark ? "dark-menu header" : "header") +
          (forceHide ? " header--force-hidden" : "")
        }
      >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewResume && (
            <li>
              <a href="#resume" onClick={handleNavClick}>
                Resume
              </a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" onClick={handleNavClick}>
                Skills
              </a>
            </li>
          )},
          {true && (
            <li>
              <a href="#education" onClick={handleNavClick}>
                Education
              </a>
            </li>
          )},
          {viewExperience && (
            <li>
              <a href="#experience" onClick={handleNavClick}>
                Work Exp
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={handleNavClick}>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={handleNavClick}>
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={handleNavClick}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={handleNavClick}>
                Talks
              </a>
            </li>
          )}

          {
            <li>
              <a href="#big-projects-programming" onClick={handleNavClick}>
                Projects
              </a>
            </li>
          }
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact Me
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
