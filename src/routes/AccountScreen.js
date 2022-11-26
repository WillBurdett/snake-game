import SignUp from "../components/SignUp"

const AccountScreen = ({handleSignInOrUp}) => {
    return(
        <div className="game-area">
            <div class="container">
                <div class="account-screen__container">
                
                    <SignUp/>
                    <button className="start-game--btn hover-green basic-font text-center" onClick={handleSignInOrUp}>Back to Main Menu!</button>
                </div>

            </div>
        </div>
    )
}

export default AccountScreen