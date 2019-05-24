import React from "react";
import { Link } from "react-router-dom";

import brooksImage from "./brooks-01.svg";
import brooksResume from "./brookspatton_resume_may_2019.pdf";
import externalIcon from "./External.svg";

import "./top-nav.css";

function TopNav({ location }) {
  return (
    <section className="TopNav">
      <Link to="/">
        <img
          src={brooksImage}
          alt="small SVG drawing of Brooks, also in a link back to the home / about me page"
        />
      </Link>
      <nav>
        <Link
          to="/"
          className={location.pathname === "/" ? "TopNav-current" : null}
        >
          About Me
        </Link>
        <Link
          to="/work-experience/"
          className={
            location.pathname === "/work-experience/" ? "TopNav-current" : null
          }
        >
          Work Experience
        </Link>
        <a href="https://www.twitch.tv/brookzerker" target="window">
          Twitch.tv Channel{" "}
          <img src={externalIcon} alt="this link leads off the page" />
        </a>
        <a href={brooksResume} target="window">
          Download Resume{" "}
          <img src={externalIcon} alt="this link leads to off the page" />
        </a>
      </nav>
    </section>
  );
}

export default TopNav;
