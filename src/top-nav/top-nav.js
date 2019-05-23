import React from "react";
import { Link } from "react-router-dom";

import brooksImage from "./brooks-01.svg";

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
      </nav>
    </section>
  );
}

export default TopNav;
