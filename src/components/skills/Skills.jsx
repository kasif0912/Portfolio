import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills_section" id="skills">
        <h2 className="skill_title">Skills</h2>
        <span className="skill_subtitle">Skillset Showcase</span>

        <div className="skills_container  ">
          <Frontend />
          <Backend />
        </div>
      </div>
    </>
  );
};

export default Skills;
