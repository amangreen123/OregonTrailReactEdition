import React from 'react';
import {useSelector} from "react-redux";
import bg from "../images/gettyimages-3090888-2.jpg";
import axios from "axios";


const GameScreen5 = () => {
    const playerProfession = useSelector((state) =>  state.playerProfession);
    const playerName = useSelector((state) => state.playerName);
    const groupNames = useSelector((state) => state.groupNames);
    const startMonth = useSelector((state) => state.startMonth);
    const playerMoney = useSelector((state) => state.playerMoney);

    console.log("Redux State:", useSelector((state) => state));

    const updateAllPlayerData = async () => {
        try {
            const playerData = {
                playerProfession: playerProfession,
                playerMoney: playerMoney,
                playerName: playerName,
                playerNames: Array.from(groupNames),//converts object to array
                startMonth: startMonth,
            };
            console.log("Player Data:", playerData);

            const response = await axios.put("http://localhost:8000/api/setup/createPlayer", playerData);

            if (response.status === 200) {
                //window.location.href = "/trail";
                console.log("Player data updated successfully");
            }else {
                console.error("Error updating player data", response.status);
            }

        } catch (error) {
            console.error("Error updating player data", error);
        }
    };

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <p>Here is the information you put in.</p>
            <ul>
                <li>Leader's Profession: {playerProfession}</li>
                <li>Leader's Money: {playerMoney}</li>
                <li>Leader's Name: {playerName}</li>
                <li>Party Members:
                <ul>
                    <li>{groupNames[0]}</li>
                    <li>{groupNames[1]}</li>
                    <li>{groupNames[2]}</li>
                    <li>{groupNames[3]}</li>
                </ul>
                </li>
                <li>Starting Month: {startMonth}</li>
                <button className="button-1" id="page1sub" onClick={updateAllPlayerData} >Start Game</button>
            </ul>
        </div>
    );
};

export default GameScreen5;