import React from "react";
import _shuffle from "lodash.shuffle";

import octocatImage from "./Octocat.png";
import twitchImage from "./Combo_Purple_RGB.svg";
import linkedInLogo from "./LinkedIn-Blue-14@2x.png";
import youtubeLogo from "./yt_logo_rgb_light.png";
import twitterLogo from "./Twitter_Logo_Blue.svg";
import brooksImage from "./00030_DVLPden.jpg";

import "./about.css";

const skills = {
  languages: [
    "JavaScript",
    "HTML",
    "CSS",
    "SASS / SCSS",
    "Typescript",
    "Rust",
    "Python",
    "Bash"
  ],
  team: ["Agile", "SCRUM", "Kanban", "retrospectives"],
  frameworks: ["ReactJS", "Angular.js", "Angular", "Bootstrap"],
  programming: [
    "Test Driven Development (TDD)",
    "Functional Programming (FP)",
    "Object Oriented Programming (OOP)",
    "Git"
  ]
};

function About(properties) {
  return (
    <section className="About">
      <img
        src={brooksImage}
        alt="Brooks speaking at Develop Denver 2018"
        className="About-brooks"
      />
      <h1>Introducing Brooks Patton</h1>
      <h2>
        Software developer, Educator, Leadership geek, and all around creative
      </h2>
      <p>
        I'm continuing to grow my experience, passions, and goals, so my title
        is pretty fluid. Currently what I have above are my passions and where
        I've been spending my professional and free time.
      </p>
      <p>
        Professionally, I'm a full-stack software engineer who primarily focuses
        on the customer and how the products that I'm working on solves their
        problems. I'm happy to work in any role as long as the product or
        service is something that I truly believe in and the company in question
        also values a customer first point of view.
      </p>
      <h2>What I've specialized in</h2>
      <p>
        While being a full-stack software engineer requires that I be a jack of
        all trades, I have some skills that I've become passionate about diving
        into deeply.
      </p>
      <ul>
        <li>
          <bold>Small team leadership</bold> - I have worked with some amazing
          leaders in the past and I'm now convinced that a team full of leaders
          can do amazing things if they are given the space and freedom to
          spread their wings.
        </li>
        <li>
          <bold>Test Driven Development (TDD)</bold> - It's impossible to avoid
          bugs completely when creating new features, but regressions should be
          completely avoidable if we test our code as we write it. And the best
          way to ensure that our tests are written is to write them first (so we
          don't forget or get lazy about the tests later).
        </li>
        <li>
          <bold>Scaling applications when needed</bold> - I've seen companies
          pre-optimize which hurts the ability to make sales and get value to
          the customers. I've also seen applications that are struggling to load
          for just a few simultaneous clients. It's important to use data to
          determine when to scale, and how to scale applications in order to
          continue providing value and sale opportunities.
        </li>
      </ul>
      <h2>Skills</h2>
      <p>
        The following (in no particular order) is a non-exclusive list of skills
        that I feel confident with. Of course there are so many potential skills
        listed here. I have a growth mindset which allows me to jump into
        foreign code-bases and languages with very little preparation before I
        can provide value.
      </p>
      <div className="About-skills">
        <div>
          <h3>Languages</h3>
          <div>
            {skills.languages.map((skill, index) => (
              <div key={index} className="About-skill-pill About-language">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Team</h3>
          <div>
            {skills.team.map((skill, index) => (
              <div key={index} className="About-skill-pill About-team">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Frameworks</h3>
          <div>
            {skills.frameworks.map((skill, index) => (
              <div key={index} className="About-skill-pill About-framework">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Programming</h3>
          <div>
            {skills.programming.map((skill, index) => (
              <div key={index} className="About-skill-pill About-programming">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2>Where you can find me</h2>
      <div className="About-links">
        <a href="https://github.com/BrooksPatton">
          <img src={octocatImage} alt="Github octocat logo" />
        </a>
        <a href="https://www.twitch.tv/brookzerker">
          <img src={twitchImage} alt="Twitch.tv logo" />
        </a>
        <a href="https://www.linkedin.com/in/brookspatton">
          <img src={linkedInLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCT1-XRVnJA-wws2bfbLbFcQ?view_as=subscriber">
          <img src={youtubeLogo} alt="Youtube logo" />
        </a>
        <a href="https://twitter.com/brooks_patton">
          <img src={twitterLogo} alt="Twitter logo" />
        </a>
      </div>
    </section>
  );
}

export default About;
