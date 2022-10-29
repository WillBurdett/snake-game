const GameOver = () => {
    return(
        <div className="game-area">
            <div className="container">
                <div className="game-over--content">
                     <div className="game-over--title">
                         <h2>Game Over!</h2>
                     </div>
                     <div className="game-over--score">
                         <p>You scored: </p>
                     </div>
                </div>   
            </div>
        </div>
    )
}

export default GameOver;