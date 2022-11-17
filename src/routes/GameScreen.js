import { Component } from "react"
import GameOver from "../components/GameOver"
import Gameplay from "../components/Gameplay"
import Leaderboard from "../components/Leaderboard"
import Scores from "../components/Scores"

class GameScreen extends Component {
    state = ({
        isGameOver: false,
        isPlaying: true,
        allUsers: [],
      })

      handleGameOver = () => {
        this.forceUpdate();
        this.setState({
          isPlaying: false,
          isGameOver: true
        })
      }
    
      handleRestart = () => {
        this.forceUpdate();
        this.setState({
          isPlaying: true,
          isGameOver: false
        })
      }

      getAllUsers = () => {
        fetch("http://localhost:8080/leaderboard")
        .then(response => response.json())
        .then(users => {
          const newUsersArray = [];
          for (const u of users){
            newUsersArray.push(u)
          }
            this.setState({allUsers: newUsersArray})
          })
            .then(e => console.log(this.state.allUsers))
            .catch(error => console.error(error))
        }

        componentDidMount(){
          this.getAllUsers();
        }
          
      

    render (){
        return(
            <div className="content-container">
                {this.state.isPlaying ? <Gameplay handleGameOver={this.handleGameOver} /> : null}
                {this.state.isGameOver ? <GameOver handleRestart={this.handleRestart}/> : null}
                <Leaderboard allUsers={this.state.allUsers}/>
            </div>
    )}
}

export default GameScreen