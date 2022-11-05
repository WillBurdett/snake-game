import TitleAnimation from "./TitleAnimation";

const OpeningScreen = ({handleStartGame}) => {

  return(
    <div>
      <TitleAnimation handleStartGame={handleStartGame}/>
    </div>
  )
 
}

export default OpeningScreen;