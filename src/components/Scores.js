import { useState } from "react"

const Scores = ({users}) => {

    return (
        <div>
            {users.map((u, i)=>{
           return (
            <div className="individual-score-container" key={i}>
                <h5 className="individual-score basic-font text-center">{i+1}. {u.username} {u.score}</h5>
            </div>
        )
        })}
        </div>
    )
}

export default Scores