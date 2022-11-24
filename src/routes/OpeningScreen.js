import { useState } from "react";
import Controls from "../components/Controls";
import TitleAnimation from "../components/TitleAnimation";
import AccountScreen from "./AccountScreen";

const OpeningScreen = ({handleStartGame}) => {

  const [isSigningInOrUp, setIsSigningInOrUp] = useState(false)
  const [showStartScreen, setShowStartScreen] = useState(true)

  const handleSignInOrUp = () => {
    setIsSigningInOrUp(!isSigningInOrUp)
    setShowStartScreen(!showStartScreen)
  }

  return(
    <div className="content-container">
      {/* <TitleAnimation handleStartGame={handleStartGame} handleSignInOrUp={handleSignInOrUp}/> */}
      {isSigningInOrUp ? <AccountScreen handleSignInOrUp={handleSignInOrUp}/> : <TitleAnimation handleStartGame={handleStartGame} handleSignInOrUp={handleSignInOrUp}/> }
      <Controls/>
    </div>
  )
 
}

export default OpeningScreen;