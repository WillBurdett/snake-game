import { Component } from "react";
import GameOver from "./components/GameOver";
import GameScreen from "./routes/GameScreen";
import OpeningScreen from "./routes/OpeningScreen";
import SignInScreen from "./routes/SignInScreen";

class App extends Component {

  state = ({
    isGameOver: false,
    isFirstGame: true,
    isPlaying: false,
  })

  handleStartGame = () => {
    this.setState({
      isFirstGame: false,
      isPlaying: true
    })
  }

 render() {
  return (
    <div className="landing-page-container">
        {this.state.isFirstGame ? <OpeningScreen handleStartGame={this.handleStartGame}/> : null}
        {/* {this.state.isPlaying ? <GameScreen handleGameOver={this.handleGameOver}/> : null} */}
    </div>
    );
  }
}

export default App;
