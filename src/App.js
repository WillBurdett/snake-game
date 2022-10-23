import { Component } from "react";
import Snake from "./components/Snake";
import Food from "./components/Food";
import GetRandomCoordinates from "./utils/GetRandomCoordinates";


const initialState = {
  food: GetRandomCoordinates(),
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ],
  speed: 500 
}

class App extends Component {
  state = initialState

  componentDidMount(){
    document.onkeydown = this.onKeyDown
    setInterval(this.moveSnake, this.state.speed)
  }

  // called each time a components state or props are updated
  componentDidUpdate(){
    this.checkIfOutOfBorders();
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

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length -1];

    switch(this.state.direction){
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];    
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;  
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
      this.onGameOver();
    }
  }

  onGameOver(){
    alert(`Game Over! You scored ${this.state.snakeDots.length}`);
    this.resetGame()
  }

  resetGame(){
    this.setState(initialState)
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
