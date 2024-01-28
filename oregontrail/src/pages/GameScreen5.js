import React from 'react';
import {useSelector} from "react-redux";
import bg from "../images/gettyimages-3090888-2.jpg";


const GameScreen5 = () => {
    const playerProfession = useSelector((state) =>  state.playerProfession);
    const playerName = useSelector((state) => state.playerName);
    const groupNames = useSelector((state) => state.groupNames);
    const startMonth = useSelector((state) => state.startMonth);
    console.log("Redux State:", useSelector((state) => state));
    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <p>Here is the information you put in.</p>
            <ul>
                <li>Leader's Profession: {playerProfession}</li>
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
            </ul>
        </div>
    );
};

export default GameScreen5;