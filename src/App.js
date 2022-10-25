import { Component } from "react";
import GameOver from "./components/GameOver";
import Gameplay from "./components/Gameplay";
import OpeningScreen from "./components/OpeningScreen";

class App extends Component {

  state = ({
    isGameOver: false,
    isFirstGame: true,
    isPlaying: false
  })

  handleStartGame = () => {
    this.setState({
      isFirstGame: false,
      isPlaying: true
    })
  }

 render() {
  return (
    <div>
        {this.state.isGameOver ? <GameOver/> : null}
        {this.state.isFirstGame ? <OpeningScreen handleStartGame={this.handleStartGame}/> : null}
        {this.state.isPlaying ? <Gameplay/> : null}
    </div>
    );
  }
}

export default App;
