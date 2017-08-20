import React from "react";
import Link from "gatsby-link";

import "./indexPage.css";
import bg from "../images/badges-50-sprite.png";

const IndexPage = () =>
  <div className="match-summary">
    <div className="match-date">11th August 2017</div>
    <Link to="/page-2/">
      <div className="teams-container">
        <div className="home-team">
          <span>Arsenal</span>
        </div>
        <div className="badge-container">
          <span
            className="team-badge afc"
            style={{
              backgroundImage: `"url(${bg})"`
            }}
          />
        </div>
        <div className="score-container">4 - 3</div>
        <div className="badge-container">
          <span
            className="team-badge lcfc"
            style={{
              backgroundImage: `"url(${bg})"`
            }}
          />
        </div>
        <div className="away-team">
          <span className="team-name">Leicester City</span>
        </div>
        <div className="match-page" />
      </div>
    </Link>
  </div>;

export default IndexPage;
