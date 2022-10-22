import { useState } from "react";
import Snake from "./Snake";
import Food from "./Food";
function App() {

  const [state, setState] = useState({
    food: [6,8],
    snakeDots: [
      [0,0],
      [2,0]
    ]
  })
 
  return (
    <div className="game-area">
       <Snake snakeDots={state.snakeDots}/>
       <Food dot={state.food}/>
    </div>
  );
}

export default App;
