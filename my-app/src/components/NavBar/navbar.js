import React from "react";
import Scores from "../Scores";
import "./navbar.css";

const NavBar = props => (
  <nav className="container-fluid navbar navbar-inverse navbar-top">
    <ul>
      <li className="container-fluid">
        <a>The Black Actors Memory Game</a>
      </li>
      <li>
		<p>Click on any famous actors to earn points, but do not click on an actor more than once or you will lose!</p>                                                                                          
      </li>
      
      <Scores score={props.score} topScore={props.topScore} />  
      
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default NavBar;