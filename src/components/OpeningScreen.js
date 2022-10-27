const OpeningScreen = ({handleStartGame}) => {

    return(
        <div className="game-area">
            <div class="container">  
                <div class="start-game--content">  
                    <h2 className="start-game--title">Snake</h2>
                    <button className="start-game--btn" onClick={handleStartGame}>Start game!</button>
                </div>
            </div>
        </div>
    )
}

export default OpeningScreen;