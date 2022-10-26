const OpeningScreen = ({handleStartGame}) => {

    return(
        <div className="game-area">
            <div class="container">            
                <button onClick={handleStartGame}>Start!</button>
            </div>
        </div>
    )
}

export default OpeningScreen;