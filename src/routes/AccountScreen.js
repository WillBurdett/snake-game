import SignUp from "../components/SignUp"

const AccountScreen = ({handleSignInOrUp}) => {
    return(
        <div className="game-area">
            <SignUp/>
            <button className="start-game--btn hover-green basic-font text-center" onClick={handleSignInOrUp}>Back to Main Menu!</button>
        </div>
    )
}

export default AccountScreen