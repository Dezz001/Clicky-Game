import React from "react";
import "./clickme.css";


const ClickMe = props => (
  <div>
    <div onClick={() => props.handleClick(props.id)}>
      <img className="image-button" src={props.image} />
    </div>

    <div>
      <h4>
	      {props.name}  
      </h4>
    </div>
  </div> 
);

export default ClickMe;