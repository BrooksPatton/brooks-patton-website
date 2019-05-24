import React from "react";

import "./work-experience.css";

function WorkExperience({ logo, title, dates, content }) {
  return (
    <section className="WorkExperience">
      <div className="WorkExperience-logo">
        <img src={logo} alt="Apto Inc. logo" />
      </div>
      <div className="WorkExperience-text">
        <h1>{title}</h1>
        <p>{dates}</p>
        <div className="WorkExperience-content">
          {content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
