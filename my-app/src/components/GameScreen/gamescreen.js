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
	
	  // Calculates scores
	  handleCorrectGuess = imagesLeft => {
	    const { topScore, score, left } = this.state;
	    const increasedScore = score + 1;
	    const newTopScore = increasedScore > topScore ? increasedScore : topScore;
	    this.setState ({
	      images: this.shufflePics(imagesLeft),
	      score: increasedScore,
	      topScore: newTopScore,
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
	
	  // Randomnize images
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
	

	  // Shows new image patterns
	  reset = images => {
	    const resetImages = images.map(item => ({ ...item, clicked: false}) );
	    return this.shufflePics(resetImages);
	  }
	
	  // Checks images that have been clicked
	  handleItemClick = id => {
	    let correctGuess = false;   
	    const imagesLeft = this.state.images.map(item => {
	      const newItem = { ...item };
	      if (newItem.id === id) {
	        if(!newItem.clicked) {
	          newItem.clicked = true;
	          correctGuess = true;
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
	          />
	        ))}
	      </Container>
	      <Footer/>
	    </div>
	    );	
	  }
	};
	

	export default GameScreen;
