import React from 'react';
import {useSelector} from "react-redux";


const GameScreen5 = () => {
    const playerProfession = useSelector((state) =>  state.playerProfession);
    console.log("Redux State:", useSelector((state) => state));
    console.log("Player Profession:", playerProfession);

    return (
        <div>
            <p>Here is the information you put in.</p>
            <ul>
                <li>Leader's Profession:{playerProfession}</li>
                <li>Leader's Name:</li>
                <li>Party Members</li>
                <li>Starting Month:</li>
            </ul>
        </div>
    );
};

export default GameScreen5;