import React from 'react';
import {useSelector} from "react-redux";


const GameScreen5 = () => {
    const playerProfession = useSelector((state) =>  state.playerProfession);
    const playerName = useSelector((state) => state.playerName);
    const groupNames = useSelector((state) => state.groupNames);
    const startMonth = useSelector((state) => state.startMonth);

    console.log("Redux State:", useSelector((state) => state));
    console.log("Player Profession:", playerProfession);

    return (
        <div>
            <p>Here is the information you put in.</p>
            <ul>
                <li>Leader's Profession:{playerProfession}</li>
                <li>Leader's Name:{playerName}</li>
                <li>Party Members:{groupNames}</li>
                <li>Starting Month:{startMonth}</li>
            </ul>
        </div>
    );
};

export default GameScreen5;