import { Component } from "react";
import Snake from "./components/Snake";
import Food from "./components/Food";
import GetRandomCoordinates from "./utils/GetRandomCoordinates";

class App extends Component {
  state = {
    food: GetRandomCoordinates(),
    direction: 'RIGHT',
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }

  componentDidMount(){
    document.onkeydown = this.onKeyDown;
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode){
      case 38:
        this.setState({direction: 'UP'})
        break;
      case 40:
        this.setState({direction: 'DOWN'})
        break;  
      case 37:
        this.setState({direction: 'LEFT'})
        break;     
      case 39:
        this.setState({direction: 'RIGHT'})
        break;  
    }
  } 
 render() {
  return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
      </div>
    );
  }
}

export default App;
