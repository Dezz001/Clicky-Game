import React from "react";
import "./clickme.css";


const ClickMe = props => (
    <div 
	    className="container-fluid col-sm-6 col-md-4 col-lg-3" 
	    // onClick={() => handleClick(props.id, props.clicked)} 
	    key={props.id}>
		    
		    <img
			    id={props.id}
			    name={props.name}
			    image={props.image}
			    // onClick={props.handleClick}
		    />
    </div>
);

export default ClickMe;
