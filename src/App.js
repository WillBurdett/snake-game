import { useState } from "react";
import Snake from "./Snake";
function App() {

  const [state, setState] = useState({
    snakeDots: [
      [0,0],
      [2,0]
    ]
  })
 
  return (
    <div className="game-area">
       <Snake snakeDots={state.snakeDots}/>
    </div>
  );
}

export default App;
