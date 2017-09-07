import React from "react";
import Link from "gatsby-link";

import plLogo from "../images/pl-logo.png";
import plLogoInverted from "../images/pl-logo-inverted.png";
import eflCupLogo from "../images/efl-cup-logo.png";

const MatchSummary = props =>
  <div className="match-summary-container">
    <div className="match-date">
      {props.matchDate}
    </div>
    <Link to="/page-2/">
      <div className="teams-container">
        <div className="competition-badge">
          <img
            src={props.competition === "Premier League" ? plLogo : eflCupLogo}
            alt={props.competition}
            className="competition-logo"
          />
        </div>
        <div className="home-team">
          <span>
            {props.homeTeam}
          </span>
        </div>
        <div className="badge-container">
          <span className={`team-badge ${props.homeTeamCode}`} />
        </div>
        <div className="score-container">{`${props.homeScore} - ${props.awayScore}`}</div>
        <div className="badge-container">
          <span className={`team-badge ${props.awayTeamCode}`} />
        </div>
        <div className="away-team">
          <span className="team-name">
            {props.awayTeam}
          </span>
        </div>
        <div className="match-page">></div>
      </div>
    </Link>
  </div>;

const IndexPage = () =>
  <div>
    <MatchSummary
      competition="Premier League"
      matchDate="11th August 2017"
      homeTeam="Arsenal"
      homeScore={4}
      homeTeamCode="afc"
      awayTeam="Leicester City"
      awayScore={3}
      awayTeamCode="lcfc"
    />
    <MatchSummary
      competition="Premier League"
      matchDate="19th August 2017"
      homeTeam="Leicester City"
      homeScore={2}
      homeTeamCode="lcfc"
      awayTeam="Brighton & HA"
      awayScore={0}
      awayTeamCode="bhafc"
    />
    <MatchSummary
      competition="EFL Cup"
      matchDate="22nd August 2017"
      homeTeam="Sheffield United"
      homeScore={1}
      homeTeamCode="sufc"
      awayTeam="Leicester City"
      awayScore={4}
      awayTeamCode="lcfc"
    />
    <MatchSummary
      competition="Premier League"
      matchDate="26th August 2017"
      homeTeam="Manchester United"
      homeScore={2}
      homeTeamCode="mufc"
      awayTeam="Leicester City"
      awayScore={0}
      awayTeamCode="lcfc"
    />
  </div>;

export default IndexPage;
