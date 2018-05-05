import React, { Component } from "react";
import "./scores.css";

class Scores extends Component {

  state = {
    message: "",
    animating: false
  };

  // Working on rendering messages based on score, do not quite have it yet
  setGameMessages({ score, topScore }) {
    let newState = { animating: true };
    if (score === 12) {
      newState.message = "winner"
    }
    else if ( score === 0 && topScore === 0 ) {
      newState.message = ""
    }
    else if ( score === 0 && topScore > 0 ) {
      newState.message = "incorrect"
    }
    else {
      newState.message = "correct"
    }

    this.setState( newState, () =>
      setTimeout( () => this.setState({ animating:false}), 1000 )
    );
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "correct":
        return "NICE!!!";
      case "incorrect":
        return "Incorrect! Game Over";
      case "winner":
        return "You WON!"
      default:
        return ""
    }
  }

  render() {
    return (
    <div>
      <li className={this.state.animating ? this.state.message : ""}>
          {this.renderMessage()}
      </li>
    </div>
    );
  }
};

export default Scores;