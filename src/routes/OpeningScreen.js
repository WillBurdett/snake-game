import Controls from "../components/Controls";
import TitleAnimation from "../components/TitleAnimation";
import SignInScreen from "./AccountScreen";

const OpeningScreen = ({handleStartGame}) => {

  return(
    <div className="content-container">
      {/* <TitleAnimation handleStartGame={handleStartGame}/> */}
      <SignInScreen/>
      <Controls/>
    </div>
  )
 
}

export default OpeningScreen;