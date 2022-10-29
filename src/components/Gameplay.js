import { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
import GetRandomCoordinates from "../utils/GetRandomCoordinates";


const initialState = {
  food: GetRandomCoordinates(),
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ],
  speed: 300 
}

class Gameplay extends Component {
  state = initialState

  componentDidMount(){
    document.onkeydown = this.onKeyDown
    setInterval(this.moveSnake, this.state.speed)
  }

  // called each time a components state or props are updated
  componentDidUpdate(){
    this.checkIfOutOfBorders();
    this.checkIfCollapsed(); 
    this.checkIfEat();
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

  checkIfCollapsed(){
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0 == dot[0] && head[1] == dot[1]]){
        this.onGameOver()
      }
    })
  }

  checkIfEat(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]){
      this.setState({food: GetRandomCoordinates()})
      this.enlargeSnake()
      this.increaseSpeed( )
    }
  }

  enlargeSnake(){
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed(){
    if(this.state.speed > 10){
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  handleScore = () => {
    localStorage.setItem('last-score', JSON.stringify(this.state.snakeDots.length));
  };
  

  onGameOver(){
    // alert(`Game Over! You scored ${this.state.snakeDots.length}`);
    // this.resetGame()
    this.handleScore()
    this.props.handleGameOver()
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

export default Gameplay;
