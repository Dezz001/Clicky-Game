import React, { Component } from "react";
import ClickMe from "../ClickMe";
import images from "../../images.json";
import "./gamescreen.css";

class GameScreen extends Component {
	state = {
		images,
		message: "Click a photo below to begin the game. But click a photo once or you will lose the game.",
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const {topScore, score} = this.state;
			
			const newScore = score ++;
			
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
				// <div className="gameMessage text-center">
				// 	<p>{this.state.message}</p>
				// </div>
				<div className="gameScores text-center">
					<p>Score: {this.state.score}</p>
				</div>

				<div className="gameScores text-center">
					<p>Top Score: {this.state.topScore}</p>
				</div>

				<div className="container">	
					<div className="row">
						{this.state.images.map(image => (
							<ClickMe
								key={image.id}
								id={image.id}
								name={image.name}
								clicked={image.clicked}
								image={image.image}
								handleClick={this.handleClick}
							/>
						))}
					</div>		
				</div>
			</div>
		);
	}
};

export default GameScreen;