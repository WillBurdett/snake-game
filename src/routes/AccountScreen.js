import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const AccountScreen = ({handleSignInOrUp, handleHasSignedIn}) => {
    return(
        <div className="game-area">
            <div className="container">
                <div className="account-screen__container">
                
                    <SignUp handleSignInOrUp={handleSignInOrUp} handleHasSignedIn={handleHasSignedIn}/>
                    <SignIn handleSignInOrUp={handleSignInOrUp} handleHasSignedIn={handleHasSignedIn}/>
                    <button className="start-game--btn hover-green basic-font text-center" onClick={handleSignInOrUp}>Back to Main Menu!</button>
                </div>

            </div>
        </div>
    )
}

export default AccountScreen