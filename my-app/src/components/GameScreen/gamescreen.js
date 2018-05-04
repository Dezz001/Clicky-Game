import React, {Component} from "react";
import ClickMe from "../ClickMe";
import images from "../../images.json";
import "./gamescreen.css";

class GameScreen extends Component {
	
	state = {
		message: "Click a photo below to begin the game. But click a photo once or you will lose the game.",
		images,
		topScore: 0,
		score: 0	
	};
	
	handleClick = (id, clicked) => {

		const hollywoodShuffle = this.state.images;

		if (clicked) {
			hollywoodShuffle.forEach((image, index) => {
				hollywoodShuffle[index].clicked = false;
			});
			return this.setState({
				image: hollywoodShuffle.sort(() => Math.random() - 0.5),
				score: 0
			})
		}
		else {
			hollywoodShuffle.forEach((image, index) => {
				if (id === image.id) {
					hollywoodShuffle[index].clicked = true;
				}
			});

			const {topScore, score} = this.state;
			
			const newScore = score + 1;
			
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: hollywoodShuffle.sort(() => Math.random() - 0.5),
				score: newScore,
				topScore: newTopScore
			})
		}
	};

	render() {
		return (
			<div className="container-fluid">
				
				<div>
					<p>{this.state.message}</p>
				</div>
				
				<div>
					<p>Top Score: {this.state.topScore}</p>
				</div>				

				<div>
					<p>Score: {this.state.score}</p>
				</div>

				<div className="container-fluid">	
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

export default GameScreen