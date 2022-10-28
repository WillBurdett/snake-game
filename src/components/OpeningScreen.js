import Snake from "./Snake";

const OpeningScreen = ({handleStartGame, openingSnakeDots}) => {

    return(
        <div className="game-area">
            <div class="container">  
                <div class="start-game--content">  
                <Snake snakeDots={openingSnakeDots}/>
                    <h2 className="start-game--title">Snake</h2>
                    <button className="start-game--btn" onClick={handleStartGame}>Start game!</button>
                </div>
            </div>
        </div>
    )
}

export default OpeningScreen;