import React from "react";
import Scores from "../Scores";
import "./navbar.css";

const NavBar = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <ul>
      <li className="brand">
        <a>African-American Actors</a>
      </li>
      
      <Scores score={props.score} topScore={props.topScore} />  
      
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default NavBar;