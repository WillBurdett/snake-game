import Snake from "./Snake";
import { useState } from "react";

const OpeningScreen = ({handleStartGame}) => {

    const [openingSnakeDots, setOpeningSnakeDots] = useState([[0,0], [2,0]])

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