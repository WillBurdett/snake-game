import { useState } from "react";
import Controls from "../components/Controls";
import TitleAnimation from "../components/TitleAnimation";
import AccountScreen from "./AccountScreen";

const OpeningScreen = ({handleStartGame}) => {

  const [isSigningInOrUp, setIsSigningInOrUp] = useState(false)
  const [hasSignedIn, setHasSignedIn] = useState(false)
  const [showStartScreen, setShowStartScreen] = useState(true)

  const handleSignInOrUp = () => {
    setIsSigningInOrUp(!isSigningInOrUp)
    setShowStartScreen(!showStartScreen)
  }

  const handleHasSignedIn = () => {
    // render things with and 'signed in as...' component
    setHasSignedIn(true)
    console.log("now signed in as " + localStorage.getItem("username"))
  }

  return(
    <div className="content-container">
      {isSigningInOrUp ? <AccountScreen handleSignInOrUp={handleSignInOrUp} handleHasSignedIn={handleHasSignedIn}/> : <TitleAnimation hasSignedIn={hasSignedIn} handleStartGame={handleStartGame} handleSignInOrUp={handleSignInOrUp}/> }
      <Controls/>
    </div>
  )
 
}

export default OpeningScreen;