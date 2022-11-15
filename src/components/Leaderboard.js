import Scores from "./Scores"
import { useEffect, useState, useRef } from "react";

const Leaderboard = () => {
    const [allUsers, setAllUsers] = useState([]);
    const dataFetchedRef = useRef(false);

    const getAllUsers = () => {
        fetch("http://localhost:8080/leaderboard")
        .then(response => response.json())
        .then(users => {
            const newUsersArray = [];
            for (const u of users){
                newUsersArray.push(u)
            }
            setAllUsers(newUsersArray)
        })
        .then(e => console.log(allUsers))
        .catch(error => console.error(error))
    }

    // the useRef prevents loading twice (react might do this automatically due to strict mode)
    useEffect(() => {
        if (dataFetchedRef.current) return
        dataFetchedRef.current = true;
        getAllUsers();
    },[])
    

    return (
        <div className="sidebar-container">
            <h4 className="basic-font text-center">Highscores</h4>
            <Scores users={allUsers}/>
        </div>
    )
}

export default Leaderboard