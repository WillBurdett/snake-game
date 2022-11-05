import { Component } from "react"
import GameOver from "../components/GameOver"
import Gameplay from "../components/Gameplay"
import Leaderboard from "../components/Leaderboard"

class GameScreen extends Component {
    state = ({
        isGameOver: false,
        isPlaying: true,
      })

        handleGameOver = () => {
        this.setState({
          isPlaying: false,
          isGameOver: true
        })
      }
    
      handleRestart = () => {
        this.setState({
          isPlaying: true,
          isGameOver: false
        })
      }

    render (){
        return(
            <div className="gamescreen-container">
                {this.state.isPlaying ? <Gameplay handleGameOver={this.handleGameOver} /> : null}
                {this.state.isGameOver ? <GameOver handleRestart={this.handleRestart}/> : null}
                <Leaderboard/>
            </div>
    )}
}

export default GameScreen