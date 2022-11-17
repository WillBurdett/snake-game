import { Component } from "react"
import Scores from "./Scores"

class Leaderboard extends Component{
    render(){
    return (
        <div className="sidebar-container">
            <h4 className="basic-font text-center">Highscores</h4>
            <Scores users={this.props.allUsers}/>
        </div>
    )}
}

export default Leaderboard