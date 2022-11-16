import { Component } from "react"

class Scores extends Component {

    render(){
    return (
        <div>
            {this.props.users.map((u, i)=>{
           return (
            <div className="individual-score-container" key={this.props.users}>
                <h5 className="individual-score basic-font text-center">{i+1}. {u.username} {u.score}</h5>
            </div>
        )
        })}
        </div>
    )}
}

export default Scores