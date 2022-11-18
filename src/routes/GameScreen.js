import { Component } from "react"
import GameOver from "../components/GameOver"
import Gameplay from "../components/Gameplay"
import Scores from "../components/Scores"

class GameScreen extends Component {
    state = ({
        isGameOver: false,
        isPlaying: true,
        allUsers: [],
      })

      handleGameOver = () => {
        this.setState({
          isPlaying: false,
          isGameOver: true
        })
        this.getAllUsers()
      }
    
      handleRestart = () => {
        this.setState({
          isPlaying: true,
          isGameOver: false
        })
        this.getAllUsers()
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
        .then(c => console.log(this.state.allUsers))  
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
                {this.state.allUsers == null ? null : 
                <div className="sidebar-container">
                  <h4 className="basic-font text-center">Highscores</h4>
                  <Scores allUsers={this.state.allUsers}/>
                </div>}
            </div>
    )}
}

export default GameScreen