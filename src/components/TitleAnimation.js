import Snake from "./Snake";
import { useState, useEffect } from "react";

const TitleAnimation = ({handleStartGame, handleSignInOrUp}) => {

const [openingSnakeDots, setOpeningSnakeDots] = useState([[0,0], [2,0]])

const moveSnake = (dir) => {
  let dots = [...openingSnakeDots];
  let head = dots[dots.length -1];

  switch(dir){
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
  setOpeningSnakeDots(dots)
}

  useEffect(() => {
      const updateSnakeMovement = () => {
          let dots = [...openingSnakeDots];
          let head = dots[dots.length -1];
          if (head[0] > 0 && head[1] == 98){
              moveSnake("LEFT")
          } else if (head[0] == 98 && head[1] < 98){
              moveSnake("DOWN")
          } else if(head[0] == 0 && head[1] > 0){
              moveSnake("UP")
          } else if (head[0] < 98 && head[1] == 0){
              moveSnake("RIGHT")
          }
      }
      const timer = setInterval(() => {
          updateSnakeMovement()
      }, 200);
      return () => clearInterval(timer);
    }, [moveSnake, openingSnakeDots]);



  return(
        <div className="game-area">
            <div className="container">
                <div className="start-game--content">
                    <Snake snakeDots={openingSnakeDots}/>
                    <h2 className="start-game--title basic-font text-center">Snake</h2>
                    <button className="start-game--btn hover-green basic-font text-center" onClick={handleStartGame}>Start game!</button>
                    <button className="start-game--btn hover-green basic-font text-center" onClick={handleSignInOrUp}>Sign in!</button>
                </div>
            </div>
        </div>
  )
}

export default TitleAnimation