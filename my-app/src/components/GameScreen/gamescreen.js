// import React, {Component} from "react";
// import ClickMe from "../ClickMe";
// import images from "../../images.json";
// import "./gamescreen.css";

// class GameScreen extends Component {
	
// 	state = {
// 		message: "Click a photo below to begin the game. But click a photo once or you will lose the game.",
// 		images,
// 		topScore: 0,
// 		score: 0	
// 	};
	
// 	handleClick = (id, clicked) => {

// 		const hollywoodShuffle = this.state.images;

// 		if (clicked) {
// 			hollywoodShuffle.forEach((image, index) => {
// 				hollywoodShuffle[index].clicked = false;
// 			});
// 			return this.setState({
// 				image: hollywoodShuffle.sort(() => Math.random() - 0.5),
// 				score: 0
// 			})
// 		}
// 		else {
// 			hollywoodShuffle.forEach((image, index) => {
// 				if (id === image.id) {
// 					hollywoodShuffle[index].clicked = true;
// 				}
// 			});

// 			const {topScore, score} = this.state;
			
// 			const newScore = score + 1;
			
// 			const newTopScore = newScore > topScore ? newScore : topScore;

// 			return this.setState({
// 				image: hollywoodShuffle.sort(() => Math.random() - 0.5),
// 				score: newScore,
// 				topScore: newTopScore
// 			})
// 		}
// 	};

// 	render() {
// 		return (
// 			<div className="container-fluid">
				
// 				<div>
// 					<p>{this.state.message}</p>
// 				</div>
				
// 				<div>
// 					<p>Top Score: {this.state.topScore}</p>
// 				</div>				

// 				<div>
// 					<p>Score: {this.state.score}</p>
// 				</div>

// 				<div className="container-fluid">	
// 					<div className="row">
// 						{this.state.images.map(image => (
// 							<ClickMe
// 								key={image.id}
// 								id={image.id}
// 								name={image.name}
// 								clicked={image.clicked}
// 								image={image.image}
// 								handleClick={this.handleClick}
// 							/>
// 						))}
// 					</div>		
// 				</div>
// 			</div>
// 		);
// 	}
// };

// export default GameScreen





















import React, { Component } from "react";
import images from "../../images.json";
import Header from "../Header";
import "./gamescreen.css";
import ClickMe from "../ClickMe";
import Container from "../Container";
import NavBar from "../NavBar";
import Footer from "../Footer";

	

	

	

class GameScreen extends Component {
	
	state = {
		images,
	    score: 0,
	    topScore: 0,
	    left: 11
	};


	  setScreen() {
	    this.setState({
	      images: this.shufflePics(this.state.images)
	    })
	  };
	

	  handleCorrectGuess = imagesLeft => {
	    const { topScore, score, left } = this.state;
	    const increasedScore = score + 1;
	    const newTopScore = increasedScore > topScore ? increasedScore : topScore;
	    const newleft = left - 1;
	    this.setState ({
	      images: this.shufflePics(imagesLeft),
	      score: increasedScore,
	      topScore: newTopScore,
	      left: newleft
	    })
	  };
	

	  handleIncorrectGuess = images => {
	    this.setState ({
	      images: this.reset(images),
	      score: 0
	    })
	  };
	

	  handleWin = images => {
	    this.setState ({
	      images: this.reset(images),
	      score: 0
	    })
	  }
	

	  shufflePics = images => {
	    let currentIndex = images.length - 1;
	    while (currentIndex > 0){
	      const randomNum = Math.floor(Math.random() * (currentIndex + 1));
	      const lastIndexPlaceholder = images[currentIndex];
	      images[currentIndex] = images[randomNum];
	      images[randomNum] = lastIndexPlaceholder;
	      currentIndex--;
	    }
	    return images;
	  };
	

	  reset = images => {
	    const resetImages = images.map(item => ({ ...item, clicked: false}) );
	    return this.shufflePics(resetImages);
	  }
	

	  handleItemClick = id => {
	    let correctGuess = false;
	    
	    const imagesLeft = this.state.images.map(item => {
	      const newItem = { ...item };
	      if (newItem.id === id) {
	        //error handler >> ensure that the pic has not already been clicked:
	        if(!newItem.clicked) {
	          newItem.clicked = true;
	          correctGuess = true;
	

	          if(this.state.score === 12) {
	            return this.handleWin(this.state.images)
	          }
	        }
	      }
	      return newItem;
	    });
	    
	    correctGuess ? this.handleCorrectGuess(imagesLeft) : this.handleIncorrectGuess(imagesLeft);
	  }
	

	  render() {
	    return (
	    <div>
	      <NavBar score={this.state.score} topScore={this.state.topScore} />
	      <Header/>
	

	      <Container className="game-screen">
	        {this.state.images.map(item => (      
	          <ClickMe
	            key={item.id}
	            id={item.id}
	            name={item.name}
	            image={item.image}
	            handleClick={this.handleItemClick}
	            gameOver={this.state.lives !== 0 && this.state.topScore}
	          />
	        ))}
	      </Container>
	

	      <Footer/>
	    </div>
	    );
	

	  }
	

	};
	

	export default GameScreen;
