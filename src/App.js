import { Component } from "react";
import GameOver from "./components/GameOver";
import GameScreen from "./routes/GameScreen";
import OpeningScreen from "./routes/OpeningScreen";

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

  handleGameOver = () => {
    this.setState({
      isPlaying: false,
      isGameOver: true
    })
    console.log("correct event triggered")
  }

  handleRestart = () => {
    this.setState({
      isPlaying: true,
      isGameOver: false
    })
  }

 render() {
  return (
    <div className="landing-page-container">
        {this.state.isGameOver ? <GameOver handleRestart={this.handleRestart} /> : null}
        {this.state.isFirstGame ? <OpeningScreen handleStartGame={this.handleStartGame}/> : null}
        {this.state.isPlaying ? <GameScreen handleGameOver={this.handleGameOver}/> : null}
    </div>
    );
  }
}

export default App;
