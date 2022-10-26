const OpeningScreen = ({handleStartGame}) => {

    return(
        <div className="game-area">
            <div class="container">  
                <div class="start-game--btn">  
                    <h2 className="start-game--title">Snake</h2>
                    <button onClick={handleStartGame}>Start game!</button>
                </div>
            </div>
        </div>
    )
}

export default OpeningScreen;