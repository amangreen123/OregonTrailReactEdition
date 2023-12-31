import React from 'react';
import {useSelector,useDispatch} from "react-redux";


// display the information that the user put in
// from the previous game screens (1-4)
const GameScreen5 = () => {
    const playerProfession = useSelector((state) =>  state.playerProfession);

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