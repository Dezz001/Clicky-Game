import React from "react";
import "./clickme.css";


const ClickMe = props => (
    <div className="card img-container" onClick={() => handleClick(props)}>
	    <img
		    key={props.id}
		    id={props.id}
		    name={props.name}
		    image={props.image}
		    onClick={props.handleClick}
	    />
    </div>
    );

export default ClickMe
