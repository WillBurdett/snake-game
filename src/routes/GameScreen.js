import Gameplay from "../components/Gameplay"
import Leaderboard from "../components/Leaderboard"

const GameScreen = ({handleGameOver}) => {
    return(
        <div className="gamepage-container">
            <Gameplay handleGameOver={handleGameOver}/>
            <Leaderboard/>
        </div>
    )
}

export default GameScreen