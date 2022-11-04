import Gameplay from "./Gameplay"
import Leaderboard from "./Leaderboard"

const GamePage = ({handleGameOver}) => {
    return(
        <div className="gamepage-container">
            <Gameplay handleGameOver={handleGameOver}/>
            <Leaderboard/>
        </div>
    )
}

export default GamePage