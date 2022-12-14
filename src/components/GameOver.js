import { VscDebugRestart } from 'react-icons/vsc';
const GameOver = ({handleRestart, didBeatHighscore}) => {
    return(
        <div className="game-area">
            <div className="container">
                <div className="game-over--content text-center basic-font">
                     <div className="game-over--title">
                         <h2>Game Over!</h2>
                     </div>
                     <div className="game-over--score">
                        {didBeatHighscore ? <p className="new-highscore">New Highscore!</p> : null}
                         <p>You scored <span className="last-score green">{JSON.parse(localStorage.getItem('last-score'))}</span> </p>
                     </div>
                    <div onClick={handleRestart} className="restart--container hover-green text-center basic-font">      
                        <h4>Restart  <VscDebugRestart/></h4>            
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default GameOver;