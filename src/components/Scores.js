import { useState } from "react"

const Scores = ({users}) => {

    // const [scores, setScores] = useState([{
    //     username: "Player1",
    //     highscore: 5
    // },
    // {   username: "Player7",
    //     highscore: 6
    // },
    // {   username: "Player3",
    //     highscore: 7
    // }])

    return (
        <div>
            {users.map((u, i)=>{
           return (
            <div className="individual-score-container" key={i}>
                <h5 className="individual-score basic-font text-center">{i+1}. {u.username} {u.highscore}</h5>
            </div>
        )
        })}
        </div>
    )
}

export default Scores