const GameOver = () => {
    return(
        <div className="game-area">
            <div className="container">
                <div className="game-over--content text-center basic-font">
                     <div className="game-over--title">
                         <h2>Game Over!</h2>
                     </div>
                     <div className="game-over--score">
                         <p>You scored <span className="last-score">{JSON.parse(localStorage.getItem('last-score'))}</span> </p>
                     </div>
                </div>   
            </div>
        </div>
    )
}

export default GameOver;