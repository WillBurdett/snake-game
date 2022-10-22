import { useState } from "react";
import Snake from "./components/Snake";
import Food from "./components/Food";
import GetRandomCoordinates from "./utils/GetRandomCoordinates";

function App() {
  const [state, setState] = useState({
    food: GetRandomCoordinates(),
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
