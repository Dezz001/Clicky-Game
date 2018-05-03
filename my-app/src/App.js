
import React from "react";
import Jumbotron from "./components/Header";
import GameScreen from "./components/GameScreen";
import ClickMe from "./components/ClickMe";
import images from "./images.json";
import "./App.css";




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">

//           <h1 className="App-title">Welcome to My Clicky App</h1>
        
//         </header>
//         <p className="App-intro">
//           Click a photo below to begin the game. But click a photo once or you will lose the game. 
//         </p>
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Jumbotron/>
          </h1>
        </header>
        <p className="App-intro">
          <GameScreen/> 
        </p>
      </div>
    );
  }
}


export default App;
