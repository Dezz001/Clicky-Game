
// import React from "react";
// import Header from "./components/Header";
// import GameScreen from "./components/GameScreen";
// import ClickMe from "./components/ClickMe";
// import images from "./images.json";
// import "./App.css";




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


// const App = () => (
//   <div className = "container-fluid mainContainer">
//     <Header/>
//     <GameScreen/>
//     <ClickMe/>
//   </div>
// );


// export default App;




//THe Big Import
import React from "react";
import GameScreen from "./components/GameScreen";



const App = props =>  <GameScreen/>;

export default App;




