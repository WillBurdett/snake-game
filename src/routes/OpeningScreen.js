import Controls from "../components/Controls";
import TitleAnimation from "../components/TitleAnimation";

const OpeningScreen = ({handleStartGame}) => {

  return(
    <div className="content-container">
      <TitleAnimation handleStartGame={handleStartGame}/>
      <Controls/>
    </div>
  )
 
}

export default OpeningScreen;